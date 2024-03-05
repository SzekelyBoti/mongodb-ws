import { useState } from "react";

import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Main from "./pages/Main";
import LanguageDetails from "./pages/LanguageDetails";
import LanguageCreator from "./pages/LanguageCreator";
import Demo from "./pages/Demo";

function App() {
  const [page, setPage] = useState("main");

  const renderPage = () => {
    if(page.includes("languages")){
      const langId = page.split("/")[1];
      return <LanguageDetails langId={langId} />
    }

    switch (page) {
      case "main":
        return <Main setPage={setPage} />;
      case "about":
        return <About />;
      case "demo":
        return <Demo />;
      case "language-creator":
        return <LanguageCreator />;
      case "error":
      default:
        return <ErrorPage />;
    }
  };

  return (
    
  <div className="App">
    <Layout setPage={setPage}/>
    {renderPage()}
  </div>
  )
}

export default App;
