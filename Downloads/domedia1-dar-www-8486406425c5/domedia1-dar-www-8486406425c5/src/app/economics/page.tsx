import React from "react";
import Container from "../components/Container";
// import Image from "next/image";
// import Ad300x250 from "../components/Ad300x250";
import Titles from "../components/Titles";
import AdBannerGrid from "../components/ads/AdBannerGrid";
// import Link from "next/link";
import { headers } from "next/headers";
// import { getPageContent } from "../actions";
// import { twMerge } from "tailwind-merge";
import MainSection from "./MainSection";
import { getQueryClient } from "@/app/get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import SilverGoldSection from "./SilverGoldSection";

export default async function EconomicsPage() {
	const queryClient = getQueryClient();
	const path = (await headers()).get("x-path") ?? "";
	const slug = path.replace(/\//g, "");

	// const pageContent = await getPageContent({
	// 	query: {
	// 		section: slug,
	// 		limit: 10,
	// 	},
	// }).then((res) => {
	// 	console.log(res);
	// 	return res?.results?.find((s) => s.section === slug);
	// });

	// const goldAndSilverContent = await getPageContent({
	// 	query: {
	// 		section: "gold-and-silver",
	// 	},
	// }).then((res) =>
	// 	res?.results?.find((s) => s.section === "gold-and-silver")
	// );

	// const contents = pageContent?.contents || [];
	// const goldAndSilverSectionContent = goldAndSilverContent?.contents || [];

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Container>
				<Titles.Title text="اقـتـصـاد" className="text-center my-6" />
				<MainSection path={slug} />

				<AdBannerGrid />

				{/* Silver and Gold section */}
				<SilverGoldSection path={slug} />
			</Container>
		</HydrationBoundary>
	);
}
