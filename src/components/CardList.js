import Card from "../components/Card";
import "../stylesheets/CardList.css";

export default function CardList(props) {
  const { data } = props;

  return (
    <div>
      {data.map((item) => (
        <Card {...item} />
      ))}
    </div>
  );
}
