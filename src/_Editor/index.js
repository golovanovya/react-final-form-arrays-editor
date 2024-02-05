import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'tinymce';
import _Editor from '@tinymce/tinymce-react';

import { Error1 as Error, Wrapper, Label } from './styled';

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
  const [TinyMCE, setEditor] = useState(null);
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    const load = async () => {
      setEditor(_Editor);
    };

    load();
  }, []);

  const onEditorChange = useCallback(
    content => {
      if (onChange) {
        onChange(content);
      }

      if (!hasValue || !content) {
        setHasValue(!!content);
      }
    },
    [onChange, hasValue],
  );

  if (!TinyMCE) {
    return null;
  }

  return (
    <Wrapper error={error} noBorder={noBorder} className={className}>
      <TinyMCE
        {...rest}
        id={id}
        value={value}
        init={{
          id,
          inline,
          plugins: 'link table image imagetools lists link autoresize',
          toolbar: `bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table link | fontsizeselect${
            !noImage ? ' | image' : ''
          }`,
          paste_data_images: true,
          table_toolbar: false,
          branding: false,
          menubar: false,
          language: 'ru',
          imagetools_cors_hosts: [window.location.host],
          images_upload_handler: onUpload,
          min_height: height,
          autoresize_bottom_margin: 10,
          indentation : '20px'
        }}
        onEditorChange={onEditorChange}
      />
      <Label hasValue={value || hasValue}>{label}</Label>

      {showHint && <Error text={error} />}
    </Wrapper>
  );
};

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
