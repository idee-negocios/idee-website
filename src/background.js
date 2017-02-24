import Trianglify from 'trianglify';

export default function() {
  const backgroundEl = document.getElementById('background');

  const width = window.innerWidth;
  const height = window.innerHeight;
  const x_colors = 'Reds';

  const pattern = Trianglify({width, height, x_colors});
  backgroundEl.appendChild(pattern.canvas());
}
