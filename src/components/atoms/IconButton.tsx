"use client";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export default function IconButton({
  icon,
  className = "",
  ...rest
}: IconButtonProps) {
  return (
    <button
      {...rest}
      className={`p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 ${className}`}
      type={rest.type ?? "button"}
    >
      {icon}
    </button>
  );
}
