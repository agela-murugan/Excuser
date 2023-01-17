import { Button } from "@mui/material";

const Category = (props) => {
    const { name, setSelectedCategory, selectedClass } = props;

    const onCategoryClick = (name) => {
        setSelectedCategory(name);
    };
    return (
        <>
            <Button
                variant="outlined"
                className={"category-button " + selectedClass}
                onClick={() => onCategoryClick(name)}
            >
                {name}
            </Button>
        </>
    );
};

export default Category;
