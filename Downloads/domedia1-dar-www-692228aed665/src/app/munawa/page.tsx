import React, { Fragment } from "react";
import Container from "../components/Container";
import Titles from "../components/Titles";
import Image from "next/image";
import Link from "next/link";
import Ad300x250 from "../components/Ad300x250";

const MunawaPage = () => {
	return (
		<div className="my-10">
			<Container className="my-6">
				<Titles.Title text="الأخــبــار" className="text-center my-6" />

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

						<div className="flex-2/3">
							<div className="grid grid-cols-2 gap-8">
								{[1, 2, 3, 4].map((item) => (
									<Fragment key={item}>
										{item === 2 ? (
											<Ad300x250
												key={item}
												className="border-b border-[#D9D9D9]"
											/>
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
															الفنان عمر
															العبداللات نجم
															إفتتاح مهرجان جرش
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
			</Container>

			{/* Trend Section */}
			<Container id="trend-section" fluid className="bg-[#7575A90D] py-4">
				<Container>
					<Titles.Title text="ترند" className="text-center my-6" />

					<div className="flex flex-col gap-18 mt-12">
						<div className="flex border-b border-[#D9D9D9] pb-8">
							<div className="flex-2/3 space-y-6">
								<h4 className="font-bold text-xl">
									هل شرب الماء البارد يساعدك على حرق الدهون؟
								</h4>
								<p className="text-base font-light">
									كشف الدكتور ويليام لي، الطبيب والباحث
									والمؤلف المتدرب في جامعة، إلى أن شرب الماء
									البارد يُسهم في إنقاص الوزن من خلال زيادة
									حرق السعرات الحرارية بشكل طفيف أثناء الهضم،
									حيث يُسخّن الجسم الماء ليصل إلى درجة حرارته.
								</p>
							</div>
							<div className="flex-1/3">
								<Image
									unoptimized
									className="w-full shadow-lg rounded-lg"
									src="https://placehold.co/470x200"
									width={470}
									height={200}
									alt="Sunset in the mountains"
								/>
							</div>
						</div>
						<div className="flex border-b border-[#D9D9D9] pb-8">
							<div className="flex-2/3 space-y-6">
								<h4 className="font-bold text-xl">
									هل شرب الماء البارد يساعدك على حرق الدهون؟
								</h4>
								<p className="text-base font-light">
									كشف الدكتور ويليام لي، الطبيب والباحث
									والمؤلف المتدرب في جامعة، إلى أن شرب الماء
									البارد يُسهم في إنقاص الوزن من خلال زيادة
									حرق السعرات الحرارية بشكل طفيف أثناء الهضم،
									حيث يُسخّن الجسم الماء ليصل إلى درجة حرارته.
								</p>
							</div>
							<div className="flex-1/3">
								<Image
									unoptimized
									className="w-full shadow-lg rounded-lg"
									src="https://placehold.co/470x200"
									width={470}
									height={200}
									alt="Sunset in the mountains"
								/>
							</div>
						</div>
					</div>
				</Container>
			</Container>

			{/* Health section */}
			<Container id="health-section">
				<Titles.Title text="الصحة" className="text-center my-6" />

				<div className="grid grid-cols-5 gap-12 mt-24">
					{[1, 2, 3, 4, 5].map((item) => (
						<Link
							href={"/"}
							className="col-span-1 rounded-lg "
							key={item}
						>
							<div className="space-y-4  pb-4">
								<div className="relative w-[250px] h-[200px]">
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
						</Link>
					))}
				</div>
			</Container>

			{/* Technology section */}
			<Container
				id="technology-section"
				fluid
				className="bg-[#7575A90D] py-4 my-10"
			>
				<Container className="my-6">
					<Titles.Title
						text="التكنولوجيا"
						className="text-center my-6"
					/>

					<section className="my-10">
						<div className="flex gap-8">
							<Link
								href={"/"}
								className="flex-1/3 overflow-hidden "
							>
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
											الفنان عمر العبداللات نجم إفتتاح
											مهرجان جرش 2025
										</div>
										<p className="text-gray-700 text-base">
											إختارت إدارة "مهرجان جرش للثقافة
											والفنون"، "صوت الأردن" الفنان عمر
											العبداللات، ليكون نجم حفل افتتاح
											دورة المهرجان التاسعة والثلاثين،
											وذلك يوم الأربعاء 23/7/2025، والذي
											يقام هذا العام من تحت شعار: "هنا
											الأردن .. ومجده مستمر".
										</p>
									</div>
								</div>
							</Link>

							<div className="flex-2/3">
								<div className="grid grid-cols-2 gap-8">
									{[1, 2, 3].map((item) => (
										<Fragment key={item}>
											{item === 2 ? (
												<Ad300x250
													key={item}
													className="border-b border-[#D9D9D9]"
												/>
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
																الفنان عمر
																العبداللات نجم
																إفتتاح مهرجان
																جرش 2025 {item}
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
				</Container>
			</Container>

			{/* Munasbat  */}
			<Container id="munasabat-section">
				<Titles.Title text="مناسبات" className="text-center my-6" />

				<div className="flex">
					<div className="flex-2/3 overflow-hidden">
						<div className="space-y-8">
							<div>
								<Titles.H3
									text="تهاني"
									className="text-start mb-8 font-bold"
								/>
								<div className="grid grid-cols-3 gap-6">
									{[1, 2, 3].map((item) => (
										<Link
											href={"/"}
											className="col-span-1 rounded-lg "
											key={item}
										>
											<div className="space-y-4  pb-4">
												<div className="relative w-full h-[200px]">
													<Image
														fill
														className="shadow-lg rounded-lg object-cover "
														src="/video_holder_image.png"
														alt="Sunset in the mountains"
													/>
												</div>
												<h5 className="text-xl font-bold">
													فيديو متداول لأشخاص "يغششون"
													طلبة "توجيهي" خلال عقد
													الامتحان
												</h5>
											</div>
										</Link>
									))}
								</div>
							</div>

							<div>
								<Titles.H3
									text="وفيات"
									className="text-start mb-8 font-bold"
								/>
								<div className="grid grid-cols-3 gap-6">
									{[1, 2, 3].map((item) => (
										<Link
											href={"/"}
											className="col-span-1 rounded-lg "
											key={item}
										>
											<div className="space-y-4  pb-4">
												<div className="relative w-full h-[200px]">
													<Image
														fill
														className="shadow-lg rounded-lg object-cover "
														src="/video_holder_image.png"
														alt="Sunset in the mountains"
													/>
												</div>
												<h5 className="text-xl font-bold">
													فيديو متداول لأشخاص "يغششون"
													طلبة "توجيهي" خلال عقد
													الامتحان
												</h5>
											</div>
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="flex-1/3 overflow-hidden space-y-6">
						<Ad300x250 />
						<Ad300x250 />
						<Ad300x250 />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default MunawaPage;
