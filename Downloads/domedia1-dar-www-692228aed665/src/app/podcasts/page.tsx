import React from "react";
import Container from "../components/Container";
import Image from "next/image";
import AdBannerGrid from "../components/ads/AdBannerGrid";
import Titles from "../components/Titles";
import Ad300x250 from "../components/Ad300x250";
import Link from "next/link";

const PodcastsPage = () => {
	return (
		<div className="my-10">
			<Container className="my-6 space-y-8 ">
				<Titles.Title text="بـودكـاسـت" className="text-center my-6" />
				<div className="flex gap-4 ">
					<div className="relative flex-1/2 ">
						<Image
							// fill
							unoptimized
							src={"https://placehold.co/600x480"}
							alt="Video"
							className="rounded-lg aspect-[5/4]"
							width={600}
							height={480}
						/>
					</div>

					<div className="flex-1/2 flex flex-col justify-center space-y-8">
						<h4 className="text-5xl font-bold">
							العياصرة يكشف تفاصيل قضية "مؤتة العسكري" ومحاولة
							اغتيال الراحل الحسين
						</h4>

						<p className="text-xl font-light">
							كشف عضو مجلس الأعيان عمر العياصرة تفاصيل ما يُعرف
							بـ"قضية مؤتة العسكري"، التي تعود إلى عام 1993، حين
							خططت مجموعة من طلبة جامعة مؤتة/ الجناح العسكري،
							لمحاولة اغتيال الملك الراحل الحسين بن طلال.
						</p>
					</div>
				</div>

				<div className="flex flex-row-reverse gap-4 ">
					<div className="relative flex-1/2 ">
						<Image
							// fill
							unoptimized
							src={"https://placehold.co/600x480"}
							alt="Video"
							className="rounded-lg aspect-[5/4] me-0 ms-auto"
							width={600}
							height={480}
						/>
					</div>

					<div className="flex-1/2 space-y-8 flex flex-col justify-center">
						<h4 className="text-5xl font-bold">
							العياصرة يكشف تفاصيل قضية "مؤتة العسكري" ومحاولة
							اغتيال الراحل الحسين
						</h4>

						<p className="text-xl font-light">
							كشف عضو مجلس الأعيان عمر العياصرة تفاصيل ما يُعرف
							بـ"قضية مؤتة العسكري"، التي تعود إلى عام 1993، حين
							خططت مجموعة من طلبة جامعة مؤتة/ الجناح العسكري،
							لمحاولة اغتيال الملك الراحل الحسين بن طلال.
						</p>
					</div>
				</div>
			</Container>

			<Container>
				<AdBannerGrid />
			</Container>

			<Container fluid className="bg-[#7575A90D] py-4 my-10">
				<Container>
					<div className="flex">
						<div className="flex-2/3">
							<div className="space-y-8">
								{[1, 2, 3].map((item) => (
									<Link
										href={"/"}
										className="grid grid-cols-3 gap-4"
										key={item}
									>
										<div className="col-span-1  relative aspect-[3/2]">
											<Image
												fill
												className="shadow-lg rounded-lg object-cover"
												src="/video_holder_image.png"
												alt="Sunset in the mountains"
											/>
										</div>
										<div className="col-span-2 space-y-4">
											<h5 className="text-xl font-bold">
												فيديو متداول لأشخاص "يغششون"
												طلبة "توجيهي" خلال عقد الامتحان
											</h5>
											<p>
												شهدت ملفات الفساد التي تعاملت
												معها هيئة النزاهة ومكافحة الفساد
												خلال الشهور الماضية من العام
												الحالي 2025 تسجيل 46 قضية بحق
												رؤساء وأعضاء مجالس بلدية في
												المملكة، وتمت إحالتها جميعها إلى
												القضاء لإجراء المقتضى القانوني.
											</p>
										</div>
									</Link>
								))}
							</div>
						</div>

						<div className="flex-1/3">
							<div className="space-y-8">
								<Ad300x250 />
								<Ad300x250 />
								<Ad300x250 />
							</div>
						</div>
					</div>
				</Container>
			</Container>
		</div>
	);
};

export default PodcastsPage;
