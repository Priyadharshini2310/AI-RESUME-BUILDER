// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import MainExport from "../components/Content/content";

// function TemplatePortfolio() {
//   const location = useLocation(); // ✅ Get passed data
//   const navigate = useNavigate();
//   const portfolioData = location.state?.portfolioData;

//   // If there's no data, navigate back to the form
//   if (!portfolioData) {
//     navigate("/");
//     return null; // Prevents rendering an empty page
//   }
//   console.log("portfolioData",portfolioData); // Log the portfolio data to the console

//   return (
//     <>
//       <MainExport portfolioData={portfolioData} />
      
//     </>
//   );
// }

// export default TemplatePortfolio;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainExport from "../components/Content/content";
import GlobalApi from "../../service/GlobalApi"; // adjust path to where your axios functions are

function TemplatePortfolio() {
  const { id } = useParams(); // Get portfolio ID from URL
  const navigate = useNavigate();

  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      console.error("No ID provided in URL");
      
      navigate("/"); // Redirect if no ID
      return;
    }

    const fetchPortfolio = async () => {
      try {
        const response = await GlobalApi.GetPortfolioById(id);
        setPortfolioData(response.data.data);
        console.log("Portfolio Data:", response.data.data); // Log the portfolio data to the console
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
        navigate("/"); // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [id, navigate]);

  if (loading) return <div>Loading...</div>;
  if (!portfolioData) return <div>Portfolio not found.</div>;

  return <MainExport portfolioData={portfolioData} />;
}

export default TemplatePortfolio;
