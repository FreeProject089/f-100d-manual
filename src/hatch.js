document.body.classList.add('hatch-border');
var bg = 'repeating-linear-gradient(45deg,#1a1a1a 0px,#1a1a1a 20px,#ffffff 20px,#ffffff 40px)';
var c = document.querySelector('.wy-nav-content');

var frame = document.createElement('div');
frame.style.cssText = [
  'position:absolute',
  'top:0',
  'left:0',
  'right:0',
  'bottom:0',
  'z-index:9999',
  'pointer-events:none',
  'border:16px solid transparent',
  'border-image:' + bg + ' 16',
  'box-sizing:border-box'
].join(';');

c.appendChild(frame);