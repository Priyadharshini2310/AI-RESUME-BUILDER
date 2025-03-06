// import '../App.css';
// import MainExport from '../components/Content/content';
// function TemplatePortfolio() {
//   return (
//     <>
// <MainExport />
//     </>
//   );
// }

// export default TemplatePortfolio;
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainExport from "../components/Content/content";

function TemplatePortfolio() {
  const location = useLocation(); // ✅ Get passed data
  const navigate = useNavigate();
  const portfolioData = location.state?.portfolioData;

  // If there's no data, navigate back to the form
  if (!portfolioData) {
    navigate("/");
    return null; // Prevents rendering an empty page
  }

  return (
    <>
      <MainExport portfolioData={portfolioData} />
    </>
  );
}

export default TemplatePortfolio;
