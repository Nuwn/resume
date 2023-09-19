// screenMode.ts

import { writable } from 'svelte/store';

export interface ScreenMode
{
    name: string; // A descriptive name for the screen mode
    maxWidth: number; // The maximum width for this screen mode
}

const defaultScreenMode: ScreenMode = {
    name: 'desktop',
    maxWidth: 9999, // Set to a high value for default
};

// Define your screen modes as an array of objects
const screenModes: ScreenMode[] = [
    {
        name: 'mobile',
        maxWidth: 768,
    },
    {
        name: 'desktop',
        maxWidth: 1200,
    }
];

export const screenMode = writable<ScreenMode>(defaultScreenMode);

// Create a function to set the screen mode
export function updateScreenMode()
{
    for (const mode of screenModes)
    {
        if (window.innerWidth <= mode.maxWidth)
        {
            screenMode.set(mode);
            break;
        }
    }

}
