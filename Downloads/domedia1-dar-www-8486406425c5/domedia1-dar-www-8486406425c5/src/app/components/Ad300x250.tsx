"use client";

import useAdsStore from "@/store/ads";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Ad300x250Props {
	className?: string;
	withTitle?: boolean; // Optional prop to conditionally render title
	srcIndex: number;
}

const Ad300x250 = ({
	className,
	srcIndex,
	withTitle = false,
}: Ad300x250Props) => {
	const squareBanners = useAdsStore((s) => s.square);
	return (
		<div className={twMerge("max-w-full overflow-hidden", className)}>
			{withTitle && (
				<div className="text-base mb-2 text-center">اعلان</div>
			)}
			<Image
				unoptimized
				className="shadow-lg rounded-lg mx-auto w-[300px] h-[200px]"
				src={
					squareBanners?.[srcIndex]?.s3_url ||
					"https://placehold.co/300x250"
				}
				width={300}
				height={250}
				alt="Sunset in the mountains"
			/>
		</div>
	);
};

export default Ad300x250;
