// // import React, { useState } from "react";
// // import {
// //   Container,
// //   TextField,
// //   Button,
// //   Typography,
// //   Grid,
// //   Box,
// //   Divider,
// // } from "@mui/material";
// // import { v4 as uuidv4 } from "uuid";
// // import { useUser } from "@clerk/clerk-react";
// // import { useNavigate } from "react-router-dom";
// // import GlobalApi from "../../service/GlobalApi"; // Adjust the path if needed

// // const Portfolio = () => {
// //   const { user } = useUser();
// //   const navigate = useNavigate();

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     keyline: "",
// //     About: "",

// //     educationDegreeName: "",
// //     educationYear: "",
// //     educationCgpa: "",

// //     experience: "",

// //     contactPhone: "",
// //     contactEmail: "",
// //     contactWhatsApp: "",
// //     contactLinkedIn: "",

// //     skills: [{ skillName: "" }],
// //     projects: [{ name: "", year: "", description: "" }],
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleSkillChange = (index, value) => {
// //     const updatedSkills = [...formData.skills];
// //     updatedSkills[index].skillName = value;
// //     setFormData((prev) => ({ ...prev, skills: updatedSkills }));
// //   };

// //   const handleProjectChange = (index, field, value) => {
// //     const updatedProjects = [...formData.projects];
// //     updatedProjects[index][field] = value;
// //     setFormData((prev) => ({ ...prev, projects: updatedProjects }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     console.log("🟡 Preparing portfolio submission...");

// //     const userEmail = user?.primaryEmailAddress?.emailAddress;
// //     const userName = user?.fullName;
// //     const portfolioId = uuidv4();

// //     if (!userEmail || !userName) {
// //       console.error("❌ Missing user data from Clerk");
// //       return;
// //     }

// //     // const payload = {
// //     //   data: {
// //     //     ...formData,
// //     //     skills: formData.skills.filter((s) => s.skillName() !== ""),
// //     //     Project: formData.projects.filter(
// //     //       (p) => p.name || p.year || p.description
// //     //     ),
// //     //     portfolioId,
// //     //     userEmail,
// //     //     userName,
// //     //     title: `${formData.name}'s Portfolio`,
// //     //   },
// //     // };
// //     const payload = {
// //       data: {
// //         ...formData,
// //         skills: formData.skills.filter((s) => s.skillName !== ""),
// //         Project: formData.projects.filter(
// //           (p) => p.name || p.year || p.description
// //         ),
// //         portfolioId,
// //         userEmail,
// //         userName,
// //         title: `${formData.name}'s Portfolio`,
// //       },
// //     };

// //     console.log("📦 Final payload to submit:", payload);

// //     try {
// //       const res = await GlobalApi.CreateNewPortfolio(payload);
// //       console.log("✅ Portfolio created successfully:", res?.data);
// //       navigate(`/template-portfolio/${res.data.data.id}`);
// //       console.log("id", res.data.data.id);
// //     } catch (error) {
// //       console.error("❌ Error while submitting portfolio:", error.response?.data || error.message);
// //     }
// //   };

// //   return (
// //     <Container maxWidth="md" sx={{ py: 4 }}>
// //       <Box sx={{ p: 3, border: "1px solid #ccc", borderRadius: 2, boxShadow: 3 }}>
// //         <Typography variant="h4" align="center" gutterBottom>
// //           Create Your Portfolio
// //         </Typography>
// //         <form onSubmit={handleSubmit}>
// //           <Grid container spacing={3}>

// //             {/* Basic Info */}
// //             <Grid item xs={12}>
// //               <TextField
// //                 fullWidth
// //                 label="Full Name"
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </Grid>
// //             <Grid item xs={12}>
// //               <TextField
// //                 fullWidth
// //                 label="Keyline"
// //                 name="keyline"
// //                 value={formData.keyline}
// //                 onChange={handleChange}
// //               />
// //             </Grid>
// //             <Grid item xs={12}>
// //               <TextField
// //                 fullWidth
// //                 label="About"
// //                 name="About"
// //                 value={formData.About}
// //                 onChange={handleChange}
// //                 multiline
// //                 rows={3}
// //               />
// //             </Grid>

// //             {/* Education */}
// //             <Grid item xs={12}>
// //               <Divider>Education</Divider>
// //             </Grid>
// //             <Grid item xs={12}>
// //               <TextField
// //                 fullWidth
// //                 label="Degree & College Name"
// //                 name="educationDegreeName"
// //                 value={formData.educationDegreeName}
// //                 onChange={handleChange}
// //               />
// //             </Grid>
// //             <Grid item xs={6}>
// //               <TextField
// //                 fullWidth
// //                 label="Year"
// //                 name="educationYear"
// //                 value={formData.educationYear}
// //                 onChange={handleChange}
// //               />
// //             </Grid>
// //             <Grid item xs={6}>
// //               <TextField
// //                 fullWidth
// //                 label="CGPA"
// //                 name="educationCgpa"
// //                 value={formData.educationCgpa}
// //                 onChange={handleChange}
// //               />
// //             </Grid>

// //             {/* Experience */}
// //             <Grid item xs={12}>
// //               <Divider>Experience</Divider>
// //             </Grid>
// //             <Grid item xs={12}>
// //               <TextField
// //                 fullWidth
// //                 label="Experience"
// //                 name="experience"
// //                 value={formData.experience}
// //                 onChange={handleChange}
// //                 multiline
// //                 rows={3}
// //               />
// //             </Grid>

// //             {/* Skills */}
// //             <Grid item xs={12}>
// //               <Divider>Skills</Divider>
// //             </Grid>
// //             {formData.skills.map((skill, index) => (
// //               <Grid container spacing={1} key={index} alignItems="center">
// //                 <Grid item xs={10}>
// //                   <TextField
// //                     fullWidth
// //                     label={`Skill ${index + 1}`}
// //                     value={skill.skillName}
// //                     onChange={(e) => handleSkillChange(index, e.target.value)}
// //                   />
// //                 </Grid>
// //                 <Grid item xs={2}>
// //                   <Button
// //                     color="error"
// //                     onClick={() => {
// //                       const newSkills = formData.skills.filter((_, i) => i !== index);
// //                       setFormData((prev) => ({ ...prev, skills: newSkills }));
// //                     }}
// //                     disabled={formData.skills.length === 1}
// //                   >
// //                     Remove
// //                   </Button>
// //                 </Grid>
// //               </Grid>
// //             ))}
// //             <Grid item xs={12}>
// //               <Button
// //                 variant="outlined"
// //                 onClick={() =>
// //                   setFormData((prev) => ({
// //                     ...prev,
// //                     skills: [...prev.skills, { skillName: "" }],
// //                   }))
// //                 }
// //               >
// //                 Add Skill
// //               </Button>
// //             </Grid>

// //             {/* Projects */}
// //             <Grid item xs={12}>
// //               <Divider>Projects</Divider>
// //             </Grid>
// //             {formData.projects.map((project, index) => (
// //               <Grid container spacing={2} key={index}>
// //                 <Grid item xs={4}>
// //                   <TextField
// //                     fullWidth
// //                     label="Project Name"
// //                     value={project.name}
// //                     onChange={(e) =>
// //                       handleProjectChange(index, "name", e.target.value)
// //                     }
// //                   />
// //                 </Grid>
// //                 <Grid item xs={4}>
// //                   <TextField
// //                     fullWidth
// //                     label="Year"
// //                     value={project.year}
// //                     onChange={(e) =>
// //                       handleProjectChange(index, "year", e.target.value)
// //                     }
// //                   />
// //                 </Grid>
// //                 <Grid item xs={4}>
// //                   <TextField
// //                     fullWidth
// //                     label="Description"
// //                     value={project.description}
// //                     onChange={(e) =>
// //                       handleProjectChange(index, "description", e.target.value)
// //                     }
// //                   />
// //                 </Grid>
// //               </Grid>
// //             ))}
// //             <Grid item xs={12}>
// //               <Button
// //                 variant="outlined"
// //                 onClick={() =>
// //                   setFormData((prev) => ({
// //                     ...prev,
// //                     projects: [...prev.projects, { name: "", year: "", description: "" }],
// //                   }))
// //                 }
// //               >
// //                 Add Project
// //               </Button>
// //             </Grid>

// //             {/* Contact */}
// //             <Grid item xs={12}>
// //               <Divider>Contact Info</Divider>
// //             </Grid>
// //             <Grid item xs={6}>
// //               <TextField
// //                 fullWidth
// //                 label="Phone"
// //                 name="contactPhone"
// //                 value={formData.contactPhone}
// //                 onChange={handleChange}
// //               />
// //             </Grid>
// //             <Grid item xs={6}>
// //               <TextField
// //                 fullWidth
// //                 label="Email"
// //                 name="contactEmail"
// //                 value={formData.contactEmail}
// //                 onChange={handleChange}
// //               />
// //             </Grid>
// //             <Grid item xs={6}>
// //               <TextField
// //                 fullWidth
// //                 label="WhatsApp"
// //                 name="contactWhatsApp"
// //                 value={formData.contactWhatsApp}
// //                 onChange={handleChange}
// //               />
// //             </Grid>
// //             <Grid item xs={6}>
// //               <TextField
// //                 fullWidth
// //                 label="LinkedIn"
// //                 name="contactLinkedIn"
// //                 value={formData.contactLinkedIn}
// //                 onChange={handleChange}
// //               />
// //             </Grid>

// //             {/* Submit */}
// //             <Grid item xs={12}>
// //               <Button type="submit" variant="contained" color="primary" fullWidth>
// //                 Submit Portfolio
// //               </Button>
// //             </Grid>
// //           </Grid>
// //         </form>
// //       </Box>
// //     </Container>
// //   );
// // };

// // export default Portfolio;

// import React, { useState } from "react";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Grid,
//   Box,
//   Divider,
// } from "@mui/material";
// import { v4 as uuidv4 } from "uuid";
// import { useUser } from "@clerk/clerk-react";
// import { useNavigate } from "react-router-dom";
// import GlobalApi from "../../service/GlobalApi";
// import { Brain, LoaderCircle } from "lucide-react";
// import { toast } from "sonner";
// import { AIChatSession } from "../../service/AIModal";

// const Portfolio = () => {
//   const { user } = useUser();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     keyline: "",
//     About: "",
//     educationDegreeName: "",
//     educationYear: "",
//     educationCgpa: "",
//     experience: "",
//     contactPhone: "",
//     contactEmail: "",
//     contactWhatsApp: "",
//     contactLinkedIn: "",
//     skills: [{ skillName: "" }],
//     projects: [{ name: "", year: "", description: "" }],
//   });

//   const [aiLoading, setAiLoading] = useState(false);
//   const [aiAboutSuggestions, setAiAboutSuggestions] = useState([]);

//   const aboutPrompt = `Keyline: {keyline}, Generate a valid JSON array with "About" descriptions for 3 experience levels (Senior, Mid Level, and Fresher). Each entry should contain "experience_level" and "description" fields. Do not include any markdown, code blocks, or explanations. Only return raw JSON.`;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSkillChange = (index, value) => {
//     const updatedSkills = [...formData.skills];
//     updatedSkills[index].skillName = value;
//     setFormData((prev) => ({ ...prev, skills: updatedSkills }));
//   };

//   const handleProjectChange = (index, field, value) => {
//     const updatedProjects = [...formData.projects];
//     updatedProjects[index][field] = value;
//     setFormData((prev) => ({ ...prev, projects: updatedProjects }));
//   };

//   const handleGenerateAbout = async () => {
//     if (!formData.keyline) {
//       toast("Please enter a keyline before generating.");
//       return;
//     }

//     setAiLoading(true);
//     const prompt = aboutPrompt.replace("{keyline}", formData.keyline);

//     try {
//       const result = await AIChatSession.sendMessage(prompt);
//       let rawText = result.response.text();
//       let cleanedText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
//       const parsed = JSON.parse(cleanedText);
//       setAiAboutSuggestions(parsed);
//     } catch (error) {
//       toast.error("Failed to generate About section.");
//       console.error("AI error:", error.message);
//     } finally {
//       setAiLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const userEmail = user?.primaryEmailAddress?.emailAddress;
//     const userName = user?.fullName;
//     const portfolioId = uuidv4();

//     if (!userEmail || !userName) {
//       console.error("❌ Missing user data from Clerk");
//       return;
//     }

//     const payload = {
//       data: {
//         ...formData,
//         skills: formData.skills.filter((s) => s.skillName !== ""),
//         Project: formData.projects.filter(
//           (p) => p.name || p.year || p.description
//         ),
//         portfolioId,
//         userEmail,
//         userName,
//         title: `${formData.name}'s Portfolio`,
//       },
//     };

//     try {
//       const res = await GlobalApi.CreateNewPortfolio(payload);
//       navigate(`/template-portfolio/${res.data.data.id}`);
//     } catch (error) {
//       console.error("❌ Error while submitting portfolio:", error.response?.data || error.message);
//     }
//   };

//   return (
//     <Container maxWidth="md" sx={{ py: 4 }}>
//       <Box sx={{ p: 3, border: "1px solid #ccc", borderRadius: 2, boxShadow: 3 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Create Your Portfolio
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={3}>

//             {/* Basic Info */}
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Full Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Keyline"
//                 name="keyline"
//                 value={formData.keyline}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Box display="flex" justifyContent="space-between" alignItems="center">
//                 <Typography variant="body1">About</Typography>
//                 <Button
//                   variant="outlined"
//                   size="small"
//                   onClick={handleGenerateAbout}
//                   disabled={aiLoading}
//                   startIcon={aiLoading ? <LoaderCircle className="animate-spin" /> : <Brain />}
//                 >
//                   Generate from AI
//                 </Button>
//               </Box>
//               <TextField
//                 fullWidth
//                 name="About"
//                 multiline
//                 rows={3}
//                 value={formData.About}
//                 onChange={handleChange}
//                 sx={{ mt: 2 }}
//               />
//             </Grid>

//             {aiAboutSuggestions.length > 0 && (
//               <Grid item xs={12}>
//                 <Typography variant="h6" gutterBottom>Suggestions</Typography>
//                 {aiAboutSuggestions.map((item, index) => (
//                   console.log(item),
//                   <Box
//                     key={index}
//                     onClick={() =>
//                       setFormData((prev) => ({ ...prev, About: item.description }))
//                     }
//                     sx={{
//                       p: 2,
//                       border: '1px solid #ccc',
//                       borderRadius: 2,
//                       mb: 2,
//                       cursor: 'pointer',
//                       '&:hover': { borderColor: 'primary.main', backgroundColor: '#f9f9f9' },
//                     }}
//                   >
//                     <Typography variant="subtitle2" color="primary">Level: {item.experience_level}</Typography>
//                     <Typography variant="body2">{item.description}</Typography>
//                   </Box>
//                 ))}
//               </Grid>
//             )}

//             {/* Education */}
//             <Grid item xs={12}>
//               <Divider>Education</Divider>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Degree & College Name"
//                 name="educationDegreeName"
//                 value={formData.educationDegreeName}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 label="Year"
//                 name="educationYear"
//                 value={formData.educationYear}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 label="CGPA"
//                 name="educationCgpa"
//                 value={formData.educationCgpa}
//                 onChange={handleChange}
//               />
//             </Grid>

//             {/* Experience */}
//             <Grid item xs={12}>
//               <Divider>Experience</Divider>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Experience"
//                 name="experience"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 multiline
//                 rows={3}
//               />
//             </Grid>

//             {/* Skills */}
//             <Grid item xs={12}>
//               <Divider>Skills</Divider>
//             </Grid>
//             {formData.skills.map((skill, index) => (
//               <Grid container spacing={1} key={index} alignItems="center">
//                 <Grid item xs={10}>
//                   <TextField
//                     fullWidth
//                     label={`Skill ${index + 1}`}
//                     value={skill.skillName}
//                     onChange={(e) => handleSkillChange(index, e.target.value)}
//                   />
//                 </Grid>
//                 <Grid item xs={2}>
//                   <Button
//                     color="error"
//                     onClick={() => {
//                       const newSkills = formData.skills.filter((_, i) => i !== index);
//                       setFormData((prev) => ({ ...prev, skills: newSkills }));
//                     }}
//                     disabled={formData.skills.length === 1}
//                   >
//                     Remove
//                   </Button>
//                 </Grid>
//               </Grid>
//             ))}
//             <Grid item xs={12}>
//               <Button
//                 variant="outlined"
//                 onClick={() =>
//                   setFormData((prev) => ({
//                     ...prev,
//                     skills: [...prev.skills, { skillName: "" }],
//                   }))
//                 }
//               >
//                 Add Skill
//               </Button>
//             </Grid>

//             {/* Projects */}
//             <Grid item xs={12}>
//               <Divider>Projects</Divider>
//             </Grid>
//             {formData.projects.map((project, index) => (
//               <Grid container spacing={2} key={index}>
//                 <Grid item xs={4}>
//                   <TextField
//                     fullWidth
//                     label="Project Name"
//                     value={project.name}
//                     onChange={(e) =>
//                       handleProjectChange(index, "name", e.target.value)
//                     }
//                   />
//                 </Grid>
//                 <Grid item xs={4}>
//                   <TextField
//                     fullWidth
//                     label="Year"
//                     value={project.year}
//                     onChange={(e) =>
//                       handleProjectChange(index, "year", e.target.value)
//                     }
//                   />
//                 </Grid>
//                 <Grid item xs={4}>
//                   <TextField
//                     fullWidth
//                     label="Description"
//                     value={project.description}
//                     onChange={(e) =>
//                       handleProjectChange(index, "description", e.target.value)
//                     }
//                   />
//                 </Grid>
//               </Grid>
//             ))}
//             <Grid item xs={12}>
//               <Button
//                 variant="outlined"
//                 onClick={() =>
//                   setFormData((prev) => ({
//                     ...prev,
//                     projects: [...prev.projects, { name: "", year: "", description: "" }],
//                   }))
//                 }
//               >
//                 Add Project
//               </Button>
//             </Grid>

//             {/* Contact */}
//             <Grid item xs={12}>
//               <Divider>Contact Info</Divider>
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 label="Phone"
//                 name="contactPhone"
//                 value={formData.contactPhone}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 label="Email"
//                 name="contactEmail"
//                 value={formData.contactEmail}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 label="WhatsApp"
//                 name="contactWhatsApp"
//                 value={formData.contactWhatsApp}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 label="LinkedIn"
//                 name="contactLinkedIn"
//                 value={formData.contactLinkedIn}
//                 onChange={handleChange}
//               />
//             </Grid>

//             {/* Submit */}
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
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import GlobalApi from "../../service/GlobalApi";
import { Brain, LoaderCircle, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { AIChatSession } from "../../service/AIModal";

const Portfolio = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    keyline: "",
    About: "",
    educationDegreeName: "",
    educationYear: "",
    educationCgpa: "",
    experience: "",
    contactPhone: "",
    contactEmail: "",
    contactWhatsApp: "",
    contactLinkedIn: "",
    skills: [{ skillName: "" }],
    projects: [{ name: "", year: "", description: "" }],
  });

  const [aiLoading, setAiLoading] = useState(false);
  const [aiAboutSuggestions, setAiAboutSuggestions] = useState([]);
  const [aiExperienceLoading, setAiExperienceLoading] = useState(false);
  const [projectLoading, setProjectLoading] = useState({});

  const aboutPrompt = `Keyline: {keyline}, Generate a valid JSON array with "About" descriptions for 3 experience levels (Senior, Mid Level, and Fresher). Each entry should contain "experience_level" and "description" fields. Do not include any markdown, code blocks, or explanations. Only return raw JSON.`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "contactPhone" || name === "contactWhatsApp") {
      // Allow only digits and limit to 10
      if (!/^\d{0,10}$/.test(value)) return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index].skillName = value;
    setFormData((prev) => ({ ...prev, skills: updatedSkills }));
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index][field] = value;
    setFormData((prev) => ({ ...prev, projects: updatedProjects }));
  };

  const handleGenerateAbout = async () => {
    if (!formData.keyline) {
      toast("Please enter a keyline before generating.");
      return;
    }

    setAiLoading(true);
    const prompt = aboutPrompt.replace("{keyline}", formData.keyline);

    try {
      const result = await AIChatSession.sendMessage(prompt);
      let rawText = await result.response.text();
      let cleanedText = rawText
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();
      const parsed = JSON.parse(cleanedText);
      setAiAboutSuggestions(parsed);
    } catch (error) {
      toast.error("Failed to generate About section.");
      console.error("AI error:", error.message);
    } finally {
      setAiLoading(false);
    }
  };
  const handleGenerateExperience = async () => {
    if (!formData.educationDegreeName || !formData.About) {
      toast("Please provide both Education and About details first.");
      return;
    }

    const skillsList = formData.skills
      .map((skill) => skill.skillName)
      .filter((skill) => skill.trim() !== "")
      .join(", ");

    setAiExperienceLoading(true);

    const experiencePrompt = `
      Based on the following inputs:
      - Education: "${formData.educationDegreeName}"
      - About: "${formData.About}"
      - Skills: ${skillsList}
  
      Generate a concise and professional experience summary in JSON format using the key "experience_summary". 
      Do not include markdown, code blocks, or explanations at max 300 letter count along with white spaces. Return only valid JSON.
    `;

    try {
      const result = await AIChatSession.sendMessage(experiencePrompt);
      const rawText = await result.response.text();
      const cleanedText = rawText.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleanedText);

      const experienceText = parsed.experience_summary?.trim();
      if (experienceText) {
        setFormData((prev) => ({ ...prev, experience: experienceText }));
        toast.success("Experience generated and applied.");
      } else {
        toast.error("AI response didn't contain a valid experience summary.");
      }
    } catch (error) {
      toast.error("Failed to generate experience.");
      console.error("AI error:", error.message);
    } finally {
      setAiExperienceLoading(false);
    }
  };
  //
  const handleGenerateProjectDescription = async (index) => {
    const projectName = formData.projects[index]?.name;

    if (!projectName || projectName.trim() === "") {
      toast("Please enter a project name first.");
      return;
    }

    setProjectLoading((prev) => ({ ...prev, [index]: true }));

    const prompt = `
Project Name: "${projectName}"

Write a detailed and professional at max 300 letters along with white spaces sentence project description suitable for a technical portfolio or resume. Focus on what the project does, its impact, and mention any notable technologies (e.g., React, Python, Node.js, TensorFlow, etc.).

Return a JSON object with the key "project_description" and the value as plain text. No markdown or code formatting.
`;

    try {
      const result = await AIChatSession.sendMessage(prompt);
      const rawText = await result.response.text();
      const cleanedText = rawText.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleanedText);

      const description = parsed.project_description?.trim();
      if (description) {
        const updatedProjects = [...formData.projects];
        updatedProjects[index].description = description;
        setFormData((prev) => ({ ...prev, projects: updatedProjects }));
        toast.success("Project description generated!");
      } else {
        toast.error("AI did not return a valid project description.");
      }
    } catch (error) {
      toast.error("Failed to generate project description.");
      console.error("AI error:", error.message);
    } finally {
      setProjectLoading((prev) => ({ ...prev, [index]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userEmail = user?.primaryEmailAddress?.emailAddress;
    const userName = user?.fullName;
    const portfolioId = uuidv4();

    if (!userEmail || !userName) {
      console.error("❌ Missing user data from Clerk");
      return;
    }

    const payload = {
      data: {
        ...formData,
        skills: formData.skills.filter((s) => s.skillName !== ""),
        Project: formData.projects.filter(
          (p) => p.name || p.year || p.description
        ),
        portfolioId,
        userEmail,
        userName,
        title: `${formData.name}'s Portfolio`,
      },
    };

    try {
      const res = await GlobalApi.CreateNewPortfolio(payload);
      navigate(`/template-portfolio/${res.data.data.id}`);
    } catch (error) {
      console.error(
        "❌ Error while submitting portfolio:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box
        sx={{ p: 3, border: "1px solid #ccc", borderRadius: 2, boxShadow: 3 }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Create Your Portfolio
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Basic Info */}
            {/* <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Keyline"
                name="keyline"
                value={formData.keyline}
                onChange={handleChange}
              />
            </Grid> */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Keyline"
                name="keyline"
                value={formData.keyline}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body1">About</Typography>
                <Button
                  variant="text"
                  size="small"
                  onClick={handleGenerateAbout}
                  disabled={aiLoading}
                  startIcon={
                    aiLoading ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      <Brain />
                    )
                  }
                >
                  AI Enchancements
                </Button>
              </Box>
              <TextField
                fullWidth
                name="About"
                multiline
                rows={3}
                value={formData.About}
                onChange={handleChange}
                sx={{ mt: 2 }}
              />
            </Grid>

            {aiAboutSuggestions.length > 0 && (
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Suggestions
                </Typography>
                {aiAboutSuggestions.map((item, index) => (
                  <Box
                    key={index}
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        About: item.description,
                      }))
                    }
                    sx={{
                      p: 2,
                      border: "1px solid #ccc",
                      borderRadius: 2,
                      mb: 2,
                      cursor: "pointer",
                      "&:hover": {
                        borderColor: "primary.main",
                        backgroundColor: "#f9f9f9",
                      },
                    }}
                  >
                    <Typography variant="subtitle2" color="primary">
                      Level: {item.experience_level}
                    </Typography>
                    <Typography variant="body2">{item.description}</Typography>
                  </Box>
                ))}
              </Grid>
            )}

            {/* Education */}
            <Grid item xs={12}>
              <Divider>Education</Divider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Degree & College Name"
                name="educationDegreeName"
                value={formData.educationDegreeName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Year"
                name="educationYear"
                value={formData.educationYear}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="CGPA"
                name="educationCgpa"
                value={formData.educationCgpa}
                onChange={handleChange}
              />
            </Grid>
            {/* Skills */}
            <Grid item xs={12}>
              <Divider>Skills</Divider>
            </Grid>
            {formData.skills.map((skill, index) => (
              <Grid container spacing={1} key={index} alignItems="center">
                <Grid item xs={5}>
                  <TextField
                    fullWidth
                    label={`Skill ${index + 1}`}
                    value={skill.skillName}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    sx={{ mt: 1, mb: 1, ml: 3 }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    color="error"
                    onClick={() => {
                      const newSkills = formData.skills.filter(
                        (_, i) => i !== index
                      );
                      setFormData((prev) => ({ ...prev, skills: newSkills }));
                    }}
                    disabled={formData.skills.length === 1}
                  >
                    <Trash2 />
                  </Button>
                </Grid>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button
                variant="outlined"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    skills: [...prev.skills, { skillName: "" }],
                  }))
                }
              >
                <Plus />
              </Button>
            </Grid>

            {/* Experience */}
            <Grid item xs={12}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body1">Experience</Typography>
                <Button
                  variant="text"
                  size="small"
                  onClick={handleGenerateExperience}
                  disabled={aiExperienceLoading}
                  startIcon={
                    aiExperienceLoading ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      <Brain />
                    )
                  }
                >
                  AI Enchancements
                </Button>
              </Box>
              <TextField
                fullWidth
                name="experience"
                multiline
                rows={3}
                value={formData.experience}
                // onChange={handleChange}
                onChange={(e) => {
                  const input = e.target.value;
                  if (input.length <= 315) {
                    setFormData((prev) => ({ ...prev, experience: input }));
                  }
                }}
                error={formData.experience.length > 315}
  helperText={
    formData.experience.length > 315
      ? "Character limit exceeded! Max 315 allowed."
      : `${formData.experience.length} / 315 characters`
  }
              />
            </Grid>

            {/* <Grid item xs={12}>
              <Divider>Projects</Divider>
            </Grid>

            {formData.projects.map((project, index) => (
              <Grid container spacing={2} key={index} alignItems="center">
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Project Name"
                    value={project.name}
                    onChange={(e) =>
                      handleProjectChange(index, "name", e.target.value)
                    }
                    sx={{ mt: 1, mb: 1, ml: 3 }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    label="Year"
                    value={project.year}
                    onChange={(e) =>
                      handleProjectChange(index, "year", e.target.value)
                    }
                    sx={{ mt: 1, mb: 1, ml: 3 }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <TextField
                      fullWidth
                      label="Description"
                      value={project.description}
                      onChange={(e) =>
                        handleProjectChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      sx={{ mt: 1, mb: 1, ml: 3 }}
                    />
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => handleGenerateProjectDescription(index)}
                      disabled={projectLoading[index]}
                      startIcon={
                        projectLoading[index] ? (
                          <LoaderCircle className="animate-spin" />
                        ) : (
                          <Brain />
                        )
                      }
                    ></Button>
                  </Box>
                </Grid>
              </Grid>
            ))} */}
            <Grid item xs={12}>
              <Divider>Projects</Divider>
            </Grid>

            {formData.projects.map((project, index) => (
              <Grid container spacing={2} key={index} alignItems="center">
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    label="Project Name"
                    value={project.name}
                    onChange={(e) =>
                      handleProjectChange(index, "name", e.target.value)
                    }
                    sx={{ ml: 3, mt: 1, mb: 1 }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    label="Year"
                    value={project.year}
                    onChange={(e) =>
                      handleProjectChange(index, "year", e.target.value)
                    }
                    sx={{ ml: 2, mt: 1, mb: 1 }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <TextField
                      fullWidth
                      label="Description"
                      value={project.description}
                      // onChange={(e) =>
                      //   handleProjectChange(
                      //     index,
                      //     "description",
                      //     e.target.value
                      //   )
                      // }
                      // onChange={(e) => {
                      //   const input = e.target.value;
                      //   if (input.length <= 315) {
                      //     handleProjectChange(index, "description", input);
                      //   }
                      // }}
                      onChange={(e) => {
                        const input = e.target.value;
                        handleProjectChange(index, "description", input);
                      }}
                      error={project.description.length > 315}
helperText={
  project.description.length > 315
    ? "Character limit exceeded! Max 315 allowed."
    : `${project.description.length} / 315 characters`
}

                      
                      sx={{ ml: 2, mt: 3 }}
                    />
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => handleGenerateProjectDescription(index)}
                      disabled={projectLoading[index]}
                      startIcon={
                        projectLoading[index] ? (
                          <LoaderCircle className="animate-spin" />
                        ) : (
                          <Brain />
                        )
                      }
                    />
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Button
                    color="error"
                    onClick={() => {
                      const updatedProjects = formData.projects.filter(
                        (_, i) => i !== index
                      );
                      setFormData((prev) => ({
                        ...prev,
                        projects: updatedProjects,
                      }));
                    }}
                    disabled={formData.projects.length === 1}
                    startIcon={<Trash2 />}
                  ></Button>
                </Grid>
              </Grid>
            ))}

            <Grid item xs={12}>
              <Button
                variant="outlined"
                startIcon={<Plus />}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    projects: [
                      ...prev.projects,
                      { name: "", year: "", description: "" },
                    ],
                  }))
                }
              >
                Add Project
              </Button>
            </Grid>

            {/* Contact */}
            <Grid item xs={12}>
              <Divider>Contact Info</Divider>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Phone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                error={
                  formData.contactPhone.length > 0 &&
                  formData.contactPhone.length !== 10
                }
                helperText={
                  formData.contactPhone.length > 0 &&
                  formData.contactPhone.length !== 10
                    ? "Phone number must be exactly 10 digits"
                    : ""
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                error={
                  formData.contactEmail.length > 0 &&
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    formData.contactEmail
                  )
                }
                helperText={
                  formData.contactEmail.length > 0 &&
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    formData.contactEmail
                  )
                    ? "Enter a valid email address"
                    : ""
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="WhatsApp"
                name="contactWhatsApp"
                value={formData.contactWhatsApp}
                onChange={handleChange}
                error={
                  formData.contactWhatsApp.length > 0 &&
                  formData.contactWhatsApp.length !== 10
                }
                helperText={
                  formData.contactWhatsApp.length > 0 &&
                  formData.contactWhatsApp.length !== 10
                    ? "Whatsapp number must be exactly 10 digits"
                    : ""
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="LinkedIn"
                name="contactLinkedIn"
                value={formData.contactLinkedIn}
                onChange={handleChange}
              />
            </Grid>

            {/* Submit */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
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
