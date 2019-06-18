import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const soup = require('../../images/soup.jpg');


const CATEGORY_DETAILS = {
  categoryId: 1,
  categoryName: 'Soup',
  categoryImage: soup,
  foodList: [{
    foodId: 1,
    foodName: 'Tamato Soup',
    foodImage: soup,
    foodPrice: 2,
    foodDetails: 'Made of tamato',
  }]
};

export default class CategoryDetailsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryDetails: CATEGORY_DETAILS
    }
  }

  render() {
    const { categoryDetails } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.listHeader}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="arrow-left" size={30} color="#fff" onPress={() => { this.props.navigation.goBack() }} />
            <Text style={{ color: '#fff', marginLeft: 20 }}>{categoryDetails.categoryName}</Text>
          </View>
          <Icon name="arrow-down" size={30} color="#fff" onPress={() => { console.log('press') }} />
        </View>
        <View>
          {categoryDetails.foodList.map((food) =>
            <View key={food.foodId} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <Text style={{ color: '#002060', fontSize: 20, fontWeight: '600' }}>{food.foodName}</Text>
                <Text style={{ color: '#002060', fontSize: 14 }}>{food.foodDetails}</Text>
              </View>
              <Image source={food.foodImage} resizeMode="cover" style={{ width: 50 }} />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  listHeader: {
    backgroundColor: '#002060',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
  }
});
