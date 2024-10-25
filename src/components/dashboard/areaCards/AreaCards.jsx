import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "Total Balance",
          value: "$20.4K",
          text: "Current balance (Income - Expenses).",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Income",
          value: "$8.2K",
          text: "Total income for the current period.",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Expenses",
          value: "$18.2K",
          text: "Total expenses for the current period.",
        }}
      />
      
    </section>
  );
};

export default AreaCards;
