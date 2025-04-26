import React, {useEffect, useState} from 'react';
import {Text, useApp, useStdout} from 'ink';
import AsciiArt from './components/AsciiArt.js';
import {ProgressBar} from '@inkjs/ui';

type Props = {
	length: number | undefined;
};

export default function App({length = 25}: Props) {
	const [counter, setCounter] = useState(0);
	const {stdout} = useStdout();
	const {exit} = useApp();

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter(counter + 1);
		}, 1000);

		if (counter / 60 >= length) {
			stdout.write('Timer finished');
			exit();
		}
		return () => {
			clearInterval(timer);
		};
	});

	return (
		<>
			<AsciiArt />
			<Text>
				<Text color="green">{length} minutes</Text> timer started.
			</Text>
			<Text>
				<Text color="red">
					{Math.floor((length * 60 - counter) / 60)}:
					{Math.round(length * 60 - counter) % 60}
				</Text>{' '}
				remaining
			</Text>
			<ProgressBar value={Math.round((100 * counter) / 60 / length)} />
		</>
	);
}
