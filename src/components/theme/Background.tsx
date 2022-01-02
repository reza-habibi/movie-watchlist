import React from 'react';

const Background = ( { children }:any ) =>
{
    return (
       
        <div className="bg-white dark:bg-black transition-all">
            {children}
        </div>
    )
}

export default Background;