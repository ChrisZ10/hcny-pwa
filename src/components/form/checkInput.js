import React from 'react';

import * as formStyles from '../../styles/modules/form.module.scss';

const CheckInput = ( props ) => {
  
  return (
    <div className = { formStyles.optionContainer }>
      { props.options.map(( option ) => (
        <label 
          key = { option.value }
          className = { formStyles.option }
        >
          <input { ...extractInputProps( props, option ) } />
          <span>{ option.label || option.value }</span>
        </label>
      ))}
    </div>
  );
};

const extractInputProps = ( { formik, options, ...otherProps }, option ) => {
  const props = {
    value: formik.values[otherProps.name],
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    ...otherProps
  }

  if (props.type === 'checkbox') {
    props.value = option.value;
    props.checked = formik.values[props.name].includes(option.value);
    props.onChange = ( event ) => {
      const val = formik.values[props.name];
      event.target.checked? 
        val.push( event.target.value ) : 
        val.splice(val.indexOf( event.target.value ), 1);
      formik.setFieldValue(val);
    };
  } else if (props.type === 'radio') {
    props.value = option.value;
    props.checked = option.value === formik.values[props.name];
  }

  return props;
}

export default CheckInput;