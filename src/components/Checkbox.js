export default function Checkbox({ className, text, ...rest }) {
  return (
    <label className={className}>
      <input {...rest} />
      <span>&nbsp;{text}</span>
    </label>
  );
}
