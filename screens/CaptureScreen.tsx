import React, {
    useState,
    useEffect,
    SetStateAction,
    Dispatch,
    useRef,
} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera, CameraCapturedPicture } from "expo-camera";

export default function App() {
    const [hasPermission, setHasPermission] = useState<null | boolean>(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    let camera = useRef(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    const takePicture = async () => {
        const configOptions = {
            onPictureSave: (photo: CameraCapturedPicture) => {
                console.log("PIC");
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
            <Camera style={styles.camera} type={type} ref={camera}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            takePicture();
                        }}>
                        <Text style={styles.text}> Snap </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
        margin: 20,
        justifyContent: "center",
    },
    button: {
        alignSelf: "flex-end",
        alignItems: "flex-end",
        marginBottom: 20,
        borderRadius: 40,
        borderColor: "red",
        borderWidth: 2,
        height: 40,
    },
    text: {
        fontSize: 18,
        color: "white",
    },
});
