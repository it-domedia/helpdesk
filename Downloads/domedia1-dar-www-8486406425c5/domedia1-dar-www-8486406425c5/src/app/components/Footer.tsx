// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Cairo } from "next/font/google";

// const cairo = Cairo({ subsets: ["arabic"], weight: ["300", "400", "700"] });

// const Footer = () => {
// 	const year = new Date().getFullYear();

// 	return (
// 		<footer className={`${cairo.className} bg-white border-t border-[#D9D9D9] pt-12 pb-6 text-black`} dir="rtl">
// 			<div className="max-w-screen-xl mx-auto px-4">
// 				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-right">

// 					{/* من نحن */}
// 					<div>
// 						<h4 className="font-bold text-base mb-4">من نحن</h4>
// 						<ul className="space-y-2 font-light">
// 							<li><Link href="/about">من نحن</Link></li>
// 							<li><Link href="/terms">الأحكام والشروط</Link></li>
// 							<li><Link href="/privacy">سياسة الخصوصية</Link></li>
// 							<li><Link href="/sitemap">خريطة الموقع</Link></li>
// 						</ul>
// 					</div>

// 					{/* قنواتنا */}
// 					<div>
// 						<h4 className="font-bold text-base mb-4">قنواتنا</h4>
// 						<ul className="space-y-2 font-light">
// 							<li>إذاعة عين</li>
// 							<li>الدار الأخبارية</li>
// 							<li>منصة جزيل</li>
// 							<li>منصة مرهم</li>
// 						</ul>
// 					</div>

// 					{/* تواصل معنا */}
// 					<div className="flex flex-col items-center text-center space-y-4">
// 						<h4 className="font-bold text-base">تواصل معنا</h4>

// 						{/* أرقام الهواتف */}
// 						<div className="flex items-center gap-2">
// 							<Image src="/phone-call.png" alt="هاتف" width={20} height={20} />
// 							<div className="flex flex-col">
// 								<span>+962 7 8666 6111</span>
// 								<span>+962 6 2000 983</span>
// 							</div>
// 						</div>

// 						{/* البريد الإلكتروني */}
// 						<div className="flex items-center gap-2">
// 							<Image src="/envelope-modified.png" alt="إيميل" width={20} height={20} />
// 							<span>news@aldarnews.net</span>
// 						</div>
// 					</div>


// 					{/* الشعار والسوشال */}
// 					{/* الشعار والسوشال */}
// 					<div className="flex flex-col items-center justify-center text-center">
// 						<span className="mb-2">تابع الدار الأخبارية على:</span>

// 						<div className="flex flex-wrap justify-center gap-4 mt-4 mb-4">
// 							<Link href="https://www.facebook.com/AlDarNewsJO/"><Image src="/facebook.png" alt="فيسبوك" width={25} height={25} /></Link>
// 							<Link href="https://www.whatsapp.com/channel/0029Vb6c0e1HFxOsHYcuvU1w"><Image src="/telegram.png" alt="تليجرام" width={25} height={25} /></Link>
// 							<Link href="https://www.instagram.com/aldarnewsjo/"><Image src="/instagram.png" alt="انستغرام" width={25} height={25} /></Link>
// 							<Link href="https://x.com/Aldarnewsjo"><Image src="/twitter.png" alt="تويتر" width={25} height={25} /></Link>
// 							<Link href="https://t.me/Aldarnewsjo"><Image src="/whatsapp.png" alt="واتساب" width={25} height={25} /></Link>
// 						</div>

// 						<Image src="/Untitled-4-04 2.png" alt="شعار الدار" width={100} height={90} />

// 						<div className="text-center text-sm font-light mt-10 text-gray-600">
// 							جميع الحقوق محفوظة © {year}
// 						</div>
// 					</div>


// 				</div>

// 			</div>
// 		</footer>
// 	);
// };

// export default Footer;


"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["arabic"], weight: ["300", "400", "700"] });

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer
			className={`${cairo.className} bg-white border-t border-[#D9D9D9] pt-12 pb-6 text-black`}
			dir="rtl"
		>
			<div className="max-w-screen-xl mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-right">

					{/* من نحن */}
					<div>
						<h4 className="font-bold text-base mb-4">من نحن</h4>
						<ul className="space-y-2 font-light">
							<li>
								<Link
									href="/about"
									className="hover:text-[#DF3C37] transition-colors duration-200"
								>
									من نحن
								</Link>
							</li>
							<li>
								<Link
									href="/terms"
									className="hover:text-[#DF3C37] transition-colors duration-200"
								>
									الأحكام والشروط
								</Link>
							</li>
							<li>
								<Link
									href="/privacy"
									className="hover:text-[#DF3C37] transition-colors duration-200"
								>
									سياسة الخصوصية
								</Link>
							</li>
							<li>
								<Link
									href="/sitemap"
									className="hover:text-[#DF3C37] transition-colors duration-200"
								>
									خريطة الموقع
								</Link>
							</li>
						</ul>
					</div>

					{/* قنواتنا */}
					<div>
						<h4 className="font-bold text-base mb-4">قنواتنا</h4>
						<ul className="space-y-2 font-light">
							<li>إذاعة عين</li>
							<li>الدار الأخبارية</li>
							<li>منصة جزيل</li>
							<li>منصة مرهم</li>
						</ul>
					</div>

					{/* تواصل معنا */}
					<div className="flex flex-col items-center text-center space-y-4">
						<h4 className="font-bold text-base">تواصل معنا</h4>

						{/* أرقام الهواتف */}
						<div className="flex items-center gap-2">
							<Image src="/phone-call.png" alt="هاتف" width={20} height={20} />
							<div className="flex flex-col">
								<span>+962 7 8666 6111</span>
								<span>+962 6 2000 983</span>
							</div>
						</div>

						{/* البريد الإلكتروني */}
						<div className="flex items-center gap-2">
							<Image
								src="/envelope-modified.png"
								alt="إيميل"
								width={20}
								height={20}
							/>
							<span>news@aldarnews.net</span>
						</div>
					</div>

					{/* الشعار والسوشال */}
					<div className="flex flex-col items-center justify-center text-center">
						<span className="mb-2">تابع الدار الأخبارية على:</span>

						<div className="flex flex-wrap justify-center gap-4 mt-4 mb-4">
							<Link
								href="https://www.facebook.com/AlDarNewsJO/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-70 transition-opacity duration-200"
							>
								<Image src="/facebook.png" alt="فيسبوك" width={25} height={25} />
							</Link>
							<Link
								href="https://www.whatsapp.com/channel/0029Vb6c0e1HFxOsHYcuvU1w"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-70 transition-opacity duration-200"
							>
								<Image src="/telegram.png" alt="تليجرام" width={25} height={25} />
							</Link>
							<Link
								href="https://www.instagram.com/aldarnewsjo/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-70 transition-opacity duration-200"
							>
								<Image src="/instagram.png" alt="انستغرام" width={25} height={25} />
							</Link>
							<Link
								href="https://x.com/Aldarnewsjo"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-70 transition-opacity duration-200"
							>
								<Image src="/twitter.png" alt="تويتر" width={25} height={25} />
							</Link>
							<Link
								href="https://t.me/Aldarnewsjo"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-70 transition-opacity duration-200"
							>
								<Image src="/whatsapp.png" alt="واتساب" width={25} height={25} />
							</Link>
						</div>

						<Image
							src="/Untitled-4-04 2.png"
							alt="شعار الدار"
							width={100}
							height={90}
							className="mb-6"
						/>

						<div className="text-center text-sm font-light mt-10 text-gray-600">
							جميع الحقوق محفوظة © {year}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
