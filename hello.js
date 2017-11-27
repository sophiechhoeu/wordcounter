// creating a functional component any that we create will be capitalised
function Add ({n1,n2}) {
  const sum = n1 + n2;
// JSX
  return (
    <h1>{sum}</h1>
  )
  // return React.createElement('h1', {}, sum)
}

// creating an element to render on the page that takes components that we create or react native doms

// ReactDOM.render(
//   React.createElement(Add, {n1:5, n2:5}),
//     document.getElementById('app')
// );

// using JSX TO RENDER functional component
ReactDOM.render(<Add n1={2} n2={4}/>, document.getElementById('app'));
