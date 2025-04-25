import classNames from "classnames"
import { FC } from "react"

interface ComContainerItf extends GlobalType.ComponentITF {
  type?: "page" | "block" | "container"
}

const ComContainer:FC<ComContainerItf> = (props) => {

  const {
    type = "block",
    className, style, children
  } = props

  const _class = classNames(
    "com-container",
    `container-type__${type}`,
    className
  )
  const _style = Object.assign(style ? style : {}, {})

  return (
    <div className={_class} style={_style}>
      {children}
    </div>
  )
}

export default ComContainer