import React from 'react';
import { useField } from 'formik';

import * as formStyles from '../../styles/modules/form.module.scss';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label 
        htmlFor = { props.id || props.name }
        className = { formStyles.label }
      >
        { label }
      </label>
      <input 
        { ...field } 
        { ...props }
        className = { formStyles.input }
      />
      {meta.touched && meta.error? (
        <div className = { formStyles.error }>{ meta.error }</div>
      ) : null}
    </>
  );
};

export default MyTextInput;