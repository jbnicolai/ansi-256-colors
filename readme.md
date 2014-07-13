# ansi-8-bit [![Build Status](https://travis-ci.org/jbnicolai/ansi-8-bit.svg?branch=master)](https://travis-ci.org/jbnicolai/ansi-8-bit)

> [256 ansi color codes](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors) for styling terminal output

You probably want the higher-level [chalk](https://github.com/sindresorhus/chalk) module for styling your strings.

![screenshot](https://i.imgur.com/Kilr0mC.png?1)


## Install

```sh
$ npm install --save ansi-8-bit
```


## Usage

```js
var a8b = require('ansi-8-bit'), fg = a8b.fg, bg = a8b.bg;

console.log(fg.getRgb(2,3,4) + bg.getRgb(4,4,4) + 'Hello world!' + a8b.reset);
```

## API

The module exposes a `fg` and `bg` object, and a `reset` code. Both the foreground and background objects contain:

- 256 color codes
- `standard` containing the 8 default colors
- `bright` containing the 8 bright/bold default colors
- `rgb` containing 216 different red-green-blue values
- `grayscale` containing 24 tints ranging from white to black
- `getRgb(int, int, int)` return a colour in the rbg ranges 0 to 6


## License

MIT © [Jbnicolai](http://jbnicolai.com)
