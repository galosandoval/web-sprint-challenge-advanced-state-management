import React, { useEffect } from "react";
import { fetchSmurfs, postSmurfs } from "../actions";
import { connect } from "react-redux";

const Smurfs = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
    console.log(props);
  }, []);
  return (
    <div>
      <h2>What's up Smurfs?</h2>
      <form></form>
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
