import React from 'react';

//my offer component
const Offer = () => {
    return (
        <div>
 <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900 rounded">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Up to
             <br className="sm:hidden"></br> 10% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free BBQ Party! Use code: <p className='font-semibold text-blue-900'>"Green Ture16"</p></span>
				<span className="font-bold text-lg">Up to 16 December</span>
			</div>
			
		</div>
	</div>
</div>
        </div>
    );
};

export default Offer;