# Lyef React Counter
[![Build Status](https://travis-ci.org/lyef/lyef-counter.svg)](https://travis-ci.org/lyef/lyef-counter)
![Badge size](https://badge-size.herokuapp.com/lyef/lyef-counter/master/dist/Main.min.js.svg)
![Badge gzip size](https://badge-size.herokuapp.com/lyef/lyef-counter/master/dist/Main.min.js.svg?compression=gzip)


## Getting Started

### Installation

```sh
$ npm install --save lyef-counter
```

### Usage

```jsx
import Counter from 'lyef-counter';

const doneCallback = () => console.log('done'); // Does something when count ends

// Normal Counting
<Counter start={0} end={10} done={doneCallback} />

// Countdown
<Counter start={10} end={0} done={doneCallback} />
```

[Live examples](https://lyef.github.io/lyef-counter)

## Architecture

We've developed this component using the following boilerplate:
[lyef-react-component](https://github.com/lyef/lyef-react-component).

To know more about the architecture or if you want to contribute with this component:
[Contributing Documentation](https://github.com/lyef/lyef-counter/blob/master/CONTRIBUTING.md).

## License

[MIT License](https://github.com/lyef/lyef-counter/blob/master/LICENSE.md) @ [lyef](https://lyef.github.io/)

