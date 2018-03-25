import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'

import BalancesScreen from './app/balancesTab/index'
import SettingsScreen from './app/settingsTab/index'
import Ionicons from 'react-native-vector-icons/Ionicons'

const BalancesStackNavigator = StackNavigator({
  Balances: {
    screen: BalancesScreen,
    navigationOptions:({navigation}) => ({
      title: 'Balance',
      headerRight: <TouchableOpacity style={ [{paddingHorizontal:15}]}><Ionicons name="ios-add" size={44}/></TouchableOpacity>
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
