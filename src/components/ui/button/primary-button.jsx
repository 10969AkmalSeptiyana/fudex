export function PrimaryButton({
  children,
  className,
  type,
  color = "bg-primary-color",
  size = "py-3 px-8",
  rounded = "rounded-sm",
}) {
  return (
    <button
      type={type}
      className={[
        "text-base text-white font-semibold",
        className,
        color,
        size,
        rounded,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
