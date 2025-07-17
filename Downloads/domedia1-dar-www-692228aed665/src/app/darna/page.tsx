import React, { Fragment } from "react";
import Container from "@/app/components/Container";
import Titles from "../components/Titles";
import Link from "next/link";
import Image from "next/image";
import Ad300x250 from "../components/Ad300x250";
import AdBannerGrid from "../components/ads/AdBannerGrid";

const page = () => {
	return (
		<Container className="my-6">
			<Titles.Title text="دارنـــا" className="text-center my-6" />

			{/* Mega Post */}
			<section className="relative w-full h-[400px] md:h-[630px] p-6 rounded-lg overflow-hidden">
				{/* Blurred Background Image */}
				<div className="absolute inset-0 bg-[url(/mega_image.png)] bg-cover bg-no-repeat blur-sm opacity-70"></div>

				{/* Content */}
				<div className="relative z-10 flex items-start h-full">
					<Titles.H2
						text="الأردن يرحب بإعلان الرئيس الأميركي التوصل لاتفاق وقف
						إطلاق النار بين إيران وإسرائيل"
						className="text-2xl/12 font-bold text-center md:text-5xl/relaxed text-white"
					/>
				</div>
			</section>

			<section className="my-10">
				<div className="flex gap-8">
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
									الفنان عمر العبداللات نجم إفتتاح مهرجان جرش
									2025
								</div>
								<p className="text-gray-700 text-base">
									إختارت إدارة "مهرجان جرش للثقافة والفنون"،
									"صوت الأردن" الفنان عمر العبداللات، ليكون
									نجم حفل افتتاح دورة المهرجان التاسعة
									والثلاثين، وذلك يوم الأربعاء 23/7/2025،
									والذي يقام هذا العام من تحت شعار: "هنا
									الأردن .. ومجده مستمر".
								</p>
							</div>
						</div>
					</Link>

					<div className="flex-2/3">
						<div className="grid grid-cols-2 gap-8">
							{[1, 2, 3, 4].map((item) => (
								<Fragment key={item}>
									{item === 2 ? (
										<Ad300x250
											key={item}
											className="border-b border-[#D9D9D9]" srcIndex={0} />
									) : (
										<Link
											href={"/"}
											className="flex-1/3 overflow-hidden border-b border-[#D9D9D9]"
											key={item}
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
														الفنان عمر العبداللات
														نجم إفتتاح مهرجان جرش
														2025 {item}
													</div>
												</div>
											</div>
										</Link>
									)}
								</Fragment>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Ads */}
			<AdBannerGrid />
			<div className="flex my-24">
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
				</div>
				<div className="flex-1/3">
					<div className="space-y-6">
						<Ad300x250 srcIndex={0} />
						<Ad300x250 srcIndex={0} />
						<Ad300x250 srcIndex={0} />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default page;
