import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';
class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    title: "Певая победа",
                    desc: 'Описание книги',
                    img: 'https://upload.wikimedia.org/wikipedia/ru/b/bd/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0_%D0%92%D0%BE%D1%80%D0%BE%D1%88%D0%B8%D0%BB%D0%BE%D0%B2%D0%B0_%D0%9F%D0%B5%D1%80%D0%B2%D0%B0%D1%8F_%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B0.jpg'
                },
                {
                    title: "Наваждения",
                    desc: 'Описание книги',
                    img: 'https://upload.wikimedia.org/wikipedia/ru/1/10/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8_%22%D0%9D%D0%B0%D0%B2%D0%B0%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%22%2C_%D0%9C%D0%B0%D0%BA%D1%81_%D0%A4%D1%80%D0%B0%D0%B9.jpg'
                },
                {
                    title: "Оно",
                    desc: 'Описание книги',
                    img: 'https://img4.labirint.ru/rc/d7395cf7746c5faa5d0ea4c4a593e6e9/220x340/books30/294422/cover.jpg?1563619680'
                }
            ],
        };
    }
    _renderItem = data => {
        return <View style={styles.row}>
            <Image style={styles.picture} source={{ uri: data.item.img }}></Image>
            <View style={styles.textBlock}>
                <Text style={styles.text}> {data.item.title} </Text>
                <Text style={styles.text}> {data.item.desc} </Text>
            </View>

        </View>;
    };
    render() {
        return (
            < View style={styles.container} >

                < FlatList data={this.state.data} renderItem={this._renderItem} />
            </ View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    row: { fontSize: 24, padding: 42, borderWidth: 1, borderColor: '#DDDDDD', display: 'inline-block' },
    textBlock: {
        display: 'inline-block',
        justifyContent: 'center'
    },
    text: {
        display: 'block'
    },
    picture: {
        width: 100,
        height: 100,
        display: 'inline-block'
    }
});
export default ListScreen;