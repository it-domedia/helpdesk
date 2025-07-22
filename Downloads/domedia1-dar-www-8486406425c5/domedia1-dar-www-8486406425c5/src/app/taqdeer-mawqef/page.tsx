import React from "react";
import Container from "../components/Container";
import Ad300x250 from "../components/Ad300x250";
import Image from "next/image";
import Titles from "../components/Titles";
import Link from "next/link";
import AdBannerGrid from "../components/ads/AdBannerGrid";
import { headers } from "next/headers";
import { getPageContent } from "../actions";

export const dynamic = "force-dynamic";

export default async function TaqdeerMawqefPage() {
	const path = (await headers()).get("x-path") ?? "";
	const slug = path.replace(/\//g, "");

	const pageContent = await getPageContent({
		query: {
			slug,
		},
	}).then((res) => res?.find((s) => s.section === slug));

	const contents = pageContent?.contents || [];

	return (
		<Container>
			<Titles.Title text="تـقـديـر مـوقـف" className="text-center my-6" />

			<section className="flex gap-4 my-12">
				<div className="flex-1/3 border-b border-[#D9D9D9]">
					{contents?.[0] && (
						<Link
							href={"/"}
							className=" overflow-hidden flex flex-col gap-4"
						>
							<Image
								unoptimized
								className="w-full shadow-lg rounded-lg aspect-[385/335] object-cover"
								src={
									contents?.[0]?.s3_url ||
									"https://placehold.co/385x335"
								}
								width={385}
								height={235}
								alt="Sunset in the mountains"
							/>
							<div className="space-y-4">
								<div className="font-bold text-xl mb-2">
									{contents?.[0]?.title}
								</div>
								<p className="text-gray-700 text-base">
									{contents?.[0]?.short_description}
								</p>
							</div>
						</Link>
					)}
				</div>
				<div className="flex-1/3 flex flex-col gap-4">
					{contents?.[1] && (
						<Link
							href={"/"}
							className=" max-w-sm overflow-hidden border-b border-[#D9D9D9] pb-4 space-y-4"
						>
							<Image
								unoptimized
								className="w-full shadow-lg rounded-lg aspect-[235/200] object-cover"
								src={
									contents?.[1]?.s3_url ||
									"https://placehold.co/235x200"
								}
								width={235}
								height={200}
								alt="Sunset in the mountains"
							/>
							<h5 className="font-bold text-xl mb-2">
								{contents?.[1].title}
							</h5>
						</Link>
					)}

					<div className="flex flex-col gap-4">
						{contents?.slice(2, 4).map((item) => (
							<Link
								key={item.id}
								href={"/"}
								className="max-w-sm w-full lg:max-w-full flex border-b border-[#D9D9D9] gap-4 pb-4"
							>
								<div className="flex-2/3  leading-normal">
									<h5 className="font-bold text-xl mb-2">
										{item?.title}
									</h5>
								</div>
								<div className="relative flex-1/3 aspect-[235/200] overflow-hidden">
									<Image
										fill
										unoptimized
										src={
											item?.s3_url ||
											"https://placehold.co/235x200"
										}
										className="shadow-lg rounded-lg "
										alt="Sunset in the mountains"
									/>
								</div>
							</Link>
						))}
					</div>
				</div>
				<div className="flex-1/3 flex gap-4 flex-col justify-between">
					<Ad300x250 srcIndex={0} />
					{contents?.[4] && (
						<Link
							href={"/"}
							className="max-w-sm overflow-hidden border-b border-[#D9D9D9]"
						>
							<Image
								unoptimized
								className="w-full shadow-lg rounded-lg aspect-[385/335] object-cover"
								src={
									contents?.[4]?.s3_url ||
									"https://placehold.co/385x335"
								}
								width={385}
								height={235}
								alt="Sunset in the mountains"
							/>
							<div className="px-6 py-4">
								<h5 className="font-bold text-xl mb-2">
									{contents?.[4].title}
								</h5>
							</div>
						</Link>
					)}
				</div>
			</section>

			{/* Ads */}
			<AdBannerGrid />

			<section className="my-24">
				<div className="flex flex-col gap-8">
					{contents?.slice(5)?.map((item, idx) => (
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
