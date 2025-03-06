// import React, { useState } from 'react';
// import { Container, TextField, Button, Typography, Grid, Box } from '@mui/material';

// const Portfolio = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     summary: '',
//     skills: '',
//     experience: '',
//     education: '',
//     projects: '',
//     linkedin: '',
//     github: '',
//     website: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Portfolio Data:', formData);
//   };

//   return (
//     <Container maxWidth="md">
//       <Box sx={{ mt: 4, p: 3, border: '1px solid #ccc', borderRadius: 2, boxShadow: 3 }}>
//         <Typography variant="h4" gutterBottom>
//           Create Your Portfolio
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             {/* Personal Details */}
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth type="email" label="Email" name="email" value={formData.email} onChange={handleChange} required />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth type="tel" label="Phone" name="phone" value={formData.phone} onChange={handleChange} required />
//             </Grid>

//             {/* Professional Summary */}
//             <Grid item xs={12}>
//               <TextField fullWidth multiline rows={3} label="Professional Summary" name="summary" value={formData.summary} onChange={handleChange} required />
//             </Grid>

//             {/* Skills */}
//             <Grid item xs={12}>
//               <TextField fullWidth label="Skills (comma-separated)" name="skills" value={formData.skills} onChange={handleChange} required />
//             </Grid>

//             {/* Experience */}
//             <Grid item xs={12}>
//               <TextField fullWidth multiline rows={2} label="Work Experience" name="experience" value={formData.experience} onChange={handleChange} />
//             </Grid>

//             {/* Education */}
//             <Grid item xs={12}>
//               <TextField fullWidth multiline rows={2} label="Education" name="education" value={formData.education} onChange={handleChange} />
//             </Grid>

//             {/* Projects */}
//             <Grid item xs={12}>
//               <TextField fullWidth multiline rows={2} label="Projects (comma-separated)" name="projects" value={formData.projects} onChange={handleChange} />
//             </Grid>

//             {/* Social Links */}
//             <Grid item xs={12} sm={4}>
//               <TextField fullWidth label="LinkedIn Profile" name="linkedin" value={formData.linkedin} onChange={handleChange} />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField fullWidth label="GitHub Profile" name="github" value={formData.github} onChange={handleChange} />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField fullWidth label="Portfolio Website" name="website" value={formData.website} onChange={handleChange} />
//             </Grid>

//             {/* Submit Button */}
//             <Grid item xs={12}>
//               <Button type="submit" variant="contained" color="primary" fullWidth>
//                 Submit Portfolio
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default Portfolio;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { Container, TextField, Button, Typography, Grid, Box } from "@mui/material";

const Portfolio = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation
  const [formData, setFormData] = useState({
    name: "",
    keyline1:"",
    keyline2:"",
    keyline3:"",
    keyline4:"",
    keyline5:"",
    intro:"",
    summary: "",
    skills1: "",
    skills2: "",
    skills3: "",
    skills4: "",
    skills5: "",
    skills6: "",
    skills7: "",
    skills8: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Portfolio Data:", formData);
    
    // ✅ Navigate to TemplatePortfolio and pass data as state
    navigate("/template-portfolio", { state: { portfolioData: formData } });
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, p: 3, border: "1px solid #ccc", borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom>
          Create Your Portfolio
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="text" label="KeyLine 1" name="keyline1" value={formData.keyline1} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="text" label="KeyLine 2" name="keyline2" value={formData.keyline2} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="text" label="KeyLine 3" name="keyline3" value={formData.keyline3} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="text" label="KeyLine 4" name="keyline4" value={formData.keyline4} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="text" label="KeyLine 5" name="keyline5" value={formData.keyline5} onChange={handleChange} required />
            </Grid>
            
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={3} label="Professional Summary" name="summary" value={formData.summary} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Skills (comma-separated)" name="skills" value={formData.skills} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={2} label="Work Experience" name="experience" value={formData.experience} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={2} label="Education" name="education" value={formData.education} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={2} label="Projects (comma-separated)" name="projects" value={formData.projects} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="LinkedIn Profile" name="linkedin" value={formData.linkedin} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="GitHub Profile" name="github" value={formData.github} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Portfolio Website" name="website" value={formData.website} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit Portfolio
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Portfolio;
