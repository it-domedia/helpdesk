import React from "react";
import Container from "../components/Container";
import Titles from "../components/Titles";
import Image from "next/image";
import Link from "next/link";
import AdBannerGrid from "../components/ads/AdBannerGrid";
import Ad300x250 from "../components/Ad300x250";

const ArticlesPage = () => {
	return (
		<div>
			<Container>
				<Titles.Title text="مـقـالات" className="text-center my-12" />

				<div className="flex gap-8">
					<div className="flex-1/2">
						<Link
							href={"/"}
							className="flex flex-col items-center justify-center w-xl  mx-auto"
						>
							<div className="relative w-full  aspect-[5/4]">
								<Image
									fill
									unoptimized
									src={"https://placehold.co/434x329"}
									alt="Video"
									className="rounded-lg"
									// width={434}
									// height={329}
								/>
							</div>

							<div className="space-y-8">
								<h4 className="text-2xl font-bold">
									بلدياتنا على طريق التحديث.. بين صوت الناس
									وصدى المركز
								</h4>

								<p className="font-light text-2xl">
									في خضم الحديث الوطني عن مسارات التحديث
									الشاملة، من سياسية واقتصادية وإدارية، يتجدد
									في الأردن نقاش محوري حول الدور الحقيقي
									للبلديات. هذه المؤسسات، التي تمثل نبض الشارع
									ونقطة التماس الأقرب للمواطن، هي المحرك
									الأساسي لأي تنمية مستدامة.
								</p>
							</div>
						</Link>
					</div>

					<div className="flex-1/2">
						<Link
							href={"/"}
							className="flex flex-col items-center justify-center w-xl  mx-auto"
						>
							<div className="relative w-full  aspect-[5/4]">
								<Image
									fill
									unoptimized
									src={"https://placehold.co/434x329"}
									alt="Video"
									className="rounded-lg"
									// width={434}
									// height={329}
								/>
							</div>

							<div className="space-y-8">
								<h4 className="text-2xl font-bold">
									بلدياتنا على طريق التحديث.. بين صوت الناس
									وصدى المركز
								</h4>

								<p className="font-light text-2xl">
									في خضم الحديث الوطني عن مسارات التحديث
									الشاملة، من سياسية واقتصادية وإدارية، يتجدد
									في الأردن نقاش محوري حول الدور الحقيقي
									للبلديات. هذه المؤسسات، التي تمثل نبض الشارع
									ونقطة التماس الأقرب للمواطن، هي المحرك
									الأساسي لأي تنمية مستدامة.
								</p>
							</div>
						</Link>
					</div>
				</div>

				<AdBannerGrid />

				<div className="flex justify-end my-12">
					<div className="space-y-8">
						<Ad300x250 />
						<Ad300x250 />
						<Ad300x250 />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default ArticlesPage;
