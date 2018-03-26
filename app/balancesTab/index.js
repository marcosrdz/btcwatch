import React, { Component } from 'react'
import { Text, View, Button, Image, Modal } from 'react-native'
import styles from './index.styles'
import AddAddressScreen from '../modals/addAddress/addAddress'

export default class BalancesScreen extends Component {

  state = { isAddAddressModalVisible: false }

  render() {
    return(
        <View style={styles.container}>
          <Text style={styles.text}>Hello First Tab</Text>
          <Modal
            animationType={'slide'}
            transparent={true}
            visible={this.state.isAddAddressModalVisible}
            onRequestClose={() => this.setState({isAddAddressModalVisible: false})}>
          </Modal>
      </View>
    );
  }

}
