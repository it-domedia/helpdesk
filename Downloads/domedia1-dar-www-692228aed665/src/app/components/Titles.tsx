import { twMerge } from "tailwind-merge";
interface TitleProps {
	text: string | React.ReactNode;
	className?: string;
}

const Titles = {
	Title: ({ text, className = "" }: TitleProps) => (
		<h1
			className={twMerge("font-extrabold text-5xl text-black", className)}
		>
			{text}
		</h1>
	),
	H1: ({ text, className = "" }: TitleProps) => (
		<h1
			className={twMerge("font-semibold capitalize  text-5xl", className)}
		>
			{text}
		</h1>
	),
	H2: ({ text, className = "" }: TitleProps) => (
		<h2
			className={twMerge(
				"font-extrabold  lg:font-extrabold capitalize text-4xl lg:text-5xl",
				className
			)}
		>
			{text}
		</h2>
	),
	H3: ({ text, className = "" }: TitleProps) => (
		<h3
			className={twMerge(
				"font-semibold capitalize  lg:text-4xl",
				className
			)}
		>
			{text}
		</h3>
	),
	H4: ({ text, className = "" }: TitleProps) => (
		<h4 className={twMerge("font-bold capitalize  text-4xl", className)}>
			{text}
		</h4>
	),
	H5: ({ text, className = "" }: TitleProps) => (
		<h5
			className={twMerge("font-semibold capitalize  text-2xl", className)}
		>
			{text}
		</h5>
	),
	H6: ({ text, className = "" }: TitleProps) => (
		<h6
			className={twMerge(
				"font-semibold capitalize  text-[1rem]",
				className
			)}
		>
			{text}
		</h6>
	),
	H7: ({ text, className = "" }: TitleProps) => (
		<h6 className={twMerge("font-medium capitalize  text-sm", className)}>
			{text}
		</h6>
	),
	H8: ({ text, className = "" }: TitleProps) => (
		<h6 className={twMerge("font-normal capitalize  text-sm", className)}>
			{text}
		</h6>
	),
	H9: ({ text, className = "" }: TitleProps) => (
		<h6
			className={twMerge(
				"font-normal capitalize  text-[1rem]",
				className
			)}
		>
			{text}
		</h6>
	),
	H10: ({ text, className = "" }: TitleProps) => (
		<h6 className={twMerge("font-semibold capitalize  text-sm", className)}>
			{text}
		</h6>
	),
};

export default Titles;
