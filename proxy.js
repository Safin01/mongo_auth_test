import { NextResponse } from "next/server";

export function proxy(request) {
    if(request.nextUrl.pathname.startsWith("/api")) {
        return new NextResponse(JSON.stringify({message: "API routes are protected"}), {status: 403, headers: {"Content-Type": "application/json"}});
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/api/:path*"],
}