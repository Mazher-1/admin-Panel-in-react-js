import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Navbarforonboarding/Nav";
import Textonboarding from "../Textonboarding/Textonboarding";
import "./Onboarding.css";
import icon1 from "../assets/icons/vector1.svg";
import icon2 from "../assets/icons/vector2.svg";
import icon3 from "../assets/icons/vector3.svg";
import icon4 from "../assets/icons/vector4.svg";
import icon5 from "../assets/icons/vector5.svg";
import icon6 from "../assets/icons/vector6.svg";

const questions = [
  {
    heading: "What is your primary financial goal?",
    paragraph:
      "This question immediately engages users by focusing on their aspirations, making them feel invested in the process.",
    showCards: true,
  },
  {
    heading: "What is your current monthly income?",
    paragraph:
      "After establishing goals, knowing their income helps users understand their financial capacity and sets the stage for budgeting.",
    showCards: false,
  },
  {
    heading: "What are your primary expense categories?",
    paragraph:
      "Once users know their income, it’s logical to consider where their money goes, prompting them to think critically about their spending habits.",
    showCards: false,
  },
  {
    heading: "What is your target savings amount for this month?",
    paragraph:
      "With an understanding of income and expenses, this question encourages users to set specific savings targets, reinforcing positive financial behavior.",
    showCards: false,
  },
  {
    heading: "Contact Information",
    paragraph: "Please enter your name and email address.",
    showCards: false,
  },
];

function Onboarding({ completeOnboarding }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null); // State for selected card
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [income, setIncome] = useState(""); // Added state for income
  const [expenseCategories, setExpenseCategories] = useState(""); // Added state for expense categories
  const [targetSavings, setTargetSavings] = useState(""); // Added state for target savings

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        // Move to the next question
        setCurrentQuestion(currentQuestion + 1);
        setSelectedCard(null); // Reset selected card for next question
      } else {
        completeOnboarding();
        navigate("/dashboard");
      }
      setIsFading(false);
    }, 300); // Match this with your CSS fade duration
  };

  return (
    <div className="onboarding">
      <Nav />
      <div className={`content ${isFading ? "fade-out" : ""}`}>
        <Textonboarding
          heading={questions[currentQuestion].heading}
          paragraph={questions[currentQuestion].paragraph}
        />
        {questions[currentQuestion].showCards && (
          <div className="box">
            <div
              className={`leftbox ${selectedCard === "save" ? "selected" : ""}`}
              onClick={() => setSelectedCard("save")} // Set selected card
            >
              <img src={icon1} alt="Save More Money Icon" />
              <h1>Save More Money</h1>
              <p>
                Set aside a portion of your income each month to build your
                savings for emergencies, investments, or future goals.
              </p>
            </div>
            <div
              className={`middlebox ${
                selectedCard === "track" ? "selected" : ""
              }`}
              onClick={() => setSelectedCard("track")} // Set selected card
            >
              <img src={icon2} alt="Track Spending Icon" />
              <h1>Track Spending</h1>
              <p>
                Monitor your daily expenses to understand your spending habits
                and identify areas to cut back.
              </p>
            </div>
            <div
              className={`rightbox ${
                selectedCard === "others" ? "selected" : ""
              }`}
              onClick={() => setSelectedCard("others")} // Set selected card
            >
              <img src={icon3} alt="Other Financial Goals Icon" />
              <h1>Others</h1>
              <p>
                Have a different goal in mind? Share your specific financial
                objectives or challenges.
              </p>
            </div>
          </div>
        )}
        {/* Render input fields for the last questions */}
        {currentQuestion === 1 && (
          <div className="input-field">
            <input
              type="number"
              placeholder="Enter your monthly income"
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>
        )}
        {currentQuestion === 2 && (
          <div className="box">
            <div
              className={`leftbox ${selectedCard === "save" ? "selected" : ""}`}
              onClick={() => setSelectedCard("save")} // Set selected card
            >
              <img src={icon4} alt="Save More Money Icon" />
              <h1>Rent/Mortgage</h1>
              <p>
                Rent or mortgage payments are typically the largest monthly
                expense for most individuals and families.
              </p>
            </div>
            <div
              className={`middlebox ${
                selectedCard === "track" ? "selected" : ""
              }`}
              onClick={() => setSelectedCard("track")} // Set selected card
            >
              <img src={icon5} alt="Track Spending Icon" />
              <h1>Utilities</h1>
              <p>
                Utilities are essential services that keep your household
                running smoothly, including electricity, heating, and waste management.
              </p>
            </div>
            <div
              className={`rightbox ${
                selectedCard === "others" ? "selected" : ""
              }`}
              onClick={() => setSelectedCard("others")} // Set selected card
            >
              <img src={icon6} alt="Other Financial Goals Icon" />
              <h1>Others</h1>
              <p>
                Have a different goal in mind? Share your specific financial
                objectives or challenges.
              </p>
            </div>
          </div>
        )}
        {currentQuestion === 3 && (
          <div className="input-field">
            <input
              type="number"
              placeholder="Enter your target savings amount"
              onChange={(e) => setTargetSavings(e.target.value)}
            />
          </div>
        )}
        {currentQuestion === 4 && (
          <section className="section_form">
            <form id="consultation-form" className="feed-form" action="#">
              <input
                required
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                required
                placeholder="Phone number"
                type="text"
              />
              <input
                required
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </form>
          </section>
        )}
      </div>
      <div className="next-btn-div">
        <button className="next-btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Onboarding;
