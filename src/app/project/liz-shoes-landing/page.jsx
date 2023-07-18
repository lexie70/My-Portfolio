import Projects from "@/app/components/Projects";
import NextProject from "@/app/components/NextProject";
import botas from "../../../../public/img/landingbotas.png";
import deportivo from "../../../../public/img/landingdeportivos.png";
import tacos from "../../../../public/img/landingtacos.png";
import orto from "../../../../public/img/landingortopedicos.png";
export default function LizShoesLanding() {
  return (
    <>
      <div className="mobile">
        <div>
          <Projects
            title={"Full Landing Page Design & Development"}
            role={"UX / UI Website Design Funcionalities Design"}
            year={"2022"}
            p1={
              "The landing page for our ecommerce shoe store showcases a visually stunning design implemented with the captivating parallax effect. The use of parallax scrolling adds depth and interactivity, creating an immersive browsing experience for our customers."
            }
            p2={
              "To bring this page to life, we employ a combination of CSS, HTML, and JavaScript. CSS allows us to style and enhance various elements, ensuring a polished and cohesive aesthetic throughout the page. "
            }
            p3={
              "HTML plays a crucial role in structuring the content of the landing page. We utilize semantic HTML tags to provide meaning and structure, enhancing accessibility and search engine optimization. By organizing the content into sections and incorporating appropriate headings, paragraphs, and images, we create a seamless browsing experience that engages and informs our visitors."
            }
            p4={
              "Overall, our ecommerce shoe store landing page stands out with its visually appealing design, enhanced by the mesmerizing parallax effect. Leveraging the power of CSS, HTML, and JavaScript, we create a seamless and immersive experience that captivates our visitors and showcases the latest shoe collections in an engaging and elegant manner."
            }
            image1={botas}
            image2={deportivo}
            image3={tacos}
            image4={orto}
          />
        </div>
        <div>
          <NextProject
            name={"twitter Clone"}
            description={"Mockup exercise"}
            link={"twitter-clone"}
          />
        </div>
      </div>
    </>
  );
}
