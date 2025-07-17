import React from "react";
import Container from "../components/Container";
import Titles from "../components/Titles";
import Image from "next/image";
import Ad300x250 from "../components/Ad300x250";
import Link from "next/link";
import AdBannerGrid from "../components/ads/AdBannerGrid";

const KharejAlhadPage = () => {
	return (
		<Container>
			<Titles.Title text="خارج الحد" className="text-center my-6" />
			<section className="p-6 my-10">
				<div className="grid grid-cols-4 grid-flow-col grid-rows-2 gap-12">
					<div className="col-span-1 rounded-lg ">
						<div className="flex flex-col gap-4 border-b border-[#D9D9D9] pb-4">
							<div className="relative aspect-2/1">
								<Image
									fill
									className="shadow-lg rounded-lg object-cover"
									src="/video_holder_image.png"
									alt="Sunset in the mountains"
								/>
							</div>
							<h5 className="text-xl font-bold">
								فيديو متداول لأشخاص "يغششون" طلبة "توجيهي" خلال
								عقد الامتحان
							</h5>
						</div>
					</div>
					<div className=" col-span-1 rounded-lg ">
						<div className="flex flex-col gap-4 border-b border-[#D9D9D9] pb-4">
							<div className="relative aspect-2/1">
								<Image
									fill
									className="shadow-lg rounded-lg"
									src="/video_holder_image.png"
									alt="Sunset in the mountains"
								/>
							</div>
							<h5 className="text-xl font-bold">
								فيديو متداول لأشخاص "يغششون" طلبة "توجيهي" خلال
								عقد الامتحان
							</h5>
						</div>
					</div>
					<div className="row-span-2 col-span-2 rounded-lg">
						<div className="flex flex-col gap-4 ">
							<div className="relative aspect-107/72">
								<Image
									fill
									className="shadow-lg rounded-lg object-cover"
									src="/video_holder_image.png"
									alt="Sunset in the mountains"
									priority
								/>
							</div>

							<div className="space-y-4">
								<h5 className="text-2xl  font-bold">
									فيديو متداول لأشخاص "يغششون" طلبة "توجيهي"
									خلال عقد الامتحان 2
								</h5>

								<p className="text-xl font-light">
									قال الرئيس الأمريكية دونالد ترمب إن الضربة
									الامريكية على إيران والتي استهدفت منشآتها
									النووية، ستساعد في التوصل لاتافق حول غزة
									واطلاق سراح المحتجزين.
								</p>
							</div>
						</div>
					</div>

					<div className="col-span-1 rounded-lg ">
						<Ad300x250 className="border-b border-[#D9D9D9] pb-4" />
					</div>
					<div className="col-span-1 rounded-lg ">
						<div className="flex flex-col gap-4 border-b border-[#D9D9D9] pb-4">
							<div className="relative aspect-2/1">
								<Image
									fill
									className="shadow-lg rounded-lg"
									src="/video_holder_image.png"
									alt="Sunset in the mountains"
								/>
							</div>
							<h5 className="text-xl font-bold">
								فيديو متداول لأشخاص "يغششون" طلبة "توجيهي" خلال
								4
							</h5>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-4 gap-12 mt-24 ">
					<div className="col-span-1 rounded-lg ">
						<div className="space-y-4 border-b border-[#D9D9D9] pb-4">
							<div className="relative aspect-2/1">
								<Image
									fill
									className="shadow-lg rounded-lg object-cover"
									src="/video_holder_image.png"
									alt="Sunset in the mountains"
								/>
							</div>
							<h5 className="text-xl font-bold">
								فيديو متداول لأشخاص "يغششون" طلبة "توجيهي" خلال
								عقد الامتحان
							</h5>
						</div>
					</div>

					<div className="col-span-1 rounded-lg ">
						<div className="space-y-4 border-b border-[#D9D9D9] pb-4">
							<div className="relative aspect-2/1">
								<Image
									fill
									className="shadow-lg rounded-lg object-cover"
									src="/video_holder_image.png"
									alt="Sunset in the mountains"
								/>
							</div>
							<h5 className="text-xl font-bold">
								فيديو متداول لأشخاص "يغششون" طلبة "توجيهي" خلال
								عقد الامتحان
							</h5>
						</div>
					</div>
					<div className="col-span-1 rounded-lg ">
						<div className="space-y-4 border-b border-[#D9D9D9] pb-4">
							<div className="relative aspect-2/1">
								<Image
									fill
									className="shadow-lg rounded-lg object-cover"
									src="/video_holder_image.png"
									alt="Sunset in the mountains"
								/>
							</div>
							<h5 className="text-xl font-bold">
								فيديو متداول لأشخاص "يغششون" طلبة "توجيهي" خلال
								عقد الامتحان
							</h5>
						</div>
					</div>
					<div className="col-span-1 rounded-lg ">
						<div className="space-y-4 border-b border-[#D9D9D9] pb-4">
							<div className="relative aspect-2/1">
								<Image
									fill
									className="shadow-lg rounded-lg object-cover"
									src="/video_holder_image.png"
									alt="Sunset in the mountains"
								/>
							</div>
							<h5 className="text-xl font-bold">
								فيديو متداول لأشخاص "يغششون" طلبة "توجيهي" خلال
								عقد الامتحان
							</h5>
						</div>
					</div>
				</div>
			</section>

			{/* Ads */}
			<AdBannerGrid />
			<section>
				<div className="grid grid-cols-5 gap-12 mt-24 border-b border-[#D9D9D9]">
					{[1, 2, 3, 4, 5].map((item) => (
						<div className="col-span-1 rounded-lg " key={item}>
							<div className="space-y-4 border-b border-[#D9D9D9] pb-4">
								<div className="relative max-w-[250px] h-[200px]">
									<Image
										fill
										className="shadow-lg rounded-lg object-cover "
										src="/video_holder_image.png"
										alt="Sunset in the mountains"
									/>
								</div>
								<h5 className="text-xl font-bold">
									فيديو متداول لأشخاص "يغششون" طلبة "توجيهي"
									خلال عقد الامتحان
								</h5>
							</div>
						</div>
					))}
				</div>
			</section>

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

export default KharejAlhadPage;
