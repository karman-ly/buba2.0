import React from "react"
import "./Article.css"

export default function Article({shownParagraphs, content}) {

  const contentElements = content.map((paragraph, index) => {
    return React.createElement(
        paragraph.tag,
        {
          key: index,
          style: {opacity: index < shownParagraphs ? "1" : "0"}
        },
        paragraph.text
    )
  })

  return (
      <article>
        {contentElements}
      </article>
  )
}