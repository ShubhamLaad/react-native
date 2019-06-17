import React from 'react';
import { StyleSheet, View, Text, Image, Alert } from 'react-native';

export default function FoodImage({ foodName, foodImage, style }) {
  return (
    <View style={style}>
      <Image source={foodImage} style={styles.foodImage} resizeMode="cover" />
      <Text style={styles.foodName}>{foodName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  foodImage: {
    width: '100%',
    height: 100,
  },
  foodName: {
    width: '80%',
    margin: 'auto',
    marginTop: -10,
    backgroundColor: '#002060',
    color: '#fff',
    zIndex: 10,
    lineHeight: 20,
    textAlign: 'center',
  },
});
