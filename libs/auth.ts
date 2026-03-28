import { betterAuth } from "better-auth";
import {mongodbAdapter} from "better-auth/adapters/mongodb";
import clientPromise from "@/libs/mongodb_client";
import { nextCookies } from "better-auth/next-js";

const mongoClient = await clientPromise;
const db = mongoClient.db();

export const auth = betterAuth({
  database: mongodbAdapter(db),
  
  socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      
      }
  },
  plugins: [nextCookies()],
});