import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import HeaderButtons from 'react-navigation-header-buttons'

import BalancesScreen from './app/balancesTab/index'
import SettingsScreen from './app/settingsTab/index'
import AddAddressScreen from './app/modals/addAddress/addAddress'
import Ionicons from 'react-native-vector-icons/Ionicons'

const BalancesStackNavigator = StackNavigator({
  Balances: {
    screen: BalancesScreen,
    navigationOptions:({navigation}) => ({
      title: 'Balance',
      headerRight: (<HeaderButtons IconComponent={Ionicons} iconSize={23} color="blue">
      <HeaderButtons.Item title="add" iconName="ios-add" onPress={() => navigation.navigate('AddAddress')}/>
    </HeaderButtons>)
    })
  },
  AddAddress: {
    screen: AddAddressScreen,
    mode: 'modal',
    navigationOptions:({navigation}) => ({
      headerTitle: 'Add Address',
      headerLeft: (<HeaderButtons left={true} color="blue">
      <HeaderButtons.Item title="Cancel" onPress={() =>  navigation.goBack() } />
    </HeaderButtons>),
      headerRight: (<HeaderButtons color="blue">
      <HeaderButtons.Item title="Done" onPress={() =>  console.warn("Done pressed") } />
    </HeaderButtons>)
    })
  }
})

const SettingsStackNavigator = StackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions:({navigation}) => ({
      title: 'Settings'
    })
  }
})

const TabBarNavigation = TabNavigator({
    Balances: {
      screen: BalancesStackNavigator,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Ionicons name="logo-bitcoin" size={25} color={tintColor}/>
        )
      }
    },
    Settings: {
      screen: SettingsStackNavigator,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Ionicons name="ios-settings" android="md-settings" size={25} color={tintColor}/>
        )
      }
    }
})

export default TabBarNavigation
