import {View, Text, Image, TouchableOpacity,Alert} from 'react-native';
import React from 'react';
import Icon, {Icons} from '../components/Icons';
const CommonCard = ({
  title,
  icon,
  icontype,
  count,
  onClick,
}) => {
  //alert(icontype);
  return (
    <View style={{width: '100%', height: 70, justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          width: '96%',
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
         // backgroundColor: bgColor ? bgColor : '#fff',
          marginLeft:30
        }}
        onPress={() => {
          onClick();
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'flex-end'}}>
          <Icon
            type={icontype}
            name={icon}
            style={{
              width: 24,
              height: 24,
              marginLeft: 5,
             // tintColor: bgColor ? 'red' : '#6D6D6D',
            }}
          />
          <Text
            style={{
              marginLeft: 7,
              fontWeight: '600',
              //color: bgColor ? 'red' : '#6D6D6D',
              fontSize: 12,
            }}>
            {title}
          </Text>
       
        </View>
        <View
          style={{
            //backgroundColor: newColor ? newColor : bgColor ? bgColor : '#fff',
            height: 35,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            marginRight: 10,
          }}>
        
        <Icon
            type={Icons.MaterialIcons}
            name="keyboard-arrow-right"
            style={{
              width: 24,
              height: 24,
              //tintColor: bgColor ? 'red' : '#6D6D6D',
            }}
          />
</View>
        {/* {count && (
          <View
            style={{
              backgroundColor: newColor ? newColor : bgColor ? bgColor : '#fff',
              height: 35,
              borderRadius: 20,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 20,
              paddingRight: 20,
              marginRight: 10,
            }}>
            <Text
              style={{
                color: isNew ? '#fff' : bgColor ? 'red' : '#000',
                fontWeight: '600',
                fontSize: 16,
              }}>
              {count}
            </Text>
          </View>
        )} */}
      </TouchableOpacity>
    </View>
  );
};

export default CommonCard;
