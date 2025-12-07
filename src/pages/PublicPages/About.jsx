import React from "react";
import Container from "../../components/Shared/Container";
import AbouteOverview from "../../components/Home/AbouteOverview";
import OurStory from "../../components/Aboute/OurStory";
import OurMission from "../../components/Aboute/OurMission";

const About = () => {
  return (
    <Container>
      <AbouteOverview/>
      <OurStory/>
      <OurMission/>
    </Container>
  );
};

export default About;
