import React from "react"
import './App.css';
import Article from "./Article"
import Button from "./Button"

export default function App() {

  const [shownParagraphs, setShownParagraphs] = React.useState(0)

  const handleCLick = () => {
    setShownParagraphs(x => x + 1)
  }

  return (
      <div className="app">
        <Article shownParagraphs={shownParagraphs}/>
        <Button handleClick={handleCLick}/>
      </div>
  );
}
