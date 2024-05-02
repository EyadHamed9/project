import { Button, Menu, MenuItem, TableContainer } from "@mui/material";
import React, { useState } from "react";
import TableComponent from "./TableComponent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function SubCategoryList({ category, resetTitle, nameX }: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<any>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubCategorySelect = (subCategory: any) => {
    setSelectedSubCategory(subCategory);
    resetTitle(subCategory.title);
    setAnchorEl(null);
  };

  return (
    <>
      <div>
        
        
         
          {category.arr.map((sub: any, i: any) => (
           
            
            <TableComponent subCategory={sub} key={i} 
            
            />
        ))}
        
       
      </div>
    
    </>
  );
}

export default SubCategoryList;
