import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';
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
      type: Icons.AntDesign,
      activeIcon: 'user',
      title:'Personal Information'
    },
    {
      type: Icons.Entypo,
      activeIcon: 'add-to-list',
      title:'AddListing' 
    },
    {
      type: Icons.MaterialCommunityIcons,
      activeIcon: 'advertisements',
      title:'Adverties with us' 
    },
    {
      type: Icons.Ionicons,
      activeIcon: 'notifications-outline',
      title:'Notification'
    },
  ];
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#FFFFFF'}}>
        <ImageBackground
          source={ImageFilesData.drawerbackground}
          style={{padding: 20,justifyContent:'center'}}>
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
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            fontWeight: 'bold',
            marginLeft: 20,
          }}>
          Profile Setting
        </Text>
        {MenuArr.map((item, index) => {
        return (
        <View
         key={index}
          style={{
            width: '100%',
            marginTop: 2,
            height: 70,
            borderTopWidth: 0.2,
            borderBottomWidth: 0.2,
            borderBottomColor: '#C7C7C7',
            borderTopColor: '#C7C7C7',
          }}>
          <CommonCard
            title={item.title}
            icon={item.activeIcon}
            icontype={item.type}
            count={''}
            onClick={() => {
              props.navigation.closeDrawer();
            }}
          />
        </View>
          );
        })}
       
        </View>
   
        {/* <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>  */}
      </DrawerContentScrollView>
      <View style={{padding: 10, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                fontWeight:'bold'
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
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
  );
};

export default CustomDrawer;