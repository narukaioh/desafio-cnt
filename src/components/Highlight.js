import React from 'react'

const Highlight = ({ text = "", search = ""}) => {
  
  if (!search.trim()) {
    return (
      <span>{ text }</span>
    )
  }

  const expression = new RegExp(`(${search})`, 'gi')
  const words = text.split(expression)

  return (
    <span>
       { words
          .filter(word => word)
          .map((word, i) => (
            expression.test(word) ? <mark key={i}>{word}</mark> : <span key={i}>{word}</span>
       ))}
   </span>
  )
}

export default Highlight