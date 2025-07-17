import React from "react";
import Container from "../components/Container";
import Image from "next/image";
import Ad300x250 from "../components/Ad300x250";
import Titles from "../components/Titles";
import AdBannerGrid from "../components/ads/AdBannerGrid";
import Link from "next/link";

const EconomicsPage = () => {
	return (
		<Container>
			<Titles.Title text="اقـتـصـاد" className="text-center my-6" />

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

			<AdBannerGrid />

			{/* Silver and Gold section */}
			<section id="gold-and-silver" className="my-10 scroll-mt-24">
				<Titles.Title
					text="الذهب والفضة"
					className="text-center my-6"
				/>

				<div className="grid grid-cols-4 gap-4">
					{/* Posts */}
					<div className="col-span-3 space-y-4 ">
						<div className="grid grid-flow-col grid-rows-2 gap-4">
							<Link href={"/"} className="row-span-3 ">
								<div className="relative w-full h-[305px] aspect-[3/2]">
									<Image
										fill
										src="/gold_image.png"
										alt="Gold"
										className="rounded-lg object-cover"
									/>
								</div>
								<h5 className="text-xl font-bold mt-4">
									استقرار أسعار الذهب في السوق المحلية
								</h5>
							</Link>
							<Link href={"/"} className="col-span-2">
								<div className="relative w-full aspect-[2/1]">
									<Image
										fill
										src="/gold_image.png"
										alt="Gold"
										className="rounded-lg object-cover"
									/>
								</div>
								<h5 className="text-xl font-bold mt-4">444</h5>
							</Link>
							<Link href={"/"} className="col-span-2 row-span-2">
								<div className="relative w-full aspect-[2/1]">
									<Image
										fill
										src="/gold_image.png"
										alt="Gold"
										className="rounded-lg object-cover"
									/>
								</div>
								<h5 className="text-xl font-bold mt-4">444</h5>
							</Link>
						</div>
						<div className="grid grid-flow-col grid-rows-2 gap-4">
							<Link href={"/"} className="row-span-3 ">
								<div className="relative w-full h-[305px] aspect-[3/2]">
									<Image
										fill
										src="/gold_image.png"
										alt="Gold"
										className="rounded-lg object-cover"
									/>
								</div>
								<h5 className="text-xl font-bold mt-4">
									استقرار أسعار الذهب في السوق المحلية{" "}
								</h5>
							</Link>
							<Link href={"/"} className="col-span-2">
								<div className="relative w-full aspect-[2/1]">
									<Image
										fill
										src="/gold_image.png"
										alt="Gold"
										className="rounded-lg object-cover"
									/>
								</div>
								<h5 className="text-xl font-bold mt-4">444</h5>
							</Link>
							<Link href={"/"} className="col-span-2 row-span-2">
								<div className="relative w-full aspect-[2/1]">
									<Image
										fill
										src="/gold_image.png"
										alt="Gold"
										className="rounded-lg object-cover"
									/>
								</div>
								<h5 className="text-xl font-bold mt-4">444</h5>
							</Link>
						</div>

						<div className="grid grid-cols-3 gap-4">
							<Link href={"/"} className="col-span-1 ">
								<div className="relative w-full  aspect-[2/1]">
									<Image
										fill
										src="/gold_image.png"
										alt="Gold"
										className="rounded-lg object-cover"
									/>
								</div>
								<h5 className="text-xl font-bold mt-4">
									استقرار أسعار الذهب في السوق المحلية{" "}
								</h5>
							</Link>
							<Link href={"/"} className="col-span-1">
								<div className="relative w-full aspect-[2/1]">
									<Image
										fill
										src="/gold_image.png"
										alt="Gold"
										className="rounded-lg object-cover"
									/>
								</div>
								<h5 className="text-xl font-bold mt-4">444</h5>
							</Link>
							<Link href={"/"} className="col-span-1 row-span-2">
								<div className="relative w-full aspect-[2/1]">
									<Image
										fill
										src="/gold_image.png"
										alt="Gold"
										className="rounded-lg object-cover"
									/>
								</div>
								<h5 className="text-xl font-bold mt-4">444</h5>
							</Link>
						</div>
					</div>

					{/* Ads */}
					<div className="col-span-1  space-y-6">
						<Ad300x250 />
						<Ad300x250 />

						<Ad300x250 />
					</div>
				</div>
			</section>
		</Container>
	);
};

export default EconomicsPage;
