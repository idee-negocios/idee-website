import Trianglify from 'trianglify';
import $ from 'jquery';

export default function(width, height) {
  const backgroundEl = $('#background');

  const wrapper = $('body');

  width = width || wrapper.width();
  height = height || wrapper.height();

  const x_colors = 'Reds';

  const pattern = Trianglify({width, height, x_colors});

  backgroundEl.empty();
  backgroundEl.append(pattern.canvas());
}
