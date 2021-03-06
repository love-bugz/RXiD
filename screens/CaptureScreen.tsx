import React, { useState, useEffect, SetStateAction, Dispatch, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera, CameraCapturedPicture } from 'expo-camera';
//@ts-ignore
import StyleGuide from '../styles/StyleGuide';

import camera_icon from '../assets/camera_icon.png';

const NEUTRALS = StyleGuide.colors.neutral;

export default function App() {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  let camera = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    const configOptions = {
      onPictureSave: (photo: CameraCapturedPicture) => {
        console.log('PIC');
      },
    };

    if (camera) {
      //@ts-ignore
      let photo = await camera.current.takePictureAsync(configOptions);
      //@ts-ignore
      camera.current.resumePreview();
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.rows}>
        <View style={styles.column}>
          <Text style={[StyleGuide.typeography.largeBodyBold, { marginVertical: 10 }]}>
            Find Medications
          </Text>
          <View style={styles.cameraModalButton} onTouchStart={() => console.log('PRESSED')}>
            <Text style={[StyleGuide.typeography.largeBodyRegular]}>Take Photo</Text>
            <Image source={camera_icon} style={{ height: 85, width: 100, marginTop: 6 }} />
          </View>
        </View>
        <View style={styles.column}>
          <Text>Hello</Text>
        </View>
      </View>

      {/* <Camera style={styles.camera} type={type} ref={camera}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              takePicture();
            }}>
            <Text style={styles.text}> Snap </Text>
          </TouchableOpacity>
        </View>
      </Camera> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NEUTRALS.white,
  },
  rows: {
    flexDirection: 'row',
    marginHorizontal: 4,
  },
  column: {
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: NEUTRALS[200],
    paddingHorizontal: 6,
  },
  cameraModalButton: {
    borderWidth: 1.5,
    borderColor: NEUTRALS[300],
    borderRadius: 4,
    padding: 16,
    ...StyleGuide.shadow,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: NEUTRALS[150],
    width: '100%',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20,
    borderRadius: 40,
    borderColor: 'red',
    borderWidth: 2,
    height: 40,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
