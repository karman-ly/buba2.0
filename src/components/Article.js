import React from "react"
import "./Article.css"

export default function Article({shownParagraphs, content}) {

  const contentElements = content.map((paragraph, index) => {
    return React.createElement(
        paragraph.tag,
        {
          key: index,
          style: {opacity: index < shownParagraphs ? "1" : "0"},
          src: paragraph.src
        },
        paragraph.text
    )
  })

  const ref = React.useRef(null)
  function scrollToBottom() {
    ref.current?.scrollIntoView({behavior: "smooth"})
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [content])

  return (
      <article>
        {contentElements}
        <div ref={ref}/>
      </article>
  )
}