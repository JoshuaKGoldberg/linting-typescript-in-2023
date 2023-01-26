import { useState } from "react";

interface NoFloatingPromisesProps {
	action: () => Promise<void>;
	children: React.ReactNode;
}

export function NoFloatingPromises({
	action,
	children,
}: NoFloatingPromisesProps) {
	const [running, setRunning] = useState(false);

	const onClick = () => {
		setRunning(true);
		action();
		setRunning(false);
	};

	return (
		<button disabled={running} onClick={onClick}>
			{children}
		</button>
	);
}
