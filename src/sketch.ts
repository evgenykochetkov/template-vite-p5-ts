import type p5 from 'p5';

import vert from './shaders/vertex.glsl';
import frag from './shaders/fragment.glsl';

// see https://p5js.org/examples/instance-mode-instantiation.html
export default function sketch(p: p5) {
  let texture: p5.Graphics;
  let slider: p5.Element;
  let glitchShader: p5.Shader;

  p.setup = () => {
    p.createCanvas(500, 500, p.WEBGL);

    texture = p.createGraphics(p.width, p.height);
    texture.background(25);
    texture.fill(255);
    texture.textAlign(p.CENTER);
    texture.textSize(40);
    texture.text('hello', p.width / 2, p.height / 2);

    slider = p.createSlider(0, 0.3, 0.125, 0.005);
    slider.position(10, 10);
    slider.style('width', '160px');

    glitchShader = p.createShader(vert, frag);
  };

  p.draw = () => {
    const sliderValue = +slider.value();

    texture.background(25);
    texture.text(sliderValue.toFixed(3), p.width / 2, p.height / 2);

    glitchShader.setUniform('texture', texture);
    glitchShader.setUniform('amount', sliderValue);
    p.shader(glitchShader);

    p.rect(0, 0, p.width, p.height);
  };
}
