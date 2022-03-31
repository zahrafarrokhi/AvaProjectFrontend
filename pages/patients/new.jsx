// import propTypes from 'eslint-plugin-react/lib/rules/prop-types';
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
// import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import Layout from "../../components/loginlayout";
import styles from "../../styles/PatientInfo.module.scss";
// import { createPatient } from '../../lib/slices/patient';

export function ImageComponent(props) {
  const { info, ind, value, onChange } = props;
  const input = useRef(null);
  return (
    <div key={ind} className={`  ${styles.item} ${styles.itemimg}`}>
      <img
        src={value ? URL.createObjectURL(value) : undefined}
        className={`${styles.image}`}
      />
      <input
        className={`${styles.imagepf}`}
        type="file"
        name={`field_${ind}`}
        title=""
        value=""
        ref={input}
        id={`field_${ind}`}
        onChange={(e) => onChange({ target: { value: e.target.files[0] } })}
        disabled={!info.editable}
      />
      <button
        className={`btn btn-outline-secodary ${styles.imagebtn} d-flex align-items-center justify-content-center flex-row`}
        onClick={() => input.current.click()}
      >
        <span
          className={`d-flex align-items-cetner justify-content-center mx-1 ${styles.imageicn}`}
        >
          +
        </span>
        {info.label}
      </button>
    </div>
  );
}
ImageComponent.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    editable: PropTypes.bool,
  }).isRequired,
  ind: PropTypes.number.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};
export function InputComponent(props) {
  const { info, ind, value, onChange } = props;
  return (
    <div key={ind} className={`  align-self-center ${styles.item}`}>
      <label htmlFor={`field_${ind}`} required={info.required}>
        {info.label}
      </label>
      <input
        className="form-control"
        name={`field_${ind}`}
        id={`field_${ind}`}
        value={value}
        placeholder={info.placeholder}
        onChange={onChange}
        disabled={!info.editable}
      />
    </div>
  );
}
InputComponent.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    editable: PropTypes.bool,
  }).isRequired,
  ind: PropTypes.number.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};
export function NumberInputComponent(props) {
  const { info, ind, value, onChange } = props;
  return (
    <div key={ind} className={` align-self-center ${styles.item}`}>
      <label htmlFor={`field_${ind}`} required={info.required}>
        {info.label}
      </label>
      <input
        dir="ltr"
        className="form-control"
        name={`field_${ind}`}
        id={`field_${ind}`}
        value={value}
        placeholder={info.placeholder}
        onChange={(e) =>
          onChange({ target: { value: e.target.value.replace(/\D/g, "") } })
        }
        disabled={!info.editable}
      />
    </div>
  );
}
NumberInputComponent.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    editable: PropTypes.bool,
  }).isRequired,
  ind: PropTypes.number.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};
export function DateComponent(props) {
  const { info, ind, value, onChange } = props;
  return (
    <div key={ind} className={`  align-self-center ${styles.item}`}>
      <label htmlFor="" required={info.required}>
        {info.label}
      </label>
      <input
        className="form-control"
        name={`field_${ind}`}
        id={`field_${ind}`}
        value={value}
        onChange={onChange}
        disabled={!info.editable}
      />
    </div>
  );
}
DateComponent.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    editable: PropTypes.bool,
  }).isRequired,
  ind: PropTypes.number.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};
export function TextareaComponent(props) {
  const { info, ind, value, onChange } = props;
  return (
    <div key={ind} className={` align-self-center ${styles.textitem}`}>
      <label htmlFor="">{info.label}</label>
      <textarea
        className={`form-control  ${styles.textarea}`}
        value={value}
        disabled={!info.editable}
        onChange={onChange}
      />
    </div>
  );
}
TextareaComponent.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    editable: PropTypes.bool,
  }).isRequired,
  ind: PropTypes.number.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export function InputGenderComponent(props) {
  const { info, ind, value, onChange } = props;

  return (
    <div key={ind} className={`  align-self-center ${styles.item}`}>
      <label htmlFor={`field_${ind}`}>{info.label}</label>
      <select
        className="form-select form-control"
        aria-label=".form-select-lg"
        value={value}
        onChange={onChange}
        disabled={!info.editable}
      >
        <option value={null} />
        <option value="m">مرد</option>
        <option value="f">زن</option>
      </select>
    </div>
  );
}

InputGenderComponent.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    editable: PropTypes.bool,
  }).isRequired,
  ind: PropTypes.number.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export function CheckboxComponent(props) {
  const { info, ind, value, onChange } = props;
  return (
    <div
      key={ind}
      className={`  align-self-center ${styles.item} ${styles.checkbox}`}
    >
      <label htmlFor="" className={`m-1 p-3 ${styles.checkboxlabel}`}>
        {info.label}
      </label>

      <div className="d-flex flex-wrap">
        {info.options.map((item) => (
          <div
            className={`form-check m-2 mx-4 ${styles.checkboxitem}`}
            key={item.id}
          >
            <input
              type="checkbox"
              id={`${info.id}_${item.id}`}
              className="form-check-input"
              checked={value === item.id}
              onChange={() => onChange({ target: { value: item.id } })}
            />
            <label className="ml-2" htmlFor={`${info.id}_${item.id}`}>
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
CheckboxComponent.prototype = {
  info: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    editable: PropTypes.bool,
  }).isRequired,
  ind: PropTypes.number.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};
const FIELDS = [
  {
    id: "image",
    label: "تصویر پروفایل",
    editable: true,
    component: ImageComponent,
  },
  {
    id: "first_name",
    label: "نام",
    required: true,
    editable: true,
    component: (props) => (
      <InputComponent
        {...props}
        value={props.value === "---" ? "" : props.value}
      />
    ),
  },
  {
    id: "last_name",
    label: "نام خانوادگی",
    required: true,
    editable: true,
    component: (props) => (
      <InputComponent
        {...props}
        value={props.value === "---" ? "" : props.value}
      />
    ),
  },
  {
    id: "national_id",
    label: "کد ملی",
    required: true,
    editable: true,
    component: NumberInputComponent,
  },
  {
    id: "date_of_birth",
    label: "تاریخ تولد ",
    required: true,
    editable: true,
    component: DateComponent,
  },

  {
    id: "gender",
    label: "جنسیت",
    editable: true,
    component: InputGenderComponent,
  },
  {
    id: "phone_number",
    label: "تلفن ثابت",
    editable: true,
    component: NumberInputComponent,
  },
  {
    id: "mobile1",
    label: "تلفن همراه",
    placeholder: "09*********",
    editable: true,
    component: NumberInputComponent,
  },
  {
    id: "mobile2",
    label: "تلفن همراه ۲",
    editable: true,
    component: NumberInputComponent,
  },
  {
    id: "email",
    label: "ایمیل",
    editable: true,
    component: InputComponent,
  },
  {
    id: "address",
    label: "نشانی منزل یا محل کار",
    editable: true,
    component: TextareaComponent,
  },
  {
    id: "introduce_by",
    label: "طریقه آشنایی",
    editable: true,
    options: [
      {
        id: "friends",
        label: "دوستان و آشنایان",
      },
      {
        id: "sms",
        label: "پیامک",
      },
      {
        id: "center",
        label: "تابلو مرکز",
      },
      {
        id: "city",
        label: "تبلیغات شهری",
      },
    ],
    component: CheckboxComponent,
  },
];
function PatientNew(props) {
  const [state, setState] = useState({});
  // const dispatch = useDispatch();
  const router = useRouter();
  const updateState = (key, value) => {
    setState({ ...state, [key]: value });
  };
  const submit = async () => {
    try {
      // await dispatch(createPatient({ ...state })).unwrap();
      router.push("/patients/history");
    } catch (e) {
      // setError(true);
    }
  };
  return (
    <div className={`d-flex flex-column w-100 ${styles.cnt}`}>
      <div
        className={`d-flex flex-row flex-wrap align-self-center justify-content-between justify-content-md-start align-items-center ${styles.itemholder} w-100`}
      >
        {FIELDS.map((_, i) => (
          <_.component
            info={_}
            ind={i}
            key={`field_inp_${_.id}_${i}`}
            value={state[_.id]}
            onChange={(e) => updateState(_.id, e.target.value)}
          />
        ))}
      </div>

      {/* <ErrorComponent error={error} redErr={redErr}/> */}
      <div className="d-flex flex-row align-self-end justify-content-end w-100">
        <button
          type="submit"
          className={`btn btn-primary  btn-lg ${styles.btn_submit}`}
          onClick={submit}
        >
          ادامه
        </button>
      </div>
    </div>
  );
}
PatientNew.getLayout = (page) => <Layout>{page}</Layout>;
export default PatientNew;
