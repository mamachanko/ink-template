import {App} from './app';
import chalk from 'chalk';
import dedent from 'dedent-tabs';
import {render} from 'ink-testing-library';
import * as React from 'react';

describe('App', () => {
    it('says hello', () => {
        const {lastFrame} = render(<App/>);

        expect(lastFrame()).toEqual(dedent`
            Hello, world!

            This is ${chalk.italic('Ink')} 🌈.
        `)
    });
});
