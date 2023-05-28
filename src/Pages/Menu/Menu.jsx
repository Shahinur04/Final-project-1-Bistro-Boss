import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';

const Menu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch("../../../public/menu.json")
        .then(res=>res.json())
        .then(data=>{const popularItems =data.filter(item=>item.category === 'popular');
        setMenu(popularItems)})
    },[])
    return (
        <section>
          <SectionTitle
          heading={"From our Menu"}
          subHeading={"Popular Items"}>

          </SectionTitle>
          
            <div>
                  {
                    menu.map(item =><MenuItem key={item._id}>
                    </MenuItem>)
                  }
            </div>
          
        </section>
    );
};

export default Menu;