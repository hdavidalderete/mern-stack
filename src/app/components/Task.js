import React, { Component } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

class Task extends Component {

    constructor() {
        super();
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        this.fetchTasks();
    }

    fetchTasks() {
        fetch('/api/tasks')
            .then(res => res.json())
            .then(data => {
                // save the tasks obtained
                this.setState({
                    tasks: data
                })
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <AddTask
                                updateList={() => this.fetchTasks()} />
                        </div>
                        <div className="col s7">
                            <ListTask
                                tasks={this.state.tasks}
                                updateList={() => this.fetchTasks()} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task;