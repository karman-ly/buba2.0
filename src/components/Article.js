import React from "react"
import "./Article.css"

export default function Article({content}) {

  const contentElements = content.map((paragraph, index) => {
    return React.createElement(
        paragraph.tag,
        {
          key: index,
          style: {opacity: index < content.length - 1 ? "1" : "0"},
        },
        paragraph.text
    )
  })

  const ref = React.useRef()
  function scrollToBottom() {
    ref.current?.scrollIntoView({behavior: "smooth"})
  }
  React.useEffect(scrollToBottom, [content])

  return (
      <article>
        {contentElements.slice(0, -2)}
        <div className="empty" ref={ref}></div>
        {contentElements.slice(-2)}
      </article>
  )
}