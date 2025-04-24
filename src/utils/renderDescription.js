import React from 'react';

export const renderDescription = (desc) => {
  return desc.map((node, i) => {
    if (node.type === "paragraph") {
      return (
        <p key={i}>
          {node.children.map((child, j) => {
            let text = child.text;
            if (child.bold) text = <strong key={j}>{text}</strong>;
            return <span key={j}>{text}</span>;
          })}
        </p>
      );
    }
    return null;
  });
};
