import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "",
                location: "",
                email: "",
                avatar_url: "",
            },
        };
        console.log("  constructor - child" );
    }
    async componentDidMount() {
        console.log('  componentDidMount child ')
        const response = await fetch(
            "https://api.github.com/users/mdimran1409036"
        );
        const data = await response.json();
        this.setState({ userInfo: data });
        console.log("  fetch child ", data);
    }
    componentDidUpdate(){
        console.log('  componentDidUpdate- child');
    }
    componentWillUnmount(){
        console.log("  component will unmount -child")
    }
    render() {
        console.log("  render child");
        return (
            <div style={{ border: "1px solid red" }}>
                <h2>this is {this.state.count}</h2>
                <div>
                    <img src={this.state.userInfo.avatar_url} alt="" />
                </div>
                <div style={{ display: "flex" }}>
                    <h2>{this.state.userInfo.name}</h2>
                    <h2>{this.state.userInfo.email}</h2>
                    <h2>{this.state.userInfo.location}</h2>
                </div>
            </div>
        );
    }
}

export default Profile;
