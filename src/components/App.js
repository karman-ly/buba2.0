import React from "react"
import './App.css';
import Article from "./Article"
import Button from "./Button"
import content from "./content";
import randomContent from "./randomContent"

export default function App() {

  const [shownParagraphs, setShownParagraphs] = React.useState(0)
  const [stateContent, setContent] = React.useState(content)

  function getRandomContent() {
    return randomContent[Math.floor(Math.random() * randomContent.length)]
  }

  const handleCLick = () => {
    setShownParagraphs(x => x + 1)
    if (shownParagraphs >= content.length)
      setContent(content => [...content, getRandomContent()])
  }

  return (
      <div className="app">
        <Article shownParagraphs={shownParagraphs} content={stateContent}/>
        <Button handleClick={handleCLick}/>
      </div>
  );
}
