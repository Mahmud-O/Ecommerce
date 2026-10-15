export const Input = ({ name, required, onBlur, id, type = 'text', placeholder, value, onChange, className = '' }) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            id={id}
            required={required}
            onBlur={onBlur}
            onChange={onChange}
            className={`w-full px-4 py-2.5 rounded-xl border-2 border-ink bg-paper text-ink placeholder:text-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 transition-all ${className}`}
        />
    );
}
export default Input;
