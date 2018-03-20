import React, { Component } from 'react'
import { Text, View, Button, Image } from 'react-native'
import styles from './index.styles'

export default class BalancesScreen extends Component {

    static navigationOptions = {
      tabBarLabel: 'Monitor'
    }

  render() {
    return(
        <View style={styles.container}>
          <Text style={styles.text}>Hello First Tab</Text>
      </View>
    );
  }

}
