import React, { Component } from "react";

class ListTask extends Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        console.log(this.props)
    }

    deleteTask(id) {

        if (confirm('Are you sure you want to delete it?')) {
            fetch(`/api/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    M.toast({ html: 'Task delete' });
                    this.props.updateList();
                });
        }
    }

    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tasks.map((task => {
                            return (
                                <tr key={task._id}>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>
                                        <button
                                            className="btn light-blue darken-4"
                                            onClick={() => this.deleteTask(task._id)}
                                        >
                                            <i className="material-icons">delete</i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }))}
                    </tbody>
                </table>
            </>
        )
    }
}

export default ListTask;