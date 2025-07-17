import React from "react";
import Container from "../components/Container";
import Ad300x250 from "../components/Ad300x250";
import Image from "next/image";
import Titles from "../components/Titles";
import Link from "next/link";
import AdBannerGrid from "../components/ads/AdBannerGrid";

const TaqdeerMawqefPage = () => {
	return (
		<Container>
			<Titles.Title text="تـقـديـر مـوقـف" className="text-center my-6" />

			{/* Most important News */}
			<section className="grid grid-cols-3 gap-4 bg-[#7575A90D] p-6">
				<div className="col-span-3 lg:col-span-1  max-w-sm rounded overflow-hidden ">
					<Image
						unoptimized
						className="w-full shadow-lg rounded-lg"
						src="https://placehold.co/385x335"
						width={385}
						height={235}
						alt="Sunset in the mountains"
					/>
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">
							سيناريوهات المواجهة بين إسرائيل وإيران بعد وقف إطلاق
							النار
						</div>
						<p className="text-gray-700 text-base">
							جاء إعلان الرئيس الأمريكي دونالد ترامب عن وقف إطلاق
							النار بين إسرائيل وإيران في 24 يونيو 2025، بعد مضي
							12 يومًا عقب انطلاق الهجمات الإسرائيلية على القدرات
							العسكرية الإيرانية، ويومين فقط عقب الضربات الأمريكية
							على المنشآت النووية المركزية في إيران، وساعات معدودة
							بعد رد إيران على قاعدة العديد في قطر.
						</p>
					</div>
				</div>

				<div className="col-span-3 lg:col-span-1">
					<div className="flex flex-col gap-4">
						<div className="max-w-full overflow-hidden border-b border-[#D9D9D9]">
							<Image
								unoptimized
								className="w-full shadow-lg rounded-lg"
								src="https://placehold.co/450x220"
								width={385}
								height={235}
								alt="Sunset in the mountains"
							/>
							<div className="px-6 py-4">
								<div className="font-bold text-xl mb-2">
									مجلس الوزراء يعقد جلسة في محافظة البلقاء
									اليوم
								</div>
							</div>
						</div>

						<div className="max-w-sm w-full lg:max-w-full flex border-b border-[#D9D9D9] pb-4">
							<div className="p-4 flex flex-col justify-between leading-normal">
								<div className="mb-8">
									<div className="font-bold text-xl mb-2">
										جيش الاحتلال الإسرائيلي يقر بمقتل 7 من
										جنوده في معارك جنوبي غزة
									</div>
								</div>
							</div>
							<div
								className="h-[125px] w-[145px] shadow-lg flex-none bg-cover rounded-lg text-center overflow-hidden bg-[url(https://placehold.co/145x125)]"
								title="Woman holding a mug"
							></div>
						</div>
						<div className="max-w-sm w-full lg:max-w-full flex  border-b border-[#D9D9D9] pb-4">
							<div className="p-4 flex flex-col justify-between leading-normal">
								<div className="mb-8">
									<div className="font-bold text-xl mb-2">
										جيش الاحتلال الإسرائيلي يقر بمقتل 7 من
										جنوده في معارك جنوبي غزة
									</div>
								</div>
							</div>
							<div
								className="h-[125px] w-[145px] shadow-lg flex-none bg-cover rounded-lg text-center overflow-hidden bg-[url(https://placehold.co/145x125)]"
								title="Woman holding a mug"
							></div>
						</div>
					</div>
				</div>

				<div className="col-span-3 lg:col-span-1">
					<div className="flex flex-col gap-4">
						<Ad300x250 className=" border-b border-[#D9D9D9] pb-4" />

						<div className="max-w-sm w-full lg:max-w-full lg:flex border-b border-[#D9D9D9] pb-4">
							<div className="p-4 flex flex-col justify-between leading-normal">
								<div className="mb-8">
									<div className="font-bold text-xl mb-2">
										جيش الاحتلال الإسرائيلي يقر بمقتل 7 من
										جنوده في معارك جنوبي غزة
									</div>
								</div>
							</div>
							<div
								className="h-[125px] w-[145px] shadow-lg flex-none bg-cover rounded-lg text-center overflow-hidden bg-[url(https://placehold.co/145x125)]"
								title="Woman holding a mug"
							></div>
						</div>
						<div className="max-w-sm w-full lg:max-w-full lg:flex  border-b border-[#D9D9D9] pb-4">
							<div className="p-4 flex flex-col justify-between leading-normal">
								<div className="mb-8">
									<div className="font-bold text-xl mb-2">
										جيش الاحتلال الإسرائيلي يقر بمقتل 7 من
										جنوده في معارك جنوبي غزة
									</div>
								</div>
							</div>
							<div
								className="h-[125px] w-[145px] shadow-lg flex-none bg-cover rounded-lg text-center overflow-hidden bg-[url(https://placehold.co/145x125)]"
								title="Woman holding a mug"
							></div>
						</div>
					</div>
				</div>
			</section>

			{/* Ads */}
			<AdBannerGrid />

			<section className="my-10">
				<div className="grid grid-cols-3 gap-6 mt-24">
					<div className="col-span-2 space-y-4">
						{[1, 2, 3].map((item) => (
							<Link
								href={"/"}
								className="grid grid-cols-3 gap-2"
								key={item}
							>
								<div className="col-span-2 space-y-4">
									<h5 className="text-xl font-bold">
										فيديو متداول لأشخاص "يغششون" طلبة
										"توجيهي" خلال عقد الامتحان
									</h5>
									<p>
										شهدت ملفات الفساد التي تعاملت معها هيئة
										النزاهة ومكافحة الفساد خلال الشهور
										الماضية من العام الحالي 2025 تسجيل 46
										قضية بحق رؤساء وأعضاء مجالس بلدية في
										المملكة، وتمت إحالتها جميعها إلى القضاء
										لإجراء المقتضى القانوني.
									</p>
								</div>

								<div className="col-span-1  relative aspect-[3/2]">
									<Image
										fill
										className="shadow-lg rounded-lg object-cover"
										src="/video_holder_image.png"
										alt="Sunset in the mountains"
									/>
								</div>
							</Link>
						))}
					</div>

					<div className="col-span-1">
						<div className="space-y-6">
							<Ad300x250 />
							<Ad300x250 />
							<Ad300x250 />
						</div>
					</div>
				</div>
			</section>
		</Container>
	);
};

export default TaqdeerMawqefPage;
