/** @jsxImportSource theme-ui */
// import "./analysis.css";
import CountUp from "react-countup";
import toUpperCase from "../../libs/toUpperCase";
import { useInView } from "react-intersection-observer";
import { Container } from "theme-ui";

const data = [
  {
    icon: "custom-icon-projects",
    name: "total projects",
    quantity: 505,
  },
  {
    icon: "custom-icon-smile",
    name: "satisfied clients",
    quantity: 220,
  },
  {
    icon: "custom-icon-award",
    name: "awards won",
    quantity: 720,
  },
  {
    icon: "custom-icon-celebrate",
    name: "milestones met",
    quantity: 707,
  },
];


function Analysis() {
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });
  return (
    <section sx={{variant: 'section', padding: '10rem 0rem', backgroundColor: 'black'}} ref={ref} className="analysis">
      <Container className="analysis__wrapper">
        <ul sx={{variant: 'grid.col4'}} className="analysis__list">
          {data.map((item, index) => {
            return (
              <li key={index} className="analysis__list-item">
                <div className="item__wrapper">
                  <h2 sx={{fontSize: '5rem'}} className={item.icon}></h2>
                  <h3 sx={{fontWeight: 'bold'}} className="item__quantity ">
                    {inView && (
                      <CountUp
                        className="animate__animated animate__fadeIn"
                        end={item.quantity}
                      />
                    )}
                  </h3>
                  <p sx={{fontSize: '1.4rem'}} className="item__name">{toUpperCase(item.name)}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export default Analysis;
