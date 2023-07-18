import React from 'react'

interface IButton {
  content: string
  order?: string
  classes?: string
}

export default function Button({ content, classes }: IButton) {
  return <button className={classes}>{content}</button>
}
