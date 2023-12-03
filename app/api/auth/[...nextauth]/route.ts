// app/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

const handler = NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID || "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET || "",
      version: "2.0",
    }),
    // ... other providers
  ],
  // additional NextAuth configuration
});

export { handler as GET, handler as POST };