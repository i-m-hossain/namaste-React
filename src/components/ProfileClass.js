import React from "react";
import Shimmer from "./Shimmer";

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
            loading: false,
            error: null,
        };
        console.log("  constructor - child");
    }
    async componentDidMount() {
        console.log("  componentDidMount child ");
        try {
            this.setState({ loading: true });
            const response = await fetch(
                "https://api.github.com/users/mdimran1409036"
            );
            const data = await response.json();
            this.setState({ userInfo: data, loading: false });
            console.log("fetch child ", data);
        } catch (err) {
            this.setState({ error: err, loading: false });
            console.log(err);
        }
    }
    componentDidUpdate() {
        console.log("  componentDidUpdate- child");
    }
    componentWillUnmount() {
        console.log("  component will unmount -child");
    }
    render() {
        console.log("  render child");
        if (this.state.loading) {
            return <Shimmer/>
        }
        if (this.state.error) {
            return <p>{"failed to fetch"}</p>;
        }
        return (
            <div style={{ border: "1px solid red" }}>
                <div>
                    <img src={this.state.userInfo?.avatar_url} alt="" />
                </div>
                <div className="flex">
                    <h2>{this.state.userInfo?.name}</h2>
                    <h2>{this.state.userInfo?.email}</h2>
                    <h2>{this.state.userInfo?.location}</h2>
                </div>
            </div>
        );
    }
}

export default Profile;
