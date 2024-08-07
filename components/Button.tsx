import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Button {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  priority?: 'primary' | 'secondary' | 'tertiary';
  theme?: 'blue' | 'black' | 'semiWhite' | 'danger';
  emoji?: string;
  label: string;
  link?: string;
  width?: 'full' | 'fit';
  disabled?: boolean;
  onClick?: () => void;
  emojiPosition?: 'left' | 'right';
  fontWeight?: 'normal' | 'medium' | 'bold';
  icon?: string;
  alt?: string;
  loading?: boolean;
}

const Button = ({
  type = 'button',
  className,
  priority,
  theme,
  label,
  emoji,
  emojiPosition,
  link,
  disabled,
  width,
  fontWeight,
  onClick,
  icon,
  alt,
  loading,
}: Button) => {
  return !link ? (
    <button
      type={type}
      className={
        'flex flex-row items-center justify-center gap-2 w-full bg-zinc-800 text-zinc-100 rounded-2xl px-6 py-3 font-normal border border-zinc-700 transition-colors hover:bg-zinc-900 cursor-pointer' +
        (disabled ? ' !text-zinc-400 bg-zinc-700 cursor-default hover:bg-zinc-700' : '') +
        (className ? ` ${className}` : '')
      }
      disabled={disabled}
      onClick={onClick}>
      {icon && alt && <Image priority src={icon} className="fill-zinc-100" alt={alt} width={20} height={20} />}
      {loading ? 'Loading...' : label}
    </button>
  ) : (
    link && (
      <Link
        href={link}
        className={
          'flex flex-row items-center justify-center gap-2 w-full bg-zinc-100 text-zinc-50 rounded-2xl px-6 py-3 font-normal border border-zinc-700 transition-colors hover:bg-zinc-900 cursor-pointer' +
          (className ? ` ${className}` : '')
        }>
        {icon && alt && <Image priority src={icon} className="fill-zinc-100" alt={alt} width={20} height={20} />}
        {loading ? 'Loading...' : label}
      </Link>
    )
  );
};

export default Button;
