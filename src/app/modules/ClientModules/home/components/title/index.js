import "./styles/styles.scss";

function TitleHomeClient({ textAlign, title, description, description2 }) {
  return (
    <div
      style={{
        textAlign: textAlign,
        marginTop: "60px",
      }}
    >
      <h1 className={`title px-3`}>{title}</h1>
      <p className="description mt-3">{description}</p>
      {description2 && <p className="description">{description2}</p>}
    </div>
  );
}

export default TitleHomeClient;
