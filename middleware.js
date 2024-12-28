import { NextResponse } from "next/server";

export function middleware(req) {
    console.log("Request URL:", req.nextUrl.href); // Logs the full request URL
    console.log("Request Headers:", Object.fromEntries(req.headers)); // Logs all headers
    return NextResponse.next(); // Allow the request to proceed
}
