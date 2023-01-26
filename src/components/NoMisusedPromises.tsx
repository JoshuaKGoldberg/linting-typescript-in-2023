import { useState } from "react";

interface NoMisusedPromisesProps {
	action: () => Promise<void>;
	children: React.ReactNode;
}

export function NoMisusedPromises({
	action,
	children,
}: NoMisusedPromisesProps) {
	const [running, setRunning] = useState(false);

	const onClick = async () => {
		setRunning(true);
		await action();
		setRunning(false);
	};

	return (
		<button disabled={running} onClick={onClick}>
			{children}
		</button>
	);
}
