"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import Ad300x250 from "../components/Ad300x250";
import { ContentsProp, PageContentProp } from "../actions";
import { BASE_URL } from "@/constants";
import { useInfiniteQuery } from "@tanstack/react-query";
import Buttons from "../components/Buttons";
import { QueryFunctionContext } from "@tanstack/react-query";
import api from "../utils/httpClient";

interface MainSectionProps {
	// initialContent: ContentsProp[];
	path: string;
}

interface FetchResponse {
	contents: ContentsProp[];
	hasMore: boolean;
}

const MainSection = ({ path }: MainSectionProps) => {
	const limit = 8;

	// Fetch paginated content
	const fetchContent = async ({
		pageParam = 0,
	}: QueryFunctionContext<
		[string, string],
		number
	>): Promise<FetchResponse> => {
		const offset = typeof pageParam === "number" ? pageParam : 0;

		const res = await api.get<PageContentProp>(`${BASE_URL}/content`, {
			params: {
				section: path,
				limit,
				offset: offset * limit,
			},
		});

		const contents =
			res.data?.results.find((s) => s.section === path)?.contents || [];

		if (contents.length > 3) {
			contents.splice(3, 0, {
				...contents[0],
				category: "_adv",
				id: `adv-${offset}`,
			});
		}

		return {
			contents,
			hasMore: Boolean(res.data.next),
		};
	};

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
		useInfiniteQuery<
			FetchResponse, // TQueryFnData (return value of fetchContent)
			Error, // TError
			FetchResponse, // TData (transformed data, here same as original)
			[string, string], // TQueryKey (tuple, same shape as queryKey)
			number
		>({
			queryKey: ["content", path],
			queryFn: fetchContent,
			initialPageParam: 0,
			getNextPageParam: (lastPage, pages) =>
				lastPage.hasMore ? pages.length : undefined,
		});

	const contents: ContentsProp[] =
		data?.pages.flatMap((page) => page.contents) ?? [];
	// console.log({ contents, data });

	return isLoading ? (
		"جاري التحميل"
	) : (
		<section className="p-6 my-10">
			<div className="grid grid-cols-4 grid-flow-col grid-rows-2 gap-12">
				{contents.slice(0, 5).map((item, idx) =>
					item.category === "_adv" ? (
						<div className="col-span-1 rounded-lg" key={item.id}>
							<Ad300x250
								srcIndex={0}
								className="border-b border-[#D9D9D9] pb-8"
							/>
						</div>
					) : (
						<Link
							href={"/"}
							className={twMerge(
								idx === 2
									? "row-span-2 col-span-2 border-b border-[#D9D9D9]"
									: "col-span-1 border-b border-[#D9D9D9]"
							)}
							key={item.id}
						>
							<div className="flex flex-col gap-4 pb-4">
								<div className="relative aspect-[200/175]">
									<Image
										fill
										className="shadow-lg rounded-lg object-cover"
										src={
											item?.s3_url ||
											"https://placehold.co/200x175.png"
										}
										alt={item?.title || "No image"}
									/>
								</div>
								<h5 className="text-xl font-bold">
									{item?.title}
								</h5>
								{idx === 2 && (
									<p className="text-xl font-light">
										{item?.short_description}
									</p>
								)}
							</div>
						</Link>
					)
				)}
			</div>

			<div className="grid grid-cols-4 gap-12 mt-24">
				{contents.slice(5).map((item, idx) =>
					item.category === "_adv" ? (
						<div
							className="col-span-1 rounded-lg"
							key={item.id || `adv-${idx + 5}`}
						>
							<Ad300x250
								srcIndex={1}
								className="border-b border-[#D9D9D9] pb-8"
							/>
						</div>
					) : (
						<Link
							href={"/"}
							className="col-span-1 space-y-4 border-b border-[#D9D9D9] pb-4"
							key={item.id}
						>
							<div className="relative aspect-[200/175]">
								<Image
									fill
									className="shadow-lg rounded-lg object-cover"
									src={
										item?.s3_url ||
										"https://placehold.co/200x175.png"
									}
									alt="Image"
								/>
							</div>
							<h5 className="text-xl font-bold">{item?.title}</h5>
						</Link>
					)
				)}

				{hasNextPage && (
					<div className="my-2 col-span-4 flex justify-start">
						<Buttons.LoadMore
							onClick={() => fetchNextPage()}
							disabled={isFetchingNextPage}
						>
							{isFetchingNextPage
								? "جاري التحميل..."
								: "عرض المزيد"}
						</Buttons.LoadMore>
					</div>
				)}
			</div>
		</section>
	);
};

export default MainSection;
