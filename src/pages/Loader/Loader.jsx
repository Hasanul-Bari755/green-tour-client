import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center align-middle'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-emerald-400 text-center"></div>
        </div>
    );
};

export default Loader;