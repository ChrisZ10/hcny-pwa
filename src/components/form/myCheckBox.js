import React from 'react';
import { connect } from 'formik';

import CheckInput from './checkInput';
import * as formStyles from '../../styles/modules/form.module.scss';

const MyCheckBox = connect(( props ) => {  
  const { label, ...inputProps } = props;
  const { errors } = props.formik;

  return (
    <>
      <label className = { formStyles.label }>{ label }</label>
      <CheckInput { ...inputProps } />
      {  
        errors[inputProps.name] &&
        <div className = { formStyles.error } >
          { errors[inputProps.name] }
        </div>
      }
    </>
  );

});

export default MyCheckBox;