import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function FoodTypeImage({ foodName, foodImage, style, onImagePress }) {
  return (
    <TouchableOpacity
      style={style}
      onPress={onImagePress}
    >
      <Image source={foodImage} style={styles.foodImage} resizeMode="cover" />
      <Text style={styles.foodName}>{foodName}</Text>
    </TouchableOpacity>
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
