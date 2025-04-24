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





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { PlusSquare, Loader2 } from 'lucide-react';
// import { v4 as uuidv4 } from 'uuid';
// import GlobalApi from './../../../service/GlobalApi';
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

// const Portfolio = () => {
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
//     const uuid = uuidv4();
//     const data = {
//       data: {
//         title: portfolioTitle,
//         resumeId: uuid,
//         userEmail: user?.primaryEmailAddress?.emailAddress,
//         userName: user?.fullName,
//       },
//     };

//     try {
//       const resp = await GlobalApi.CreateNewResume(data);
//       const resumeId = resp.data.data?.id;

//       if (resumeId) {
//         navigate(`/template-portfolio`, {
//           state: {
//             portfolioId: resumeId,
//             portfolioData: formData
//           },
//         });
//       } else {
//         console.error("Invalid portfolio ID");
//       }
//     } catch (error) {
//       console.error("Error creating portfolio:", error);
//     }
//     setLoading(false);
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

// export default Portfolio;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusSquare, Loader2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import GlobalApi from "./../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Container, Grid, Box, Typography } from "@mui/material";

const Portfolio = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const [openDialog, setOpenDialog] = useState(false);
  const [portfolioTitle, setPortfolioTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

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
        templateId: selectedTemplate, // Include selected template ID
      },
    };

    try {
      const resp = await GlobalApi.CreateNewResume(data);
      const resumeId = resp.data.data?.id;

      if (resumeId) {
        navigate(`/template-portfolio`, {
          state: {
            portfolioId: resumeId,
            portfolioData: formData,
            templateId: selectedTemplate,
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

  const templates = [
    { id: "template1", name: "Modern", image: "../../assets/template1.png" },
    { id: "template2", name: "Creative", image: "../assets/template2.png" },
    { id: "template3", name: "Professional", image: "../assets/template3.png" },
    { id: "template4", name: "Professional", image: "../assets/template4.png" },
    { id: "template5", name: "fun", image: "../assets/template5.png" },
  ];

  return (
    <>
      {/* PlusSquare Card */}
      <div
        className="p-14 py-24 border bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300
        items-center flex justify-center rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>

      {/* Dialog Box */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-7xl bg-white/20 backdrop-blur-3xl">
          <DialogHeader>
            <DialogTitle className="font-extrabold">
              Choose a Portfolio Template
            </DialogTitle>
          </DialogHeader>
          <Box mt={4}>
            <Grid container spacing={3}>
              {templates.map((template) => (
                <Grid item xs={12} sm={4} key={template.id}>
                  <Box
                    className={`border rounded-lg p-4 cursor-pointer transition-all
                      ${
                        selectedTemplate === template.id
                          ? "border-blue-500 shadow-lg"
                          : "border-gray-300"
                      }`}
                    onClick={() => setSelectedTemplate(template.id)}
                  >
                    <img
                      src={template.image}
                      alt={template.name}
                      className="object-cover w-56 h-48 rounded-md"
                    />
                    <Typography variant="h6" className="mt-2 text-center">
                      {template.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box className="flex justify-end gap-5 mt-6">
              <Button
                onClick={() => {
                  setOpenDialog(false);
                  setSelectedTemplate(null);
                }}
                variant="ghost"
              >
                Cancel
              </Button>
              <Button
                className="bg-blue-500 hover:bg-blue-600"
                disabled={!selectedTemplate || loading}
                onClick={handleCreatePortfolio}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Next"}
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Portfolio;
