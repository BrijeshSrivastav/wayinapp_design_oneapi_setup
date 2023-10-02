import {View, Text, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('window');
export default function Favourites() {
  const [data, SetData] = useState([1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
     <Text> Comming Soon...</Text>
    </View>
  );
}
