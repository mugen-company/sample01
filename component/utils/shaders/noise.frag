precision mediump float;

uniform sampler2D texture;
uniform float time;
varying vec2 vUv;

// シンプルなノイズ関数
float noise(vec2 uv) {
    return fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    vec4 color = texture2D(texture, vUv);
    float n = noise(vUv * 10.0 + time * 0.1);
    gl_FragColor = color + vec4(n, n, n, 0.0);
}
