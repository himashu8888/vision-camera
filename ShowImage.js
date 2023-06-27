import React, { useContext,useState } from 'react';
 import {View,Image,Text,TouchableOpacity} from 'react-native';
export default function ShowImage(props){
       const path = props.route.params.imagepath;
          function Torchonfun(){
            props.navigation.navigate("home");
          }
    return(
         <View style={{display:'flex'}}>
            <View style={{
                        backgroundColor:'gray',
                 }}>
                <TouchableOpacity  onPress={Torchonfun}>
                <Text>Back</Text>
                </TouchableOpacity>
                
                
               
            </View>
         <Image
              style={{
                width: '100%',
                height:'100%',
                alignItems:'center',
                
              }}
              source={{
                uri: `file://'${path}`
              }}
            />
         </View>
       
    )
}