
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        // error reading value
    }
}

export const storeData = async (value, key) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      // saving error
    }
}

export const findInStore = async (value, key) => {
    try {
        const data = await getData(key);
        console.log(data, "the data for the result");
    } catch (error) {
        console.log(error)
    }
}

export const createOrUpdateStore = async (data, key) => {
    try {
        let payload = [data];
        const oldData = await getData(key);

        if(oldData) {
            payload = [
                ...oldData,
                data
            ]
        } 
        //store to storage 
        storeData(payload, key)
    } catch (error) {
        console.log(error)
    }
}