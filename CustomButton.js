import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
class ButtonScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { pressing: false };

    }
    _onPressIn = () => {
        this.setState({ pressing: true });
    };
    _onPressOut = () => {
        this.setState({ pressing: false });
    };
    render() {
        return (
            <View style={styles.container} >
                <TouchableHighlight
                    onPressIn={this._onPressIn}
                    onPressOut={this._onPressOut}
                    style={styles.touchable}
                >
                    <View style={styles.button} >
                        <Text style={styles.welcome} >
                            {this.state.pressing ? "Отпусти меня!" : "Нажми меня!"}
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: { fontSize: 20, textAlign: "center", margin: 10, color: "#FFFFFF" },
    touchable: { borderRadius: 100 },
    button: {
        backgroundColor: "#494deb",
        borderRadius: 100,
        height: 500,
        width: 300,
        justifyContent: "center"
    }
});
export default ButtonScreen;