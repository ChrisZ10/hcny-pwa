import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import hcnyApi from '../../api/hcny';
import MyTextInput from './MyTextInput';
import MyTextArea from './MyTextArea';
import * as formStyles from '../../styles/modules/form.module.scss';

const PrayerRequestForm = () => {
  const regex = /(\d{3})-(\d{3})-(\d{4})/;

  const sendDataToEmail = async (values) => {
    const firstName = values.firstName;
    const lastName = values.lastName;
    const email = values.email;
    const phone = values.phone || "";
    const prayerRequest = values.prayerRequest;

    try {
      const res = await hcnyApi.post('/api/v1/prayer-request-form', { firstName, lastName, email, phone, prayerRequest });
      if (res.data.success) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const isSuccessful = sendDataToEmail(values);
    if (isSuccessful) {
      setSubmitting(false);
      resetForm();
      alert("提交成功");
    } else {
      alert("提交失敗");
    }
  };

  return (
    <>
      <h1 className = { formStyles.title }>代禱卡</h1>
      <Formik
        initialValues = {{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          prayerRequest: ""
        }}
        validationSchema = { Yup.object({
          firstName: Yup.string()
            .max(15, "請填寫最多15個字符")
            .required("必填"),
          lastName: Yup.string()
            .max(20, "請填寫最多20個字符")
            .required("必填"),
          email: Yup.string()
            .email("請填寫有效的郵箱地址")
            .required("必填"),
          phone: Yup.string()
            .matches(regex, "請填寫有效的電話號碼"),
          prayerRequest: Yup.string()
            .required("必填")
        })}
        onSubmit = { handleSubmit }
      >
        <Form>
          <MyTextInput
            label = "姓氏*"
            name = "lastName"
            type = "text"
            placeholder = "您的姓氏"
          />
          <MyTextInput
            label = "名字*"
            name = "firstName"
            type = "text"
            placeholder = "您的名字"
          />
          <MyTextInput
            label = "電子郵箱*"
            name = "email"
            type = "text"
            placeholder = "您的電子郵箱"
          />
          <MyTextInput
            label = "電話號碼（格式：###-###-####）"
            name = "phone"
            type = "text"
            placeholder = "您的電話號碼"
          />
          <MyTextArea
            label = "代禱事項*"
            name = "prayerRequest"
            type = "text"
            placeholder = "您的代禱事項"
          />
          <button className = { formStyles.submit } type = "submit">提交</button>
        </Form>
      </Formik>
    </>
  );
};

export default PrayerRequestForm;