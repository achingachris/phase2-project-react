import Header from "../components/Header";
import Meta from "../components/Meta";

const Home = () => {
  // page content
  const pageTitle = "Plane Spotter";
  const pageDescription = "One Stop for all your plane spotting Geeky needs";

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />
    </div>
  );
};

export default Home;
