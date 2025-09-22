function hslToHex(h: number, s: number, l: number): string {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

export function goldenRatioColor(seed = Math.random(), s = 80, l = 60): string {
    const goldenRatio = 0.61803398875;
    const hue = (seed + goldenRatio) % 1;
    return hslToHex(hue * 360, s, l);
}

export function numberToColor(seed: number, s = 80, l = 60): string {
    return goldenRatioColor((seed * 10) / 100, s, l);
}
