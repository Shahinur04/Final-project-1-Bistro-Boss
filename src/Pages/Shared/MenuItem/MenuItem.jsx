import React from 'react';

const MenuItem = ({item}) => {
    const {image,price,recipe,category,name}=item;
    return (
        <div className='flex gap-4'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[100px]' src={image}  />
            <div>
                <h3 className='uppercase'>{name}--------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-400'>${price}</p>
        </div>
    );
};

export default MenuItem;