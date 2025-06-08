import axios from "axios";


const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api/',
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})


const CreateNewResume=(data)=>axiosClient.post('/user-resumes',data);

const GetUserResumes=(userEmail)=>axiosClient.get('/user-resumes?filters[userEmail][$eq]='+userEmail);

const UpdateResumeDetail=(id,data)=>axiosClient.put('/user-resumes/'+id,data)

const GetResumeById = (id) => axiosClient.get(`/user-resumes/${id}?populate=*`);

const DeleteResumeById=(id)=>axiosClient.delete('/user-resumes/'+id)
// Create new portfolio entry (POST)
const CreateNewPortfolio = (data) => axiosClient.post('/user-portfolios', data);

// Get all portfolios for a userId (GET with filter)
// const GetUserPortfolios = (userId) =>
//   axiosClient.get(`/user-portfolios?filters[userId][$eq]=${userId}`);
const GetUserPortfolios = (email) =>
  axiosClient.get(`/user-portfolios?filters[userEmail][$eq]=${encodeURIComponent(email)}`);

// Update a portfolio by ID (PUT)
const UpdatePortfolioById = (id, data) =>
  axiosClient.put(`/user-portfolios/${id}`, data);

// Get a portfolio by ID (GET)
const GetPortfolioById = (id) =>
  axiosClient.get(`/user-portfolios/${id}?populate=*`);

// Delete a portfolio by ID (DELETE)
const DeletePortfolioById = (id) =>
  axiosClient.delete(`/user-portfolios/${id}`);

export default{
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResumeById,
      // Portfolio
  CreateNewPortfolio,
  GetUserPortfolios,
  UpdatePortfolioById,
  GetPortfolioById,
  DeletePortfolioById,
}