import "./styles.css";

function OverviewList(props) {
  const title = props.title;
  const price = props.price;
  const type = props.type;

  const color = { color: type === "discount" ? "#006642" : "#474747" };
  const boldness = { fontWeight: type === "total" ? "800px" : "400px" };

  return (
    <div
      className="prices flex justify-between py-1"
      style={{ ...color, ...boldness }}
    >
      <span>{title}</span>
      <span>{price}</span>
    </div>
  );
}

export default OverviewList;
