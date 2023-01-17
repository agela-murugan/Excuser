import { Container } from "@mui/system";
import Categories from "./Categories";
import Heading from "./Heading";

const App = () => {
    return (
        <Container sx={containerStyle}>
            <Heading />
            <Categories />
        </Container>
    );
};

const containerStyle = {
    backgroundColor: "#ece2d0",
    borderRadius: "1rem",
    color: "black",
    padding: "4rem 1rem",
    textAlign: "center",
    boxShadow: "10px 10px 12px -8px rgba(0,0,0,0.75);",
};

export default App;
