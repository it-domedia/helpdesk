"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 🎯 تعريف مخطط التحقق باستخدام Zod
const ContactSchema = z.object({
    name: z.string().min(2, { message: "الاسم قصير جداً" }),
    email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
    message: z.string().min(10, { message: "الرسالة قصيرة جداً" }),
});

// ⛳️ تحديد نوع البيانات تلقائياً
type ContactFormData = z.infer<typeof ContactSchema>;

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<ContactFormData>({
        resolver: zodResolver(ContactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        console.log("✅ البيانات:", data);

        // هنا ممكن تبعتها لـ API/Supabase
        await new Promise((res) => setTimeout(res, 1000)); // تمثيل تأخير
        reset(); // إعادة تعيين الفورم
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* الاسم */}
            <div>
                <label className="block mb-1 font-medium">الاسم</label>
                <input
                    {...register("name")}
                    placeholder="اسمك"
                    className="w-full p-2 border rounded"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
            </div>

            {/* البريد */}
            <div>
                <label className="block mb-1 font-medium">البريد الإلكتروني</label>
                <input
                    {...register("email")}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full p-2 border rounded"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
            </div>

            {/* الرسالة */}
            <div>
                <label className="block mb-1 font-medium">الرسالة</label>
                <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="اكتب رسالتك هنا"
                    className="w-full p-2 border rounded"
                />
                {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
            </div>

            {/* زر الإرسال */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-60"
            >
                {isSubmitting ? "جاري الإرسال..." : "إرسال"}
            </button>

            {/* نجاح */}
            {isSubmitSuccessful && (
                <p className="text-green-600 text-sm mt-2">✅ تم إرسال الرسالة بنجاح!</p>
            )}
        </form>
    );
}
