import React from 'react';
import {
  StyleSheet, Text, View, Image, ScrollView, FlatList, Button, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FoodImage from './FoodImage';

const soup = require('../../images/soup.jpg');
const mainCourse = require('../../images/main-course.jpg');
const appetizers = require('../../images/appetizers.jpg');

const FOOD_LIST = [{
  id: 1,
  foodName: 'Soup',
  foodImage: soup,
}, {
  id: 2,
  foodName: 'Appetizers',
  foodImage: appetizers,
}, {
  id: 3,
  foodName: 'Main Course',
  foodImage: mainCourse,
},];

export default class Home extends React.PureComponent {
  renderFoodList = ({ item, index }) => (
    <FoodImage foodImage={item.foodImage} foodName={item.foodName} style={{ width: '50%' }} />
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.row}>
            <Icon
              name="glass"
            />
            <Text>Delhi</Text>
          </View>
          <View style={styles.row}>
            <Icon name="search" size={20} />
            <Icon name="user" size={20} style={styles.userIcon} />
          </View>
        </View>

        <ScrollView>
          <View style={styles.foodImageList} >
            {
              FOOD_LIST.map((item, index) =>
                <FoodImage
                  key={item.id}
                  foodImage={item.foodImage}
                  foodName={item.foodName}
                  style={{ width: '50%', marginBottom: 20 }}
                />
              )
            }
          </View>
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
  foodImageList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
