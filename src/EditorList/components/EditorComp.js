import React, { useState, useEffect } from "react";
import { Wrapper } from "../styled";
import { Editor } from "@tinymce/tinymce-react";

export const EditorComp = ({ initialValue, onChange, ...rest }) => {
  const editorInit = {
    menubar: false,
    height: 100,
    plugins: "link table image imagetools lists link autoresize",
    toolbar: `bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table link | fontsizeselect | image`,
  };

  const [value, setValue] = useState(initialValue ?? "");

  useEffect(() => {
    setValue(initialValue ?? "");
  }, [initialValue]);

  const handleEditorChange = (newValue) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Wrapper>
      <Editor
        {...rest}
        apiKey="7r2ckfol312wws1v98jjic4l9us0e164iz44bn1ywesqkuw3"
        init={editorInit}
        value={value}
        onEditorChange={handleEditorChange}
      />
    </Wrapper>
  );
};
