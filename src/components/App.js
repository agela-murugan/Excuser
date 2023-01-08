import { Container } from "@mui/system";
import Categories from "./Categories";
import Heading from "./Heading";

const App = () => {
  //make the API call here
  return (
    <Container>
      <Container sx={containerStyle}>
        <Heading />
        <Categories />
        {/* Generate button */}
        {/* The excuse should be displayed here */}
      </Container>
    </Container>
  );
};

const containerStyle = {
  backgroundColor: "#ece2d0",
  borderRadius: "1rem",
  color: "black",
  padding: "5rem",
  textAlign: "center",
  boxShadow: "10px 10px 12px -8px rgba(0,0,0,0.75);",
};

export default App;
