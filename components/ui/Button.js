export function Button({ children, className, ...props }) {
    return (
      <button
        className={`px-8 py-4 bg-transparent border border-white rounded-full hover:bg-white hover:text-black transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
  