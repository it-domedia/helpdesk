// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	// Inject custom header with current path
	const response = NextResponse.next();
	response.headers.set("x-path", pathname);

	return response;
}
