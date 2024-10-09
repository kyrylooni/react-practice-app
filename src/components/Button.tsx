import React from 'react'

interface Probs {
    children: string;
    color?: "primary" | "secondary" | "danger" ;
    onClick: () => void;
}

// de-structuring (for dynamic update) 
export const Button = ({ children, onClick, color = 'primary' }: Probs) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}
export default Button