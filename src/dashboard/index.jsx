import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from './../../service/GlobalApi';
import ResumeCardItem from './components/ResumeCardItem';
import Portfolio from '@/portfolio';
import AddPortfolio from '@/portfolio/add-portfolio';
import PortfolioCardItem from './components/PortfolioCardItem';

function Dashboard() {

  const {user}=useUser();
  const [resumeList,setResumeList]=useState([]);
  const [portfolioList, setPortfolioList] = useState([]);
  useEffect(()=>{
    user&&GetResumesList()
  },[user])
  useEffect(() => {
    if (user) {
      GetResumesList();
      GetPortfoliosList();
    }
  }, [user]);

  /**
   * Used to Get Users Resume List
   */
  const GetResumesList=()=>{
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
    .then(resp=>{
      console.log("email fetched",resp.data.data)
      setResumeList(resp.data.data);
    })
  }


  /**
   * Fetch Portfolios for the current user
   */
  const GetPortfoliosList = () => {
    GlobalApi.GetUserPortfolios(user?.primaryEmailAddress?.emailAddress)
      .then((resp) => {
        setPortfolioList(resp.data.data);
      });
  };
  return (
    <div className=' p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl mt-20 '>My Resume</h2>
      <p>Start Creating AI resume to your next Job role</p>
      <div className='grid grid-cols-2 
      md:grid-cols-3 lg:grid-cols-5 gap-5
      mt-10
      '>
        <AddResume/>
        {resumeList.length>0?resumeList.map((resume,index)=>(
          <ResumeCardItem resume={resume} key={index} refreshData={GetResumesList} />
        )):
        [1,2,3,4].map((item,index)=>(
          <div className='h-[280px] rounded-lg bg-slate-200 animate-pulse'>
          </div>
        ))
        }
      </div>

      {/* Portfolio Section */}
      <h2 className='font-bold text-3xl mt-20'>My Portfolio</h2>
      <p>Start Creating Portfolio to your next Job role</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10'>
        <AddPortfolio />
        {portfolioList.length > 0 ? portfolioList.map((portfolio, index) => (
          <PortfolioCardItem
          key={index}
          portfolio={portfolio}
          refreshData={GetPortfoliosList}
        />
        )) : [1, 2, 3, 4].map((item, index) => (
          <div key={index} className='h-[280px] rounded-lg bg-slate-200 animate-pulse'></div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard