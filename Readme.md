# Lyef React Counter
[![Build Status](https://travis-ci.org/lyef/lyef-react-counter.svg)](https://travis-ci.org/lyef/lyef-react-counter)
![](https://badge-size.herokuapp.com/lyef/lyef-react-counter/master/dist/Counter.min.js.svg)
![](https://badge-size.herokuapp.com/lyef/lyef-react-counter/master/dist/Counter.min.js.svg?compression=gzip)


## Getting Started

### Installation

```sh
$ npm install --save lyef-react-counter
```

### Usage

```jsx
import Counter from 'lyef-react-counter';

const doneCallback = () => console.log('done'); // Does something when count ends

// Normal Counting
<Counter start={0} end={10} done={doneCallback} />

// Countdown
<Counter start={10} end={0} done={doneCallback} />
```

[Live examples](https://lyef.github.io/lyef-react-counter)

## Architecture

We've developed this component using the following boilerplate:
[lyef-react-component](https://github.com/lyef/lyef-react-component).

To know more about the architecture or if you want to contribute with this component:
[Contributing Documentation](https://github.com/lyef/lyef-react-counter/blob/master/CONTRIBUTING.md).

## License

[MIT License](https://github.com/lyef/lyef-react-counter/blob/master/LICENSE.md) @ [lyef](https://lyef.github.io/)

