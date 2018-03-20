import React from 'react'
import { Text, View } from 'react-native'
import { TabNavigator } from 'react-navigation'

import BalancesScreen from './app/balancesTab/index'
import SettingsScreen from './app/settingsTab/index'

var MainScreenNavigator = TabNavigator({
    Tab1: { screen: BalancesScreen },
    Tab2: { screen: SettingsScreen }
})

MainScreenNavigator.navigationOptions = {
  title: 'Tab example'
}

export default MainScreenNavigator
