import React from "react";
import Container from "../components/Container";
import Titles from "../components/Titles";
import Image from "next/image";
import Link from "next/link";
import AdBannerGrid from "../components/ads/AdBannerGrid";
import Ad300x250 from "../components/Ad300x250";

const ArticlesPage = () => {
	return (
		<div dir="rtl" className="bg-white space-y-16 mb-20" >
			<Container>
				<Titles.Title text="مـقـالات" className="text-center my-12" />

				<div className="space-y-12 mb-20">
					{/* مقالة 1 */}
					<div className="flex flex-col md:flex-row-reverse gap-6 items-center border border-gray-300 rounded-lg p-6"
						dir="rtl">
						{/* النص */}
						<div className="md:w-1/2 w-full flex flex-col justify-center space-y-6">
							<h4 className="text-2xl font-bold">
								بلدياتنا على طريق التحديث.. بين صوت الناس وصدى المركز
							</h4>
							<p className="font-light text-2xl">
								في خضم الحديث الوطني عن مسارات التحديث الشاملة، من سياسية واقتصادية وإدارية، يتجدد
								في الأردن نقاش محوري حول الدور الحقيقي للبلديات...
							</p>
						</div>

						{/* الصورة */}
						<div className="md:w-1/2 w-full">
							<div className="relative w-full aspect-[5/4]">
								<Image
									fill
									unoptimized
									src={"/332.png"}
									alt="صورة المقال"
									className="rounded-lg"
								/>
							</div>
						</div>
					</div>

					{/* مقالة 2 - انسخ وكرر بنفس الشكل مع محتوى جديد */}

					<div className="flex flex-col md:flex-row-reverse gap-6 items-center border border-gray-300 rounded-lg p-6"
						dir="rtl">
						{/* النص */}
						<div className="md:w-1/2 w-full flex flex-col justify-center space-y-6">
							<h4 className="text-2xl font-bold">
								بلدياتنا على طريق التحديث.. بين صوت الناس وصدى المركز
							</h4>
							<p className="font-light text-2xl">
								في خضم الحديث الوطني عن مسارات التحديث الشاملة، من سياسية واقتصادية وإدارية، يتجدد
								في الأردن نقاش محوري حول الدور الحقيقي للبلديات...
							</p>
						</div>

						{/* الصورة */}
						<div className="md:w-1/2 w-full">
							<div className="relative w-full aspect-[5/4]">
								<Image
									fill
									unoptimized
									src={"/74.png"}
									alt="صورة المقال"
									className="rounded-lg"
								/>
							</div>
						</div>
					</div>
				</div>




				<AdBannerGrid />

				<div className="flex flex-col lg:flex-row gap-8 my-12">

					{/* المقالات المصغرة */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">

						{/* بطاقة مقال */}
						{/* <div className="space-y-2">
							<img src="/159.png" alt="مقال" className="w-full h-[255px] object-cover rounded-[10px] shadow-md" />
							<h3 className="font-bold text-right text-lg leading-9 text-black">
								بين الأهازيج والإنجاز.. قراءة في أداء رجال الدولة
							</h3>
							<p className="text-right text-sm text-black font-light">
								بقلم: د. أحمد عبدالباسط الرجوب
							</p>
						</div> */}

						{/* مقال ثاني */}
						{/* <div className="space-y-2">
							<img src="/158.png" alt="مقال" className="w-full h-[255px] object-cover rounded-[10px] shadow-md" />
							<h3 className="font-bold text-right text-lg leading-9 text-black">
								الجامعة في مرآة التصنيف: نزاهة ضائعة أم قيمة مضافة؟
							</h3>
							<p className="text-right text-sm text-black font-light">
								بقلم: أحمد طناش شطناوي
							</p>
						</div> */}

						{/* تابع باقي المقالات بنفس الطريقة مع تغيير الصورة والنصوص */}

					</div>

					{/* الإعلانات */}
					<div className="grid grid-cols-3 gap-6 my-12 font-light text-2xl break-words">
						{/* شبكة المقالات (2 أعمدة من 3) */}
						<div className="font-light text-2xl break-words col-span-2 grid grid-cols-2 gap-6">
							{[
								{
									image: "/334.png",
									title: "بين الأهازيج والإنجاز.. قراءة في أداء رجال الدولة",
									author: "بقلم: د. أحمد عبدالباسط الرجوب",
								},
								{
									image: "/334.png",
									title: "الجامعة في مرآة التصنيف: نزاهة ضائعة أم قيمة مضافة؟",
									author: "بقلم: أحمد طناش شطناوي",
								},
								{
									image: "/334.png",
									title: "هل يمكن أن تكون امريكا كفيل الدفا الموثوق؟",
									author: "بقلم: الدكتور حسن البراري",
								},
								{
									image: "/334.png",
									title: "بين النزاهة والتشهير.. هل خدم الوزير الجامعات الأردنية أم أساء إليها؟",
									author: "بقلم: أ.د. تركي الفواز ",
								},
								{
									image: "/334.png",
									title: "زيادين يكتب: نريد معرفة من لا يعترف بالقانون",
									author: "بقلم: قيس زيادين",
								},
								{
									image: "/334.png",
									title: "حماية المهنة واجبة.. لكن حرية الصحافة أولًا",
									author: "بقلم: عبدالله المبيضين",
								},
							].map((article, index) => (
								<div key={index} className="space-y-2 text-right">
									<img
										src={article.image}
										alt={article.title}
										className="w-full h-[250px] object-cover rounded-lg shadow"
									/>
									<h2 className="text-base font-bold leading-snug">{article.title}</h2>
									<p className="text-sm text-gray-700">{article.author}</p>
								</div>
							))}
						</div>

						{/* عمود الإعلانات (1 عمود من 3) */}
						<div className="flex flex-col items-end space-y-6">
							<Ad300x250 srcIndex={0} />
							<Ad300x250 srcIndex={1} />
							<Ad300x250 srcIndex={2} />
						</div>
					</div>



				</div>


			</Container>
		</div>
	);
};

export default ArticlesPage;
