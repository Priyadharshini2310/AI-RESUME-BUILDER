import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import dummy from '@/data/dummy';
import GlobalApi from './../../../../../service/GlobalApi';

function EditResume() {
    const {resumeId}=useParams();
    const navigate = useNavigate(); // Hook for programmatic navigation
    const [resumeInfo,setResumeInfo]=useState();
    useEffect(()=>{
      if (resumeId) {
        GetResumeInfo();
    } else {
        console.error('Resume ID is undefined, redirecting to dashboard');
        navigate('/dashboard'); // Redirect if resumeId is undefined
    }
}, [resumeId]);


const GetResumeInfo = () => {
  GlobalApi.GetResumeById(resumeId).then((resp) => {
      console.log("Resume Data:", resp);
      setResumeInfo(resp.data.data); // Update with fetched resume details
  }).catch((error) => {
      console.error('Error fetching resume:', error);
      // Handle error, possibly redirect
  });
};

  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
        {/* Form Section  */}
          <FormSection/>
        {/* Preview Section  */}
         <ResumePreview/>
    </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume