import React, { Component } from 'react';

import "./styles/BadgeForm.css"
class BadgeForm extends Component {
    // state = {};
    // handleChange =(e) => {
    //     // console.log({ 
    //     //     name: e.target.name,
    //     //     value: e.target.value})
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }
    
    handleClick =(e) => {
        console.log(`Button was clicked`)
    }

    // handleSubmit =(e) => {
    //     e.preventDefault();
    //     console.log(`Form was submit`)
    //     console.log(this.state)
    // }

    render() {
        const {onChange,formValue, onSubmit,title} = this.props;
        return (
            <React.Fragment>
                <h1>{title}</h1>
                <form onSubmit={onSubmit} className="FormBadge">
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={onChange} className="form-control" type="text" name="firstName" value={formValue.firstName}/>
                        <label>Last Name</label>
                        <input onChange={onChange} className="form-control" type="text" name="lastName" value={formValue.lastName}/>
                        <label>Email</label>
                        <input onChange={onChange} className="form-control" type="email" name="email" value={formValue.email}/>
                        <label>Job Title</label>
                        <input onChange={onChange} className="form-control" type="text" name="jobTitle" value={formValue.jobTitle}/>
                        <label>Twitter</label>
                        <input onChange={onChange} className="form-control" type="text" name="twitter" value={formValue.twitter}/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>

                    {this.props.error &&(
                        <p className="text-danger">{this.props.error.message}</p>
                    )}
                
                </form>
            </React.Fragment>
        );
    }
}

export default BadgeForm;