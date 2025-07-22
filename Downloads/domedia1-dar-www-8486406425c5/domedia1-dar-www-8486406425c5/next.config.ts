import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: [
			// {
			// 	protocol: "https",
			// 	hostname: "placehold.co",
			// 	port: "",
			// 	pathname: "",
			// 	search: "",
			// },
			// {
			// 	protocol: "https",
			// 	hostname: "marktingmenus.s3.eu-central-1.amazonaws.com",
			// 	port: "",
			// 	pathname: "",
			// 	search: "",
			// },
			"placehold.co",
			"marktingmenus.s3.eu-central-1.amazonaws.com",
		],
	},
};

export default nextConfig;
