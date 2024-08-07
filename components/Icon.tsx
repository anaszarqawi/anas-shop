'use client';
type IconProps = {
  name: string;
  size?: 'xl' | '3xl' | '2xl';
  fill?: boolean;
  color?: string;
};

const Icon = ({ name, size = '3xl', fill = true, color }: IconProps) => {
  return (
    <div className="flex w-6 h-6 items-center justify-center">
      <span className={`material-symbols-rounded ${fill ? 'filled' : ''} text-${size}`}>{name}</span>
    </div>
  );
};

export default Icon;
