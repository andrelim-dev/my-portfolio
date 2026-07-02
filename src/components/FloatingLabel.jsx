export function FloatingLabelInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="group relative">
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        className="peer w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-on-background transition-colors text-on-background"
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-4 text-on-surface-variant pointer-events-none transition-all peer-focus:-top-5 peer-focus:text-label-sm peer-focus:text-on-background peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-label-sm"
      >
        {label}
      </label>
    </div>
  );
}

export function FloatingLabelTextarea({
  id,
  label,
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="group relative">
      <textarea
        id={id}
        name={id}
        rows={4}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        className="peer w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-on-background transition-colors resize-none text-on-background"
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-4 text-on-surface-variant pointer-events-none transition-all peer-focus:-top-5 peer-focus:text-label-sm peer-focus:text-on-background peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-label-sm"
      >
        {label}
      </label>
    </div>
  );
}
