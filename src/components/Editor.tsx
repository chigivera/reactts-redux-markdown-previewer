import React, { ChangeEvent } from 'react';

interface EditorProps {
  text: string;
  handleChange:(e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Editor: React.FC<EditorProps> = ({ text,handleChange }:EditorProps) => {
 

  return (
    <textarea
      id="editor"
      name="editor"
      value={text}
      onChange={handleChange}
      style={{ width: '50%', height: '100%', padding: '10px' }}
    />
  );
};

export default Editor;
