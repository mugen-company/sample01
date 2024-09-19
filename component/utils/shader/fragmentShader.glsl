precision highp float;

uniform sampler2D uTexture;
uniform float uTime;
uniform vec2 uResolution;
varying vec2 vTexCoord;

void main() {
  vec2 uv = vTexCoord;
  // Y軸を反転
  uv.y = 1.0 - uv.y;
  float wave = sin(uv.y * 10.0 + uTime) * 0.05;
  uv.x += wave;
  float noise = sin(uv.x * uv.y * 10.0 + uTime) * 0.01;
  uv += vec2(noise);
  vec4 color = texture2D(uTexture, uv);
  gl_FragColor = color;
}
