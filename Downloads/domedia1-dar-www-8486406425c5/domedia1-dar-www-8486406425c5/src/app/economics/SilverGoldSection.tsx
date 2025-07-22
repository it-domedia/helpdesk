"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import Ad300x250 from "../components/Ad300x250";
import Titles from "../components/Titles";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import { ContentsProp, PageContentProp } from "../actions";
import { BASE_URL } from "@/constants";
import Buttons from "../components/Buttons";
import api from "../utils/httpClient";

interface FetchResponse {
	contents: ContentsProp[];
	hasMore: boolean;
}

const SilverGoldSection = ({ path }: { path: string }) => {
	const limit = 10;
	const fetchContent = async ({
		pageParam = 0,
	}: QueryFunctionContext<
		[string, string],
		number
	>): Promise<FetchResponse> => {
		const offset = typeof pageParam === "number" ? pageParam : 0;

		const res = await api.get<PageContentProp>(`${BASE_URL}/content`, {
			params: {
				section: "gold-and-silver",
				limit,
				offset: offset * limit,
			},
		});

		const contents =
			res.data?.results.find((s) => s.section === "gold-and-silver")
				?.contents || [];

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
			queryKey: ["silver-and-gold", path],
			queryFn: fetchContent,
			initialPageParam: 0,
			getNextPageParam: (lastPage, pages) =>
				lastPage.hasMore ? pages.length : undefined,
		});
	const contents: ContentsProp[] =
		data?.pages.flatMap((page) => page.contents) ?? [];
	console.log(data);
	return (
		<section className="  my-10 scroll-mt-24 space-y-4">
			<Titles.Title text="الذهب والفضة" className="text-center my-6" />
			<div className="flex gap-4">
				<div className="flex-1/3 space-y-4">
					{contents.slice(0, 2).map((item) => (
						<Link href={"/"} key={item.id}>
							<div className={twMerge("relative w-full h-80")}>
								<Image
									fill
									src={item?.s3_url || "/gold_image.png"}
									alt="Gold"
									className="rounded-lg object-cover"
								/>
							</div>
							<h5 className="text-xl font-bold mt-4 ">
								{item.title}
							</h5>
						</Link>
					))}
				</div>
				<div className="flex-1/3">
					<div className="space-y-4">
						{contents.slice(2, 6).map((item) => (
							<Link href={"/"} key={item.id} className=" block">
								<div
									className={twMerge("relative w-full h-40")}
								>
									<Image
										fill
										src={item?.s3_url || "/gold_image.png"}
										alt="Gold"
										className="rounded-lg object-cover"
									/>
								</div>
								<h5 className="text-xl font-bold mt-4">
									{item.title}
								</h5>
							</Link>
						))}
					</div>
				</div>

				<div className="flex-1/3">
					<div className="space-y-4">
						<Ad300x250 srcIndex={1} />
						<Ad300x250 srcIndex={2} />
						<Ad300x250 srcIndex={3} />
					</div>
				</div>
			</div>

			<div className="grid grid-cols-4 gap-4">
				{contents.slice(6).map((item) => (
					<Link href={"/"} className="col-span-1" key={item.id}>
						<div
							className={twMerge(
								"relative w-full h-44 aspect-[1/1]"
							)}
						>
							<Image
								fill
								src={item?.s3_url || "/gold_image.png"}
								alt="Gold"
								className="rounded-lg object-cover"
							/>
						</div>
						<h5 className="text-xl font-bold mt-4 ">
							{item.title}
						</h5>
					</Link>
				))}
			</div>
			{hasNextPage && (
				<div className="my-12 col-span-4 flex justify-start">
					<Buttons.LoadMore
						onClick={() => fetchNextPage()}
						disabled={isFetchingNextPage}
					>
						{isFetchingNextPage ? "جاري التحميل..." : "عرض المزيد"}
					</Buttons.LoadMore>
				</div>
			)}
		</section>
	);
};

export default SilverGoldSection;
