'use strict';
var assert = require('assert'),
    colors = require('./');

  // prints the entire color palette
  (function () {
    console.log('\x1b[;38;5;255m\x1b[4;37mDefault palette:\x1b[0m');
    colors.bg.standard.forEach(function (c, i) { process.stdout.write(c + 'defaults ' + i + '  '); });
    console.log(colors.reset + '\n');

    console.log('\x1b[;38;5;255m\x1b[4;37mBright palette:\x1b[0m');
    colors.bg.bright.forEach(function (c, i) { process.stdout.write(c + 'bright ' + i + '    '); });
    console.log(colors.reset + '\n');

    console.log('\x1b[;38;5;255m\x1b[4;37mRGB ranges 0 to 6:\x1b[0m');
    for (var r = 0; r < 6; r++) {
      for (var g = 0; g < 6; g++) {
        for (var b = 0; b < 6; b++) {
          process.stdout.write(colors.bg.getRgb(r, g, b) + 'r:' + r + ' g:' + g + ' b:' + b + ' ');
        }
        process.stdout.write('\n');
      }
      if (r !== 5) process.stdout.write('\n');
    }
    console.log(colors.reset);

    console.log('\x1b[;38;5;255m\x1b[4;37mGrayscales:\x1b[0m');
    colors.bg.grayscale.forEach(function (c, i) {
      process.stdout.write(c + 'gray ' + (i < 10 ? '0' : '') + i + '     ' + ((i+1) % 6 ? '' : '\n'));
    });
    console.log(colors.reset);
  }());

describe('ansi-256-colors', function () {
  it('should return the correct foreground colours', function () {
    assert.equal(colors.fg.standard[5], '\u001b[;38;5;5m');
    assert.equal(colors.fg.grayscale[3], '\u001b[;38;5;235m');
    assert.equal(colors.fg.rgb[44], '\u001b[;38;5;60m');
  });

  it('should retrieve the corresponding colors on getRgb', function () {
    assert.equal(colors.fg.getRgb(3, 3, 3), '\u001b[;38;5;145m');
    assert.equal(colors.bg.getRgb(3, 3, 3), '\u001b[;48;5;145m');
  });

  it('should return the correct background colours', function () {
    assert.equal(colors.bg.standard[5], '\u001b[;48;5;5m');
    assert.equal(colors.bg.grayscale[3], '\u001b[;48;5;235m');
    assert.equal(colors.bg.rgb[44], '\u001b[;48;5;60m');
  });
});
