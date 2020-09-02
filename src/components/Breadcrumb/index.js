import React from 'react'
import propTypes from 'prop-types'
import Button from '../Button'

import './index.scss'

export default function Breadcrumb(props) {

  const {className, data} = props

  return (
    <nav aria-label="breadcrumb">
      <ol className={["breadcrumb", className].join(" ")}>
        {data.map((item,index) => (
          <li
            key={index}
            className={`breadcrumb-item${index === data.length - 1 ? " active " : ""}`}
          >
            {index === data.length - 1 ? (
              item.pageTitle
            ):(
              <Button type="link" className="font-weight-light" href={item.pageHref}>
                {item.pageTitle}
              </Button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

Breadcrumb.propTypes = {
  data: propTypes.array,
  className: propTypes.string
}