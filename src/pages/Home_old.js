/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  useColorScheme,
  View,
  Alert,
  ImageBackground,
  Image,
} from 'react-native';

// import {
//   Colors,  
// } from 'react-native/Libraries/NewAppScreen';
import { ImageSlider } from "react-native-image-slider-banner";
import Header from '../components/Header';

function Home({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  function aaa(){
    Alert.alert('Click here for voice search ');
  }

  return (
    <SafeAreaView >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        //backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header navigation={navigation}/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
       style={{marginBottom:80}}
       >

        <View style={{padding:8, borderRadius:12}}>
          <View style={{justifyContent: 'center', alignItems: 'center', flexDirection:'row', width: '100%', height:50, borderRadius:12, backgroundColor:'lightgray', marginTop: 15, paddingRight:6, paddingLeft:6}}>
            <Image
                source={require('../../imgss/search.png')}
                style={{ height: 24, width: 24,margin: 5}}
            />
           <TextInput 
                placeholder="Discover Endless Possibilties" 
                style={{backgroundColor:'lightgray', flex:1}}
            />
            <TouchableOpacity onPress = {aaa}>
              <Image
                source={require('../../imgss/micc.png')}
                style={{ height: 20, width: 20, margin:5 }}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{padding:5, borderRadius:22}}>
          <ImageSlider 
            caroselImageStyle={{height: 180,
            width: 320,
            //padding:5,
            borderRadius:12,
            marginLeft:6,
          }}
            data={[
                {img: 'https://img.freepik.com/free-vector/flat-design-sale-background_23-2149066483.jpg?w=740&t=st=1695827857~exp=1695828457~hmac=3430d82958884e69c36deca7f615804bd04304e3a248f5968b8f086f046c80de'},
                {img: 'https://img.freepik.com/free-psd/super-sale-banner_1393-365.jpg?1&w=740&t=st=1695827925~exp=1695828525~hmac=4922cf01bf827e6e5a2dc76f4990a3757447cf81210be1449c7ab01b6973bc28'},
                {img: 'https://img.freepik.com/free-vector/mega-sale-banner-blue-yellow-colors_1017-32176.jpg?w=826&t=st=1695828006~exp=1695828606~hmac=4d0348a87a8bd5a37a2417188f9e3a8c7980ddd084b24ceded4bc7be1faaf88b'}
            ]}
            autoPlay={true}
            timer={4000}
            onItemChanged={(item) => console.log("item", item)}
            closeIconColor="#fff"
            activeIndicatorStyle={{
              width:5,
            }}            
          />
        </View>

      {/* <View style={{ justifyContent: 'center', marginTop:2,}}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin:5,}}>
          <Image style={{width: '100%', height:140, borderRadius: 10}}
            source={require('./ban3.jpg')} />
        </View>
      </View> */}
        
        <View style={{ flexDirection: 'row', padding: 0, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
          <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
            <Image style={{width:60, height:60, borderRadius: 40}}
              source={require('../../imgss/loudspeaker.png')} />
            </View>
            <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:5}}>Deals</Text>
          </View>
         
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
          <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0', padding:5}}>
            <Image style={{width:50, height:50, borderRadius: 2}}
              source={require('../../imgss/restaurant.png')} />
              </View>
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:7}}>Restaurent</Text>
          </View>
          
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
          <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
            <Image style={{width:60, height:60, borderRadius: 40}}
              source={require('../../imgss/weightlifting.png')} />
              </View>
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:5}}>Gym</Text>
          </View>
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
          <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
            <Image style={{width:60, height:60, borderRadius: 40}}
              source={require('../../imgss/massage.png')} />
              </View>
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:5}}>Massage</Text>
          </View>          
        </View>

        {/* <View style={{ flexDirection: 'row', padding: 0, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center',margin:2, borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
            <Image style={{width:60, height:60, borderRadius: 40}}
              source={require('../../imgss/makeup.png')} />
            <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000'}}>Beauty</Text>
          </View>
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center',margin:2, borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
            <Image style={{width:48, height:60, borderRadius: 20}}
              source={require('../../imgss/hospital-bed.png')} />
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000'}}>Hospital</Text>
          </View>
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center',margin:2, borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
            <Image style={{width:50, height:50, borderRadius: 2}}
              source={require('../../imgss/hospital.png')} />
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:8}}>Hospital</Text>
          </View>
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center',margin:2, borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
            <Image style={{width:60, height:60, borderRadius: 40}}
              source={require('../../imgss/massage.png')} />
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000'}}>Massage</Text>
          </View>            
        </View> */}

<View style={{ flexDirection: 'row', padding: 0, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
          <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
            <Image style={{width:60, height:60, borderRadius: 40}}
              source={require('../../imgss/makeup.png')} />
            </View>
            <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:5}}>Beauty</Text>
          </View>
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
          <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0', padding:5}}>
            <Image style={{width:50, height:50, borderRadius: 2}}
              source={require('../../imgss/hospital-bed.png')} />
              </View>
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:7}}>Hospital</Text>
          </View>
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
          <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
            <Image style={{width:60, height:60, borderRadius: 40}}
              source={require('../../imgss/weightlifting.png')} />
              </View>
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:5}}>Gym</Text>
          </View>
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
          <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
            <Image style={{width:60, height:60, borderRadius: 40}}
              source={require('../../imgss/massage.png')} />
              </View>
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:5}}>Massage</Text>
          </View>          
        </View>

        <View style={{ flexDirection: 'row', padding: 0, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
          <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
            <Image style={{width:60, height:60, borderRadius: 40}}
              source={require('../../imgss/loudspeaker.png')} />
            </View>
            <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:5}}>Deals</Text>
          </View>
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
          <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0', padding:5}}>
            <Image style={{width:50, height:50, borderRadius: 2}}
              source={require('../../imgss/restaurant.png')} />
              </View>
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:7}}>Restaurent</Text>
          </View>
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
          <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
            <Image style={{width:60, height:60, borderRadius: 40}}
              source={require('../../imgss/weightlifting.png')} />
              </View>
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:5}}>Gym</Text>
          </View>
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
          <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
            <Image style={{width:60, height:60, borderRadius: 40}}
              source={require('../../imgss/explore.png')} />
              </View>
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:5}}>Explore</Text>
          </View>          
        </View>

        <View style={{marginTop:12, }}>
          <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
          <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
            <Image style={{width:120, height:140, borderRadius: 5}}
              source={require('../../imgss/bel3.jpeg')} />
              {/* <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#000000'}}>Real Estate</Text> */}
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
            <Image style={{width:120, height:140, borderRadius: 5}}
              source={require('../../imgss/bel2.jpeg')} />
              {/* <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#000000'}}>Real Estate</Text> */}
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
            <Image style={{width:120, height:140, borderRadius: 5}}
              source={require('../../imgss/bel1.jpeg')} />
              {/* <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#000000'}}>Real Estate</Text> */}
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
            <Image style={{width:120, height:140, borderRadius: 5}}
              source={require('../../imgss/bel4.jpeg')} />
              {/* <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#000000'}}>Real Estate</Text> */}
          </View>
          </ScrollView>
        </View>

{/* //https://stackoverflow.com/questions/29322973/whats-the-best-way-to-add-a-full-screen-background-image-in-react-native */}
        {/* <ImageBackground 
          source={require('../../imgss/images.jpg')}
          style={{ flex: 1,
            width: 'auto',
            height: 'auto',
            }}
        >
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Your Contents</Text>
       </View>

 </ImageBackground > */}


      </ScrollView>
    </SafeAreaView>
  );
}


export default Home;
