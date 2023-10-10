import React, {useEffect, useRef} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,Pressable} from 'react-native'
import { ImageFilesData } from '../constants/images';
import Icon, {Icons} from '../components/Icons';
import CurrentlocationComponent from '../components/CurrentlocationComponent'
const Header=({navigation})=>{
    return(
        <View style={{height:60, flexDirection:'row',justifyContent:'space-between',elevation:4,backgroundColor:'#FFF'}}>
         <View style={{marginTop:20,marginLeft:10,flexDirection:'row'}} 
         >
         <TouchableOpacity
           onPress={() => navigation.openDrawer()}
            >
    
            <Image source={ImageFilesData.menu}
             resizeMode='contain'
             style={{
               width:20,
               height:20,
             }}
            />
         
         </TouchableOpacity>
          </View>
          <View style={{marginRight:55}}>
        <CurrentlocationComponent />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
        <TouchableOpacity
            >
            <Image source={ImageFilesData.headerlogo}
             resizeMode='contain'
              style={{
               width:100,
               height:40,
               marginRight:20
             }}
            />
         </TouchableOpacity>
         
        </View> 
        </View>)

}
export default Header