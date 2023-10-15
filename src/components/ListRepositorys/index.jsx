import "./styles.css";

const ListRepository = ({ title, description }) => {
  return (
    <div className="listRepository">
      <h3>{title}</h3>
      <p>{description}</p>
      <hr />
    </div>
  );
};

export default ListRepository;
