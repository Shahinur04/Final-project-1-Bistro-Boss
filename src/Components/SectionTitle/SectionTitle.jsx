import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center mb-10 mx-auto md:w-3/12'>
            <p className='text-yellow-500 '>----{subHeading}----</p>
            
            <h3 className='text-4xl uppercase border-y-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;