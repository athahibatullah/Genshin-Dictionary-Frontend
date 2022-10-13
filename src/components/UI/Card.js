import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = () => {
  const selector = useSelector((state) => state.redux.APIData);

  return (
    <div className="flex flex-wrap flex-row h-screen my-16 gap-y-8">
      {selector.map((data) => (
        <div key={data.id} className="card w-96 bg-base-100 shadow-xl mx-auto">
          <figure className="px-10 pt-10">
            <img
              src={data.icon}
              alt={data.name}
              className="rounded-xl w-24 max-w-xs"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{data.characterName}</h2>
            <div className="card-actions">
              <Link to={`/${data.name}`}>
                <button className="btn btn-primary">Detail</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
