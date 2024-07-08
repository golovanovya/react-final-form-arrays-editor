import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'suneditor/src/assets/css/suneditor.css'; // Import Sun Editor's CSS File
import lang from 'suneditor/src/lang/ru';
import _SunEditor from 'suneditor-react';
import { Error, Label, Wrapper } from './styled';

const buttonList = [
  [
    'bold', 'italic', 'fontSize', 'formatBlock', 'blockquote',
    'removeFormat',
    'outdent', 'indent',
    'align', 'list',
    'table', 'link', 'image', // You must add the "imageGalleryUrl".
  ]
];

const Editor = ({
  value,
  onChange,
  error,
  height,
  id,
  inline,
  label,
  className,
  onUpload,
  noBorder,
  showHint,
  noImage,
  ...rest
}) => {
  
  return (
    <Wrapper error={error} noBorder={noBorder} className={className}>
      <_SunEditor
        defaultValue={value}
        id={id}
        onChange={value => onChange && onChange(value)}
        // onImageUpload={handleFileUpload}
        // onVideoUpload={handleFileUpload}
        // onAudioUpload={handleFileUpload}
        // onBlur={(e, value) => onChange && onChange(value)}
        setOptions={{
          ...rest,
          minHeight: '50px',
          height: 'auto',
          mode: 'inline',
          buttonList,
        }}
        lang={lang}
      />
      <Label hasValue={value || hasValue}>{label}</Label>

      {showHint && <Error text={error} />}
    </Wrapper>
  );
}

Editor.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  height: PropTypes.number,
  inline: PropTypes.bool,
  noBorder: PropTypes.bool,
  noImage: PropTypes.bool,
  showHint: PropTypes.bool,
  onUpload: PropTypes.func,
};

Editor.defaultProps = {
  inline: true,
  showHint: true,
};

export default Editor;
