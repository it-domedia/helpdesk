"use client";

import Link from "next/link";
import React from "react";
import Ad300x250 from "../components/Ad300x250";
import Buttons from "../components/Buttons";
import Image from "next/image";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/constants";
import { ContentsProp, PageContentProp } from "../actions";
import api from "../utils/httpClient";

interface PageProps {
	contents: ContentsProp[];
	hasMore: boolean;
}
interface FetchResponse {
	pageParam: number;
	pages: PageProps;
}

const LastSection = ({ path }: { path: string }) => {
	const limit = 5;

	// Fetch paginated content
	const fetchContent = async ({
		pageParam = 0,
	}: QueryFunctionContext<
		[string, string],
		number
	>): Promise<FetchResponse> => {
		const offset = typeof pageParam === "number" ? pageParam : 0;

		const res = await api.get<PageContentProp>(`/content`, {
			params: {
				section: path,
				limit,
				offset: offset * limit,
			},
		});

		const contents =
			res.data?.results.find((s) => s.section === path)?.contents || [];

		return {
			pageParam,
			pages: {
				hasMore: Boolean(res.data.next),
				contents,
			},
		};
	};

	const {
		data,
		fetchNextPage,
		// hasNextPage,
		isFetchingNextPage,
		// isLoading
	} = useInfiniteQuery<
		FetchResponse, // TQueryFnData (return value of fetchContent)
		Error, // TError
		FetchResponse, // TData (transformed data, here same as original)
		[string, string], // TQueryKey (tuple, same shape as queryKey)
		number
	>({
		queryKey: ["darna", path],
		queryFn: fetchContent,
		initialPageParam: 0,
		getNextPageParam: (lastPage, pages) =>
			lastPage.hasMore ? pages.length : undefined,
	});

	const contents = data?.pages.contents?.flatMap((page) => page) ?? [];
	console.log(data);
	return (
		<div>
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
			{/* {hasNextPage && ( */}
			<div className="my-2 col-span-4 flex justify-start">
				<Buttons.LoadMore
					onClick={() => fetchNextPage()}
					disabled={isFetchingNextPage}
				>
					{isFetchingNextPage ? "جاري التحميل..." : "عرض المزيد"}
				</Buttons.LoadMore>
			</div>
			{/* )} */}
		</div>
	);
};

export default LastSection;
