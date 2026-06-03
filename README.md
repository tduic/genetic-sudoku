# genetic-sudoku

An early-stage full-stack JavaScript web app intended to solve Sudoku puzzles with a **genetic algorithm** and visualize the search in the browser.

> ⚠️ **Work in progress.** The project is currently a scaffold: the server, build pipeline, and client render path are wired up, but the genetic-algorithm solver itself is not implemented yet — `src/components/App.js` renders a `hello sudoku` placeholder.

## Stack

- **React 16** front end, server-side rendered
- **Express** Node.js server with EJS view (`views/index.ejs`)
- **[react-p5-wrapper](https://github.com/and-who/react-p5-wrapper)** (p5.js) for the planned canvas visualization
- **Webpack** + **Babel** build, **Jest** tests, **PM2** for production
- Scaffolded with [reactful](https://github.com/mvasin/reactful)

## Project layout

```
src/
├── components/      # React components (App.js — currently a placeholder)
├── renderers/       # dom.js (client hydrate) + server.js (SSR)
└── server/          # Express server + config
views/index.ejs      # HTML shell
public/              # static assets
```

## Getting started

```bash
npm install
npm start            # runs the Express server + webpack watcher concurrently
```

Production build / run:

```bash
npm run build:all
npm run prod:start   # serves via PM2
```

Tests: `npm test`

## Roadmap

- Implement the genetic-algorithm Sudoku solver (population of candidate grids, fitness on row/column/box conflicts, selection + crossover + mutation across generations).
- Render the solver's progress each generation with p5.js.
- Add puzzle input/board UI.
