// Device storage
import AsyncStorage from '@react-native-community/async-storage';

// Function to set items in async storage
export async function setAsyncStorageItems(items: [string, string][]) {
  try {
    items.forEach(async item => {
      await AsyncStorage.setItem(item[0], item[1]);
    });
  } catch (err) {
    throw err;
  }
}

// Function to remove items from async storage
export async function removeAsyncStorageItems(items: string[]) {
  try {
    items.forEach(async item => {
      await AsyncStorage.removeItem(item);
    });
  } catch (err) {
    throw err;
  }
}
