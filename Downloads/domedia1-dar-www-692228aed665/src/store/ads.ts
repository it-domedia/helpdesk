import { AdProp, AdsResponse } from "@/app/actions";
import { create } from "zustand";

type Store = {
	topBanner: AdProp | null;
	middle: AdProp[]; // You may want to change this to `AdProp | null`
	square: AdProp[];
	setAds: (props: AdsResponse) => void;
};

const useAdsStore = create<Store>()((set) => ({
	topBanner: null,
	middle: [],
	square: [],
	setAds: (ads) =>
		set(() => ({
			middle: ads.middle,
			topBanner: ads.topBanner,
			square: ads.square,
		})),
}));

export default useAdsStore;
