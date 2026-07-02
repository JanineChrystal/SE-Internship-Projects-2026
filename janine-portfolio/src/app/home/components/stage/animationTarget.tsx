"use client";
import { useStage } from "@/src/app/home/contexts/stageContext";

const AnimTarget = ({
	id,
	className,
	children,
}: {
	id: string;
	className?: string;
	children?: React.ReactNode;
}) => {
	const { register } = useStage();
	return (
		<div ref={register(id)} className={className}>
			{children}
		</div>
	);
};

export default AnimTarget;
