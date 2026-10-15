export const Badge = ({ children, variant = 'default' }) => {
    const variants = {
        default: 'bg-persimmon text-paper',
        olive: 'bg-olive text-paper',
        marigold: 'bg-marigold text-ink',
        clay: 'bg-clay text-ink',
        sale: 'bg-marigold text-ink',
        outline: 'bg-paper text-ink'
    };
    return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full border-2 border-ink text-xs font-bold ${variants[variant] || variants.default}`}>
        {children}
    </span>
    );
};
export default Badge;
