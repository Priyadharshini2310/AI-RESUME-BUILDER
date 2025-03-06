import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import ResumePreview from '@/dashboard/resume/components/ResumePreview'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../service/GlobalApi'
import { RWebShare } from 'react-web-share'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
function ViewResume() {

    const [resumeInfo,setResumeInfo]=useState();
    const {resumeId}=useParams();

    useEffect(()=>{
        GetResumeInfo();
    },[])
    const GetResumeInfo=()=>{
        GlobalApi.GetResumeById(resumeId).then(resp=>{
            console.log(resp.data.data);
            setResumeInfo(resp.data.data);
        })
    }

    const HandleDownload=()=>{
        const printArea = document.getElementById('print-area');
        // html2canvas(printArea).then((canvas) => {
        //   const imgData = canvas.toDataURL('image/png');
        //   const pdf = new jsPDF('p', 'mm', 'a4');
        //   const imgWidth = 210; // A4 page width in mm
        //   const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio
        //   pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        //   pdf.save('resume.pdf');
        // });
        html2canvas(printArea, {
          scale: 3, // Better quality
          useCORS: true,
          scrollX: 0,
          scrollY: -window.scrollY, // Adjust scrolling issues
      }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4');
          const imgWidth = 210;
          const pageHeight = 321;
          const imgHeight = (canvas.height * imgWidth ) / canvas.width;
          let heightLeft = imgHeight;
      
          pdf.addImage(imgData, 'PNG', 1, 0, imgWidth, imgHeight);
          heightLeft -= pageHeight;
      
          while (heightLeft > 0) {
              pdf.addPage();
              pdf.addImage(imgData, 'PNG', 0, -heightLeft, imgWidth, imgHeight);
              heightLeft -= pageHeight;
          }
      
          pdf.save('resume.pdf');
      });
      };
    
    
    
  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}} >
        <div id="no-print">
            <div className='w-full h-16'>
        <Header/></div>
        <div className='mt-10 my-10 mx-10 md:mx-20 lg:mx-36'>
            <h2 className='text-center text-2xl font-medium'>
                Congrats! Your Ultimate AI generates Resume is ready ! </h2>
                <p className='text-center text-gray-400'>Now you are ready to download your resume and you can share unique 
                    resume url with your friends and family </p>
            <div className='flex justify-between px-44 my-10'>
                <Button className='bg-blue-500 hover:bg-blue-400' onClick={HandleDownload}>Download</Button>
               
                <RWebShare
        data={{
          text: "Hello Everyone, This is my resume please open url to see it",
          url:"/my-resume/"+resumeId+"/view",
          title: resumeInfo?.firstName+" "+resumeInfo?.lastName+" resume",
        }}
        onClick={() => console.log("shared successfully!")}
      > <Button className='bg-blue-500 hover:bg-blue-400'>Share</Button>
      </RWebShare>
            </div>
        </div>
            
        </div>
        <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
            <div className='flex justify-center items-start w-[100%]'>
        <div id="print-area" >
                <ResumePreview resumeInfo={resumeInfo}/>
            </div>
            </div>
            </div>
    </ResumeInfoContext.Provider>
  )
}

export default ViewResume


// import Header from '@/components/custom/Header';
// import { Button } from '@/components/ui/button';
// import { ResumeInfoContext } from '@/context/ResumeInfoContext';
// import ResumePreview from '@/dashboard/resume/components/ResumePreview';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import GlobalApi from './../../../../service/GlobalApi';
// import { RWebShare } from 'react-web-share';
// import jsPDF from 'jspdf';

// function ViewResume() {
//   const [resumeInfo, setResumeInfo] = useState();
//   const [showPreview, setShowPreview] = useState(false); // State to toggle preview modal
//   const { resumeId } = useParams();

//   useEffect(() => {
//     GetResumeInfo();
//   }, []);
//   useEffect(() => {
//     if (showPreview) {
//       document.body.style.overflow = 'hidden'; // Disable scrolling on main page
//     } else {
//       document.body.style.overflow = 'auto'; // Re-enable scrolling on main page
//     }

//     // Cleanup function to reset overflow when the component unmounts
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [showPreview]);


//   const GetResumeInfo = () => {
//     GlobalApi.GetResumeById(resumeId).then((resp) => {
//       console.log(resp.data.data);
//       setResumeInfo(resp.data.data);
//     });
//   };

  
  
//   // const HandleDownload = () => {
//   //   const printArea = document.getElementById('print-area-preview'); // Use preview area ID
//   //   const pdf = new jsPDF('p', 'mm', 'a4');
  
//   //   pdf.html(printArea, {
//   //     callback: (doc) => {
//   //       // Save the PDF after rendering
//   //       doc.save('resume.pdf');
//   //     },
//   //     x: 10, // X margin
//   //     y: 10, // Y margin for the first page
//   //     html2canvas: {
//   //       scale: 2, // Lower scale if rendering is too slow
//   //       useCORS: true, // Allow cross-origin images
//   //     },
//   //     autoPaging: true, // Handle multiple pages automatically
//   //   });
//   // };
//   const HandleDownload = () => {
//     const printArea = document.getElementById('print-area-preview');
//     const pdf = new jsPDF('p', 'mm', 'a4');
//     const pageWidth = 210; // A4 page width in mm
//     const pageHeight = 297; // A4 page height in mm
  
//     pdf.html(printArea, {
//       callback: (doc) => {
//         doc.save('resume.pdf');
//       },
//       x: 0, // Start at the very left of the page
//       y: 0, // Start at the very top of the page
//       html2canvas: {
//         scale: 0.75, // Adjust scale for better fit
//         useCORS: true, // Allow cross-origin images
//         scrollX: 0,
//         scrollY: 0,
//       },
//       width: pageWidth, // Scale content to fit within A4 width
//       windowWidth: printArea.scrollWidth, // Ensure full-width capture
//     });
//   };
  
  
//   return (
//     <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
//       <div id="no-print">
//         <div className="w-full h-16">
//           <Header />
//         </div>
//         <div className="mt-10 my-10 mx-10 md:mx-20 lg:mx-36">
//           <h2 className="text-center text-2xl font-medium">
//             Congrats! Your Ultimate AI Generated Resume is Ready!
//           </h2>
//           <p className="text-center text-gray-400">
//             Now you are ready to download your resume, or you can share the unique
//             resume URL with your friends and family.
//           </p>
//           <div className="flex justify-between px-44 my-10">
//             <Button
//               className="bg-blue-500 hover:bg-blue-400"
//               onClick={() => setShowPreview(true)} // Open the preview modal
//             >
//               Preview & Download
//             </Button>

//             <RWebShare
//               data={{
//                 text: 'Hello Everyone, This is my resume. Please open the URL to see it.',
//                 url: '/my-resume/' + resumeId + '/view',
//                 title: `${resumeInfo?.firstName} ${resumeInfo?.lastName} resume`,
//               }}
//               onClick={() => console.log('Shared successfully!')}
//             >
//               <Button className="bg-blue-500 hover:bg-blue-400">Share</Button>
//             </RWebShare>
//           </div>
//         </div>
//       </div>

//       <div className="my-10 mx-10 md:mx-20 lg:mx-36">
//         <div className="flex justify-center items-start w-[100%]">
//           <div id="print-area">
//             <ResumePreview resumeInfo={resumeInfo} />
//           </div>
//         </div>
//       </div>

//       {/* Preview Modal */}
//       {showPreview && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto"
//           onClick={() => setShowPreview(false)} // Close modal on background click
//         >
//           <div
//             className="bg-white p-4 rounded-lg w-full md:w-3/4 lg:w-1/2"
//             onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
//           >
//             <h2 className="text-center font-bold text-lg mb-4">Resume Preview</h2>
//             <div id="print-area-preview" className="border p-4">
//               {/* Render the preview of Resume */}
//               <ResumePreview resumeInfo={resumeInfo} />
//             </div>
//             <div className="flex justify-between mt-4">
//               <Button
//                 className="bg-red-500 hover:bg-red-400"
//                 onClick={() => setShowPreview(false)}
//               >
//                 Close
//               </Button>
//               <Button
//                 className="bg-blue-500 hover:bg-blue-400"
//                 onClick={HandleDownload}
//               >
//                 Download
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </ResumeInfoContext.Provider>
//   );
// }

// export default ViewResume;