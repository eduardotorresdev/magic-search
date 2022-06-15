import {useEffect, useState} from 'preact/hooks';

const MAX_FONT_SIZE = 16 * 1.25; // DEFAULT_FONT_SIZE + 25%
const DEFAULT_FONT_SIZE = 16;
const MIN_FONT_SIZE = 16 * 0.75; // DEFAULT_FONT_SIZE - 25%
const INCREMENT = 5; // PERCENTAGE

export const useFontSize = () => {
    const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
    const [canIncrement, setCanIncrement] = useState(true);
    const [canDecrement, setCanDecrement] = useState(true);
    const [percentage, setPercentage] = useState(100);

    const increment = () => {
        setFontSize(fontSize => {
            if(fontSize >= MAX_FONT_SIZE) return fontSize;

            setPercentage(percentage + INCREMENT);
            return fontSize * (1 + INCREMENT / 100);
        });
    }

    const decrement = () => {
        setFontSize(fontSize => {
            if(fontSize <= MIN_FONT_SIZE) return fontSize;

            setPercentage(percentage - INCREMENT);
            return fontSize * (1 - INCREMENT / 100);
        });
    }
    
    useEffect(() => {
        const root = document.documentElement;

        root.style.setProperty('--font-size-body', `${fontSize}px`);
    }, [fontSize]);

    useEffect(() => {
        setCanIncrement(fontSize < MAX_FONT_SIZE);
        setCanDecrement(fontSize > MIN_FONT_SIZE);
    }, [fontSize])

    return {
        increment,
        decrement,
        canIncrement,
        canDecrement,
        percentage
    }
}
