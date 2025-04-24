// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { PlusSquare, Loader2 } from 'lucide-react';
// import { v4 as uuidv4 } from 'uuid';
// import { useUser } from '@clerk/clerk-react';

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Container, TextField, Typography, Grid, Box } from "@mui/material";

// const AddPortfolio = () => {
//   const navigate = useNavigate();
//   const { user } = useUser();

//   const [openDialog, setOpenDialog] = useState(false);
//   const [portfolioTitle, setPortfolioTitle] = useState("");
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     keyline1: "",
//     keyline2: "",
//     keyline3: "",
//     keyline4: "",
//     keyline5: "",
//     intro: "",
//     summary: "",
//     skill1: "",
//     skill2: "",
//     skill3: "",
//     skill4: "",
//     skill5: "",
//     skill6: "",
//     skill7: "",
//     skill8: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCreatePortfolio = async () => {
//     setLoading(true);
    
//         navigate(`/portfolio`)
//   };

//   return (
//     <>
//       {/* PlusSquare Card */}
//       <div
//         className='p-14 py-24 border bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300
//         items-center flex justify-center rounded-lg h-[280px]
//         hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed'
//         onClick={() => setOpenDialog(true)}
//       >
//         <PlusSquare />
//       </div>

//       {/* Dialog Box */}
//       <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//         <DialogContent className="bg-blue-100/10 backdrop-blur-3xl">
//           <DialogHeader>
//             <DialogTitle className="font-extrabold">Create New Portfolio</DialogTitle>
//             <DialogDescription>
//               <p className='text-blue-400'>Add a title for your new portfolio</p>
//               <Input
//                 className="my-2"
//                 placeholder="e.g. UI/UX Portfolio"
//                 onChange={(e) => setPortfolioTitle(e.target.value)}
//               />
//               <div className='flex justify-end gap-5 mt-4'>
//                 <Button onClick={() => setOpenDialog(false)} variant="ghost">Cancel</Button>
//                 <Button
//                   className="bg-blue-500 hover:bg-blue-600"
//                   disabled={!portfolioTitle || loading}
//                   onClick={handleCreatePortfolio}
//                 >
//                   {loading ? <Loader2 className='animate-spin' /> : 'Create'}
//                 </Button>
//               </div>
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default AddPortfolio;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusSquare, Loader2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from './../../../service/GlobalApi';
import { useUser } from '@clerk/clerk-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Container, TextField, Typography, Grid, Box } from "@mui/material";

const Portfolio = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const [openDialog, setOpenDialog] = useState(false);
  const [portfolioTitle, setPortfolioTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    keyline1: "",
    keyline2: "",
    keyline3: "",
    keyline4: "",
    keyline5: "",
    intro: "",
    summary: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    skill7: "",
    skill8: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreatePortfolio = async () => {
    setLoading(true);
    const uuid = uuidv4();
    const data = {
      data: {
        title: portfolioTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    };

    try {
      const resp = await GlobalApi.CreateNewResume(data);
      const resumeId = resp.data.data?.id;

      if (resumeId) {
        navigate(`/template-portfolio`, {
          state: {
            portfolioId: resumeId,
            portfolioData: formData
          },
        });
      } else {
        console.error("Invalid portfolio ID");
      }
    } catch (error) {
      console.error("Error creating portfolio:", error);
    }
    setLoading(false);
  };

  return (
    <>
      {/* PlusSquare Card */}
      <div
        className='p-14 py-24 border bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300
        items-center flex justify-center rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed'
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>

      {/* Dialog Box */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="bg-blue-100/10 backdrop-blur-3xl">
          <DialogHeader>
            <DialogTitle className="font-extrabold">Create New Portfolio</DialogTitle>
            <DialogDescription>
              <p className='text-blue-400'>Add a title for your new portfolio</p>
              <Input
                className="my-2"
                placeholder="e.g. UI/UX Portfolio"
                onChange={(e) => setPortfolioTitle(e.target.value)}
              />
              <div className='flex justify-end gap-5 mt-4'>
                <Button onClick={() => setOpenDialog(false)} variant="ghost">Cancel</Button>
                <Button
                  className="bg-blue-500 hover:bg-blue-600"
                  disabled={!portfolioTitle || loading}
                  onClick={handleCreatePortfolio}
                >
                  {loading ? <Loader2 className='animate-spin' /> : 'Create'}
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Portfolio;
