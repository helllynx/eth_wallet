import React, {Component} from 'react'
import ExampleScreen from "./Containers/Example/ExampleScreen";

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ExampleScreen/>
        )
    }
}
