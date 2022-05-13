import React, {useEffect} from "react";
import { View } from "react-native";
import ScrollLayout from "../components/ScrollLayout";
import { generalStyles } from "../styles/global";
import RecipeInsert from "../components/RecipeInsert";
import { getData, createOrUpdateStore } from "../utils/dataService";
//import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';


const tableName = '@recipelist';

export default function AddNewScreen({ navigation }) {

  useEffect( async () => {
    //await AsyncStorage.removeItem("@recipelist")
    // console.log(await getData(tableName), "recipe from list")
  }, [])
  

  const handleAddRecipeHandler = async (values, image) => {

    const data = {
      ...values,
      ...{
          id: Math.floor( Math.random() * 999999999 ),
          image,
          favourite: false
      }
    }

    //Check if the data exist and return throw alert
    const oldData = await getData(tableName);
    const findTitleIfExist = oldData && oldData.find(item => item.title === data.title);

    if(findTitleIfExist) 
          return alert("Recipe already added to storage, please added another one or edit existing recipe")

    //Store to a storage point here
    await createOrUpdateStore(data, tableName)

    Toast.show({
      type: 'success',
      text1: 'Create Recipe',
      text2: 'Recipe created succesfully 👋'
    });

    const timer = setTimeout(() => {
        //Close modal
        navigation.navigate("Recipe", {
          canRefresh: true
        });
    }, 3000);

    return () => clearTimeout(timer)

  }
    
  return (
    <ScrollLayout title="Add Recipes" withBackButton>
        <View style={[generalStyles.container]}>
            <RecipeInsert onAddRecipeHandler={handleAddRecipeHandler} />
        </View>
    </ScrollLayout>
  );
  
}

