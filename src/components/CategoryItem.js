import React, {useEffect, useRef} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,Pressable,ScrollView} from 'react-native'
import { ImageFilesData } from '../constants/images';
import Icon, {Icons} from '../components/Icons';



const CategoryItem=(props)=>{
    return(
      <TouchableOpacity style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center',padding:13}} onPress={() => props.navigation.navigate('subcategory')}>  
    <View>
          <View style={{ borderRadius:30, borderWidth:0.5, borderColor:'#00A1A0', padding:5,justifyContent:'center'}}>
            <Image style={{width:50, height:50, borderRadius: 25}}
              source={props.itemData.cat_img} />
              </View>
              <Text numberOfLines={2} style={{fontSize: 10, fontWeight: 'bold',color:'#000000', marginTop:7,marginLeft:10,alignItems:'center'}}>{props.itemData.categoryname}</Text>
          </View>
          </TouchableOpacity>
    )
}

export default CategoryItem