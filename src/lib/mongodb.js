

// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const options = {};

// let client;
// let clientPromise;

// if (!uri) {
//   throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
// }

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClient) {
//     client = new MongoClient(uri, options);
//     global._mongoClient = client.connect();
//   }
//   clientPromise = global._mongoClient;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// //  Export connectDB function
// export const connectDB = async () => {
//   const client = await clientPromise;
//   return client;
// };

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error(" Please define the MONGODB_URI in .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

//  Final working export
export const connectDB = async () => {
  const client = await clientPromise;
  return client.db("learnedge"); // Fix: connect to the correct DB
};
