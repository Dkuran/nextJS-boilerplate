import React from 'react';

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='margin-container h-screen'>
      <div className="grid">
        <main>{ children }</main>
      </div>
    </div>
  );
};

export default Layout;
