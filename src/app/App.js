import React, { Component } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ListTask from "./components/ListTask";
import Task from "./components/Task";


class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Task />
            </div>
        )
    }
}

export default App;