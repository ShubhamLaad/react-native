import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const food = require('./assets/icon.png');

const FOOD_LIST = [{
  id: 1,
  foodName: 'Sabji',
  foodImage: food,
}, {
  id: 2,
  foodName: 'rooti',
  foodImage: food,
}];
export default class App extends React.PureComponent {

  renderFoodList = ({ item }) => (
    <View>
      <Text>{item.foodName}</Text>
      <Image source={food} style={styles.foodImage} />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.row}>
            <Icon
              name='glass' />
            <Text>Delhi</Text>
          </View>
          <View style={styles.row}>
            <Icon name='search' size={20} />
            <Icon name='user' size={20} style={styles.userIcon} />
          </View>
        </View>

        <ScrollView>
          <FlatList
            data={FOOD_LIST}
            renderItem={this.renderFoodList}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  icon: {
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
  },
  userIcon: {
    marginLeft: 10,
  },
  foodImage: {
    height: 50,
    width: 50,
  }

});
