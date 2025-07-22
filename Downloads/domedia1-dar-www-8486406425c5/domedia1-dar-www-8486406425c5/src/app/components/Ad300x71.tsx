import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Ad385x235Props {
	className?: string;
}

const Ad300x71 = ({ className }: Ad385x235Props) => {
	return (
		<div className={twMerge("max-w-full overflow-hidden", className)}>
			<Image
				unoptimized
				className="shadow-lg rounded-lg mx-auto"
				src="https://placehold.co/300x71"
				width={300}
				height={71}
				alt="Sunset in the mountains"
			/>
		</div>
	);
};

export default Ad300x71;
