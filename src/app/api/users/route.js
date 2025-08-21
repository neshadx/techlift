// src/app/api/users/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

// prevent caching for this route
export const dynamic = "force-dynamic";

/**
 * GET /api/users?email=you@mail.com
 * (optional helper) — returns the user by email.
 */
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email")?.trim().toLowerCase();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const db = await connectDB();
    const users = db.collection("users");
    const user = await users.findOne({ email });

    return NextResponse.json(user || null, { status: 200, headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("GET /users error:", err);
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}

/**
 * PUT /api/users
 * Body: { email, name, image }
 * Updates only name & image (email stays read‑only).
 */
export async function PUT(req) {
  try {
    const body = await req.json();
    const email = body?.email?.trim().toLowerCase();
    const name = body?.name?.trim() ?? "";
    const image = body?.image?.trim() ?? "";

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const db = await connectDB();
    const users = db.collection("users");

    const update = {
      ...(name && { name }),
      ...(image && { image }),
      updatedAt: new Date(),
    };

    const result = await users.updateOne(
      { email },
      { $set: update, $setOnInsert: { email, createdAt: new Date() } },
      { upsert: true }
    );

    const updated = await users.findOne({ email });
    return NextResponse.json(
      { message: "Profile updated", user: updated, matched: result.matchedCount, upserted: result.upsertedId },
      { status: 200 }
    );
  } catch (err) {
    console.error("PUT /users error:", err);
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}
