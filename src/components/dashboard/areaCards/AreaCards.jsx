// AreaCards.js

import React from "react";
import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = ({ income = 0, expenses = 0, totalBalance = 0 }) => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "Total Balance",
          value: `$${totalBalance.toLocaleString()}`,
          text: "Current balance (Income - Expenses).",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Income",
          value: `$${income.toLocaleString()}`,
          text: "Total income for the current period.",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Expenses",
          value: `$${expenses.toLocaleString()}`,
          text: "Total expenses for the current period.",
        }}
      />
    </section>
  );
};

export default AreaCards;
