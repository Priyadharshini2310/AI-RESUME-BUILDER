// src/components/RichTextEditor/RichTextEditorSlate.jsx
import React from 'react';
import { Plate, createPlateEditor, createPlugins } from '@udecode/plate-core';
import { createParagraphPlugin } from '@udecode/plate-paragraph';
import { createBoldPlugin } from '@udecode/plate-basic-marks';
import { withReact } from 'slate-react';

const plugins = createPlugins(
  [createParagraphPlugin(), createBoldPlugin()],
  { components: {} }
);

const editor = withReact(createPlateEditor());

const RichTextEditorSlate = ({ value, onChange }) => {
  return (
    <Plate
      editor={editor}
      plugins={plugins}
      value={value}
      onChange={onChange}
    />
  );
};

export default RichTextEditorSlate;