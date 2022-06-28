import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb"
export default NextAuth({
  secret: process.env.JWT_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // OAuth authentication providers

    FacebookProvider({
      clientId: process.env.CLICT_ID,
      clientSecret: process.env.CLIENT_SECRET,

    }),

  ],
  pages: {
    signIn: "/signin",
  },
  // SQL or MongoDB database (or leave empty)
  database: process.env.DATABASE_URL,
});