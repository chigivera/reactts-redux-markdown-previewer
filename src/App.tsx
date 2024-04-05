import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootState } from '@reduxjs/toolkit/query';
import { ChangeEvent } from 'react';
import { parseMarkdown } from './state/markdown/mark';
import { marked } from 'marked';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

function App() {
  const mark = useSelector((state: RootState) => state.mark);
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(parseMarkdown(e.target.value));
  };
  marked.setOptions({
    breaks: true
  });

  const renderMarkdown = (text: string) => {
    // Use marked to render Markdown text
    return { __html: marked(text) }; // marked(text) returns the HTML content
  };

  return (
    <>
      <Editor text={mark.text} handleChange={handleChange}/>
      <div id="preview" dangerouslySetInnerHTML={renderMarkdown(mark.text)} />
    </>
  );
}

export default App;
