import React, { useState,useEffect } from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,Pressable} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { ImageFilesData } from '../constants/images';


const Header=({navigation})=>{

    return(
        <View style={{height:60, flexDirection:'row',justifyContent:'space-between',elevation:4,}}>
         <View style={{marginTop:10,marginLeft:10,flexDirection:'row'}} 
         >
         <TouchableOpacity
            >
            <Image source={ImageFilesData.logo}
             resizeMode='contain'
             style={{
               width:40,
               height:40,
             }}
            />
         </TouchableOpacity>
         
          </View>

        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
      
            
            <TouchableOpacity
             //onPress={() => navigateTo()}
             >
             <EvilIcons 
                    name="user"
                    size={35}
                    style={{
                      width:35,
                      height:35,
                      color:"#000"
                     // color:"#4860F5"
                    }}
                />
           </TouchableOpacity>
        </View> 
        </View>)

}
export default Header