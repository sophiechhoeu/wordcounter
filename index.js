// jsx
// create the function component
// return: element in JSX
// parent component that knows the state of the presentation components
// returns a create element or jsx

// presentation components
function Counter({count}) {
  return(
    <p className="mb2">
      Word count:{count}
    </p>
  )
}

function ProgressBar({completion}) {
  const percentage = completion * 100;
  return(
    <div className="mv2 flex flex-column">
      <label htmlFor="progress" className="mv2">
        ProgressBar
      </label>
      <progress value= {completion} id="progress" className="bn">
        {percentage}%
      </progress>
    </div>
  )
}

// native events how you view it in the browser



function Editor({text,onTextChange}) {
  function handleChange(event){
    onTextChange(event.target.value);
  }
  return(
    <div className="flex flex-column mv2">
      <label htmlFor="editor" className="mv2">
        Enter your text:
      </label>
      <textarea value={text} onChange={handleChange} id="editor"/>
    </div>
  )
}



// utility function with a regular expression
// look for all the non space characters (g means global) and return these into an array

function countWords(text){
  return text ? text.match(/\w+/g).length : 0
}

// before this exists must call super, before it can call on the component object of react
// react.component calls set state because the future can change it triggers react to render
// when i update my state it triggers a re-render

class WordCounter extends React.Component {
    constructor(){
      super();
      this.state = {text:''}
      // this.handleTextChange = this.handleTextChange.bind(this);
    }

// calling set state and must provide a function from react Component to and triggers the re-render of my state

  // handleTextChange(currentText){
  //   this.setState(() => {return {text:currentText}})
  // }

  handleTextChange = (currentText) => {
      this.setState({ text: currentText })
  }

  // handleTextChange(currentText) {
  //   this.setState(() => ({text:currentText}))
  // }

  render(){
    const {targetWordCount} = this.props;
    const {text} = this.state;
    const wordCount = countWords(text);
    const progress = wordCount/ targetWordCount;
    return (
      <form className="measure pa4 sans-serif">
         <Editor text={text} onTextChange={this.handleTextChange}/>
         <Counter count={wordCount}/>
         <ProgressBar completion={progress}/>
      </form>
    )
  }
}

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

ReactDOM.render(
  <WordCounter targetWordCount={10}/>,
    document.getElementById('app')
)
