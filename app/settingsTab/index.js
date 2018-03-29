import React, { Component } from 'react'
import { Image } from 'react-native'
import styles from './index.styles'
import { Separator, Container, Header, Content, List, ListItem, Text } from 'native-base'

export default class SettingsScreen extends Component {

  render() {
    return(
      <Container style={styles.container}>
        <Content>
          <Separator bordered>
            <Text>UPDATE INFORMATION</Text>
          </Separator>
          <ListItem >
            <Text>Every 15 seconds</Text>
          </ListItem>
          <ListItem>
            <Text>Every 30 seconds</Text>
          </ListItem>
          <ListItem last>
            <Text>Every 1 minute</Text>
          </ListItem>

          <Separator bordered>
            <Text>BLOCK EXPLORER</Text>
          </Separator>
          <ListItem >
            <Text>Blockchair.com</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }

}
