import Image from "next/image";
import Titles from "../components/Titles";
import Container from "../components/Container";
import Buttons from "../components/Buttons";
import Link from "next/link";
import Ad300x250 from "../components/Ad300x250";
import AdBannerGrid from "../components/ads/AdBannerGrid";
import { headers } from "next/headers";
import { getPageContent } from "../actions";
import { twMerge } from "tailwind-merge";
// import { getPageContent } from "../actions";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/app/get-query-client";

export const dynamic = "force-dynamic";

export default async function Home() {
	const queryClient = getQueryClient();

	const path = (await headers()).get("x-path") ?? "";
	const pageContent = await getPageContent({
		query: {
			slug: path.replace(/\//g, ""),
		},
	});

	const darnaSectionContent = await getPageContent({
		query: {
			section: "darna",
		},
	});

	const economicSectionContent = await getPageContent({
		query: {
			section: "economics",
		},
	});

	const trendSectionContent = await getPageContent({
		query: {
			section: "trend",
		},
	});

	const newsSection = pageContent?.results?.find((s) => s.section === "news");
	const podcastsSection = pageContent?.results?.find(
		(s) => s.section === "podcasts"
	);
	const soundAndImageSection = pageContent?.results?.find(
		(s) => s.section === "sound-and-image"
	);
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Container className="my-6">
				<Titles.Title
					text="أهم الأخــبــار"
					className="text-center my-6"
				/>

				{/* Most important News */}
				<section className="flex gap-8 my-8">
					<div className="flex-1/3">
						{newsSection?.contents?.[0] && (
							<Link
								href={"/"}
								className="flex-1/3 overflow-hidden "
							>
								<div>
									<Image
										unoptimized
										className="w-full shadow-lg rounded-lg"
										src={newsSection?.contents?.[0]?.s3_url}
										width={385}
										height={235}
										alt="Sunset in the mountains"
									/>
									<div className="px-6 py-4">
										<div className="font-bold text-xl mb-2">
											{newsSection?.contents?.[0].title}
										</div>
										<p className="text-gray-700 text-base">
											{
												newsSection?.contents?.[0]
													?.short_description
											}
										</p>
									</div>
								</div>
							</Link>
						)}
					</div>

					<div className="flex-2/3">
						<div className="flex justify-between gap-8">
							{newsSection?.contents?.[1] && (
								<Link
									href={"/"}
									className="flex-1/2 overflow-hidden border-b border-[#D9D9D9]"
								>
									<div>
										<Image
											unoptimized
											className="w-full shadow-lg rounded-lg aspect-[7/4] object-cover"
											src={
												newsSection?.contents?.[1]
													?.s3_url
											}
											width={350}
											height={200}
											alt="Sunset in the mountains"
										/>
										<div className="px-6 py-4">
											<div className="font-bold text-xl mb-2">
												{
													newsSection?.contents?.[1]
														?.title
												}
											</div>
										</div>
									</div>
								</Link>
							)}

							<div className="flex-1/2 border-b border-[#D9D9D9]">
								{/* Advertise */}
								<Ad300x250 srcIndex={0} />
							</div>
						</div>
						<div className="grid grid-cols-2 gap-x-12 gap-y-4 mt-8">
							{newsSection?.contents?.slice(2, 6).map((item) => (
								<Link
									href={"/"}
									className="flex border-b border-[#D9D9D9] pb-8"
									key={item.id}
								>
									<div className="flex-2/3 space-y-6">
										<h4 className="font-bold text-base">
											{item?.title}
										</h4>
									</div>
									<div className="flex-1/3">
										<Image
											unoptimized
											className="w-full shadow-lg rounded-lg"
											src={item?.s3_url}
											width={150}
											height={120}
											alt="Sunset in the mountains"
										/>
									</div>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Ads */}
				<AdBannerGrid />

				{/* Podcasts */}
				<section className="bg-[url(/podcasts_bg.jpg)] bg-cover bg-center bg-no-repeat min-h-[400px] my-6 rounded-lg p-8">
					<Titles.H3
						text="بـودكـاسـت"
						className="text-white font-bold my-4"
					/>
					<div className="flex gap-4">
						{podcastsSection?.contents.map((item) => (
							<iframe
								key={item.id}
								width="100%"
								height="360"
								src={item.link}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								className="flex-1/2 rounded-lg"
							></iframe>
						))}

						{/* <iframe
						width="100%"
						height="360"
						src="https://www.youtube.com/embed/7DuYyYzvetc"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						className="rounded-lg"
					></iframe> */}
					</div>
				</section>

				{/* Voice and image section */}
				<section>
					<Titles.Title
						text="بالصوت والصورة"
						className="my-10 text-4xl"
					/>
					<div className="grid grid-cols-4 gap-4 ">
						{soundAndImageSection?.contents.map((item) => (
							<div
								className="col-span-1 bg-[#D9D9D933] rounded-lg"
								key={item.id}
							>
								<div className="flex flex-col gap-4 p-4">
									<div>
										<Image
											unoptimized
											className="w-full shadow-lg rounded-lg"
											src={item?.s3_url}
											width={150}
											height={150}
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

					<div className="my-8">
						<Buttons.ReadMore
							text="اعرض المزيد"
							href="/sound-and-image"
						/>
					</div>
				</section>

				{/* Most Read */}
				<section>
					<Titles.Title
						text="الأكثر قراءة"
						className="my-10 text-4xl"
					/>
					<div className="grid grid-cols-3 gap-4 ">
						<div className="col-span-2">
							<div className="flex flex-col gap-4">
								{[0, 1, 2].map((item) => (
									<div
										className="flex gap-4 justify-start items-center "
										key={item}
									>
										<span className="font-extrabold text-5xl text-black">
											{item + 1}
										</span>

										<div className="border-b border-[#D9D9D9] pb-4 flex gap-4 items-center">
											<div>
												<Image
													unoptimized
													className=" shadow-lg rounded-lg"
													src="/video_holder_image.png"
													width={160}
													height={100}
													alt="Sunset in the mountains"
												/>
											</div>
											<Link
												href={"/"}
												className="text-xl font-bold max-w-[400px] hover:underline"
											>
												جيش الاحتلال الإسرائيلي يقر
												بمقتل 7 من جنوده في معارك جنوبي
												غزة
											</Link>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="col-span-1">
							<Ad300x250 srcIndex={1} />
						</div>
					</div>
				</section>

				{/* Darna */}
				<section className="bg-[#D9D9D933] p-6 my-10">
					<Titles.Title text="دارنا" className="py-4" />

					<div className="grid grid-cols-3 grid-flow-col grid-rows-2 gap-8">
						{darnaSectionContent?.results
							?.find((s) => s.section === "darna")
							?.contents?.slice(0, 5)
							.map((item, idx) => (
								<div
									className={twMerge(
										"col-span-1",
										idx === 2 && "row-span-2"
									)}
									key={item.id}
								>
									<div className="flex flex-col gap-4">
										<div
											className={twMerge(
												"relative ",
												idx === 2
													? "aspect-1/1"
													: "aspect-2/1"
											)}
										>
											<Image
												fill
												className="shadow-lg rounded-lg object-cover"
												src={
													item?.s3_url ||
													"https://placehold.co/300x175.png"
												}
												alt={item?.title || ""}
											/>
										</div>
										<h5 className="text-xl font-bold">
											{item?.title || ""}
										</h5>
									</div>
								</div>
							))}
					</div>
					<div className="my-8">
						<Buttons.ReadMore text="اعرض المزيد" href="/darna" />
					</div>
				</section>

				{/* Economic */}
				<section>
					<Titles.Title text="الاقتصاد" className="my-10 text-4xl" />

					<div className="flex gap-12">
						{economicSectionContent?.results
							?.find((s) => s.section === "economics")
							?.contents?.slice(0, 5)
							.map((item) => (
								<div
									className="flex-1/3 gap-4 max-w-[270px]"
									key={item.id}
								>
									<div className="relative aspect-[1/1] ">
										<Image
											fill
											className="shadow-lg rounded-lg object-cover"
											src={
												item?.s3_url ||
												"https://placehold.co/200x200"
											}
											alt="Sunset in the mountains"
										/>
									</div>
									<h5 className="text-xl font-bold">
										{item.title}
									</h5>
								</div>
							))}
					</div>

					<div className="my-8">
						<Buttons.ReadMore
							text="اعرض المزيد"
							href="/economics"
						/>
					</div>
				</section>

				{/* Trend */}
				<section>
					<Titles.Title text="ترند" className="my-10 text-4xl" />
					<div className="grid grid-cols-4 gap-4">
						<div className="col-span-2 ">
							<div className="grid grid-cols-2 gap-12">
								{trendSectionContent?.results
									?.find((s) => s.section === "trend")
									?.contents?.map((item) => (
										<div
											className="col-span-1 rounded-lg"
											key={item.id}
										>
											<div className="flex flex-col gap-4">
												<div className="relative aspect-[1/1]">
													<Image
														fill
														className="shadow-lg rounded-lg object-cover"
														src={
															item?.s3_url ||
															"https://placehold.co/200x200"
														}
														alt="Sunset in the mountains"
													/>
												</div>
												<h5 className="text-xl font-bold">
													{item?.title}
												</h5>
											</div>
										</div>
									))}
							</div>

							<div className="my-8">
								<Buttons.ReadMore href="/" text="اعرض المزيد" />
							</div>
						</div>

						<div className="col-span-2 justify-end">
							<div className="flex flex-col justify-end gap-4">
								<Ad300x250
									srcIndex={2}
									className="border-0 w-auto"
								/>
								<Ad300x250
									srcIndex={3}
									className="border-0 w-auto"
								/>
							</div>
						</div>
					</div>
				</section>
			</Container>
		</HydrationBoundary>
	);
}
