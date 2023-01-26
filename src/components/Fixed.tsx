import { useState } from "react";

interface FixedPromisesProps {
	action: () => Promise<void>;
	children: React.ReactNode;
}

function runSafely(
	action: () => Promise<void>,
	onError: (error: unknown) => void
) {
	return () => {
		action().catch(onError);
	};
}

export function FixedPromises({ action, children }: FixedPromisesProps) {
	const [error, setError] = useState<unknown>();
	const [running, setRunning] = useState(false);

	const onClick = runSafely(
		async () => {
			setRunning(true);
			await action();
			setRunning(false);
		},
		(caughtError) => {
			setError(caughtError);
			setRunning(false);
		}
	);

	return (
		<>
			<button disabled={running} onClick={onClick}>
				{children}
			</button>
			<span aria-live="assertive">{error ? String(error) : null}</span>
		</>
	);
}
