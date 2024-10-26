import React from "react";
import { useLocation } from "react-router-dom";
import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";

const Dashboard = () => {
  const location = useLocation();
  const { income = 0, monthlyExpenses = 0 } = location.state || {};

  // Calculate total balance
  const totalBalance = income - monthlyExpenses;

  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards income={income} expenses={monthlyExpenses} totalBalance={totalBalance} />
      <AreaCharts />
      <AreaTable />
    </div>
  );
};

export default Dashboard;
