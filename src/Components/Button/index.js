
const variants = {
    'primary': 'bg-indigo-600 text-white hover:enabled:bg-indigo-700 focus:ring-indigo-500',
    'danger': 'bg-red-600 text-white hover:enabled:bg-red-700 focus:ring-rose-500',
    'naked': 'text-gray-500 hover:text-gray-600 shadow-none'
}
const sizes = {
    small: 'px-2 py-1 text-xs leading-1',
    medium: 'px-4 py-2 text-sm ',
    large: 'px-4 py-2 text-base'
}

function Button({ className, variant = 'primary', size = 'small', ...props }) {
    return (
        <button
            className={`inline-flex justify-center items-center bordered-transparent border rounded-md font-md shadow-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed
            ${className} 
            ${variants[variant]}
            ${sizes[size]}
            `}
            {...props}   
        />
    );
}

export default Button