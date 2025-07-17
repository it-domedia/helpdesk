"use client";

import useAdsStore from "@/store/ads";
import AdBannerItem from "./AdBannerItem";

export default function AdBannerGrid() {
	const middleAds = useAdsStore((s) => s.middle);
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{middleAds.map((ad, index) => (
				<AdBannerItem
					key={index}
					imageUrl={ad.s3_url}
					alt={ad.title}
					link="/"
				/>
			))}
		</div>
	);
}
