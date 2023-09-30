import React from 'react';
import { View } from 'react-native';
import TasbeehCounter from './TasbeehCounter';
import ImageAttachment from '../components/ImageAttachment';

const TasbeehCounterApp = () => {
  const imageURL = require('../../assets/beach.jpg'); // Replace with your image source

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageAttachment imageURL={imageURL} />
      <TasbeehCounter />
    </View>
  );
};

export default TasbeehCounterApp;
