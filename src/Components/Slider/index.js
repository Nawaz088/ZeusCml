import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  background1: {
    backgroundColor: '#3498db',
  },
  background2: {
    backgroundColor: '#2ecc71',
  },
  background3: {
    backgroundColor: '#e74c3c',
  },
});

const Slider = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false}>
      <View style={[styles.slide, styles.background1]}>
        <Text style={styles.text}>Slide 1</Text>
      </View>
      <View style={[styles.slide, styles.background2]}>
        <Text style={styles.text}>Slide 2</Text>
      </View>
      <View style={[styles.slide, styles.background3]}>
        <Text style={styles.text}>Slide 3</Text>
      </View>
    </Swiper>
  );
};

export default Slider;
