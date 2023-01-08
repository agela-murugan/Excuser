import { Button } from "@mui/material";
import { Container } from "@mui/system";

const App = () => {
  const onButtonClick = () => {
    alert("Clicked a button");
  };
  return (
    <Container>
      Main page
      <br />
      <Button variant="contained" onClick={onButtonClick}>
        Hell World
      </Button>
    </Container>
  );
};

export default App;
