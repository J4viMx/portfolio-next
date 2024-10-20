import React, { ReactElement } from "react";

export const highlightKeywords = (
  text: string,
  keywords: string[],
  className: string
): Array<ReactElement | string> => {
  const regex = new RegExp(`(${keywords.join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index): ReactElement | string => {
    if (
      part &&
      keywords.some((keyword) => keyword.toLowerCase() === part.toLowerCase())
    ) {
      return (
        <span key={index} className={className}>
          {part}
        </span>
      );
    }
    return part;
  });
};
