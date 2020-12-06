import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const axiosWithAuth = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    const baseURL = "???";
    return axios.create({
        baseURL,
        headers: { Authorization: userToken },
    });
};

export default axiosWithAuth;
