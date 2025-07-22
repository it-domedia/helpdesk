import { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
	fluid?: boolean;
	className?: string;
	id?: string;
}

export default function Container({
	children,
	fluid = false,
	className = "",
	id,
}: ContainerProps) {
	const baseClass = fluid ? "w-full px-4" : "max-w-screen-2xl mx-auto px-4";
	return (
		<div id={id} className={`${baseClass} ${className}`}>
			{children}
		</div>
	);
}
