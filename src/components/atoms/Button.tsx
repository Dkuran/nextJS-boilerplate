import React from 'react';

interface Props {
  text: string;
  type: 'submit' | 'button';
  onClick?: () => void;
  disabled?: boolean;
}

const Layout: React.FC<Props> = ({ text, type, onClick, disabled }) => (
  <button onClick={onClick} type={type} disabled={disabled}>
    {<span>{text}</span>}
  </button>
);

export default Layout;
