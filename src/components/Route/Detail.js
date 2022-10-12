import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState([]);
  const [empty, setEmpty] = useState(false);
  const getDetailData = async () => {
    // await axios
    //   .get(`http://localhost:9000/api/character/${id}`)
    //   .then((response) => {
    //     // setDetailData(response.data);
    //     return response.data
    //   })
    //   .catch(function (error) {
    //     setEmpty(true);
    //   });
    // const response = await axios.get(`http://localhost:9000/api/character/${id}`);
    const response = await axios.get(`http://localhost:8181/SpringJenkinsTest/api/character/${id}`);
    return response.data;
  };
  const { isLoading, isError, data, error } = useQuery(
    ["todo"],
    getDetailData
  );
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  const detail = (
    <div>
      <div
        key={data.id}
        className="card w-full bg-base-100 shadow-xl mx-auto"
      >
        <figure className="px-10 pt-10">
          <img
            src={data.gachaSplash}
            alt={data.name}
            className="rounded-xl w-screen max-w-lg"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{data.characterName}</h2>
          <figure className="px-10 pt-5 gap-x-4">
            <img
              src={data.talentNa}
              alt="NA"
              className="rounded-xl w-16 max-w-xs "
            />
            <img
              src={data.talentSkill}
              alt="Skill"
              className="rounded-xl w-16 max-w-xs"
            />
            <img
              src={data.talentBurst}
              alt="Burst"
              className="rounded-xl w-16 max-w-xs"
            />
          </figure>
          <p>
            <b>Weapon Type:</b> {data.weaponType}
          </p>
          <p>
            <b>Vision:</b> {data.vision}
          </p>
          <p>
            <b>Rarity: &#11088;</b>
            {data.rarity}
          </p>
          <p>
            <b>Constellation:</b> {data.constellation}
          </p>
          <p>
            <b>Nation:</b> {data.nation}
          </p>
          <div className="card-actions">
            <Link to={`/`}>
              <button className="btn btn-primary">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
        {!empty && detail}
        {/* {console.log(data)} */}
    </>
  );
};

export default Detail;
