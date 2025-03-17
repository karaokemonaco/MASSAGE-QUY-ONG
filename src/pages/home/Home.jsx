import Banner from "./Banner.jsx";

import JoinDigest from "./JoinDigest";

import TrendingCollection from "./TrendConllection";

const Home = () => {
  return (
    <div className="mt-36 lg:mt-0">
      <Banner />
      <TrendingCollection />

      <JoinDigest />
    </div>
  );
};

export default Home;
