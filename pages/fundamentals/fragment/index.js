import React, { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <div className="container">
        <FragmentDemo />
      </div>
      <Table />
    </Fragment>
  );
};

// when using Fragment, the html structure will be:
// <div class='container'>
//   <h1>Title</h1>
//   <p>content</p>
// </div>

// Fragment doesn't gennerate any html tag.
// It just allows you to return a component without wrapped in <div></div>
const FragmentDemo = () => {
  return (
    <Fragment>
      <h1>Title</h1>
      <p>content</p>
    </Fragment>
  );
};

// when coding a table, you may need to use Fragment.
const Table = () => {
  return (
    <table>
      <tbody>
        <tr>
          <Columns />
        </tr>
      </tbody>
    </table>
  );
};

const Columns = () => {
  return (
    <Fragment>
      <td>Name</td>
      <td>Address</td>
    </Fragment>
  );
};

export default App;
