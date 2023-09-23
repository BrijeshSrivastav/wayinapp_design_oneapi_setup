/* eslint-disable react-hooks/exhaustive-deps */
import {SafeAreaView,View, Text} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
    <View>
      <Text>Splash</Text>
    </View>
    </SafeAreaView>
  );
};

export default Splash;
