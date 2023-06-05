import NextAuth from "next-auth/next";
import GooglrProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GooglrProvider({
      clientId: process.env.GOOLGE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
});
