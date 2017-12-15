import React from 'react';
import Editor from './Editor'
import ProgressBar from './ProgressBar'
import Timer from './Timer';
import countWords from './countWords';
import Counter from './Counter';

const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const WAITING = 'WAITING';
const IDLE = 'IDLE';

// mock server returns a promise pure javascript

function makeFakeRequest () {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5){
        resolve('Success!')

      } else {
        reject('Failed')
      }
    },3000);
  });
}

function SaveButton({onClick}) {
  return (
    <button className="pv2 ph3" onClick={onClick}>
      Save
    </button>
  )
}

function AlertBox({status}) {
  if (status === FAILURE) {
      return <div className="mv2"> Save failed</div>;
  } else if (status === SUCCESS){
      return <div className="mv2"> Save successful</div>;
  } else if (status == WAITING){
      return <div className="mv2"> Saving...</div>
  } else {
      return null
  }
}

class SaveManager extends React.Component {
  constructor(){
    super();
    this.state = {saveStatus: IDLE};
    this.save= this.save.bind(this);
  }

  save(event) {
    event.preventDefault();
    this.setState(() => {return {saveStatus: WAITING}})
    this.props.saveFunction(this.props.data).then(
      success =>this.setState(() => ({saveStatus: SUCCESS})),
      failure => this.setState(() => ({saveStatus: FAILURE}))
    );
  }


render() {
  return (
    <div className="flex flex-column mv2">
      <SaveButton onClick={this.save}/>
      <AlertBox status={this.state.saveStatus}/>
    </div>
  )
}
}



// function ProgressBar({completion}) {
//   const percentage = completion * 100;
//   return(
//     <div className="mv2 flex flex-column">
//       <label htmlFor="progress" className="mv2">
//         ProgressBar
//       </label>
//       <progress value= {completion} id="progress" className="bn">
//       </progress>
//       {percentage}%
//     </div>
//   )
// }

// native events how you view it in the browser



// function Editor({text,onTextChange}) {
//   function handleChange(event){
//     onTextChange(event.target.value);
//   }
//   return(
//     <div className="flex flex-column mv2">
//       <label htmlFor="editor" className="mv2">
//         Enter your text:
//       </label>
//       <textarea value={text} onChange={handleChange} id="editor"/>
//     </div>
//   )
// }



// utility function with a regular expression
// look for all the non space characters (g means global) and return these into an array



// before this exists must call super, before it can call on the component object of react
// react.component calls set state because the future can change it triggers react to render
// when i update my state it triggers a re-render

// webpack
// export default class
class WordCounter extends React.Component {
    constructor(){
      super();
      this.state = {text:'', timeNow: new Date()}
      // this.handleTextChange = this.handleTextChange.bind(this);
    }

// calling set state and must provide a function from react Component to and triggers the re-render of my state

  // handleTextChange(currentText){
  //   this.setState(() => {return {text:currentText}})
  // }

  handleTextChange = (currentText) => {
      this.setState({ text: currentText })
      this.timer = null;
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState(() => ({ timeNow: new Date()}))
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  // handleTextChange(currentText) {
  //   this.setState(() => ({text:currentText}))
  // }

  render(){
    const {targetWordCount} = this.props;
    const {text} = this.state;
    const wordCount = countWords(text);
    const progress = wordCount/ targetWordCount;
    // const timeNow = new Date();
    return (
      <form className="measure pa4 sans-serif">
         <Editor text={text} onTextChange={this.handleTextChange}/>
         <Counter count={wordCount}/>
         <ProgressBar completion={progress}/>
         <SaveManager saveFunction={makeFakeRequest} data={this.state}/>
         <Timer timeNow={this.state.timeNow}/>
      </form>
    )
  }
}


export default WordCounter;

// function WordCounter({text, targetWordCount}) {
//   const wordCount = countWords(text);
//   const progress = wordCount / targetWordCount;
//   return(
//     <form className="measure pa4 sans-serif">
//        <Editor text={text}/>
//        <Counter count={wordCount}/>
//        <ProgressBar completion={progress}/>
//     </form>
//   )
// }
