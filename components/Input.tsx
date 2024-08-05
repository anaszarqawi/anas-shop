import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { getErrorMsg } from '@/utils/errorMessages';

interface inputProps {
  type: 'text' | 'password' | 'email' | 'number' | 'select' | 'textarea' | 'checkbox' | 'radio';
  name: string;
  label: Path<any>;
  placeholder?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: any;
  options?: { label: string | number; value: string | number }[];
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  rows?: number;
  autoComplete?: string;
  autoFocus?: boolean;
  width?: 'full' | 'fit';
  register: UseFormRegister<any>;
}

const Input = ({
  type,
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  options,
  checked,
  disabled,
  className,
  style,
  required,
  min,
  max,
  step,
  rows,
  autoComplete,
  autoFocus,
  width,
  register,
}: inputProps) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  // if (type === 'select' && options) {
  //   return (
  //     <div className={styles.inputContainer}>
  //       <select
  //         className={`${styles.input} ${styles.select} ${width === 'full' ? styles.full : styles.fit} ${error ? styles.error : ''
  //           }`}
  //         id={name}
  //         disabled={disabled}
  //         style={style}
  //         defaultValue=""
  //         {...register(name, { required })}>
  //         <option value="" disabled={true} hidden={true}></option>
  //         {options.map((option) => (
  //           <option key={option.value} value={option.value}>
  //             {option.label}
  //           </option>
  //         ))}
  //       </select>
  //       <div className={`${styles.label} ${value !== '' ? styles.filled : ''}`}>{label}</div>
  //     </div>
  //   );
  // }

  // if (type === 'textarea') {
  //   return (
  //     <div className={styles.inputContainer}>
  //       <textarea
  //         className={`${styles.input} ${styles.textarea} ${width === 'full' ? styles.full : styles.fit} ${error ? styles.error : ''
  //           }`}
  //         name={name}
  //         id={name}
  //         placeholder={placeholder}
  //         value={value}
  //         disabled={disabled}
  //         style={style}
  //         required={required}
  //         rows={rows}
  //       />
  //       <div className={`${styles.label} ${value !== '' ? styles.filled : ''}`}>{label}</div>
  //     </div>
  //   );
  // }

  // if (type === 'checkbox') {
  //   return (
  //     <div className={`${styles.inputContainer} ${type === 'checkbox' ? styles.checkbox : ''}`}>
  //       <input
  //         className={`${styles.input} ${width === 'full' ? styles.full : styles.fit} ${error ? styles.error : ''}`}
  //         type={type}
  //         name={name}
  //         id={name}
  //         placeholder={placeholder}
  //         value={value}
  //         checked={checked}
  //         disabled={disabled}
  //         style={style}
  //         required={required}
  //         min={min}
  //         max={max}
  //         step={step}
  //         autoComplete={autoComplete}
  //         autoFocus={autoFocus}
  //         width={width}
  //       />
  //       <label className={`${styles.label} ${value !== '' ? styles.filled : ''}`} htmlFor={name}>
  //         {label}
  //       </label>
  //     </div>
  //   );
  // }

  return (
    <div className='w-full'>
      {/* {type === 'password' &&
        (passwordVisible ? (
          <div className='w-4 h-4' onClick={() => setPasswordVisible(false)}>
            Hide
          </div>
        ) : (
          <div className="w-4 h-4" onClick={() => setPasswordVisible(true)}>
            Show
          </div>
        ))} */}
      <input
        className={`w-full bg-zinc-900 text-zinc-50 placeholder-zinc-500 rounded-full px-6 py-3 font-normal border border-zinc-700 transition-colors hover:bg-zinc-900 focus:border-zinc-300 outline-none`}
        type={type === 'password' && passwordVisible ? 'text' : type}
        id={name}
        placeholder={placeholder}
        checked={checked}
        disabled={disabled}
        style={style}
        min={min}
        max={max}
        step={step}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        {...register(name, { required })}
      />

      {/* <label
        className={`${styles.label} ${value !== '' ? styles.filled : ''} ${error ? styles.error : ''}`}
        htmlFor={name}>
        {label}
      </label> */}

      {error && (
        <div className='text-red-500 text-sm'>
          {/* <Emoji emoji="❗️" width={12} height={12} /> */}❗️
          {getErrorMsg(error)}
        </div>
      )}
    </div>
  );
};

export default Input;