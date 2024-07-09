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

const SunEditor = ({ field, form, config = {} }) => {

  return (
    <_SunEditor
      setContents={field?.value ?? ''}
      // onChange={onBlur}
      // onImageUpload={handleFileUpload}
      // onVideoUpload={handleFileUpload}
      // onAudioUpload={handleFileUpload}
      onChange={(content) => form.setFieldValue(field.name, content)}
      setOptions={{
        height: '50px',
        mode: 'inline',
        ...config,
        buttonList,
      }}
      lang={lang}
    />
  );
};

export default SunEditor;
