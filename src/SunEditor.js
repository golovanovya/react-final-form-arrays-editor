import React, { useEffect } from 'react';

import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
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

  useEffect(() => {
    // Fixing issue with text alignment in editor
    // It seems the text alignment in SunEditor doesn't work correctly when editing the existing value
    // SunEditor bug
    if (input?.value) {
      const editArea = document.querySelector('.se-wrapper-wysiwyg');
      editArea.innerHTML = input.value;
    }
  }, [input]);

  return (
    <_SunEditor
      defaultValue={input?.value ?? ''}
      // onChange={onBlur}
      // onImageUpload={handleFileUpload}
      // onVideoUpload={handleFileUpload}
      // onAudioUpload={handleFileUpload}
      onBlur={(e, value) => input && input?.onChange(value)}
      setOptions={{
        height: '50px',
        mode: 'inline',
        ...config,
        buttonList,
      }}
      // lang='ru'
    />
  );
};

export default SunEditor;
