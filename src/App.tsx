import "./App.css";
import { About, Home, Error, Skills, Projects, Contact, Blog } from "./pages";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import { useEffect } from "react";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      const canControlScrollRestoration = "scrollRestoration" in window.history;
      if (canControlScrollRestoration) {
        window.history.scrollRestoration = "manual";
      }

      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
