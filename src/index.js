// jsx
// create the function component
// return: element in JSX
// parent component that knows the state of the presentation components
// returns a create element or jsx
import React from 'react';
import ReactDOM from 'react-dom';
import WordCounter from './WordCounter';

ReactDOM.render(
  <WordCounter targetWordCount={10}/>,
    document.getElementById('app')
)
