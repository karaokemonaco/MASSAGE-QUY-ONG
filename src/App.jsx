import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ScrollToTop from "./components/scrolls/Scroll";
import DefaultImage from "./components/deals/deal"; // Import DefaultImage
import CallNowButton from "./components/call/Call";

const App = () => {
  return (
    <div className="bg-black overflow-hidden">
      <ScrollToTop />
      <Header />
      <CallNowButton />
      <DefaultImage />

      <Outlet />

      <Footer />
    </div>
  );
};

export default App;
