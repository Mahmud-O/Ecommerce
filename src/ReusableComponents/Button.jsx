const Button = ({ children, type = 'button', variant = 'primary', size = 'md', className = '', onClick, disabled }) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 font-bold rounded-xl border-2 border-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0';
    const variants = {
        primary: 'bg-persimmon text-paper hover:bg-persimmon/90',
        secondary: 'bg-olive text-paper hover:bg-olive/90',
        marigold: 'bg-marigold text-ink hover:bg-marigold/90',
        outline: 'bg-paper text-ink hover:bg-marigold',
        danger: 'bg-brick text-paper hover:bg-brick/90'
    };
    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-6 py-2.5',
        lg: 'px-8 py-3 text-lg'
    };
    return (
        <button
            type={type}
            className={`${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
export default Button;
