/// <reference types="react" />
/// <reference types="@emotion/react" />

declare namespace GlobalType {
  interface ComponentITF {
    css?: CSSInterpolation;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
  }
}
