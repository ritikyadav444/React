import React from "react";
class AddContact extends React.Component {
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="Field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="Field">
                        <label>Email</label>
                        <input type="text" name="name" placeholder="Email" />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}
export default AddContact;
