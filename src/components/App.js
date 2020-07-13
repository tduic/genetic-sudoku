import React from 'react';
// import ReactDOM from 'react-dom';
// import Sketch from 'react-p5';
// import './styles.css';
// import Dot from './Dot';
const isBrowser = typeof window !== 'undefined';
var p5 = isBrowser ? require('p5') : undefined;
// var P5Wrapper = isBrowser ? require('react-p5-wrapper') : undefined;
var Sketch = isBrowser ? require('react-p5') : undefined;
// if (isBrowser) console.log(window);
// import P5Wrapper from 'react-p5-wrapper';

// const sketch = (p) => {
//   p.setup = () => {
//     p.createCanvas(400, 400);
//   };

//   p.draw = () => {
//     p.background(100);
//   };
// };

// let mp5 = new
// const GA = (props) => {
//   const myRef = React.createRef();

//   const setup = (p5, parentRef) => {
//     props.p5.createCanvas(400, 400).parent(parentRef);
//   };

//   const draw = (p5) => {
//     p5.ellipse(100, 100, 10, 10);
//   };

//   setup();
//   draw();

//   return <div ref={myRef}>hello dots</div>;
// };

// const Test = (p5) => {
//   const setup = (p5, parentRef)
//   return (<div>hello
//           </div>);
// };

export function App() {
  // console.log(p5);
  const setup = () => {
    p5.createCanvas(100, 100);
  };

  const draw = () => {
    p5.background(220);
  };

  return (
    <div className="app">
      <h1>hello dots</h1>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

// <Sketch setup={setup} draw={draw} />
// const GA = () => {
//   const [runId, setRunId] = useState(1);
//   return <Run key={runId} startNewRun={() => setRunId(runId++)} />;
// };

// class GA extends React.Component {
//   y = 0;
//   direction = '^';
//   dot;

//   setup = (p5, parentRef) => {
//     p5.createCanvas(400, 400).parent(parentRef);
//     this.dot = new Dot(p5);
//     this.dot.pos = p5.createVector(p5.width / 2, p5.width / 2);
//     this.dot.vel = p5.createVector(0, 1);
//     this.dot.acc = p5.createVector(1, 0);
//   };

//   draw = () => {
//     this.dot.show();
//     this.dot.move();
//   };

//   render() {
//     return (
//       <div className="Show">
//         <h1>react-p5</h1>
//         <Sketch setup={this.setup} draw={this.draw} />
//       </div>
//     );
//   }
// }
