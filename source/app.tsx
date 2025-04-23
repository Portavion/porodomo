import React, {useEffect, useState} from 'react';
import {Text, useApp, useStdout} from 'ink';

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
			<Text>
				{`

▗▄▄▖  ▄▄▄   ▄▄▄ ▄▄▄     ▐▌ ▄▄▄  ▄▄▄▄   ▄▄▄
▐▌ ▐▌█   █ █   █   █    ▐▌█   █ █ █ █ █   █
▐▛▀▘ ▀▄▄▄▀ █   ▀▄▄▄▀ ▗▞▀▜▌▀▄▄▄▀ █   █ ▀▄▄▄▀
▐▌                   ▝▚▄▟▌

`}
			</Text>
			<Text>
				Timer{' '}
				<Text color="green">
					{Math.floor(counter)}/{length * 60}
				</Text>{' '}
				seconds timer
			</Text>
		</>
	);
}
