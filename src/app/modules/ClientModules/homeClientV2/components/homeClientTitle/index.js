import "./styles/styles.scss";

function HomeClientTitle({ textAlign, title, description }) {
  return (
    <div
      style={{
        textAlign: textAlign,
      }}
    >
      <h1 className={`title px-3 text-green`}>{title}</h1>
      <p className="description col-md-8 offset-md-2">{description}</p>
    </div>
  );
}

export default HomeClientTitle;
