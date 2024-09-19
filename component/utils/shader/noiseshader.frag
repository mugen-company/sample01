// public/shaders/noiseShader.frag

precision highp float;

uniform sampler2D uTexture;
uniform float uTime;
varying vec2 vTexCoord;

float random(vec2 uv) {
    return fract(sin(dot(uv.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    vec2 uv = vTexCoord;
    float noise = random(uv + uTime * 0.1) * 0.5; // ノイズの強さと変化速度
    vec4 color = texture2D(uTexture, uv);
    gl_FragColor = vec4(color.rgb + noise, color.a);
}
