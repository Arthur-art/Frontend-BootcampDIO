import React from "react";
export default class App extends React.Component {
  render() {
    const h1 = <h1 className="title">Codecademy</h1>;
    const tagA = (
      <div>
        <a href="#" className="link">
          <h1>Aprendendo React</h1>
        </a>
      </div>
    );

    const myList = (
        <ul>
            <li>Aprendendo</li>
            <li>React</li>
            <li>na</li>
            <li>codecademy</li>
        </ul>
    )

    return (
      <div>
        {h1}
        {tagA}
        {myList}
      </div>
    );
  }
}
