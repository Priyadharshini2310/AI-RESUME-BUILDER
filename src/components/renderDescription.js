// src/components/RichTextEditor/renderDescription.js
import React from 'react';

export const renderDescription = (desc) => {
  return desc?.map((node, i) => {
    if (node.type === 'paragraph') {
      return (
        <p key={i}>
          {node.children.map((child, j) => {
            let content = child.text;
            if (child.bold) return <strong key={j}>{content}</strong>;
            return <span key={j}>{content}</span>;
          })}
        </p>
      );
    }
    return null;
  });
};
