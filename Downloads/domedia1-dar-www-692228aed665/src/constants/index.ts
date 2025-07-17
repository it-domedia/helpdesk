export const pages = [
	{
		arName: "الرئيسية",
		enName: "Home",
		slug: "/home",
		href: "/home",
		children: [],
	},
	{
		arName: "دارنا",
		enName: "our home",
		slug: "darna",
		href: "/darna",
		children: [],
	},
	{
		arName: "خارج الحد",
		enName: "kharej al had",
		slug: "kharej-al-had",
		children: [],
		href: "/kharej-al-had",
	},
	{
		arName: "تقدير موقف",
		enName: "tawdeer mawqef",
		slug: "taqdeer-mawqef",
		children: [],
		href: "/taqdeer-mawqef",
	},
	{
		arName: "إقتصاد",
		enName: "economics",
		slug: "economics",
		href: "/economics",

		children: [
			{
				arName: "الذهب و الفضة",
				enName: "Gold and Silver",
				slug: "gold-and-silver",
				children: [],
				href: "/economics/#gold-and-silver",
			},
		],
	},
	{
		arName: "VAR",
		enName: "VAR",
		slug: "var",
		children: [],
		href: "/var",
	},
	{
		arName: "منوع",
		enName: "munawa",
		slug: "munawa",
		href: "/munawa",

		children: [
			{
				arName: "ترند",
				enName: "trend",
				slug: "trend",
				children: [],
				href: "/munawa/#trend-section",
			},
			{
				arName: "الصحة",
				enName: "health",
				slug: "health",
				children: [],
				href: "/munawa/#health-section",
			},
			{
				arName: "التكنولوجيا",
				enName: "technology",
				slug: "technology",
				children: [],
				href: "/munawa/#technology-section",
			},
			{
				arName: "مناسبات",
				enName: "munasabat",
				slug: "munasabat",
				children: [],
				href: "/munawa/#munasabat-section",
			},
		],
	},
	{
		arName: "زاجل",
		enName: "zajil",
		slug: "zajil",
		children: [],
		href: "/zajil",
	},
	{
		arName: "بالصوت والصورة",
		enName: "With sound and image",
		slug: "sound-and-image",
		children: [],
		href: "/sound-and-image",
	},
	{
		arName: "بودكاست",
		enName: "podcasts",
		slug: "podcasts",
		children: [],
		href: "/podcasts",
	},
	{
		arName: "مقالات",
		enName: "articles",
		slug: "articles",
		children: [],
		href: "/articles",
	},
];

export const BASE_URL = "http://192.168.1.51:8000/api";
