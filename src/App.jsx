//   - Hide/Show the answer to a question when the question is clicked
// - Navigate the questions and hide/show answers using keyboard navigation alone
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page

const DUMMY_DATA = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers developers improve their frontend coding scills with projects in HTML,CSS and JavaScript. It`s suitable for all levels and ideal for portfoliobuilding.",
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
  return (
    <>
      <div className="background-white"></div>
      <main>
        <h1>FAQs</h1>
        <div className="items-wrapper">
          {DUMMY_DATA.map((item) => (
            <div className={item.id}>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
