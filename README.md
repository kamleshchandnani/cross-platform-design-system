<h1 align="center">
 cross platform design system
</h1>
<p align="center">
  <a href="https://github.com/styled-components/styled-components">
    <img src="https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e" alt="Blade is styled with styled-components" />
  </a>
  <a href="https://github.com/facebook/jest">
    <img src="https://jestjs.io/img/jest-badge.svg" alt="Blade is tested with jest" />
  </a>
  <a href="https://github.com/razorpay/blade/blob/master/LICENSE.md">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Blade is released under the MIT license." />
  </a>
</p>

## setup

Download or clone the repository and install dependencies following commands

```
yarn
```

## run storybook

To run the web storybook run

```
yarn react:storybook
```

To run this on react-native, make sure you have [react-native](https://reactnative.dev/docs/environment-setup) setup then run

```
## terminal-1
yarn react-native:storybook:android
or
yarn react-native:storybook:android

## terminal-2
yarn react-native:storybook:start
```

## build the library

To build the library run

```
yarn build
```

this will generate the build under `/build` directory

## 📝 license

Licensed under the [MIT License](./LICENSE).
