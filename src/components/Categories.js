import Category from "./Category";
import { categoryNames } from "../constants";
import { useState } from "react";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const renderCategories = () => {
    return categoryNames.map((category, index) => {
      let selectedClass = "";
      console.log("selectedCategory: ", selectedCategory);

      console.log("category: ", category);

      if (category.name === selectedCategory) {
        selectedClass = "category-button-selected";
      } else {
        selectedClass = "";
      }
      return (
        <Category
          name={category.name}
          key={index}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedClass={selectedClass}
        />
      );
    });
  };

  return (
    <>
      <div className="select-category">Select a category!</div>
      {renderCategories()}
    </>
  );
};

export default Categories;
