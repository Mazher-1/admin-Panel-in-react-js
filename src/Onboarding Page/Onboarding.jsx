// Onboarding.js

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
    heading: "How much are your expenses this month?",
    paragraph:
      "Understanding your monthly expenses helps to identify areas where you can save, reinforcing positive financial habits.",
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

  // State to collect user data
  const [userData, setUserData] = useState({
    selectedGoal: "",
    income: "",
    expenseCategories: "",
    monthlyExpenses: "",
    name: "",
    email: "",
  });

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Complete onboarding and redirect to dashboard with data
        completeOnboarding();
        navigate("/dashboard", { state: userData });
      }
      setIsFading(false);
    }, 300);
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
              className={`leftbox ${userData.selectedGoal === "save" ? "selected" : ""}`}
              onClick={() => setUserData({ ...userData, selectedGoal: "save" })}
            >
              <img src={icon1} alt="Save More Money Icon" />
              <h1>Save More Money</h1>
              <p>Set aside a portion of your income each month to build your savings for emergencies, investments, or future goals.</p>
            </div>
            <div
              className={`middlebox ${userData.selectedGoal === "track" ? "selected" : ""}`}
              onClick={() => setUserData({ ...userData, selectedGoal: "track" })}
            >
              <img src={icon2} alt="Track Spending Icon" />
              <h1>Track Spending</h1>
              <p>Monitor your daily expenses to understand your spending habits and identify areas to cut back.</p>
            </div>
            <div
              className={`rightbox ${userData.selectedGoal === "others" ? "selected" : ""}`}
              onClick={() => setUserData({ ...userData, selectedGoal: "others" })}
            >
              <img src={icon3} alt="Other Financial Goals Icon" />
              <h1>Others</h1>
              <p>Have a different goal in mind? Share your specific financial objectives or challenges.</p>
            </div>
          </div>
        )}
        {currentQuestion === 1 && (
          <div className="input-field">
            <input
              type="number"
              placeholder="Enter your monthly income"
              onChange={(e) => setUserData({ ...userData, income: e.target.value })}
            />
          </div>
        )}
        {currentQuestion === 2 && (
          <div className="box">
            <div
              className={`leftbox ${userData.expenseCategories === "rent" ? "selected" : ""}`}
              onClick={() => setUserData({ ...userData, expenseCategories: "rent" })}
            >
              <img src={icon4} alt="Rent/Mortgage Icon" />
              <h1>Rent/Mortgage</h1>
              <p>Rent or mortgage payments are typically the largest monthly expense for most individuals and families.</p>
            </div>
            <div
              className={`middlebox ${userData.expenseCategories === "utilities" ? "selected" : ""}`}
              onClick={() => setUserData({ ...userData, expenseCategories: "utilities" })}
            >
              <img src={icon5} alt="Utilities Icon" />
              <h1>Utilities</h1>
              <p>Utilities include essential services like electricity, heating, and waste management.</p>
            </div>
            <div
              className={`rightbox ${userData.expenseCategories === "others" ? "selected" : ""}`}
              onClick={() => setUserData({ ...userData, expenseCategories: "others" })}
            >
              <img src={icon6} alt="Other Financial Goals Icon" />
              <h1>Others</h1>
              <p>Have other expenses? Share them here.</p>
            </div>
          </div>
        )}
        {currentQuestion === 3 && (
          <div className="input-field">
            <input
              type="number"
              placeholder="Enter your Expenses for this month"
              onChange={(e) => setUserData({ ...userData, monthlyExpenses: e.target.value })}
            />
          </div>
        )}
        {currentQuestion === 4 && (
          <section className="section_form">
            <form className="feed-form" action="#">
              <input
                required
                placeholder="Name"
                type="text"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              />
              <input required placeholder="Phone number" type="text" />
              <input
                required
                placeholder="E-mail"
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
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
