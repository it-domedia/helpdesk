import Link from "next/link";

// components/NewsStrip.tsx
export default function NewsStrip() {
	const items = [
		'الجمعية الهاشمية: "سير قافلة مساعدات إنسانية جديدة إلى غزة"',
		'نقابة الصحفيين: "لا عودة من تنظيم حال الطوارئ الإعلامية"',
		"عاجل: قرار بمنع بودكاست مقدمات مباريات VAR",
	];

	return (
		<div className="bg-[#0d2c54] text-white h-14 overflow-hidden relative text-sm flex items-center">
			{/* Scrolling Text */}
			<div className="w-full whitespace-nowrap marquee pr-10 pl-24">
				{items.map((item, index) => (
					<Link
						href="/"
						key={index}
						className="mx-6 inline-block hover:underline font-semibold text-lg"
					>
						{item}
					</Link>
				))}
			</div>
		</div>
	);
}
