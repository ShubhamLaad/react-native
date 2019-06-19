import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CATEGORY_DETAILS from '../json/CategoryDetailsJSON';
import { ScrollView } from 'react-native-gesture-handler';

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
        <ScrollView>
          {categoryDetails.foodList.map((food) =>
            <View key={food.foodId} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
              <View>
                <Text style={{ color: '#002060', fontSize: 20, fontWeight: '600' }}>{food.foodName}</Text>
                <Text style={{ color: '#002060', fontSize: 14 }}>{food.foodDetails}</Text>
              </View>
              <Image source={food.foodImage} resizeMode="cover" style={{ width: 50, height: 50 }} />
            </View>
          )}
        </ScrollView>
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
