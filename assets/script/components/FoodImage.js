import React from 'react';
import { StyleSheet, View, Text, Image, Alert } from 'react-native';

export default function FoodImage({ foodName, foodImage, style }) {
  return (
    <View style={style}>
      <Image source={foodImage} style={styles.foodImage} resizeMode="cover" />
      <Text>{foodName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  foodImage: {
    width: '100%',
    height: 100,
  },
  foodImageWrap: {
    height: 100,
    width: '100%',
  }

});
