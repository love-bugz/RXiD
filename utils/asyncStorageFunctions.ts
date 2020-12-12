import AsyncStorage from '@react-native-community/async-storage';

export async function setAsyncStorageItems(items: [string, string][]) {
  try {
    items.forEach(async item => {
      await AsyncStorage.setItem(item[0], item[1]);
    });
  } catch (err) {
    throw err;
  }
}

export async function removeAsyncStorageItems(items: string[]) {
  try {
    items.forEach(async item => {
      await AsyncStorage.removeItem(item);
    });
  } catch (err) {
    throw err;
  }
}
