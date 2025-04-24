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
import GlobalApi from "../../service/GlobalApi"; // Adjust the path if needed

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

  const handleChange = (e) => {
    const { name, value } = e.target;
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("🟡 Preparing portfolio submission...");

    const userEmail = user?.primaryEmailAddress?.emailAddress;
    const userName = user?.fullName;
    const portfolioId = uuidv4();

    if (!userEmail || !userName) {
      console.error("❌ Missing user data from Clerk");
      return;
    }

    // const payload = {
    //   data: {
    //     ...formData,
    //     skills: formData.skills.filter((s) => s.skillName() !== ""),
    //     Project: formData.projects.filter(
    //       (p) => p.name || p.year || p.description
    //     ),
    //     portfolioId,
    //     userEmail,
    //     userName,
    //     title: `${formData.name}'s Portfolio`,
    //   },
    // };
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
    

    console.log("📦 Final payload to submit:", payload);

    try {
      const res = await GlobalApi.CreateNewPortfolio(payload);
      console.log("✅ Portfolio created successfully:", res?.data);
      navigate(`/template-portfolio/${res.data.data.id}`);
      console.log("id", res.data.data.id);
    } catch (error) {
      console.error("❌ Error while submitting portfolio:", error.response?.data || error.message);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ p: 3, border: "1px solid #ccc", borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Create Your Portfolio
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>

            {/* Basic Info */}
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="About"
                name="About"
                value={formData.About}
                onChange={handleChange}
                multiline
                rows={3}
              />
            </Grid>

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

            {/* Experience */}
            <Grid item xs={12}>
              <Divider>Experience</Divider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                multiline
                rows={3}
              />
            </Grid>

            {/* Skills */}
            <Grid item xs={12}>
              <Divider>Skills</Divider>
            </Grid>
            {formData.skills.map((skill, index) => (
              <Grid container spacing={1} key={index} alignItems="center">
                <Grid item xs={10}>
                  <TextField
                    fullWidth
                    label={`Skill ${index + 1}`}
                    value={skill.skillName}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    color="error"
                    onClick={() => {
                      const newSkills = formData.skills.filter((_, i) => i !== index);
                      setFormData((prev) => ({ ...prev, skills: newSkills }));
                    }}
                    disabled={formData.skills.length === 1}
                  >
                    Remove
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
                Add Skill
              </Button>
            </Grid>

            {/* Projects */}
            <Grid item xs={12}>
              <Divider>Projects</Divider>
            </Grid>
            {formData.projects.map((project, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Project Name"
                    value={project.name}
                    onChange={(e) =>
                      handleProjectChange(index, "name", e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Year"
                    value={project.year}
                    onChange={(e) =>
                      handleProjectChange(index, "year", e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Description"
                    value={project.description}
                    onChange={(e) =>
                      handleProjectChange(index, "description", e.target.value)
                    }
                  />
                </Grid>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button
                variant="outlined"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    projects: [...prev.projects, { name: "", year: "", description: "" }],
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
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="WhatsApp"
                name="contactWhatsApp"
                value={formData.contactWhatsApp}
                onChange={handleChange}
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
