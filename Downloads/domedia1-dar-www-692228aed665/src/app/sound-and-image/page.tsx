import React from "react";
import Container from "../components/Container";
import Titles from "../components/Titles";
import Image from "next/image";
import Link from "next/link";
import AdBannerGrid from "../components/ads/AdBannerGrid";
import Ad300x250 from "../components/Ad300x250";

const Card = ({ number = 1 }: { number: number }) => {
	return (
		<div className="max-w-5xl flex p-4">
			<div className="flex-1/5 flex items-center justify-start ">
				<span className="font-extrabold text-5xl inline-block align-middle ">
					{number}
				</span>
			</div>

			<Link href="/" className="flex-4/5 flex space-x-6">
				<Image
					unoptimized
					className="rounded-lg"
					src="https://placehold.co/250x285"
					width={250}
					height={285}
					alt="Sunset in the mountains"
				/>
				<div className="space-y-4">
					<h5 className="text-xl font-bold">
						فيديو متداول لأشخاص "يغششون" طلبة "توجيهي" خلال عقد
						الامتحان
					</h5>
					<p className="font-light text-base">
						شهدت ملفات الفساد التي تعاملت معها هيئة النزاهة ومكافحة
						الفساد خلال الشهور الماضية من العام الحالي 2025 تسجيل 46
						قضية بحق رؤساء وأعضاء مجالس بلدية في المملكة، وتمت
						إحالتها جميعها إلى القضاء لإجراء المقتضى القانوني.
					</p>
				</div>
			</Link>
		</div>
	);
};

const SoundAndImagePage = () => {
	return (
		<div className="my-10">
			<Container>
				<Titles.Title
					text="بالصوت والصورة"
					className="text-center my-6"
				/>

				<section className="flex flex-col gap-8 my-12">
					{[1, 2, 3].map((item) => (
						<Card key={item} number={item} />
					))}
				</section>

				<AdBannerGrid />
			</Container>

			<Container fluid className="bg-[#7575A90D] py-4 my-10">
				<Container>
					<div className="flex">
						<div className="flex-2/3">
							<section className="flex flex-col gap-8 my-12">
								{[4, 5, 6, 7].map((item) => (
									<Card key={item} number={item} />
								))}
							</section>
						</div>

						<div className="flex-1/3 space-y-6">
							<Ad300x250 />
							<Ad300x250 />
							<Ad300x250 />
							<Ad300x250 />
						</div>
					</div>
				</Container>
			</Container>
		</div>
	);
};

export default SoundAndImagePage;
