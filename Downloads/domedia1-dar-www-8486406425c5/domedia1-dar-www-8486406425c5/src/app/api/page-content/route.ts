import { getPageContent } from "@/app/actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);

	// Convert searchParams to plain object
	const query: Record<string, string> = {};
	searchParams.forEach((value, key) => {
		query[key] = value;
	});

	console.log({ searchParams });

	const result = await getPageContent({ query });

	if (!result) {
		return NextResponse.json(
			{ error: "Failed to fetch content" },
			{ status: 500 }
		);
	}

	return NextResponse.json(result);
}
