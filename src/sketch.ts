import type p5 from 'p5';

// see https://p5js.org/examples/instance-mode-instantiation.html
export default function sketch(p: p5) {
  let slider: p5.Element;

  p.setup = () => {
    p.createCanvas(500, 500);

    slider = p.createSlider(0, 255, 127, 1);
    slider.position(10, 10);
    slider.style('width', '160px');
  };

  p.draw = () => {
    p.background(+slider.value());

    p.fill(127);
    const centerX = p.width / 2;
    const centerY = p.height / 2;
    p.rect(centerX - 25, centerY - 25, 50, 50);
  };
}
