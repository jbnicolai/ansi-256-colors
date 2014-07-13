'use strict';
var assert = require('assert'),
    codes = require('./'),
    fg = codes.fg,
    bg = codes.bg,
    reset = codes.reset;

  // prints the entire color palette
  (function () {
    console.log('\x1b[;38;5;255m\x1b[4;37mDefault palette:\x1b[0m');
    bg.standard.forEach(function (c, i) { process.stdout.write(c + 'defaults ' + i + '  '); });
    console.log(reset + '\n');

    console.log('\x1b[;38;5;255m\x1b[4;37mBright palette:\x1b[0m');
    bg.bright.forEach(function (c, i) { process.stdout.write(c + 'bright ' + i + '    '); });
    console.log(reset + '\n');

    console.log('\x1b[;38;5;255m\x1b[4;37mRGB ranges 0 to 6:\x1b[0m');
    for (var r = 0; r < 6; r++) {
      for (var g = 0; g < 6; g++) {
        for (var b = 0; b < 6; b++) {
          process.stdout.write(bg.getRgb(r, g, b) + 'r:' + r + ' g:' + g + ' b:' + b + ' ');
        }
        process.stdout.write('\n');
      }
      if (r !== 5) process.stdout.write('\n');
    }
    console.log(reset);

    console.log('\x1b[;38;5;255m\x1b[4;37mGrayscales:\x1b[0m');
    bg.grayscale.forEach(function (c, i) {
      process.stdout.write(c + 'gray ' + (i < 10 ? '0' : '') + i + '     ' + ((i+1) % 6 ? '' : '\n'));
    });
    console.log(reset);
  }());

describe('ansi-8-bit', function () {
  it('should return the correct foreground colours', function () {
    assert.equal(fg.standard[5], '\u001b[;38;5;5m');
    assert.equal(fg.grayscale[3], '\u001b[;38;5;235m');
    assert.equal(fg.rgb[44], '\u001b[;38;5;60m');
  });

  it('should retrieve the corresponding colors on getRgb', function () {
    assert.equal(fg.getRgb(3, 3, 3), '\u001b[;38;5;145m');
    assert.equal(bg.getRgb(3, 3, 3), '\u001b[;48;5;145m');
  });

  it('should return the correct background colours', function () {
    assert.equal(bg.standard[5], '\u001b[;48;5;5m');
    assert.equal(bg.grayscale[3], '\u001b[;48;5;235m');
    assert.equal(bg.rgb[44], '\u001b[;48;5;60m');
  });
});
