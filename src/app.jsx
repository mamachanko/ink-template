import {Box, Text, render} from 'ink';
import * as React from 'react';

export const App = () => (
	<Box flexDirection='column'>
		<Box marginBottom={1}>
			Hello, world! 
		</Box>
		<Box>
			This is <Text italic>Ink</Text> 🌈.
		</Box>
	</Box>
);
