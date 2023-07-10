import Carousel from "../../components/Carousel";
import NeedADeveloper from "../../components/NeedADeveloper";
import Projects from "@/app/components/Projects";
import NextProject from "@/app/components/NextProject";
import Link from "next/link";

export default function LizShoes() {
  return (
    <div className="mobile ">
      <Projects
        title={"Liz Shoes"}
        role={"Frontend Developer"}
        year={"2021"}
        p1={
          "During my time at Liz Shoes, I had the opportunity to work on an innovative e-commerce solution designed for internal operations. The project focused on providing the company with an efficient and streamlined system for managing logistics, inventory, and other related tasks."
        }
        p2={
          "In this project, I was responsible for developing the  login and signup functionality, ensuring that user data was securely stored and validated on the backend developed in .Net via HTTP Request."
        }
        p3={
          "To enhance the overall functionality and user experience, I employed asynchronous API calls using the Fetch API and Axios library. By managing state with the useState hook, I successfully connected the frontend with the backend database. Additionally, I incorporated localStorage to store the JWT token, allowing users to have a consistent session throughout the app. I also implemented a Flux-based state management architecture using React Context API and utilized React Router to redirect authenticated users based on their role (Admin or Guest) to the appropriate views."
        }
        p4={
          "Throughout the project, I had the opportunity to collaborate with a talented team of professionals. I worked closely with designers, following design mockups and style guides to ensure a consistent and on-brand design. By aligning with the design team's vision, I was able to deliver design assets that met the project's requirements and maintained a cohesive user experience."
        }
        p5={
          "Working on this e-commerce project has provided me with valuable experience and skills in front-end development. From building React components and implementing complex functionality to collaborating with a diverse team, I have gained a deep understanding of the intricacies involved in developing an efficient and user-centric e-commerce platform. I am proud of the contributions I made to the project, and I look forward to applying my expertise and knowledge to future endeavors in the field of web development"
        }
      />

      <NextProject
        name={"Star Wars"}
        description={"Responsive Info Site - Complete Website "}
        link={"star-wars"}
      />
    </div>
  );
}
