import React from "react";
import Container from "../components/Container";
import Titles from "../components/Titles";
import Link from "next/link";
import Image from "next/image";
import Ad300x250 from "../components/Ad300x250";
import AdBannerGrid from "../components/ads/AdBannerGrid";

const ZajilPage = () => {
	return (
		<div>
			<Container className="my-10">
				<Titles.Title text="زاجـــل" className="text-center my-6" />
				<section className="flex gap-8 my-8">
					<div className="flex-1/3">
						<Link href={"/"} className="flex-1/3 overflow-hidden ">
							<div>
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
										الفنان عمر العبداللات نجم إفتتاح مهرجان
										جرش 2025
									</div>
									<p className="text-gray-700 text-base">
										إختارت إدارة "مهرجان جرش للثقافة
										والفنون"، "صوت الأردن" الفنان عمر
										العبداللات، ليكون نجم حفل افتتاح دورة
										المهرجان التاسعة والثلاثين، وذلك يوم
										الأربعاء 23/7/2025، والذي يقام هذا العام
										من تحت شعار: "هنا الأردن .. ومجده
										مستمر".
									</p>
								</div>
							</div>
						</Link>
					</div>

					<div className="flex-2/3">
						<div className="flex justify-between gap-8">
							<Link
								href={"/"}
								className="flex-1/2 overflow-hidden border-b border-[#D9D9D9]"
							>
								<div>
									<Image
										unoptimized
										className="w-full shadow-lg rounded-lg"
										src="https://placehold.co/350x200"
										width={350}
										height={200}
										alt="Sunset in the mountains"
									/>
									<div className="px-6 py-4">
										<div className="font-bold text-xl mb-2">
											الفنان عمر العبداللات نجم إفتتاح
											مهرجان جرش 2025
										</div>
									</div>
								</div>
							</Link>
							<div className="flex-1/2 border-b border-[#D9D9D9]">
								<Ad300x250 />
							</div>
						</div>
						<div className="grid grid-cols-2 gap-x-12 gap-y-4 mt-8">
							{[1, 2, 3, 4].map((item) => (
								<Link
									href={"/"}
									className="flex border-b border-[#D9D9D9] pb-8"
									key={item}
								>
									<div className="flex-2/3 space-y-6">
										<h4 className="font-bold text-base">
											هل شرب الماء البارد يساعدك على حرق
											الدهون؟
										</h4>
									</div>
									<div className="flex-1/3">
										<Image
											unoptimized
											className="w-full shadow-lg rounded-lg"
											src="https://placehold.co/150x120"
											width={150}
											height={120}
											alt="Sunset in the mountains"
										/>
									</div>
								</Link>
							))}
						</div>
					</div>
				</section>
			</Container>

			<Container className="my-10">
				<AdBannerGrid />
			</Container>
			<Container className="my-12">
				<div className="flex">
					<div className="flex-2/3">
						<div className="space-y-8">
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
											شهدت ملفات الفساد التي تعاملت معها
											هيئة النزاهة ومكافحة الفساد خلال
											الشهور الماضية من العام الحالي 2025
											تسجيل 46 قضية بحق رؤساء وأعضاء مجالس
											بلدية في المملكة، وتمت إحالتها
											جميعها إلى القضاء لإجراء المقتضى
											القانوني.
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
					</div>
					<div className="flex-1/3">
						<div className="space-y-6">
							<Ad300x250 />
							<Ad300x250 />
							<Ad300x250 />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default ZajilPage;
