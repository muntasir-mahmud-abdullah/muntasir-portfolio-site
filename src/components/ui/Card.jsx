export default function Card({ children, className = '', hover = true }) {
  return (
    <div 
      className={`card bg-base-200 shadow-xl ${hover ? 'hover:shadow-2xl transition-shadow duration-300' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export function CardBody({ children, className = '' }) {
  return (
    <div className={`card-body ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }) {
  return (
    <h2 className={`card-title ${className}`}>
      {children}
    </h2>
  );
}
