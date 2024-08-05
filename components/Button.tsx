// import React from 'react';

// type ButtonProps = {
//   text: string;
//   disabled?: boolean;
//   loading?: boolean;
//   link?: string;
//   onClick?: () => void;
// };



// const Button = ({ text, disabled, loading, link, onClick }: ButtonProps) => {
//   return (
//     // <button className="bg-zinc-800 text-zinc-50 rounded-full px-6 py-3 font-normal transition-colors hover:bg-zinc-900">Sign In</button>
//     <button onClick={onClick} className={`bg-zinc-800 text-zinc-50 rounded-full px-6 py-3 font-normal border border-zinc-700 transition-colors hover:bg-zinc-900 ${disabled ? 'cursor-not-allowed' : ''}`}>
//       {loading ? 'Loading...' : text}
//     </button>
//   );
// };

// export default Button;

// import React from 'react';

// const Banner = () => {
//   return (
//     <div className="bg-zinc-800 h-[300px] w-full flex justify-center items-center rounded-3xl">
//     </div >
//   );
// };

// export default Banner;


import React from 'react';
import Link from 'next/link';

interface Button {
  type?: 'button' | 'submit' | 'reset';
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
  icon?: any;
  loading?: boolean;
}

const Button = ({
  type = 'button',
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
  loading,
}: Button) => {

  return !link ? (
    <button type={type} className="w-full bg-zinc-800 text-zinc-50 rounded-full px-6 py-3 font-normal border border-zinc-700 transition-colors hover:bg-zinc-900"
      disabled={disabled} onClick={onClick}>
      {label}
    </button>
  ) : (
    link && (
      <Link href={link} className="w-full bg-zinc-800 text-zinc-50 rounded-full px-6 py-3 font-normal border border-zinc-700 transition-colors hover:bg-zinc-900">
        {loading ? 'Loading...' : label}
      </Link>
    )
  );
};

export default Button;