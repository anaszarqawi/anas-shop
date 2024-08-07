import React, { useEffect } from 'react';
import { Path, useController, useForm, UseFormRegister } from 'react-hook-form';
import { getErrorMsg } from '@/utils/errorMessages';

interface inputProps {
  type: 'text' | 'password' | 'email' | 'number' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'tel';
  name: string;
  label: Path<any>;
  placeholder?: string;
  value?: any;
  defaultValue?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: any;
  options?: { label: string | number; value: string | number }[];
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
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
  defaultValue,
  value,
  onChange,
  error,
  options,
  checked,
  disabled,
  className,
  style,
  required,
  autoComplete,
  autoFocus,
  width,
  register,
}: inputProps) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div className="w-full">
      <div className="relative">
        <label
          className={`absolute left-0 py-3 px-6 block mb-2 text-zinc-400 transition-all duration-150 ease-in-out ${
            isFocused || value ? '-top-[10px] left-4 py-0 px-1 text-sm bg-zinc-900' : 'top-0 text-base'
          }`}>
          {label}
        </label>
        <input
          className={`w-full bg-zinc-900 text-zinc-50 placeholder-zinc-500 rounded-2xl px-6 py-3 font-normal border border-zinc-700 transition-colors hover:bg-zinc-900 focus:border-zinc-300 outline-none ${
            disabled ? 'cursor-not-allowed' : 'cursor-text'
          } ${error ? 'border-red-500' : ''}`}
          type={type === 'password' && passwordVisible ? 'text' : type}
          id={name}
          checked={checked}
          disabled={disabled}
          style={style}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          onFocus={() => setIsFocused(true)}
          {...register(name, { required, onBlur: () => setIsFocused(false) })}
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm">
          {/* <Emoji emoji="❗️" width={12} height={12} /> */}❗️
          {getErrorMsg(error)}
        </div>
      )}
    </div>
  );
};

export default Input;
