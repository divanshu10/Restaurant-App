import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import "../../src/styles/about.css"
const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 10,
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
      >  <div className="heading" >
        <Typography variant="h3">Welcome To My Resturant</Typography></div>
        <div className="p1" >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quod,
          suscipit, aperiam totam autem culpa cum eveniet dolorum quasi est
          perspiciatis laborum. Nam recusandae nihil quia odio voluptatibus
          facere omnis facilis rerum? Ab eum beatae nobis reiciendis, qui
          temporibus aliquid, nesciunt velit sed quam recusandae necessitatibus,
          tempora maxime. Repellendus incidunt, maxime labore dolorum eos
          aperiam unde? 
        </p>
        </div>
        <div className="p2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          deserunt libero reprehenderit cum sint fugit cumque temporibus modi
          facere eveniet amet obcaecati ducimus harum velit maxime vel qui
          voluptatibus quam odio corrupti saepe, voluptas dolorum quidem
          tempore? Esse sapiente molestias minus enim quisquam dolorum eum culpa
          ullam impedit velit quo, corporis ducimus numquam dignissimos
          inventore maiores. Nam deleniti itaque nostrum neque dolorum dolores,
          aliquam, voluptatum sapiente doloribus laborum perspiciatis ipsam, quo
          ut nisi distinctio sunt nihil est blanditiis perferendis eveniet
          nesciunt! 
          </p>
          </div>
      </Box>
    </Layout>
  );
};

export default About;