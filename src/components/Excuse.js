import Clown from "../assets/images/clown.webp";

const Excuse = (props) => {
  const { excuse } = props;

  const renderClownEmoji = () => {
    if (excuse) {
      return <img src={Clown} className="clown-image" alt="Clown" />;
    } else {
      return null;
    }
  };

  return (
    <div className="excuse">
      {renderClownEmoji()}
      {excuse}
      {renderClownEmoji()}
    </div>
  );
};

export default Excuse;
