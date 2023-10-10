import React, { useRef, useState } from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
const { width, height } = Dimensions.get('window');
const carouselItem = require('../assets/carousel.json');
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

export default function CarouseBanner() {
    let flatListRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Only needed if want to know the index
    const onViewRef = useRef(({ changed }) => {
      if (changed[0].isViewable) {
        setCurrentIndex(changed[0].index);
      }
    });
    const scrollToIndex = (index) => {
      flatListRef.current?.scrollToIndex({ animated: true, index: index });
    };
  
    const renderItems= ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => console.log('clicked')}
          activeOpacity={1}
        >
          <Image source={{ uri: item.url }} style={styles.image} />
          {/* <View style={styles.footer}>
            <Text style={styles.footerText}>{item.title}</Text>
            <Text style={styles.footerText}>{item.promo}</Text>
          </View> */}
        </TouchableOpacity>
      );
    };
  
    return (
      <View style={styles.container}>
       
  
        <FlatList
          data={carouselItem}
          renderItem={renderItems}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          ref={(ref) => {
            flatListRef.current = ref;
          }}
          style={styles.carousel}
          viewabilityConfig={viewConfigRef}
          onViewableItemsChanged={onViewRef.current}
        />
  
        <View style={styles.dotView}>
          {carouselItem.map(({}, index) => (
            <TouchableOpacity
              key={index.toString()}
              style={[
                styles.circle,
                //index == currentIndex ? styles.circle: styles.circle_round,
                { backgroundColor: index == currentIndex ? '#727272' : '#CFCFCF' },
              ]}
              onPress={() => scrollToIndex(index)}
            />
          ))}
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    carousel: {
      maxHeight: 120,
      borderRadius:12
    },
    image: {
      width,
      marginRight:10,
      height: 120,
      borderRadius:12,
      resizeMode: 'cover',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 50,
      paddingHorizontal: 40,
      alignItems: 'center',
      backgroundColor: '#000',
    },
    footerText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    dotView: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 20,
    },
    circle: {
      width: 15,
      height: 5,
      backgroundColor: '#CFCFCF',
      borderRadius: 50,
      marginHorizontal: 5,
    },
    circle_round: {
        width: 10,
        height: 10,
        backgroundColor: '#CFCFCF',
        borderRadius: 50,
        marginHorizontal: 5,
      },
  });
  