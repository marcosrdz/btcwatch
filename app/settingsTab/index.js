import React, { Component } from 'react'
import { Text, View, Button, Image } from 'react-native'
import styles from './index.styles'

export default class SettingsScreen extends Component {
  
  render() {
    return(
        <View style={styles.container}>
          <Text style={styles.text}>Hello Settings Tab</Text>
      </View>
    );
  }

}
