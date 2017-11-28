// jsx
// create the function component
// return: element in JSX
// parent component that knows the state of the presentation components
// returns a create element or jsx
import React from 'react';
import ReactDOM from 'react-dom';
import WordCounter from './wordcounter';
import Editor from './editor';
import ProgressBar from './progressbar';

ReactDOM.render(
  <WordCounter targetWordCount={10}/>,
    document.getElementById('app')
)
