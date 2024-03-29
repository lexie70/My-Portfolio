import Carousel from "../components/Carousel";
import NeedADeveloper from "../components/NeedADeveloper";

export default function About() {
  return (
    <div className="mobile-about mainBox-about">
      <h5 className="mb-4">A FEW WORDS ABOUT ME</h5>
      <h1>
        I'm Alexandra Campos, a multidisciplinary developer who focuses on
        telling my clients’ stories visually, through enjoyable and meaningful
        experiences. I specialize in responsive websites and functional user
        interfaces.
      </h1>
      <h3 className="mt-5 h3class-about">
       I have been working the past year with eCommerce companies
        around the world and have been offering services around them,
        maintaining eCommerce websites, my expertise extends to orchestrating seamless development workflows through Azure DevOps as well. In my spare time I
        enjoy exercising and playing videogames.
      </h3>

      <Carousel />
      <div className="row">
        <div className="col-12 col-md-6 mt-md-5 mb-md-5">
          <List
            title={"technologies i use"}
            list={[
              "Javascript",
              "HTML",
              "CSS",
              " ReactJS",
              "NextJS",
              "Python",
              " Flask",
              "VSCode",
              "GitHub",
              " Git",
              "Scrum",
              "Agile",
            ]}
          />
        </div>
        <div className="col-12 col-md-6 mt-md-5 mb-md-5">
          <List
            title={"Services I Offer"}
            list={[
              "Front-end Development ",
              "Web Design",
              "Mobile First Websites",
              "Back-end Development",
            ]}
          />
        </div>
      </div>
      <hr className="margin-separation" />
      <Experience />
      <hr className="margin-separation" />
      <NeedADeveloper />
    </div>
  );
}

function List({ title, list }) {
  return (
    <section className="margin-separation">
      <h5>{title}</h5>
      <div className="mt-3">
        <h3>
          {list.map((item) => {
            return (
              <>
                {item}
                <strong className="ms-2 me-2">|</strong>
              </>
            );
          })}
        </h3>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <div>
      <h5 className="margin-separation mb-3 mt-3">experience</h5>
      <h1 className="mb-4">Over a Year Experience</h1>
      <h3 className="h3class-about">
        I’ve been lucky enough to establish relationships with amazing clients
        from all over the world, ranging from individual clients to mid-range
        businesses For more details, head over to my{" "}
        <a
          href="https://www.linkedin.com/in/alexandra-campos-carrillo-92422a26a/"
          className="linkedin"
        >
          LinkedIn profile.
        </a>{" "}
      </h3>
    </div>
  );
}
