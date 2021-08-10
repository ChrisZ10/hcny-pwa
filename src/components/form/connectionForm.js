import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import hcnyApi from '../../api/hcny';
import MyTextInput from './myTextInput';
import MyCheckBox from './myCheckBox';
import * as formStyles from '../../styles/modules/form.module.scss';

const ConnectionForm = () => {
  const regex = /(\d{3})-(\d{3})-(\d{4})/;

  const sendDataToEmail = async (values) => {
    const firstName = values.firstName;
    const lastName = values.lastName;
    const gender = values.gender;
    const email = values.email;
    const phone = values.phone || "";
    const address = values.address || "";
    const city = values.city || "";
    const state = values.state || "";
    const zip = values.zip || "";
    const status = values.status || "";
    const age = values.age || "";
    const about = values.about || [];
    const ref = values.ref || "";

    try {
      const res = await hcnyApi.post('/api/v1/connection-form', { firstName, lastName, email, phone });
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
      <h1 className = { formStyles.title }>新朋友聯繫卡</h1>
      <Formik
        initialValues = {{
          firstName: "",
          lastName: "",
          gender: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          status: "",
          age: "",
          about: [],
          ref: ""
        }}
        validationSchema = { Yup.object({
          firstName: Yup.string()
            .max(15, "請填寫最多15個字符")
            .required("必填"),
          lastName: Yup.string()
            .max(20, "請填寫最多20個字符")
            .required("必填"),
          gender: Yup.string()
            .required("必選"),
          email: Yup.string()
            .email("請填寫有效的郵箱地址")
            .required("必填"),
          phone: Yup.string()
            .matches(regex, "請填寫有效的電話號碼")
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
          <MyCheckBox
            label = "性別*"
            name = "gender"
            type = "radio"
            options = {[
              {value: "m", label: "先生"},
              {value: "f", label: "女士"}
            ]}
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
          <MyTextInput
            label = "地址"
            name = "address"
            type = "text"
            placeholder = "您的地址"
          />
          <MyTextInput
            label = "城市"
            name = "city"
            type = "text"
            placeholder = "您所在的城市"
          />
          <MyTextInput
            label = "州"
            name = "state"
            type = "text"
            placeholder = "您所在的州"
          />
          <MyTextInput
            label = "郵編"
            name = "zip"
            type = "text"
            placeholder = "您的郵編"
          />
          <MyCheckBox
            label = "居住狀態"
            name = "status"
            type = "radio"
            options = {[
              {value: "resident", label: "定居"},
              {value: "newbie", label: "新搬到這裡"},
              {value: "traveler", label: "旅遊"}
            ]}
          />
          <MyCheckBox
            label = "年齡"
            name = "age"
            type = "radio"
            options = {[
              {value: "-20", label: "20歲及以下"},
              {value: "21-30", label: "21-30歲"},
              {value: "31-50", label: "31-50歲"},
              {value: "51+", label: "51歲及以上"}
            ]}
          />
          <MyCheckBox
            label = "關於我"
            name = "about"
            type = "checkbox"
            options = {[
              {value: "christian", label: "我已是基督徒"},
              {value: "prospect", label: "我願意成為基督徒"},
              {value: "visit", label: "我希望牧師前來探訪"}
            ]}
          />
          <MyTextInput
            label = "在本教會有何親友？姓名"
            name = "ref"
            type = "text"
            placeholder = "您在本教會的親友姓名"
          />
          <button className = { formStyles.submit } type = "submit">提交</button>
        </Form>
      </Formik>
    </>
  );
};

export default ConnectionForm;