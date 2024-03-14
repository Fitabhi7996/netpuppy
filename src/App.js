import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MacBookPro16 from "./pages/MacBookPro16";
import EventsAndMore from "./pages/EventsAndMore";
import MBA from "./pages/MBA";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/events-and-more":
        title = "";
        metaDescription = "";
        break;
      case "/mba-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MacBookPro16 />} />
      <Route path="/events-and-more" element={<EventsAndMore />} />
      <Route path="/mba-2" element={<MBA />} />
    </Routes>
  );
}
export default App;
