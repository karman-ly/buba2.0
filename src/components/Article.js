import React from "react"
import "./Article.css"

export default function Article({shownParagraphs}) {

  const content = [
    {
      text: "Hello Sony",
      tag: "h1"
    },
    {
      text: "I Love You Sony And I Want Pines and Herb from you",
      tag: "h1"
    },
    {
      text: "Let's see",
      tag: "h2"
    },
    {
      text: [
        "I need you",
        "I miss you",
        "I *u** you",
        "I love you"
      ],
      tag: "ul"
    },
    {
      text: "Сони буба не переживай скорьо через 2 недельки ми снова вмести и ми бу делать вмести всякие штучки, вмести " +
          "просипататси и гулять по класним местам и бу класи, так со убирай свою тревожньость и радуйся наступающим " +
          "праздникамь а их бу многя!",
      tag: "p"
    },
    {
      text: "Ухты ты датыкала до сюда",
      tag: "h2"
    },
    {
      text: "А уже всьо",
      tag: "p"
    }
  ]
  React.createElement("h1",)
  const contentElements = content.map((paragraph, index) => {

    const element = React.createElement(
        paragraph.tag,
        {
          key: index,
          style: {opacity: index < shownParagraphs || paragraph.tag === "ul" ? "1" : "0"}
        },
        paragraph.text
    )

    if (paragraph.tag === "ul") {
      for (let i = 0; i < element.props.children.length; ++i)
        element.props.children[i] = (
            <li
                key={i}
                style={{opacity: index < shownParagraphs ? "1" : "0"}}>
              {element.props.children[i]}
            </li>
        )
    }
    return element
  })

  return (
      <article>
        {contentElements}
      </article>
  )
}