import Projects from "@/app/components/Projects";
import NextProject from "@/app/components/NextProject";
export default function StarWars() {
  return (
    <div className="mobile">
      <div>
        <Projects
          title={
            "Star Wars Responsive Info Site - Complete Website & App Funcionalities using SWAPI API's"
          }
          role={
            "Front End Development UX / UI Website Design Funcionalities Design"
          }
          year={"2022"}
          p1={
            "The website I developed is a Star Wars information site built using the React library. I used languages such as JavaScript, HTML, and CSS to create the site."
          }
          p2={
            "One of the key features of the site is the use of the Axios library to fetch data from the Swapi.dev API. This API provides a wealth of information about the Star Wars universe, including information about characters, planets, vehicles, and starships."
          }
          p3={
            "Another important feature of the site is the dynamic menu located in the top right corner of the page. This menu allows users to navigate to different parts of the site and access additional information."
          }
          p4={"Technical Bullet Points:"}
          p5={
            "To handle data management, I utilized the React Context API to create a centralized store for the website's data. This allows for easy management and manipulation of data across different components of the site."
          }
          p6={
            "To make the site more visually appealing, I implemented various design techniques such as responsive design, smooth transitions, and well-structured layout. This helps to create a visually appealing and easy-to-use interface for users."
          }
          p7={
            "Overall, the website is a well-crafted and technically advanced project that utilizes a variety of modern web development tools and techniques to deliver a rich and engaging experience for users."
          }
        />
      </div>
      <NextProject
        name={"Liz Shoes Landing Page"}
        description={
          "Experience our next landing page with captivating parallax effects"
        }
        link={"liz-shoes-landing"}
      />
    </div>
  );
}
