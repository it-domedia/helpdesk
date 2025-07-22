import Image from "next/image";
import Link from "next/link";

type Props = {
	imageUrl: string;
	alt: string;
	link: string;
};

export default function AdBannerItem({ imageUrl, alt, link }: Props) {
	return (
		<Link href={link} target="_blank" rel="noopener noreferrer">
			<div className="relative max-w-[512px] h-[64px] overflow-hidden">
				<Image
					src={imageUrl || "https://placehold.co/512x64"}
					alt={alt}
					fill
					className="object-cover rounded-lg shadow"
					sizes="(max-width: 768px) 100vw, 50vw"
				/>
			</div>
		</Link>
	);
}
