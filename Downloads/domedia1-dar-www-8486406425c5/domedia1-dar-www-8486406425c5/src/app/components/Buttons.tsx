import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps {
	text: string | React.ReactNode;
	className?: string;
	href: string | "/";
}

type LoadMoreProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Buttons = {
	ReadMore: ({ text, href = "/", className = "" }: ButtonProps) => (
		<Link
			href={href}
			className={twMerge(
				"text-white bg-black text-xl font-normal px-20 py-1 rounded-lg hover:bg-gray-800 transition-colors duration-300 hover:underline",
				className
			)}
		>
			{text}
		</Link>
	),

	LoadMore: (props: LoadMoreProps) => (
		<button
			type="button"
			className="text-white bg-black text-xl font-normal px-20 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 hover:underline cursor-pointer text-nowrap"
			{...props}
		>
			عرض المزيد
		</button>
	),
};

export default Buttons;
