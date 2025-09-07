import React from "react";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  icon,
  iconPosition = "left",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-ocean-500 hover:bg-ocean-600 text-white shadow-sm",
    secondary:
      "bg-deep-100 hover:bg-deep-200 text-deep-900 dark:bg-deep-800 dark:hover:bg-deep-700 dark:text-white",
    outline:
      "border-2 border-ocean-500 text-ocean-500 hover:bg-ocean-500 hover:text-white dark:border-ocean-400 dark:text-ocean-400",
    ghost:
      "text-deep-600 hover:bg-deep-100 dark:text-deep-300 dark:hover:bg-deep-800",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    icon: "p-2",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} disabled={disabled} {...props}>
      {icon && iconPosition === "left" && (
        <span className="mr-2 flex items-center">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="ml-2 flex items-center">{icon}</span>
      )}
    </button>
  );
}
