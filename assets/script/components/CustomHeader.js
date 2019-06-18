import React from 'react';
import {
  StyleSheet, Text, View, Image, ScrollView, FlatList, Button, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import pagesConstant from '../constants/pages.constant';
const LOGO = require('../../images/logo.png');

export default class CustomHeader extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      showSearchField: false
    }
  }

  render() {
    return (
      <View style={styles.header}>
        <TouchableWithoutFeedback style={styles.row} onPress={() => { this.props.navigation.navigate(pagesConstant.CategoryListScreen); }}>
          <Image source={LOGO} style={{width: 30, height: 30}} resizeMode="cover" />
          <Text style={{ color: '#002060', marginLeft: 10 }}>Delhi Garden</Text>
        </TouchableWithoutFeedback>
        <View style={styles.row}>
          <Icon
            name="search"
            size={30}
            style={{ color: '#002060' }}
            onPress={() => { this.setState({ showSearchField: !this.state.showSearchField }) }}
          />
          <Icon
            name="user"
            size={30}
            style={styles.userIcon}
          />
        </View>
        {this.state.showSearchField && <View style={styles.searchFieldWrap}>
          <TextInput
            style={{ lineHeight: 24, fontSize: 14, paddingLeft: 10, paddingRight: 10, width: '90%' }}
            placeholder="Search Category"
            onChangeText={(text) => this.setState({ text })}
          />
          <Icon
            name="search"
            style={{ color: '#002060', width: '10%' }}
          />
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 50,
    alignItems: 'flex-end',
    padding: 10,
    position: 'relative',
  },
  icon: {
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userIcon: {
    marginLeft: 10,
    color: '#002060',
  },
  searchFieldWrap: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
