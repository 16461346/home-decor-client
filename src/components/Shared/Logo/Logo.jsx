import React from 'react';
import logo from '../../../assets/images/logo.png'

const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
            <div className="p-1 rounded-full border bg-white ">
                <img src={logo} alt="logo" width="50" height="50" />
              </div> 
              <div>
                <h1 className='text-xl font-bold'><span className='text-primary'>Style</span>Decor</h1>
              </div>
        </div>
    );
};

export default Logo;