import React from "react";
import MenuItem from "../Shared/MenuItem/MenuItem";
import Covered from "../Shared/Covered/Covered";

const MenuCategory = ({items,title,img}) => {


  return (
    <div>
        {title && <Covered img={img}
      title="our menu"></Covered>}
      <div className="grid md:grid-cols-2 gap-4 mb-12 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
