import React from "react";
import Container from "../components/Container";
import Titles from "../components/Titles";
import Image from "next/image";
import Ad300x250 from "../components/Ad300x250";
import Link from "next/link";
import AdBannerGrid from "../components/ads/AdBannerGrid";
import { headers } from "next/headers";
import { getPageContent } from "../actions";
import { twMerge } from "tailwind-merge";

export const dynamic = "force-dynamic";

export default async function KharejAlhadPage() {
	const path = (await headers()).get("x-path") ?? "";
	const slug = path.replace(/\//g, "");
	const pageContent = await getPageContent({
		query: {
			slug,
		},
	}).then((res) => res?.find((s) => s.section === slug));

	pageContent?.contents.splice(3, 0, {
		...pageContent?.contents?.[0],
		category: "_adv",
	});
	console.log({ pageContent });
	return (
		<Container>
			<Titles.Title text="خارج الحد" className="text-center my-6" />
			<section className="p-6 my-10">
				<div className="grid grid-cols-4 grid-flow-col grid-rows-2 gap-12">
					{pageContent?.contents?.slice(0, 5).map((item, idx) =>
						item.category === "_adv" ? (
							<Ad300x250 srcIndex={0} key={item.category} />
						) : (
							<div
								className={twMerge(
									idx === 2
										? "row-span-2 col-span-2"
										: "col-span-1"
								)}
								key={item.id}
							>
								<div className="flex flex-col gap-4 border-b border-[#D9D9D9] pb-4">
									<div className="relative aspect-2/1">
										<Image
											fill
											className="shadow-lg rounded-lg object-cover"
											src={
												item.s3_url ||
												"https://placehold.co/300x200.png"
											}
											alt="Sunset in the mountains"
										/>
									</div>

									<h5 className="text-xl font-bold">
										{item.title}
									</h5>
									{idx === 2 && (
										<p className="text-lg font-light">
											{item?.short_description}
										</p>
									)}
								</div>
							</div>
						)
					)}
				</div>

				<div className="grid grid-cols-4 gap-12 mt-24 ">
					{pageContent?.contents?.slice(5, 9).map((item) => (
						<div className="col-span-1 rounded-lg " key={item.id}>
							<div className="space-y-4 border-b border-[#D9D9D9] pb-4 h-full">
								<div className="relative aspect-[1/1]">
									<Image
										fill
										className="shadow-lg rounded-lg object-cover"
										src={
											item.s3_url ||
											"https://placehold.co/300x200.png"
										}
										alt="Sunset in the mountains"
									/>
								</div>
								<h5 className="text-xl font-bold">
									{item.title}
								</h5>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Ads */}
			<AdBannerGrid />
			<section>
				<div className="grid grid-cols-5 gap-12 mt-24 ">
					{pageContent?.contents?.slice(9, 14).map((item) => (
						<Link href={"/"} className=" col-span-1 " key={item.id}>
							<div className="h-full space-y-4 border-b border-[#D9D9D9] pb-4">
								<div className="relative  aspect-[1/1]">
									<Image
										fill
										className="shadow-lg rounded-lg object-cover "
										src={
											item.s3_url ||
											"https://placehold.co/170x170.png"
										}
										alt="Sunset in the mountains"
									/>
								</div>
								<h5 className="text-xl font-bold">
									{item.title}
								</h5>
							</div>
						</Link>
					))}
				</div>
			</section>
			<section className="my-24">
				<div className="flex flex-col gap-8">
					{pageContent?.contents?.slice(14)?.map((item, idx) => (
						<div className="flex  gap-8" key={item.id}>
							<div className="flex-3/4 min-h-[200px]">
								<Link
									href={item?.slug_title || "/"}
									className="grid grid-cols-3 gap-2 h-full"
								>
									<div className="col-span-2 space-y-4">
										<h5 className="text-xl font-bold">
											{item.title}
										</h5>
										<p>{item.short_description}</p>
									</div>

									<div className="col-span-1  relative ">
										<Image
											fill
											className="shadow-lg rounded-lg object-cover h-full "
											src={
												item.s3_url ||
												"https://placehold.co/350x200"
											}
											alt={item.title}
										/>
									</div>
								</Link>
							</div>
							{idx + 1 <= 3 && (
								<div className="flex-1/4">
									<Ad300x250 srcIndex={idx + 1} />
								</div>
							)}
						</div>
					))}
				</div>
			</section>
		</Container>
	);
}
