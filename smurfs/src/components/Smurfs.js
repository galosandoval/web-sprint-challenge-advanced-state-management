import React, { useEffect, useState } from "react";
import { fetchSmurfs, postSmurfs } from "../actions";
import { connect } from "react-redux";

const Smurfs = (props) => {
  const smurfeyValues = {
    name: "",
    age: "",
    height: "",
    id: new Date(),
  };

  const [smarf, setSmarf] = useState(smurfeyValues);

  const onChange = (e) => {
    setSmarf({ ...smarf, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    postSmurfs(smarf);
    setSmarf(smurfeyValues);
    console.log(smarf)
  };

  useEffect(() => {
    props.fetchSmurfs();
    console.log(props);
  }, []);
  return (
    <div onSubmit={onSubmit}>
      <h2>What's up Smurfs?</h2>
      <form>
        <label htmlFor="name">
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Smurf's Name"
            value={smarf.name}
            onChange={onChange}
          />
        </label>
        <label htmlFor="age">
          <input
            name="age"
            id="age"
            type="text"
            placeholder="Smurf's age"
            value={smarf.age}
            onChange={onChange}
          />
        </label>
        <label htmlFor="height">
          <input
            name="height"
            id="height"
            type="text"
            placeholder="Smurf's height"
            value={smarf.height}
            onChange={onChange}
          />
        </label>
        <button type="submit">Add New Smurf</button>
      </form>
      {props.isLoading ? <h4>Loading smurfs now...</h4> : null}
      {props.smurfs.length > 0 ? (
        <div className="card-container">
          {props.smurfs.map((smurf) => (
            <div className="card">
              <h2 key={smurf.id}>{smurf.name}</h2>
              <p>{smurf.age} Years Young</p>
              <p>Height: {smurf.height}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { fetchSmurfs, postSmurfs })(Smurfs);
