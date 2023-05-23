import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Cloud Kitchen</Typography>
        <p>

        </p>
        <br />
        <p>
          
          Online food ordering systems are a great option for restaurants looking to respond to a rapidly changing operating environment – and most are relatively easy to set up. If you’ve been considering adding an online sales channel to your restaurant but you’re not sure where to start, read on for insights and tips on choosing the right online ordering system for your business.
        
        </p>
      </Box>
    </Layout>
  );
};

export default About;
