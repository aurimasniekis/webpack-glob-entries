# webpack-glob-entries-extended
A small function which allows you to pass glob to generate entries hash object.  Allows for passing of additional options to glob.sync().

## Instalation

```
npm install --save-dev webpack-glob-entries-extended

or

yarn add --save-dev webpack-glob-entries-extended
```

## Usage
```
const glob_entries = require('webpack-glob-entries-extended')

module.exports = {
    entry: glob_entries('src/entries/**/*.js'),
    output: {
        filename: '[name].js'
    }
};
```

### Adding options

The module uses `glob.sync` under the hood and allows you to pass through a set of options in the same way as using this methods directly.

```
const glob_entries = require('webpack-glob-entries-extended')

module.exports = {
    entry: glob_entries('**/*.js', '', { ignore: '**/node_modules/**' }),
    output: {
        filename: '[name].js'
    }
};
```


## Tests

  npm test | yarn test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.
