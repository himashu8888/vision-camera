/* eslint-disable curly */
/* eslint-disable space-infix-ops */
/* eslint-disable eqeqeq */
// eslint-disable-next-line prettier/prettier
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useRef, useState, useEffect,createContext } from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, Image, PermissionsAndroid } from 'react-native';
import * as RNFS from 'react-native-fs';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
export default function Appcamera(props) {
  const [torch, settourch] = useState('off');
  const [imagesource, setimagesource] = useState();
  // eslint-disable-next-line keyword-spacing
  const[imgpath,setimgpath]=useState();
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.back;
  useEffect(() => {
    async function getpermission() {
      const Permission = await Camera.requestCameraPermission();
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Permission',
          message: 'App needs to read storage ',
        },
      );
      if (Permission === 'denied') await Linking.openSettings();
    }
    getpermission();
  }, []);
  const capturePhoto = async () => {
    const options = {
      qualityPrioritization: 'speed',
      quality:10,
      skipMetadata: true,
      flash: 'on',
      width: 500,
      height: 500,

    };
    if (camera.current !== null) {

        const snapshot = await camera.current.takePhoto({
            // quality:0.8,
            // skipMetadata: true,
            // width:50,
            // height:50
          });

         setimagesource(snapshot.path);
         console.log("file path",imagesource);
         const fileStat = await RNFS.stat(snapshot.path);
           console.log('file',fileStat);
          //console.log("compress_file",result);
    //   const photo = await camera.current.takePhoto(options);
    //   const splitedarray = photo.path.split('/');
    //    const filename = splitedarray[splitedarray.length-1];
    //    const folderpath = '/storage/emulated/0/himcamera';
    //    const filepath = folderpath + '/' + filename;
    //    console.log("filepath",filepath);
    //    const fileStat = await RNFS.stat(photo.path);
        //  console.log("hjgjhdfkjfhgkfghkfdh",fileStat)

    //    RNFS.mkdir(filepath).then(()=>{+
    //     console.log("folder add success")

    //    })
    //    await RNFS.moveFile(filepath, `${RNFS.PicturesDirectoryPath}/${filename}`),
    //   setimagesource(photo.path);
    // //  console.log(photo);
    //    settourch('off');

    }
  };
  if (device == null) {
    return <Text>Please Wait.....</Text>;
  }
  function Torchonfun() {
    if (torch == 'off') {
      console.log("tourch is on");
      settourch('on');
    }
    else {
      console.log("torch is off...");
      settourch('off');
    }
  }
  function crossbtnhandel() {
    settourch('off');
    props.navigation.navigate("home");
  }
  function FullImagehandel() {
    console.log("hiiii");
  }
  return (
    <View style={styles.container}>
      <Camera
        
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        torch={torch}
        isActive={true}
        photo={true}
        focusable={true}
        enableZoomGesture={true}
        captureAudio={true}
      />
      <View style={styles.butoonContainer}>
      <TouchableOpacity onPress={()=> props.navigation.navigate("fullimage",{imagepath:imagesource})}>
          <View  >
            <Image
              style={styles.image}
              source={{
                // eslint-disable-next-line comma-dangle
                uri: `file://'${imagesource}`
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => capturePhoto()} >
          <Text style={styles.camButton}>
            Scan Plate
          </Text>
        </TouchableOpacity>

      </View>
      <View style={styles.ichon_view}>
        <Text  onPress={Torchonfun}>Flash</Text>
        <Text  onPress={crossbtnhandel}>Cross</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  ichon_view: {
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 50,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  butoonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 20,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  camButton: {
    fontSize: 20,
    padding: 5,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'red',
  },
  image: {
    marginRight: 30,
    width: '30%',
    borderRadius: 50,
    aspectRatio: 16 / 16,
    zIndex: 9999999
  }
// eslint-disable-next-line eol-last
});