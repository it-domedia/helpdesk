import React, { Fragment } from "react";
import Container from "@/app/components/Container";
import Titles from "../components/Titles";
import Link from "next/link";
import Image from "next/image";
import Ad300x250 from "../components/Ad300x250";
import AdBannerGrid from "../components/ads/AdBannerGrid";
import { headers } from "next/headers";
import { getPageContent } from "../actions";
import { twMerge } from "tailwind-merge";
// import Buttons from "../components/Buttons";
import LastSection from "./LastSection";

export const dynamic = "force-dynamic";

export default async function DarnaPage() {
	const path = (await headers()).get("x-path") ?? "";
	const slug = path.replace(/\//g, "");
	const pageContent = await getPageContent({
		query: {
			slug,
			limit: 5,
		},
	}).then((res) => res?.results?.find((s) => s.section === slug));

	const megaPost = pageContent?.contents?.[0] || null;
	const megaPostBg = megaPost?.s3_url;
	pageContent?.contents.splice(3, 0, {
		...pageContent.contents[0],
		category: "_adv",
	});
	return (
		<Container className="my-6">
			<Titles.Title text="دارنـــا" className="text-center my-6" />

			{/* Mega Post */}

			{megaPost && (
				<section className="relative w-full h-[400px] md:h-[630px] p-6 rounded-lg overflow-hidden">
					{/* Blurred Background Image */}
					<Link href={"/"}>
						<div
							className={twMerge(
								"absolute inset-0 bg-cover bg-no-repeat blur-sm opacity-70 mega-post-overlay"
							)}
							style={{ backgroundImage: `url('${megaPostBg}')` }}
						></div>

						{/* Content */}
						<div className="relative z-10 flex items-start h-full">
							<Titles.H2
								text={megaPost.title}
								className="text-2xl/12 font-bold text-center md:text-5xl leading-16 text-white"
							/>
						</div>
					</Link>
				</section>
			)}

			<section className="my-10">
				<div className="flex gap-8">
					{pageContent?.contents?.[1] && (
						<Link
							href={pageContent?.contents?.[1]?.slug_title || "/"}
							className="flex-1/3 overflow-hidden "
						>
							<div>
								<Image
									unoptimized
									className="w-full shadow-lg rounded-lg aspect-[6/7] object-cover"
									src={
										pageContent?.contents?.[1]?.s3_url ||
										"https://placehold.co/385x235"
									}
									width={385}
									height={235}
									alt={pageContent?.contents?.[1]?.title}
								/>
								<div className="px-6 py-4">
									<div className="font-bold text-xl mb-2">
										{pageContent?.contents?.[1].title}
									</div>
									<p className="text-gray-700 text-base">
										{
											pageContent?.contents?.[1]
												.short_description
										}
									</p>
								</div>
							</div>
						</Link>
					)}

					<div className="flex-2/3">
						<div className="grid grid-cols-2 gap-8">
							{pageContent?.contents?.slice(2, 6)?.map((item) => (
								<Fragment key={item.id}>
									{item.category === "_adv" ? (
										<Ad300x250
											srcIndex={0}
											key={item.id}
											className="border-b border-[#D9D9D9]"
											withTitle={false}
										/>
									) : (
										<Link
											href={item?.slug_title}
											className="flex-1/3 overflow-hidden border-b border-[#D9D9D9]"
											key={item.id}
										>
											<div>
												<Image
													unoptimized
													className="w-full shadow-lg rounded-lg object-cover"
													src={
														item?.s3_url ||
														"https://placehold.co/350x200"
													}
													width={350}
													height={200}
													alt={item?.title}
												/>
												<div className="px-6 py-4">
													<div className="font-bold text-xl mb-2">
														{item?.title}
													</div>
												</div>
											</div>
										</Link>
									)}
								</Fragment>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Ads */}
			<AdBannerGrid />
			<LastSection path={slug} />
		</Container>
	);
}
