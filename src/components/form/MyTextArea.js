import React from 'react';
import { useField } from 'formik';

import * as formStyles from '../../styles/modules/form.module.scss';

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label 
        htmlFor = { props.id || props.name }
        className = { formStyles.label }
      >
        { label }
      </label>
      <textarea 
        rows = "5" 
        { ...field } 
        { ...props }
        className = { formStyles.textarea }
      >
      </textarea>
      {meta.touched && meta.error? (
        <div className = { formStyles.error } >{ meta.error }</div>
      ) : null}
    </>
  );
};

export default MyTextArea;