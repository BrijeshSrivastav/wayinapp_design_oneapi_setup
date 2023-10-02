import React, {useEffect, useRef} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,Pressable} from 'react-native'
import { ImageFilesData } from '../constants/images';
import Icon, {Icons} from '../components/Icons';


const CurrentlocationComponent=()=>{
    return(
    <View style={{marginTop:20,marginLeft:10}} 
    >
    <TouchableOpacity
    style={{flexDirection:'row'}}
       >
      <Text style={{fontWeight:'bold'}}>Current Location</Text>
      <Icon
     type={Icons.SimpleLineIcons}
     name="arrow-down"
     size={15}
     style={{marginTop:3,marginLeft:3}}
   />
    </TouchableOpacity>
      <Text style={{fontSize:10}}>Al Barsa Dubai</Text>
     </View>
    )
}

export default CurrentlocationComponent