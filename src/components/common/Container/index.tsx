/** @jsxImportSource @emotion/react */
import classNames from "classnames";
import { css as cssFunc } from "@emotion/react";
import { FC, ReactNode } from "react";

interface ComContainerItf extends GlobalType.ComponentITF {
  type?: "page" | "container" | "box";
  fullWidth?: boolean;
  children: ReactNode;
}

const ComContainer: FC<ComContainerItf> = (props) => {
  const { type = "box", fullWidth, style, css, className, children } = props;

  const _class = classNames(
    "com-container",
    `container-type__${type}`,
    { "container-fullWidth": fullWidth },
    className
  );
  const _style = Object.assign(style ? style : {}, {});
  const _css = cssFunc([css]);

  return (
    <div role="container" className={_class} style={_style} css={_css}>
      {children}
    </div>
  );
};

export default ComContainer;
