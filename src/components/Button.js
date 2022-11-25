import React from 'react';

const Button = ({children,classes,handler}) => {
    return (
     
             <button
             onClick={handler} 
             className={`pt-3 pb-3 pr-8 pl-8 bg-[#547e7e] border-0 text-white hover:bg-[#7d9c9c] ${classes}`}>
                {children}
             </button>
       
    );
};

export default Button;