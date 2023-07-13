import Projects from "@/app/components/Projects";
import flores from "../../../../public/img/flores.jpg";
export default function TwitterClone() {
  return (
    <div className="mobile">
      <Projects
        title={"Twitter Clone"}
        role={"UX / UI Website Design"}
        year={"2022"}
        p1={
          "While working on this project, I had the opportunity to leverage multiple CSS classes to accomplish precise styling and layout effects. Through this experience, I not only achieved my desired visual outcomes but also refined my ability to manipulate elements in CSS with improved practices. By effectively utilizing these classes, I gained a deeper understanding of employing best practices in CSS and honed my skills in creating appealing and functional designs."
        }
        p2={
          "One area where I focused my attention was the individual tweet cards. By applying the 'tweet' class, I established a flexible display layout for the tweets, incorporating features such as borders, margins, and padding. This resulted in a visually appealing and well-structured presentation of the tweets. Additionally, I implemented the :hover pseudo-class to enhance user interaction, providing a subtle background color change and cursor effect when users hovered over a tweet."
        }
        p3={
          "Another aspect of the project involved styling the author information within the tweet cards. By utilizing classes like 'tweet__author-name' and 'tweet__author-username,'' I was able to customize the font size, color, and margin properties of the author's name and username, respectively."
        }
        p4={
          "By utilizing these CSS classes and techniques in my 'Twitter Clone' project, I not only achieved the desired visual outcomes but also enhanced my ability to manipulate elements in CSS effectively. This experience provided valuable insights into best practices for styling and layout design, ultimately contributing to a more polished and user-friendly interface."
        }
        image1={flores}
        image2={flores}
        image3={flores}
        image4={flores}
      />
    </div>
  );
}
AbortSignal;
