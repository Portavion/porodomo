#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
	Usage
	  $ porodomo

	Options
		--length  Timer length in minutes

	Examples
	  $ porodomo --length=5
	  Starting a 5 min timer
`,
	{
		importMeta: import.meta,
		flags: {
			length: {
				type: 'number',
			},
		},
	},
);

render(<App length={cli.flags.length} />);
