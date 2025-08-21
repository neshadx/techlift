import clientPromise from "./mongodb";

// 📥 Add new user to MongoDB
export async function addUser({ email, password }) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const users = db.collection("users");

    const newUser = {
      email,
      password, // hashed password should be passed
      createdAt: new Date(),
    };

    const result = await users.insertOne(newUser);
    return result;
  } catch (error) {
    console.error("Error adding user:", error);
    throw new Error("Failed to add user");
  }
}

// 🔍 Get user by email
export async function getUser(email) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const users = db.collection("users");

    const user = await users.findOne({ email });
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed to get user");
  }
}
