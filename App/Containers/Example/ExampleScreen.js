import React from 'react'
import {ActivityIndicator, Button, View} from 'react-native'
import Style from './ExampleScreenStyle'
import {networkEventsListener} from "../../Utils/NetworkHelper";


class ExampleScreen extends React.Component {

    connectAndListenEvents() {
        networkEventsListener();
    }

    render() {
        return (
            <View style={Style.container}>
                {this.props.userIsLoading ? (
                    <ActivityIndicator size="large" color="#0000ff"/>
                ) : (
                    <View>
                        <Button title={'Start listening events'} onPress={() =>this.connectAndListenEvents()}/>
                    </View>
                )}
            </View>
        )
    }
}

export default ExampleScreen
