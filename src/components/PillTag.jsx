import React from 'react'

export default function PillTag({ children, ...props }) {
  return (
    <span className="pill-tag" {...props}>
      {children}
    </span>
  )
}
