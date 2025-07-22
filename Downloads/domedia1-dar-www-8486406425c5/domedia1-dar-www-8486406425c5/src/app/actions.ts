import { BASE_URL } from "@/constants";
import qs from "query-string";
// import axios from "axios";
export interface AdProp {
	id: number;
	title: string;
	image: string;
	s3_url: string;
	url: string;
	width: number;
	height: number;
	is_main: boolean;
	type: string;
}

export interface AdsResponse {
	topBanner: AdProp | null;
	middle: AdProp[]; // You may want to change this to `AdProp | null`
	square: AdProp[];
}

// This call return all ads
export async function getAds(): Promise<AdsResponse | null> {
	try {
		const res = await fetch(BASE_URL + "/advertises/", {
			next: { revalidate: 60 },
		});

		const adsToJson: AdProp[] = await res.json();

		const obj: AdsResponse = {
			topBanner: null,
			middle: [],
			square: [],
		};

		adsToJson.forEach((ad) => {
			// Top Banner
			if (ad.width === 1152 && ad.height === 90) {
				obj.topBanner = ad;
			}

			// 4 middle ads
			if (ad.width === 512 && ad.height === 64) {
				obj.middle.push(ad);
			}

			// Square ads
			if (ad.width === 300 && ad.height === 250) {
				obj.square.push(ad);
			}
		});

		return obj;
	} catch (error) {
		console.error(error);
		return null;
	}
}

// This call return navigation menu

export const getCategoriesMenu = async () => {
	try {
		const res = await fetch(BASE_URL + "/categories/", {
			next: { revalidate: 60 },
		});
		const resToJson = await res.json();

		// console.log({ resToJson });
		return resToJson;
	} catch (error) {
		console.log(error);
		return null;
	}
};

type GetPageContentType = {
	query: {
		slug?: string;
		section?: string;
		offset?: number;
		limit?: number;
	};
};

export interface ContentsProp {
	id: number | string;
	section: string;
	category: string;
	viewed_count: number;
	title: string;
	link: string;
	description: string;
	created_at: string;
	last_update_date: string;
	published_on_site: string;
	picture_name: string;
	picture_caption: string;
	short_description: string;
	by_line: string;
	page_view: number;
	status: string;
	is_video: boolean;
	image: string;
	s3_url: string;
	news_type: string;
	is_main: boolean;
	created_by: number;
	updated_by: number;
	slug_title: string;
}

interface ResultsProps {
	section: string;
	contents: ContentsProp[];
}

export interface PageContentProp {
	count: number;
	next: number | null;
	previous: number | null;
	results: ResultsProps[];
}

// This call get the page content by slug
// slug is required
export const getPageContent = async (
	props: GetPageContentType
): Promise<PageContentProp | null> => {
	try {
		const res = await fetch(
			`${BASE_URL}/content?${qs.stringify(props.query)}`,
			{
				next: { revalidate: 60 },
			}
		);
		const resToJson = await res.json();

		return resToJson;
	} catch (error) {
		console.log(error);
		return null;
	}
};
