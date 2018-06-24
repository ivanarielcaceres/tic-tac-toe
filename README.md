# Showcase of my development workflow - Tic tac toe as example [![Build Status](https://travis-ci.org/davps/tic-tac-toe.svg?branch=master)](https://travis-ci.org/davps/tic-tac-toe)

## Live demo of Tic-tac-toe

[View the live demo of tic-tac-toe and the individual components on the storybook](https://davps.github.io/tic-tac-toe)

## Tech stack

- React (create-react-app)
- Storybook of [my UI components](https://davps.github.io/tic-tac-toe), deployed to Github Pages as part of the CI service
- Prettier + ESLint setup with Airbnb's style guide + its VSCode plugins
- Travis CI

## Relevant history:

- Original code, this is what I've developed in about 1 hour, not completed but close
  https://github.com/davps/tic-tac-toe/tree/445c98f32a92aa389390323664d45c61c1e680b2

- Tic tac toe - Feature complete. This is a basic version, at this point the tech stack only includes react, nothing more.
  https://github.com/davps/tic-tac-toe/commit/14351e298328162af2c4384eb2957d9beb66b6b2

- Applying optimizations for React:
  Fixed the unnecesary render() calls by calling `setState` only once on [this function](https://github.com/davps/tic-tac-toe/commit/7372b0c2bad344e92bce18d64bde4276a3ee8128#diff-84599220e354fbfa3b9310dec52ed9bcL270).

s
