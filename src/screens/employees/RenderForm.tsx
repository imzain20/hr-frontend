import React, { useEffect } from "react";
import styles from "./renderform.module.scss";
import { useGetLookupbyIdQuery } from "../../redux/api";
import { useUserState } from "../../redux/userSlice";
interface FormData {
  userId: string;
  value: string;
  userName: string;
}

interface Coordinates {
  top?: string;
  left?: string;
}

interface FormField {
  fieldName: string;
  fieldType: string;
  data: FormData[];
  coordinates?: Coordinates;
  styles?: object;
  optionalData?: any;
  fieldReference?: string;
  formFilter?: any[]; // Adjust the type according to your requirements
  isMandatory?: boolean;
  isReadOnly?: boolean;
  IsRestricted?: boolean;
  allowedAccess?: any[]; // Adjust the type according to your requirements
}

interface RenderFormProps {
  formfields: FormField[];
}

const RenderForm: React.FC<RenderFormProps> = ({ formfields }) => {
  return (
    <div style={{ marginTop: "24px", backgroundColor: "white" }}>
      {formfields?.map((field) => {
        if (field?.fieldType === "input") {
          return (
            <div className={styles.field}>
              <label htmlFor="input" className={styles.labelStyle}>
                {field?.fieldName}
              </label>
              <input
                id="input"
                type="text"
                className={`form-control ${styles.inputStyle}`}
                style={field?.styles}
                placeholder={"Enter Here"}
              />
            </div>
          );
        } else if (field?.fieldType === "text") {
          return (
            <div className={styles.field}>
              <p style={field.styles}>{field?.optionalData?.text}</p>
            </div>
          );
        } else if (field?.fieldType === "dropdown") {
          return <Dropdown field={field} />;
        }
        else if (field?.fieldType === "datepicker") {
          return (
            <div className={styles.field}>
              <label htmlFor="input" className={styles.labelStyle}>
                {field?.fieldName}
              </label>
              <input
                id="date"
                type="date"
                className={`form-control ${styles.inputStyle}`}
                style={field?.styles}
                placeholder={"Enter Here"}
              />
            </div>
          );
        }
        else if (field?.fieldType === "TextArea") {
          return (
            <div className={styles.field}>
              <label htmlFor="input" className={styles.labelStyle}>
                {field?.fieldName}
              </label>
              <textarea
                className="form-control"
                style={field?.styles}
              ></textarea>
            </div>
          );
        }
        else if (field?.fieldType === "checkbox") {
          if (field?.optionalData?.options && typeof field.optionalData.options === 'object') {
            return (
              <div className={styles.field}>
                {field.fieldName !== "Field Name" && <label className={styles.labelStyle}>{field.fieldName}</label>}
                {Object.keys(field?.optionalData?.options).map((key: string, index: number) => (
                  <div key={index} className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`checkbox-${index}`}
                      value={key}
                    />
                    <label className={styles.labelStyle} htmlFor={`checkbox-${index}`}>
                      {field.optionalData.options[key]}
                    </label>
                  </div>
                ))}
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export default RenderForm;

const Dropdown = (props: any) => {
  const userState = useUserState();
  const field = props.field;
  const { data, refetch } = useGetLookupbyIdQuery({
    id: field?.optionalData?.lookup,
    token: userState.token,
  });
  console.log(data);
  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className={styles.field}>
      <label htmlFor="drop-down" className={styles.labelStyle}>
        {field.fieldName}
      </label>
      <select
        className={`form-select ${styles.inputStyle}`}
        id="drop-down"
        aria-label="Default select example"
      >
        <option selected>Open this select menu</option>
        {data?.data?.options?.map((option: any) => {
          return <option>{option}</option>;
        })}
      </select>
    </div>
  );
};
