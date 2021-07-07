import React from 'react';
import { axiosWithAuth } from "../axiosAuth";

class Friends extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get('/data')
            .then(res => {
                this.setState({
                    friends: res.data.data
                });
            })
            .catch(err => console.log(err));
    }
}

export default Friends;