import React from 'react';
import {
  StyleSheet, Text, View, Image, ScrollView, FlatList, Button, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FoodTypeImage from '../components/FoodTypeImage';
import pagesConstant from '../constants/pages.constant';

const soup = require('../../images/soup.jpg');
const mainCourse = require('../../images/main-course.jpg');
const appetizers = require('../../images/appetizers.jpg');

const Categoty_LIST = [{
  categoryId: 1,
  categoryName: 'Soup',
  categoryImage: soup,
}, {
  categoryId: 2,
  categoryName: 'Appetizers',
  categoryImage: appetizers,
}, {
  categoryId: 3,
  categoryName: 'Main Course',
  categoryImage: mainCourse,
},];

export default class CategoryListScreen extends React.PureComponent {
  onImagePress = (foodTypeId) => {
    this.props.navigation.navigate(pagesConstant.CategoryDetailsScreen, { foodTypeId });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.foodImageList} >
            {
              Categoty_LIST.map((item) =>
                <FoodTypeImage
                  key={item.categoryId}
                  foodImage={item.categoryImage}
                  foodName={item.categoryName}
                  style={{ width: '50%', marginBottom: 20 }}
                  onImagePress={this.onImagePress}
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
  userIcon: {
    marginLeft: 10,
  },
  foodImageList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
