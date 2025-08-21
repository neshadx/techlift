


// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import clientPromise from "@/lib/mongodb"; // ✅ Corrected import

// export async function POST(req) {
//   try {
//     const { name, email, password } = await req.json();

//     // ✅ Basic validation
//     if (!email || !password) {
//       return NextResponse.json(
//         { error: "Email and password are required." },
//         { status: 400 }
//       );
//     }

//     const client = await clientPromise;
//     const db = client.db();
//     const usersCollection = db.collection("users");

//     // 🔍 Check if user already exists
//     const existingUser = await usersCollection.findOne({ email });
//     if (existingUser) {
//       return NextResponse.json(
//         { error: "User already exists." },
//         { status: 409 }
//       );
//     }

//     // 🔐 Hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = {
//       name: name || "New User",
//       email,
//       password: hashedPassword,
//       createdAt: new Date(),
//     };

//     // 💾 Insert user
//     await usersCollection.insertOne(newUser);

//     return NextResponse.json(
//       { message: "User registered successfully." },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Registration error:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }



import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb"; //  Corrected import

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const db = await connectDB(); //  Get db directly
    const usersCollection = db.collection("users");

    const existingUser = await usersCollection.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name: name || "New User",
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };

    await usersCollection.insertOne(newUser);

    return NextResponse.json(
      { message: "User registered successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error(" Registration error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
