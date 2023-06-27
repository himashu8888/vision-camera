import React from "react";
import {View ,Button,StyleSheet,TouchableOpacity} from 'react-native';
export default function Apphome(props){
    return(
        <View  style={styles.camerabtn}>
            <TouchableOpacity>
           <Button title="Take Photo" onPress={()=>props.navigation.navigate("camera")}></Button>
           </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    camerabtn:{
       display:'flex',
       alignItems:'center',
       justifyContent:'center',
       paddingTop:100,
    
       
       
    }
})