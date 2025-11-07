export function applyNoise(imageData, intensity) {
    const data = imageData.data;
    const clampedIntensity = Math.max(0, Math.min(1, intensity));

    for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 255 * clampedIntensity;
        data[i] = Math.max(0, Math.min(255, data[i] + noise));
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
    }

    return imageData;
}

export function clampIntensity(value, defaultValue = 0.1) {
    if (value === null || value === undefined || isNaN(value)) {
        return defaultValue;
    }
    if (value < 0) return 0;
    if (value > 1) return 1;
    return value;
}
