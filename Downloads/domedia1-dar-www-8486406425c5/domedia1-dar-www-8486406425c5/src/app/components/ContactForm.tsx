"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Cairo } from "next/font/google";

const cairo = Cairo({
    subsets: ["arabic"],
    weight: ["300", "400", "900"],
});

const schema = z.object({
    name: z.string().min(2, "الاسم مطلوب"),
    email: z.string().email("البريد الإلكتروني غير صالح"),
    subject: z.string().min(2, "الموضوع مطلوب"),
    message: z.string().min(10, "الرسالة يجب أن تكون أطول من 10 أحرف").max(1000),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
    const [messageLength, setMessageLength] = useState(0);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        console.log("✅ البيانات:", data);
        await new Promise((res) => setTimeout(res, 500)); // محاكاة إرسال
        reset();
        setMessageLength(0);
    };

    return (
        <div
            className={`${cairo.className} bg-white w-full max-w-[960px] mx-auto p-6 sm:p-4`}
            dir="rtl"
        >
            <div className="bg-[#e4e4ee11] rounded-[10px] p-6 mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black text-right mb-2">
                    للتواصل
                </h2>
                <p className="text-base font-normal text-black text-right mb-6">
                    للاستفسارات، تعبئة الاستمارة أدناه:
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* الاسم */}
                    <label className="block text-lg sm:text-xl font-extrabold text-black text-right mb-1">
                        الاسم <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("name")}
                        type="text"
                        className="rounded-[10px] bg-[#D9D9D9] px-3 h-11 w-full mb-6"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mb-4">{errors.name.message}</p>
                    )}

                    {/* البريد الإلكتروني */}
                    <label className="block text-lg sm:text-xl font-extrabold text-black text-right mb-1">
                        البريد الإلكتروني <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("email")}
                        type="email"
                        className="rounded-[10px] bg-[#D9D9D9] px-3 h-11 w-full mb-6"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mb-4">{errors.email.message}</p>
                    )}

                    {/* الموضوع */}
                    <label className="block text-lg sm:text-xl font-extrabold text-black text-right mb-1">
                        الموضوع <span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("subject")}
                        type="text"
                        className="rounded-[10px] bg-[#D9D9D9] px-3 h-11 w-full mb-6"
                    />
                    {errors.subject && (
                        <p className="text-red-500 text-sm mb-4">{errors.subject.message}</p>
                    )}

                    {/* الرسالة */}
                    <label className="block text-lg sm:text-xl font-extrabold text-black text-right mb-1">
                        الرسالة <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        {...register("message")}
                        className="rounded-[10px] bg-[#D9D9D9] px-3 py-2 resize-none w-full mb-1"
                        rows={6}
                        maxLength={1000}
                        onChange={(e) => setMessageLength(e.target.value.length)}
                        placeholder="محتوى محدود إلى 1000 حرف"
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-500 text-sm mb-1">{errors.message.message}</p>
                    )}
                    <p className="text-sm font-light text-black/50 text-right mb-6">
                        {messageLength} / 1000
                    </p>

                    {/* زر الإرسال */}
                    <div className="flex justify-end mt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#5A6883] text-white text-sm rounded-[10px] px-6 py-2 disabled:opacity-50"
                        >
                            {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                        </button>
                    </div>
                </form>

                {isSubmitSuccessful && (
                    <p className="text-green-600 text-sm text-right mt-4">
                        ✅ تم إرسال الرسالة بنجاح
                    </p>
                )}
            </div>
        </div>
    );
}
