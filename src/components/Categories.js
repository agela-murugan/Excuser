import Category from "./Category";
import { categoryNames } from "../constants";
import { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import Excuse from "./Excuse";

const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [excuse, setExcuse] = useState("");

    const renderCategories = () => {
        console.log("selectedCategory: ", selectedCategory);
        return categoryNames.map((category, index) => {
            console.log("category: ", category.name);
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
            <br />
            <br />
            <br />
            <Button className="generate-button" onClick={getExcuse}>
                Generate An Excuse
            </Button>
            <Excuse excuse={excuse} />
        </>
    );
};

export default Categories;
