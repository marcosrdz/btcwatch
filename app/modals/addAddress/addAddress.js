import React, { Component } from 'react'
import { View,mage, Modal } from 'react-native'
import styles from './addAddress.style'

export default class AddAddressScreen extends Component {

  state = { modalVisible: false }

  render() {
    return(
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { this.setState({modalVisible: false}) }}>
        </Modal>
      </View>
    );
  }

}
