import React from "react";

class App2 extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.callTitle}</h1>
        <button onClick={this.props.clickT}>changeYears</button>
      </div>
    );
  }
}
export default App2;

// ChangeYears = (changeYears) => {
//   const ages = changeYears.map((changeYears) => {
//     // const tempu = user;
//     return (changeYears.age -= 10);
//   });
//   this.setState(ages);
//   this.props.some(this.state.listOfPeople);
// };
