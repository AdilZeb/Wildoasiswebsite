import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";
import { se } from "date-fns/locale";

const authConfig = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        authorize({ auth, request }) {
            console.log(auth, request);
            return !!auth?.user; // Ensure this returns a boolean
        },
        async signIn({ user,account,profile}) {
            console.log(user,account,profile);
            try {
            const existingGuest= await getGuest(user.email);
            if(!existingGuest) {
                await createGuest({email:user.email,fullName:user.name});
            }
            return true;
            } catch (error) {
                return false
            }
        },
        async session({ session, token, user }) {
            const guest = await getGuest(session.user.email);
            session.user.id = guest.id;
            return session;
    },
    },
    pages:{
        signIn:"/login"
    }
};

export const { auth,signIn, signOut, handlers: { GET, POST } } = NextAuth(authConfig);

