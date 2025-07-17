import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
	text: string | React.ReactNode;
	className?: string;
	href: string | "/";
}

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
};

export default Buttons;
