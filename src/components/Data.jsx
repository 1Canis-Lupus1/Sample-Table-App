import { React, Component } from 'react';
import Table from "./Table"

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArray: [{ no: "1", first: "Shubham", last: "Choudhary" },{ no: "2", first: "Shivam", last: "Shobith" }]
        }
    }
    render() {
        const gaa = "Hi There"
        return <Table data={this.state.dataArray} />
    }
}

export default Data;