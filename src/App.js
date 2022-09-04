import React,{ Component } from 'react';
import './App.css';
import Profile from './Component/Profile';
import 'bootstrap/dist/css/bootstrap.min.css' ;

class App extends Component {
  state = {
    data: {
      fullname: "Marwen Zitouni",
      bio: "I’m Full Stack Developer JS Engineer /React, experimenting with HTML, CSS, JavaScript, React, API, MongoDB, Express and Node JS. ",
      profession: " Developer Engineer & Designer",
      imgMZ: "/marwenimg.jpg",
    },
    show: false,
    count: 0,
    date: new Date(),
  };

  render() {
    return (
      <div>
        <button
          className="btn  btn-primary al"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          {this.state.show ? "hide" : "show"}
        </button>
        {this.state.show ? <Profile info={this.state.data} /> : null}
      </div>
    );
  }
}
export default App;