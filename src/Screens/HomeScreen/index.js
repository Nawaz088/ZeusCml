import React, { Component } from 'react';
import { Center, NativeBaseProvider, Button } from 'native-base';
import Slider from '../../Components/Slider';

export default class HomeScreen extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <Slider />
      </NativeBaseProvider>
    );
  }
}


