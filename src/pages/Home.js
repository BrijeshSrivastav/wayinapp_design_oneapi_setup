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
  Image,
  ImageBackground,
  
} from 'react-native';

import SvgUri from 'react-native-svg-uri';
//import { SvgUri } from 'react-native-svg';

import { ImageSlider } from "react-native-image-slider-banner";
import Header from '../components/Header';
import Icon, {Icons} from '../components/Icons';
import CarouseBanner from '../components/CarouseBanner'
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
            <View style={{justifyContent: 'center', alignItems: 'center', flexDirection:'row', width: '100%', height:50, borderRadius:15, backgroundColor:'#F3F2F2', marginTop: 0, paddingRight:6, paddingLeft:6}}>
              <Image
                  source={require('../../imgss/search.png')}
                  style={{ height: 24, width: 24, margin: 5}}
              />
            <TextInput 
                  placeholder="Discover Endless Possibilties" 
                  placeholderTextColor="#A0A0A0"
                  style={{backgroundColor:'#F3F2F2', flex:1,}}
              />

              <View style={{padding:6}}> 
              <TouchableOpacity onPress = {aaa}>
                <Image
                  source={require('../../imgss/microphone.png')}
                  style={{ height: 20, width: 20, margin:5,tintColor:'#7B7B7B'}}/>

                  {/* <SvgUri width="16" height="16" source={require('../../imgss/marker.svg')} /> */}

                  {/* <SvgUri
                    width="24"
                    height="24"
                    source={{uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}}
                  /> */}
              </TouchableOpacity>
              </View>
            </View>
          </View>


       


          <View style={{padding:5, borderRadius:15}}>
          <CarouseBanner />
            {/* <ImageSlider 
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
     
     
/> */}
          </View>

         
          
          {/* https://github.com/meliorence/react-native-snap-carousel/issues/138 */}
          
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
          <View style={{ justifyContent: 'center', alignItems: 'center', padding:5 }}>
            <ImageBackground style={{width:120, height:140}}
              imageStyle={{ borderRadius: 12}}
              source={require('../../imgss/bel1.jpeg')} 
              >
               
            </ImageBackground>
              {/* <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#000000'}}>Real Estate</Text> */}
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
          <ImageBackground style={{width:120, height:140}}
              imageStyle={{ borderRadius: 12}}
              source={require('../../imgss/bel2.jpeg')} >
              <Text numberOfLines={1} style={{fontSize: 12, fontWeight: 'bold', color:'#FFF',paddingTop:15,paddingLeft:10,paddingRight:15}}>Doctors </Text>
<Text  style={{fontSize: 11, width:52,fontWeight: 'normal', color:'#FFF',paddingLeft:10}}>Consult
Now</Text>
</ImageBackground>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
          <ImageBackground style={{width:120, height:140}}
              imageStyle={{ borderRadius: 12}}
              source={require('../../imgss/bel3.jpeg')} >
                 <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#FFF',paddingTop:15,paddingLeft:10,paddingRight:15,width:80}}>Home Services </Text>
<Text  style={{fontSize: 11, width:60,fontWeight: 'normal', color:'#FFF',paddingLeft:10}}>Connect with
our Experts</Text>
</ImageBackground>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
          <ImageBackground style={{width:120, height:140}}
              imageStyle={{ borderRadius: 12}}
              source={require('../../imgss/bel4.jpeg')} >
             </ImageBackground>
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
              height: 360,
              }}
          >

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 8}}>
              <View style={{ flexDirection: 'row', flex: 0.50, justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                <Image style={{width:25, height:34, borderRadius: 2, tintColor:'#ffffff', marginRight:15,  }}
                  source={require('../../imgss/log_new.png')} />
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
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:10}}>Repair</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
                <Image style={{width:120, height:140, borderRadius: 12}}
                  source={require('../../imgss/bel2.jpeg')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:10}}>Job/Career</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
                <Image style={{width:120, height:140, borderRadius: 12}}
                  source={require('../../imgss/bel1.jpeg')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:10}}>Restaurants & cafe</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
                <Image style={{width:120, height:140, borderRadius: 12}}
                  source={require('../../imgss/bel4.jpeg')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:10}}>Real Estate</Text>
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
                <ImageBackground style={{width:'100%', height:140, borderRadius: 12, }}
                imageStyle={{ borderRadius: 12}}
                  source={require('../../imgss/Rectangle.jpg')} 
                  >

<Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', paddingTop:15,paddingLeft:10,paddingRight:15}}>Connect with </Text>
<Text numberOfLines={2} style={{fontSize: 22, fontWeight: 'bold', color:'#EEFF00', paddingTop:10,paddingLeft:10,paddingRight:10}}>Millions of Services </Text>
<TouchableOpacity style={{borderRadius: 10,backgroundColor: '#1100FF',width:95,height:30,margin:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Roboto-Medium',
              fontWeight:'normal',
              color:'#FFF',
              textAlign:'center'
            }}>
           Listing now
          </Text>
        </TouchableOpacity>

                    </ImageBackground>
              </View>

          </View>


          <View style={{marginTop:0, paddingTop:5, paddingBottom:15, paddingRight:12, backgroundColor:'#fff'}}>
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
              <View style={{ flexDirection: 'row', flex: 0.50, justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                <Text numberOfLines={2} style={{fontSize: 14, fontWeight: 'bold',color:'#000000', marginTop:8}}>Popular Brand</Text>
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
                <Image style={{width:180, height:45, borderRadius: 12}}
                  source={require('../../imgss/imgep1.png')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:6}}>Real Estate</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
              <Image style={{width:180, height:45, borderRadius: 12}}
                  source={require('../../imgss/imgp5.png')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:6}}>Real Estate</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
              <Image style={{width:180, height:45, borderRadius: 12}}
                  source={require('../../imgss/imgp3.png')} />
                  <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color:'#ffffff', marginTop:6}}>Real Estate</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding:5}}>
              <Image style={{width:180, height:45, borderRadius: 12}}
                  source={require('../../imgss/imgp4.png')} />
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
              }}
              imageStyle={{ borderRadius: 5}}
          >
             <Text numberOfLines={2} style={{fontSize: 10, fontWeight: 'normal',color:'#ffffff', padding:5,width:"60%"}}>Grow Your Business by reaching out to 
 new customers.</Text>
 <TouchableOpacity style={{borderRadius: 10,backgroundColor: '#FFF',width:"40%",height:30,margin:10,flexDirection:'row'}}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Roboto-Medium',
              fontWeight:'normal',
              padding:7,
              color:'#000'
            }}>
            Subscribe Now
          </Text>
          <Icon
            type={Icons.AntDesign}
            name="arrowright"
            size={15}
            color={'#000'}
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
