"use server"
import { signIn, signOut } from "./auth";


export async function SignInAcion(){
    await signIn('google',{redirectTo:"/accounts"});
}
export async function SignOutAcion(){
    await signOut({redirectTo:"/"});
}