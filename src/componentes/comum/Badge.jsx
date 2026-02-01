function Badge({ children, className = '' }) {
  return (
    <span className={`inline-block px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full ${className}`}>
      {children}
    </span>
  )
}

export default Badge