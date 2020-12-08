import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image, FlatList } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";

const exampleData = [
    {
        key: `item-1`,
        label: "Книга первая",
        img: 'https://upload.wikimedia.org/wikipedia/ru/b/bd/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0_%D0%92%D0%BE%D1%80%D0%BE%D1%88%D0%B8%D0%BB%D0%BE%D0%B2%D0%B0_%D0%9F%D0%B5%D1%80%D0%B2%D0%B0%D1%8F_%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B0.jpg'
    },
    {
        key: `item-2`,
        label: "Книга вторая",
        img: 'https://upload.wikimedia.org/wikipedia/ru/b/bd/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0_%D0%92%D0%BE%D1%80%D0%BE%D1%88%D0%B8%D0%BB%D0%BE%D0%B2%D0%B0_%D0%9F%D0%B5%D1%80%D0%B2%D0%B0%D1%8F_%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B0.jpg'
    },
    {
        key: `item-3`,
        label: "Книга третья",
        img: 'https://upload.wikimedia.org/wikipedia/ru/b/bd/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0_%D0%92%D0%BE%D1%80%D0%BE%D1%88%D0%B8%D0%BB%D0%BE%D0%B2%D0%B0_%D0%9F%D0%B5%D1%80%D0%B2%D0%B0%D1%8F_%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B0.jpg'
    }
]

class Example extends Component {
    state = {
        data: exampleData
    };

    removeItem = (item) => {
        this.setState({
            data: this.state.data.filter(book => item.key !== book.key)
        })
    }
    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={{
                    height: 100,
                    backgroundColor: "gray",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'row', flexWrap: 'wrap'
                }}
                onLongPress={() => this.removeItem(item)}
            >
                <Image style={{
                    width: 100,
                    height: 100,
                    display: 'inline',

                }} source={{ uri: item.img }}></Image>
                <View style={{ display: 'inline' }}>
                    <Text
                        style={{
                            fontWeight: "bold",
                            color: "white",
                            fontSize: 32
                        }}
                    >
                        {item.label}
                    </Text>
                </View>

            </TouchableOpacity>
        );
    };

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F5FCFF',
            }}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

export default Example;