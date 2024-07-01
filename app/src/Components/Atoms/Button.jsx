export default function Button({ 
    children = "Button", 
    onClick, 
    className = '', 
    type = 'button', 
    ...props
}) {
  return (
    <button className={`btn ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
