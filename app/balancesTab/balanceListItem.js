import React, { Component } from 'react'
import { Text, View, Button, Image, StyleSheet } from 'react-native'

export default class BalanceListItem extends Component {

    state = { data: Array() }

    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.data })
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                <View>
                    <Text>Address:</Text>
                    <Text>{this.state.data.address}</Text>
                </View>
                <View>
                    <Text>Transactions:</Text>
                    <Text>{this.state.data.transactions}</Text>
                </View>
                <View>
                    <Text>Balance:</Text>
                    <Text>{this.state.data.balance}</Text>
                </View>
            </View>
            </View>
        );
    } 
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF'
    },
    horizontalDirection: {
        flexDirection: 'row'
    },
    content: {
        padding: 20
    }
})