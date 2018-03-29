import React, { Component } from 'react'
import { Text, View, Button, Image, Modal, FlatList } from 'react-native'
import styles from './index.styles'
import AddAddressScreen from '../modals/addAddress/addAddress'
import BalanceListItem from './balanceListItem'

export default class BalancesScreen extends Component {

  state = { isAddAddressModalVisible: false }

  renderSeparatorComponent() {
    return <View style={styles.listSeparator} />
  }

  render() {
    return(
        <View style={styles.container}>
          <Modal
            animationType={'slide'}
            transparent={true}
            visible={this.state.isAddAddressModalVisible}
            onRequestClose={() => this.setState({isAddAddressModalVisible: false})}>
          </Modal>
          <FlatList
            style={styles.list}
            data={[{key: 'a'}, {key: 'b'}]}
            renderItem={({item}) => <BalanceListItem data={item} /> }
            ItemSeparatorComponent={this.renderSeparatorComponent}
          />
      </View>
    );
  }

}
