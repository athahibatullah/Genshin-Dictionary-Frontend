import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [weaponType, setWeaponType] = useState("");
  const [vision, setVision] = useState("");
  const [rarity, setRarity] = useState("");
  const [constellation, setConstellation] = useState("");
  const [nation, setNation] = useState("");
  const postData = (event) => {
    const dataJSON = {
      name: name,
      characterName: characterName,
      weaponType: weaponType,
      vision: vision,
      rarity: rarity,
      constellation: constellation,
      nation: nation,
      icon: `https://api.genshin.dev/characters/${name}/icon`,
      gachaSplash: `https://api.genshin.dev/characters/${name}/gacha-splash`,
      talentNa: `https://api.genshin.dev/characters/${name}/talent-na`,
      talentSkill: `https://api.genshin.dev/characters/${name}/talent-skill`,
      talentBurst: `https://api.genshin.dev/characters/${name}/talent-burst`,
    };
    console.log(dataJSON);
    axios.post(`http://localhost:9000/api/character/add`, dataJSON);
    resetHandler();
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm();

  const resetHandler = () => {
    setName("");
    setCharacterName("");
    setWeaponType("");
    setVision("");
    setRarity("");
    setConstellation("");
    setNation("");
    reset();
  };
  const nameValidation = {
    required: true,
    minLength: 1,
    pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
  };
  return (
    <div className="card bg-base-100 shadow-xl w-full max-w-lg mx-auto my-10">
      <div className="card-body flex flex-wrap">
        <form onSubmit={handleSubmit(postData)}>
          <p>Name</p>
          <input
            className="input w-full max-w-lg border-black"
            {...register("name", nameValidation)}
            aria-invalid={errors.name ? "true" : "false"}
            value={setValue("name", name)}
            onChange={(e) => setName(e.target.value.toLowerCase())}
          />

          <p>Character Name</p>
          <input
            className="input w-full max-w-lg border-black"
            {...register("characterName", nameValidation)}
            aria-invalid={errors.characterName ? "true" : "false"}
            value={setValue("characterName", characterName)}
            onChange={(e) => setCharacterName(e.target.value)}
          />

          <p>Weapon Type</p>
          <input
            className="input w-full max-w-lg border-black"
            {...register("weaponType", nameValidation)}
            aria-invalid={errors.weaponType ? "true" : "false"}
            value={setValue("weaponType", weaponType)}
            onChange={(e) => setWeaponType(e.target.value)}
          />

          <p>Vision</p>
          <input
            className="input w-full max-w-lg border-black"
            {...register("vision", nameValidation)}
            aria-invalid={errors.vision ? "true" : "false"}
            value={setValue("vision", vision)}
            onChange={(e) => setVision(e.target.value)}
          />

          <p>Rarity</p>
          <input
            className="input w-full max-w-lg border-black"
            {...register("rarity")}
            // aria-invalid={errors.rarity ? "true" : "false"}
            value={setValue("rarity", rarity)}
            onChange={(e) => setRarity(e.target.value)}
          />

          <p>Constellation</p>
          <input
            className="input w-full max-w-lg border-black"
            {...register("constellation", nameValidation)}
            aria-invalid={errors.constellation ? "true" : "false"}
            value={setValue("constellation", constellation)}
            onChange={(e) => setConstellation(e.target.value)}
          />

          <p>Nation</p>
          <input
            className="input w-full max-w-lg border-black"
            {...register("nation", nameValidation)}
            aria-invalid={errors.nation ? "true" : "false"}
            value={setValue("nation", nation)}
            onChange={(e) => setNation(e.target.value)}
          />
          <button className="btn btn-secondary w-full max-w-lg" type="submit">
            Submit
          </button>
        </form>
        <Link to={"/"}>
          <button className="btn">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Create;
