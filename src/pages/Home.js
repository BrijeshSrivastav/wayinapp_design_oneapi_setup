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

import { ImageSlider } from "react-native-image-slider-banner";
import Header from '../components/Header';
import Icon, {Icons} from '../components/Icons';
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
        //</SafeAreaView>style={backgroundStyle}
        >

      <View style={{backgroundColor:'#00A1A0', }}>
        <View style={{marginTop:10, marginLeft:8, marginRight:8, borderTopLeftRadius:15, borderTopRightRadius:12, backgroundColor:'#ffffff'}}>
          <View style={{padding:8, borderRadius:15}}>
            <View style={{justifyContent: 'center', alignItems: 'center', flexDirection:'row', width: '100%', height:50, borderRadius:15, backgroundColor:'lightgray', marginTop: 0, paddingRight:6, paddingLeft:6}}>
              <Image
                  source={require('../../imgss/search.png')}
                  style={{ height: 24, width: 24, margin: 5}}
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

          <View style={{padding:5, borderRadius:15}}>
            {/* <ImageSlider 
              caroselImageStyle={{height: 110,
              width: 320,
              //padding:5,
              borderRadius:15,
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
            /> */}
            <ImageSlider 
   data={[
    {img: 'https://img.freepik.com/free-vector/flat-design-sale-background_23-2149066483.jpg?w=740&t=st=1695827857~exp=1695828457~hmac=3430d82958884e69c36deca7f615804bd04304e3a248f5968b8f086f046c80de'},
    {img: 'https://img.freepik.com/free-psd/super-sale-banner_1393-365.jpg?1&w=740&t=st=1695827925~exp=1695828525~hmac=4922cf01bf827e6e5a2dc76f4990a3757447cf81210be1449c7ab01b6973bc28'},
    {img: 'https://img.freepik.com/free-vector/mega-sale-banner-blue-yellow-colors_1017-32176.jpg?w=826&t=st=1695828006~exp=1695828606~hmac=4d0348a87a8bd5a37a2417188f9e3a8c7980ddd084b24ceded4bc7be1faaf88b'}
]}
    autoPlay={false}
    onItemChanged={(item) => console.log("item", item)}
    closeIconColor="#fff"
   
    caroselImageStyle={{
      height: 110,
      width: 300,
      //padding:5,
      borderRadius:15,
      marginLeft:6,
      resizeMode: 'cover',
      }}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0,
        padding: 0,
        margin: 0,
        backgroundColor: "rgba(128, 128, 128, 0.92)"
      }}
      // activeIndicatorStyle={{
      //   width:20,
      // }} 
/>
          </View>
          
          <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 8}}>
            <View style={{ flex: 0.50, justifyContent: 'flex-start', alignItems: 'baseline', height:50, }}>
              <Text numberOfLines={2} style={{fontSize: 14, fontWeight: 'bold',color:'#000000', marginTop:5}}>Explore Wayin</Text>
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'normal',color:'#000000', marginTop:3}}>Discover the categories</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 0.50, justifyContent: 'flex-end', alignItems: 'flex-end',  }}>
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', }}>View all</Text>
              <Image style={{width:12, height:12, borderRadius: 2, marginLeft:5, marginBottom:2, }}
                source={require('../../imgss/arrow.png')} />
            </View>
          </View>

          <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 2}}>
            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
              <Image style={{width:36, height:36, borderRadius: 2, margin:6}}
                source={require('../../imgss/loudspeaker.png')} />
              </View>
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:5}}>Deals</Text>
            </View>
            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
              <Image style={{width:36, height:36, borderRadius: 2, margin:6}}
                source={require('../../imgss/restaurant.png')} />
                </View>
                <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:7}}>Restaurent</Text>
            </View>
            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
              <Image style={{width:36, height:36, borderRadius: 2, margin:6}}
                source={require('../../imgss/weightlifting.png')} />
                </View>
                <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:5}}>Gym</Text>
            </View>
            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
              <Image style={{width:36, height:36, borderRadius: 2, margin:6}}
                source={require('../../imgss/massage.png')} />
                </View>
                <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:5}}>Massage</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 30, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
          <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
              <Image style={{width:36, height:36, borderRadius: 2, margin:6}}
                source={require('../../imgss/restaurant.png')} />
                </View>
                <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:7}}>Restaurent</Text>
            </View>
            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
              <Image style={{width:36, height:36, borderRadius: 2, margin:6}}
                source={require('../../imgss/weightlifting.png')} />
                </View>
                <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:5}}>Gym</Text>
            </View>
            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0'}}>
              <Image style={{width:36, height:36, borderRadius: 2, margin:6}}
                source={require('../../imgss/massage.png')} />
                </View>
                <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#000000', marginTop:5}}>Massage</Text>
            </View>        
            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ borderRadius:10, borderWidth:0.5, borderColor:'#00A1A0',}}>
              <Image style={{width:36, height:36, borderRadius: 2, margin:6}}
                source={require('../../imgss/explore.png')} />
                </View>
                <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#000000', marginTop:5}}>Explore</Text>
            </View>         
          </View>

          
         {/* //https://stackoverflow.com/questions/29322973/whats-the-best-way-to-add-a-full-screen-background-image-in-react-native */}
        </View>


        <View style={{marginTop:0, backgroundColor:'#ffffff'}}>
          <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
          <View style={{ justifyContent: 'center', alignItems: 'center', padding:5, }}>
            <Image style={{width:120, height:140, borderRadius: 12}}
              source={require('../../imgss/bel3.jpeg')} />
              {/* <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#000000'}}>Real Estate</Text> */}
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
            <Image style={{width:120, height:140, borderRadius: 12}}
              source={require('../../imgss/bel2.jpeg')} />
              {/* <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#000000'}}>Real Estate</Text> */}
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
            <Image style={{width:120, height:140, borderRadius: 12}}
              source={require('../../imgss/bel1.jpeg')} />
              {/* <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#000000'}}>Real Estate</Text> */}
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
            <Image style={{width:120, height:140, borderRadius: 12}}
              source={require('../../imgss/bel4.jpeg')} />
              {/* <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#000000'}}>Real Estate</Text> */}
          </View>
          </ScrollView>
        </View>

        {/* <View style={{backgroundColor:'#00A1A0', }}>
          <View style={{backgroundColor:'#ffffff', marginRight:12, marginLeft:12, height:80, width:'95%'}}></View>
        </View> */}

        <View style={{marginTop:0, paddingTop:30, backgroundColor:'#ffffff'}}>
          <ImageBackground 
            source={require('../../imgss/images.jpg')}
            style={{ 
              width: 'auto',
              marginTop:0,
              paddingTop:40,
              height: 340,
              }}
          >

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 8}}>
              <View style={{ flexDirection: 'row', flex: 0.50, justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                <Image style={{width:25, height:36, borderRadius: 2, tintColor:'#ffffff', marginRight:15,  }}
                  source={require('../../imgss/badge.png')} />
                <Text numberOfLines={2} style={{fontSize: 14, fontWeight: 'bold',color:'#ffffff', marginTop:8}}>Popular Category</Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 0.50, justifyContent: 'flex-end', alignItems: 'flex-end',  }}>
                <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold',color:'#ffffff', }}>View all</Text>
                <Image style={{width:12, height:12, borderRadius: 2, tintColor:'#ffffff', marginLeft:5, marginBottom:2, }}
                  source={require('../../imgss/arrow.png')} />
              </View>
            </View>

            <View style={{marginTop:5,}}>
              <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              >
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5, }}>
                <Image style={{width:120, height:140, borderRadius: 12}}
                  source={require('../../imgss/bel3.jpeg')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:6}}>Real Estate</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
                <Image style={{width:120, height:140, borderRadius: 12}}
                  source={require('../../imgss/bel2.jpeg')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:6}}>Real Estate</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
                <Image style={{width:120, height:140, borderRadius: 12}}
                  source={require('../../imgss/bel1.jpeg')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:6}}>Real Estate</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
                <Image style={{width:120, height:140, borderRadius: 12}}
                  source={require('../../imgss/bel4.jpeg')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:6}}>Real Estate</Text>
              </View>
              </ScrollView>
            </View>
          </ImageBackground >
        </View>

        <View style={{backgroundColor:'#E8F5F6', width:'100%', paddingBottom:30, }}>
        {/* <View style={{marginTop:0, paddingTop:0, marginLeft:6, marginRight:6, backgroundColor:'#E8F5F6', borderRadius:25}}>
          <ImageBackground 
            source={require('../../imgss/Rectangle.jpg')}
            style={{ 
              width: '100%',
              marginTop:0,
              borderRadius:25,
              paddingTop:1,
              marginBottom:5,
              height: 200,
              }}
          >

            

          </ImageBackground>
          </View> */}

              <View style={{ marginLeft:6, marginRight:6}}>
                <Image style={{width:'100%', height:140, borderRadius: 12, }}
                  source={require('../../imgss/Rectangle.jpg')} />
              </View>

          </View>


          <View style={{marginTop:0, paddingTop:5, paddingBottom:15, paddingRight:12, backgroundColor:'#fff'}}>
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
              <View style={{ flexDirection: 'row', flex: 0.50, justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                <Text numberOfLines={2} style={{fontSize: 14, fontWeight: 'bold',color:'#000000', marginTop:8}}>Popular Category</Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 0.50, justifyContent: 'flex-end', alignItems: 'flex-end',  }}>
              <Image style={{width:12, height:12, borderRadius: 2, tintColor:'#000000', marginLeft:5, marginBottom:2, }}
                  source={require('../../imgss/arrow.png')} />
              </View>
            </View>

              <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{paddingLeft:12, }}
              >
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5, }}>
                <Image style={{width:190, height:45, borderRadius: 12}}
                  source={require('../../imgss/carrefour.png')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:6}}>Real Estate</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
                <Image style={{width:60, height:60, borderRadius: 12}}
                  source={require('../../imgss/Burger_King_logo_(1999).png')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:6}}>Real Estate</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
                <Image style={{width:60, height:60, borderRadius: 12}}
                  source={require('../../imgss/Ikea_logo.png')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:6}}>Real Estate</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
                <Image style={{width:60, height:60, borderRadius: 12}}
                  source={require('../../imgss/layer1.png')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:6}}>Real Estate</Text>
              </View>
              </ScrollView>
            </View>



            <View style={{marginTop:0, paddingTop:10, paddingBottom:158}}>
          

            <View style={{ padding: 10, marginTop: 0}}>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', height:50, }}>
              <Text numberOfLines={2} style={{fontSize: 14, fontWeight: 'bold',color:'#ffffff', marginTop:0}}>Explore Wayin</Text>
              <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'normal',color:'#ffffff', marginTop:3}}>Discover the categories</Text>
            </View>
            {/* <Image style={{width:'80%', height:160,  marginLeft:2, borderRadius:20, marginRight:12}}
                  source={require('../../imgss/aaaaaa.jpg')} /> */}
                   <ImageBackground 
            source={require('../../imgss/subs.png')}
            style={{ 
              width: '90%',
              height: 90,
              marginLeft:30,
              borderRadius:25
              }}
          >
             <Text numberOfLines={2} style={{fontSize: 10, fontWeight: 'normal',color:'#ffffff', padding:5,width:"60%"}}>Grow Your Business by reaching out to 
 new customers.</Text>
 <TouchableOpacity style={{borderRadius: 10,backgroundColor: '#FFF',width:"40%",height:30,margin:10,flexDirection:'row'}}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Roboto-Medium',
              fontWeight:'normal',
              padding:7
            }}>
            Subscribe Now
          </Text>
          <Icon
            type={Icons.AntDesign}
            name="arrowright"
            size={15}
            style={{marginTop:7,marginRight:10}}
            />
        </TouchableOpacity>
          </ImageBackground>
            </View>
            
            </View>





      </View>


      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
