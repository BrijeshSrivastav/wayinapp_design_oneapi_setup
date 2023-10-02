import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
const {height, width} = Dimensions.get('window');
export default function Help() {
  const [data, SetData] = useState([1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Comming Soon...</Text>
    </View>
  );
}
