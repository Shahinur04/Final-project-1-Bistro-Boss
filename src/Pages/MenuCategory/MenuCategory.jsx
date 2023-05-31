import React from 'react';
import useMenu from '../../hooks/useMenu';

const MenuCategory = () => {
    const [menu]=useMenu();

    const popular=menu.filter(item=>item.category === 'popular');
    return (
        <div>
            
        </div>
    );
};

export default MenuCategory;