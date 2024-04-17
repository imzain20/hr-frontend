import React, {useState, ChangeEvent} from 'react';
import styles from "./input.module.scss"
import passwordIcon from "../../../bootstrap-ui-kit/assets/png/password_icon.png"

interface InputProps {
    label: string;
    type: string;
    inputName: string;
    value: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    placeholder?: string;
    IsPasswordMatch?: string;
    showPasAcceptanceCrieteria?: boolean;
    apiError?: string | boolean;
    onChange: (name : string, value : string, error : string | boolean) => void;
}

const Input: React.FC < InputProps > = ({
    label,
    type,
    inputName,
    value,
    required,
    minLength,
    maxLength,
    placeholder,
    IsPasswordMatch,
    showPasAcceptanceCrieteria,
    apiError,
    onChange
}) => {
    const [error, setError] = useState < string | boolean > (false);
    const [isFocused, setIsFocused] = useState(false);
    const [showSuccessBorder, setShowSuccessBorder] = useState(false)
    const [passwordShown, setPasswordShown] = useState(false);

    const validateInput = (inputValue : string) => {
        setError(false);
        setShowSuccessBorder(true)
        if (required && inputValue.trim() === '') {
            setError('This field is required.');
            setShowSuccessBorder(false)
        } else if (minLength && inputValue.length < minLength) {
            setError(`Minimum length should be ${minLength} characters.`);
            setShowSuccessBorder(false)
        } else if (maxLength && inputValue.length > maxLength) {
            setError(`Maximum length should be ${maxLength} characters.`);
            setShowSuccessBorder(false)
        } else if (type === 'email' && !/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(inputValue)) {
            setError('Invalid input format.');
            setShowSuccessBorder(false)
        } else if (type === 'text' && !/^[A-Za-z ]+$/.test(inputValue)) {
            setError('Invalid input format.');
            setShowSuccessBorder(false)
        } else if (type === 'password' && !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+,-./:;<=>?@[\\\]^_`{|}~]).{8,}$/.test(inputValue)) {
            setError('Enter a combination of uppercase, lowercase, and numbers');
            setShowSuccessBorder(false)
        } else if (type === 'email' && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputValue)) {
            setError('Invalid input format.');
        } else if (type === 'number' && !/^[0-9]*$/.test(inputValue)) {
            setError('Invalid input format');
        }
    };

    const handleChange = (event : ChangeEvent < HTMLInputElement >) => {
        const {name, value} = event.target;
        validateInput(value);
        onChange(name, value, error);
    };

    const handleBlur = () => {
        if (required) {
            validateInput(value);
            onChange(inputName, value, error);
        }
        setIsFocused(false);
    };
    const handleFocus = () => {
        setIsFocused(true);
    };
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <div className={styles.container}>
            <p className={styles.group}>
                <div className={styles.rowContainer}>
                    <input 
                        id={inputName} 
                        type={type === "password" ? passwordShown ? "text" : "password" : type == 'number' ? 'text' : type}
                        name={inputName}
                        placeholder={placeholder}
                        value={value}
                        style={{borderBottom: isFocused ? '1px solid #bbdcff' : error || type === 'password' && IsPasswordMatch == "Not Matched" || apiError ? '1px solid #FC5959' : showSuccessBorder ? '1px solid #63DAA0' : '1px solid #BDBDBD'}}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${styles.input} ${value ? styles.inputWithValue : ""}`}
                        onFocus={handleFocus}
                        required={required}
                    />

                    <label 
                        className={styles.label}>
                        {label}
                    </label>
                    {
                    type === 'password' && 
                      <div className={styles.image} onClick={togglePassword}>
                        <img src={passwordIcon} className={styles.icon}/>
                    </div>
                    } 
                </div>
                {
                showPasAcceptanceCrieteria && 
                <p className={error && error !== 'This field is required.' ? styles.passwordError : styles.passwordCriteria}>
                    {
                    error && error !== 'This field is required.' ? error : 'Acceptance criteria for password'
                    }
                </p>
                } 
            </p>
          </div>
    );
}
export default Input;
