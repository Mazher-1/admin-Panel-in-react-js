import PropTypes from "prop-types";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const AreaCard = ({ colors, percentFillValue, cardInfo }) => {
  // Calculate angles for the chart
  const filledValue = (percentFillValue / 100) * 360; // Full circle is 360 degrees
  const remainedValue = 360 - filledValue;

  // Data for the pie chart
  const data = [
    { name: "Remained", value: remainedValue },
    { name: "Achieved", value: filledValue },
  ];

  // Tooltip content formatter
  const renderTooltipContent = (value) => `${((value / 360) * 100).toFixed(1)} %`;

  return (
    <div className="area-card">
      <div className="area-card-info">
        <h5 className="info-title">{cardInfo.title}</h5>
        <div className="info-value">{cardInfo.value}</div>
        <p className="info-text">{cardInfo.text}</p>
      </div>
      <div className="area-card-chart">
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx={50}
            cy={45}
            innerRadius={20}
            outerRadius={45}
            dataKey="value"
            startAngle={90}  // Start angle at 90 degrees (top of the circle)
            endAngle={450}   // End angle to complete 360 degrees from the start
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => renderTooltipContent(value)} />
        </PieChart>
      </div>
    </div>
  );
};

AreaCard.propTypes = {
  colors: PropTypes.array.isRequired,
  percentFillValue: PropTypes.number.isRequired,
  cardInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string,
  }).isRequired,
};

export default AreaCard;
