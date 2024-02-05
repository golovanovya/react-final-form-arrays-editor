import React from 'react';
import Editor from './Editor';

const FormEditor = (
  input,
  ...rest
) => (
  <Editor {...rest} {...input} />
)

export default FormEditor;
