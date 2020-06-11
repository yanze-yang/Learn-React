import React from "react";
import "./styles.module.css";
import { newUser } from "./api";

function Results({ results }) {
  return (
    <div className="container">
      <div className="nav">
        <div className="nav-item">Search</div>
        <div className="nav-item active">Details</div>
      </div>
      <hr />
      <div className="list">
        <div className="item">
          <b>Make</b>
        </div>
        <div className="item">
          <b>Model</b>
        </div>
        <div className="item">
          <b>Year</b>
        </div>
        <div className="item">
          <b>Kilometre</b>
        </div>
        <div className="item">
          <b>Colour</b>
        </div>
      </div>
      {results.map((result, index) => (
        <div key={index} className="list">
          <div className="item">{result.make}</div>
          <div className="item">{result.model}</div>
          <div className="item">{result.year}</div>
          <div className="item">{result.kilometre}</div>
          <div className="item">{result.colour}</div>
        </div>
      ))}
    </div>
  );
}

function Loading() {
  return (
    <div className="container">
      <div className="nav">
        <div className="nav-item active">Search</div>
        <div className="nav-item">Details</div>
      </div>
      <hr />
      <div>Searching cars for you...</div>
    </div>
  );
}

function searchReducer(state, action) {
  if (action.type === "login") {
    return {
      ...state,
      loading: true,
      error: "",
    };
  } else if (action.type === "success") {
    return {
      ...state,
      loading: false,
      error: "",
      searched: true,
      results: action.data,
    };
  } else if (action.type === "error") {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  } else if (action.type === "input") {
    return {
      ...state,
      [action.name]: action.value,
    };
  } else {
    throw new Error(`That action doesn't exist`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(searchReducer, {
    make: "",
    model: "",
    year: "",
    kilometre: "",
    colour: "",
    loading: false,
    error: "",
    searched: false,
    results: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "login" });

    newUser({
      username: state.username,
      email: state.email,
      password: state.password,
    })
      .then((res) => dispatch({ type: "success", data: res }))
      .catch((error) =>
        dispatch({
          type: "error",
          error,
        })
      );
  };

  if (state.searched === true) {
    return (
      <React.Fragment>
        <Results results={[...state.results]} />
      </React.Fragment>
    );
  }

  if (state.loading === true) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="nav">
        <div className="nav-item active">Search</div>
        <div className="nav-item">Details</div>
      </div>
      <hr />
      {state.error && <p>{state.error}</p>}
      <form onSubmit={handleSubmit}>
        {state.search && "test"}
        <h2>Search cars</h2>
        <div className="search">
          <select className="search-item" disabled>
            <option value="toyota">Toyota</option>
          </select>
          <select className="search-item" disabled>
            <option value="corolla">Corolla</option>
          </select>
          <input
            className="search-item-sm"
            type="text"
            value="> 2018"
            placeholder="Year"
            disabled
          />
          <input
            className="search-item-sm"
            type="text"
            value="< 20000 km"
            placeholder="Kilometre"
            disabled
          />
          <select className="search-item-sm" disabled>
            <option value="white">All Colour</option>
          </select>
        </div>
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
