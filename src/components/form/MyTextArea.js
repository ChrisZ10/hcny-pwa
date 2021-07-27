import React from 'react';
import { useField } from 'formik';

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor = { props.id || props.name }>{ label }</label>
      <textarea rows = "5" { ...field } { ...props }></textarea>
      {meta.touched && meta.error? (
        <div>{ meta.error }</div>
      ) : null}
    </>
  );
};

export default MyTextArea;