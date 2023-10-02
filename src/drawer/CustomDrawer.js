import React,{Fragment} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  SafeAreaView
} from 'react-native';
//import {Platform, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon, {Icons} from '../components/Icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ImageFilesData } from '../constants/images';
import CommonCard from '../common/CommonCard';


const CustomDrawer = (props) => {
 
  const MenuArr = [
    {
    headingtitle:"Profile Setting",
    submenuitem:[{
      imgenam: ImageFilesData.userimg,
      activeIcon: 'user',
      title:'Personal Information'
    },
    {
      imgenam: ImageFilesData.notemedical,
      activeIcon: 'add-to-list',
      title:'AddListing' 
    },
    {
      imgenam: ImageFilesData.megaphone,
      activeIcon: 'advertisements',
      title:'Adverties with us' 
    },
    {
      imgenam: ImageFilesData.bell,
      activeIcon: 'notifications-outline',
      title:'Notification'
    }],
},
{
  headingtitle:"Useful Links",
  submenuitem:[{
    imgenam: ImageFilesData.messagesdollar,
    activeIcon: 'user',
    title:'Refer & Earn'
  },
  {
    imgenam:ImageFilesData.memopad,
    activeIcon: 'add-to-list',
    title:'Terms &  Conditions' 
  },
  {
    imgenam: ImageFilesData.shieldexclamation,
    activeIcon: 'advertisements',
    title:'Privacy Policy' 
  },
  {
  imgenam: ImageFilesData.handshake,
    activeIcon: 'notifications-outline',
    title:'Investor Relations'
  },
  {
    imgenam: ImageFilesData.Union2,
    activeIcon: 'notifications-outline',
    title:'App Feed Back'
  }
],
},
{
  headingtitle:"Support",
  submenuitem:[{
    imgenam: ImageFilesData.Union3,
    activeIcon: 'user',
    title:'Help'
  },
  {
    imgenam: ImageFilesData.squarestar,
    activeIcon: 'add-to-list',
    title:'Rate the app' 
  },
],
},
{
  headingtitle:"Preferences",
  submenuitem:[{
    imgenam: ImageFilesData.globe,
    activeIcon: 'user',
    title:'Language'
  },
  {
    imgenam: ImageFilesData.marker,
    activeIcon: 'add-to-list',
    title:'City' 
  },
  {
    imgenam: ImageFilesData.Union4,
    activeIcon: 'add-to-list',
    title:'Settings' 
  },
],
}
];
  return (
    <Fragment>
    <SafeAreaView style={{ flex: 0, backgroundColor: '#069199' }} />
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#FFFFFF'}}>
       
        <ImageBackground
          source={ImageFilesData.drawerbackground}
          //resizeMode='contains'
          >
          <View style={{margin: 20,justifyContent:'center'}}>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <AntDesign name="arrowleft" size={20} color="#FFFFFF"   onPress={() => {
              props.navigation.closeDrawer();
            }}/>
           <Text
            style={{
              color: '#FFFFFF',
              fontSize: 14,
              fontFamily: 'Roboto-Medium',
              fontWeight:'bold',
              marginBottom: 5,
              
            }}>
            Logout
          </Text>
            </View>  
        <View style={{justifyContent:'center',alignItems:'center'}}>    
          <Image
            source={ImageFilesData.profileImagedrawer}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 14,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
           Hello! Mohamed Feroz
          </Text>
          </View> 
          </View>
        </ImageBackground>
        
        <View style={{backgroundColor:'#00EEBE',borderRadius: 10,marginTop:10,height:115,width:260,margin:10}}>
        <Text
            style={{
              color: '#000',
              fontSize: 13,
              fontFamily: 'Roboto-Medium',
              margin:13
            }}>
           Grow Your Business by reaching out to 
          </Text>
          <View style={{flexDirection:'row'}}>
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              fontFamily: 'Roboto-Medium',
              fontWeight:'bold',
              padding:10
            }}>
            new customers.
          </Text>
          <View style={{borderRadius: 20,backgroundColor: '#F39200',}}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Roboto-Medium',
              fontWeight:'bold',
              padding:10
            }}>
            Subscribe Now
          </Text>
        </View>
        </View>
       </View>
       <View style={{backgroundColor: 'white', flex: 1}}>
       {MenuArr.map((item, index) => { 
      return (
        <View>
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            fontWeight: 'bold',
            marginLeft: 20,
            marginTop:30
          }}>
         
          {item.headingtitle}
        </Text>
          {item.submenuitem.map((subitem, index2) => {
            return (
            <View
             key={index2}
              style={{
                width: '100%',
                marginTop: 2,
                height: Platform.OS === 'ios' ? 40 : 65,
                borderTopWidth: 0.2,
                borderBottomWidth: 0.2,
                borderBottomColor: '#C7C7C7',
                borderTopColor: '#C7C7C7',
              }}>
              <CommonCard
                title={subitem.title}
                imagens={subitem.imgenam}
                icontype={subitem.type}
                count={''}
               
              />
            </View>
              );
            })}
          </View>
          )
    })}
        </View>
      
        {/* <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>  */}
      </DrawerContentScrollView>
       <View style={{padding: 5, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              WaYinApp 1.0
            </Text>
          </View>
        </TouchableOpacity>
      </View> 
    </View>
  </Fragment>
  );
};

export default CustomDrawer;