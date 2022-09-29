import React from "react"
import './App.css';
import Article from "./Article"
import Button from "./Button"
import {content as initialContent} from "./content";
import {randomContent} from "./randomContent"

export default function App() {

  const [content, setContent] = React.useState([initialContent[0]])

  function getRandomContent() {
    return randomContent[Math.floor(Math.random() * randomContent.length)]
  }

  function handleCLick() {
    setContent(content => {
      const lastItem = content[content.length - 1]
      if (content.length < initialContent.length) {
        return [...content, initialContent[content.length]]
      }
      else {
        let newContent
        while (true) {
          newContent = getRandomContent()
          if (newContent.text !== lastItem.text)
            break
        }
        return [...content, newContent]
      }
    })
  }

  return (
      <div className="app">
        <Article content={content}/>
        <Button handleClick={handleCLick}/>
      </div>
  );
}
