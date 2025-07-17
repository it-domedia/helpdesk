import { useState } from "react";
import { Cairo } from "next/font/google";

const cairo = Cairo({
    subsets: ["arabic"],
    weight: ["300", "400", "900"],
});

const ContactForm = () => {
    const [message, setMessage] = useState("");

    const maxLength = 1000;

    return (
        <div className={`${cairo.className} bg-white max-w-[960px] mx-auto p-6`} dir="rtl">
            <div className="bg-[#e4e4ee11] rounded-[10px] p-6 mb-25">
                <h2 className="text-3xl font-extrabold text-black text-right mb-2">للتواصل</h2>
                <p className="text-base font-normal text-black text-right mb-6">
                    للاستفسارات، تعبئة الاستمارة أدناه:
                </p>

                {/* الاسم */}
                <label className="block text-xl font-extrabold text-black text-right mb-1">
                    الاسم <span className="text-red-500">*</span>
                </label>
                <input type="text" className="rounded-[10px] bg-[#D9D9D9] px-3 h-11 w-full mb-6" />

                {/* البريد الإلكتروني */}
                <label className="block text-xl font-extrabold text-black text-right mb-1">
                    البريد الإلكتروني <span className="text-red-500">*</span>
                </label>
                <input type="email" className="rounded-[10px] bg-[#D9D9D9] px-3 h-11 w-full mb-6" />

                {/* الموضوع */}
                <label className="block text-xl font-extrabold text-black text-right mb-1">
                    الموضوع <span className="text-red-500">*</span>
                </label>
                <input type="text" className="rounded-[10px] bg-[#D9D9D9] px-3 h-11 w-full mb-6" />

                {/* الرسالة */}
                <label className="block text-xl font-extrabold text-black text-right mb-1">
                    الرسالة <span className="text-red-500">*</span>
                </label>
                <textarea
                    className="rounded-[10px] bg-[#D9D9D9] px-3 py-2 resize-none w-full mb-1"
                    rows={6}
                    maxLength={maxLength}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="محتوى محدود إلى 1000 حرف"
                ></textarea>
                <p className="text-sm font-light text-black/50 text-right mb-6">
                    {message.length} / {maxLength}
                </p>

                {/* رفع المرفقات */}
                <label className="block text-xl font-extrabold text-black text-right mb-1">
                    رفع المرفقات اختياري
                </label>
                <label className="block relative cursor-pointer rounded-[10px] bg-[#D9D9D9] h-[45px] mb-2 text-right px-4 flex items-center justify-between rounded-sm ">
                    <span className="text-black">اختر ملف</span>
                    <input
                        type="file"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        accept=".png,.jpeg,.jpg,.gif,.pdf"
                    />
                </label>
                <p className="text-xs text-right text-gray-600 mb-6">
                    يجب أن تكون صيغة الملفات
                    <span className="font-semibold text-black"> .png, .jpeg, .jpg, .gif أو .pdf </span>
                    والحجم أقل من
                    <span className="font-semibold text-black"> 5 ميجابايت</span>
                </p>

                <button className="bg-[#5A6883] text-white text-sm rounded-[10px] px-6 py-2 float-right mt-4">
                    إرسال الرسالة
                </button>
            </div>
        </div>
    );
};

export default function ContactPage() {
    return <ContactForm />;
}
