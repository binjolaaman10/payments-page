import "./style.css";

function PageTitle(props) {
  const text = props.text;
  const subText = props.subtext;
  return (
    <div>
      <div className="title-text sm:text-lg md:text-2xl">{text}</div>
      {subText && <div className="subtitle-text sm:text-[14px] md:text-[15px]">{subText}</div>}
    </div>
  );
}

export default PageTitle;
