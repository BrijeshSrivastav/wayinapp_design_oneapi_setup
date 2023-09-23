import {SafeAreaView,View, Text, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('window');
const Home=() =>{
  const [data, SetData] = useState([1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <SafeAreaView style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
    <View>
      <Text>Wlecome To Home Page</Text>
    </View>
    </SafeAreaView>
  );
}
export default Home;