import React from 'react'
import './index.scss'

export default function ContentTitle({title, subTitle}) {
  return (
    <div className="text-center title">
      <h1 className="h3">{title}</h1>
      <span className="text-gray-400 font-weight-light">
        {subTitle}
      </span>
    </div>
  )
}
