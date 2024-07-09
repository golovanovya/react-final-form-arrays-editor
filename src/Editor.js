
import React from 'react'
import { Editor as _Editor } from '@tinymce/tinymce-react';

const Editor = ({
  field,
  form,
  ...rest
}) => {
  return (
    // <input
    //   {...rest}
    //   value={input.value}
    //   onChange={(e, value) => {
    //     input.onChange(e.target.value)
    //     // onChange && onChange(e.target.value)
    //   }}
    // />
    <_Editor
      apiKey='7r2ckfol312wws1v98jjic4l9us0e164iz44bn1ywesqkuw3'
      {...rest}
      value={field.value}
      init={{
        height: 500,
        menubar: false,
        inline: true,
        plugins: 'link table image imagetools lists link autoresize',
        toolbar: `bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table link | fontsizeselect | image`,
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
      onEditorChange={content => {
        // onChange && onChange(content)
        form.setFieldValue(field.name, content)
      }}
    />
  );
};

export default Editor;
