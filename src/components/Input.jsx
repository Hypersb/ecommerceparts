const Input = ({ 
  label, 
  error, 
  icon: Icon, 
  className = '',
  id,
  ...props 
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-automotive-700 dark:text-silver-300 mb-2"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-automotive-400" aria-hidden="true">
            <Icon size={20} />
          </div>
        )}
        <input
          id={inputId}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`w-full px-4 py-2.5 ${Icon ? 'pl-10' : ''} 
            bg-white dark:bg-secondary 
            border border-silver-300 dark:border-silver-600 
            rounded-lg 
            text-automotive-900 dark:text-white 
            placeholder-silver-400 
            focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent 
            transition-all duration-200
            ${error ? 'border-red-500' : ''}
            ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
