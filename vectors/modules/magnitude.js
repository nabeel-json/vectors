export function magnitude_2D(vec1, vec2) {
    let magnitude = Math.sqrt(Math.pow(vec1, 2) + Math.pow(vec2, 2));
    return magnitude;
}

export function magnitude_3D(vec1, vec2, vec3) {
    let magnitude = Math.sqrt(Math.pow(vec1, 2) + Math.pow(vec2, 2) + Math.pow(vec3, 2));
    return magnitude;
}