import Navbar from "../components/Navbar";

interface Props {}

const Menu = (props: Props) => {
  return (
    <>
      <div className="bg-home-bg h-screen bg-cover">
        <Navbar />
      </div>
    </>
  );
};

export default Menu;
