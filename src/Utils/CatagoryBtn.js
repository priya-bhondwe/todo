import React, { useEffect, useState } from "react";

// CatagoryBtn component receives val, selectedCatagory, and handleSelected as props
const CatagoryBtn = ({ val, selectedCatagory, handleSelected }) => {
  // State to track if the category button is active
  const [activeCatagory, setActiveCatagory] = useState(false);

  // useEffect hook to determine if the current category is selected
  useEffect(() => {
    // Check if the current category is in the selected categories list
    const isSelected = selectedCatagory.some(
      (v) => v.catagory === val.catagory
    );
    // Set the active state based on the selection
    setActiveCatagory(isSelected);
  }, [selectedCatagory, val.catagory]);

  return (
    <li
      // On click, handle the selection of the category
      onClick={() => {
        handleSelected({
          id: val.id,
          catagory: val.catagory,
          emoji: val.emoji,
        });
      }}
      // Apply different styles based on whether the category is active or not
      className={`text-base max-sm:text-sm cursor-pointer flex items-center gap-2 font-medium text-white rounded-lg px-4 py-2 max-sm:py-1 ${
        activeCatagory
          ? "bg-purple-600 border-purple-300 border-2"
          : "bg-purple-400"
      }`}
    >
      {/* Display the emoji and category name */}
      <span className="text-2xl max-sm:text-lg">{val.emoji}</span>
      {val.catagory}
    </li>
  );
};

export default CatagoryBtn;
