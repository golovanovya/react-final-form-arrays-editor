import React, { useEffect, useRef } from 'react';

import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import lang from './lang/ru';
import _SunEditor from 'suneditor-react';

const buttonList = [
  [
    'bold', 'italic', 'fontSize', 'formatBlock', 'blockquote',
    'removeFormat',
    'outdent', 'indent',
    'align', 'list',
    'table', 'link', 'image', // You must add the "imageGalleryUrl".
  ]
];

const SunEditor = ({ input, config = {} }) => {
  const editorRef = useRef(null);
  useEffect(() => {
    // editorRef.current.querySelector('.se-wrapper-wysiwyg').innerHTML = input?.value;
  }, [input?.value]);

  return (
    // <div ref={editorRef}>
      <_SunEditor
        key={input?.value}
        defaultValue={input?.value ?? ''}
        // onChange={onBlur}
        // onImageUpload={handleFileUpload}
        // onVideoUpload={handleFileUpload}
        // onAudioUpload={handleFileUpload}
        onChange={(content) => input && input?.onChange(content)}
        setOptions={{
          height: '50px',
          mode: 'inline',
          ...config,
          buttonList,
        }}
        lang={lang}
      />
    // </div>
  );
};

export default SunEditor;
