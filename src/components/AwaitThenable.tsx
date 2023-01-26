import { useState } from "react";

interface AwaitThenableProps {
	action: () => void;
	children: React.ReactNode;
}

export function AwaitThenable({ action, children }: AwaitThenableProps) {
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
