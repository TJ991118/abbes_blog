import { css } from "@emotion/react";
import { themeTransVar } from "@abbes/design-theme-color";

import defaultTheme from "@/styles/theme/default.json";

export const setTheme = (isDark?: boolean) => {
  const vars = themeTransVar(defaultTheme, isDark ? isDark : false);
  return css`
    :root {
      ${Object.entries(vars)
        .map(([key, value]) => {
          return `${key}: #${value}`;
        })
        .join(";\n")}
    }
  `;
};
