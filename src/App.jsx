//   - Hide/Show the answer to a question when the question is clicked
// - Navigate the questions and hide/show answers using keyboard navigation alone
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page

import background from "../assets/images/background-pattern-mobile.svg";
import star from "../assets/images/icon-star.svg";
import { useState } from "react";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
import deskBackground from "../assets/images/background-pattern-desktop.svg";
const DUMMY_DATA = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It`s suitable for all levels and ideal for portfoliobuilding.",
    id: "q1",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequinihil nostrum quod itaque maxime corporis explicabo modi. Odio similiqueplaceat, iure sunt repellat quibusdam nulla est molestias esse optio?",
    id: "q2",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimospossimus, voluptatum deleniti similique praesentium perferendiscupiditate aperiam aliquam numquam sequi accusantium vero voluptaterepudiandae odio qui esse. Quibusdam, adipisci odit?",
    id: "q3",
  },
  {
    question: "How can I get gelp if I`m stuck on a challenge?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur similique debitis doloribus amet sed adipisci ipsam tenetur ratione optio voluptate nam, magnam voluptatibus provident repellat velit, voluptatum, ex ea alias!",
    id: "q4",
  },
];

function App() {
  const [displayItem, setDisplayItem] = useState(null);

  function displayItemHandler(id) {
    if (displayItem === id) {
      setDisplayItem(null);
    } else {
      setDisplayItem(id);
    }
  }

  return (
    <>
      <div className="background-image">
        <img alt="" />

        <div className="card-wrapper">
          <div className="header">
            <h1>FAQs</h1>
          </div>
          <div className="ddd">
            {DUMMY_DATA.map((item) => (
              <div className="item-wrapper">
                <div onClick={() => displayItemHandler(item.id)} className="question-wrapper">
                  <h2>{item.question}</h2>
                  <img src={displayItem === item.id ? minus : plus} alt="" />
                </div>
                <div className="paragrapf">{displayItem === item.id && <p>{item.answer}</p>}</div>
                <div className="underline"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
