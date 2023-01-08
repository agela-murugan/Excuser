import Category from "./Category";
import { categoryNames } from "../constants";
import { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [excuse, setExcuse] = useState("");

  const renderCategories = () => {
    return categoryNames.map((category, index) => {
      let selectedClass = "";
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

  const getExcuse = () => {
    console.log("selectedCategory: ", selectedCategory);
    const url = `https://excuser-three.vercel.app/v1/excuse/${selectedCategory.toLowerCase()}`;
    axios
      .get(url)
      .then((response) => setExcuse(response.data[0].excuse))
      .catch((e) => {
        console.error("Something went wrong with the API: ", e);
      });
  };

  return (
    <>
      <div className="select-category">Select a category!</div>
      {renderCategories()}
      <Button className="generate-button" onClick={getExcuse}>
        Generate An Excuse
      </Button>
      <div className="excuse">
        {excuse && (
          <img
            src="https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Clown_emoji_large.png?v=1571606089"
            className="clown-image"
          />
        )}
        {excuse}
        {excuse && (
          <img
            src="https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Clown_emoji_large.png?v=1571606089"
            className="clown-image"
          />
        )}
      </div>
    </>
  );
};

export default Categories;
