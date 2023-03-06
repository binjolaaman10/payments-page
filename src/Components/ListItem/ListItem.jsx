import "./style.css";

function ListItem(props) {
  const icon = props.icon;
  const subHeading = props.title;
  return (
    <div className="flex py-1.5">
      <img src={icon} alt="icon" height={"24px"} width={"24px"} />
      <span className="ml-4">{subHeading}</span>
    </div>
  );
}

export default ListItem;
