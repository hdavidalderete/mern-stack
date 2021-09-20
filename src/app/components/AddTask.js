import React, { Component } from "react";


class AddTask extends Component {

    constructor(props) {

        super(props);
        this.state = {
            title: '',
            description: ''
        }
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addTask(e) {
        e.preventDefault();
        fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                M.toast({ html: 'Task added successfully' })
                this.props.updateList();
                this.setState({
                    title: '',
                    description: ''
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <form onSubmit={this.addTask}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    value={this.state.title}
                                    name="title"
                                    onChange={this.handleChange}
                                    type="text"
                                    placeholder="Title card" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                    className="materialize-textarea"
                                    placeholder="Task description"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <button
                                    type="submit"
                                    className="btn light-blue darken-4 col s12">
                                    Send
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default AddTask;