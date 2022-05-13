import React, {useEffect, useState} from "react";
import { View } from "react-native";
import ScrollLayout from "../components/ScrollLayout";
import { generalStyles } from "../styles/global";
import RecipeInsert from "../components/RecipeInsert";
import { getData, storeData } from "../utils/dataService";
//import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';



const tableName = '@recipelist';

export default function EditScreen({ navigation, route }) {

    const [payload, setPayload] = useState(null);

    useEffect(() => {
     if(route.params) {
        const { recipe } = route.params;
        setPayload(recipe ? recipe : null)
     }
    }, [])
    
    useEffect( async () => {
        //await AsyncStorage.removeItem("@recipelist")
        // console.log(await getData(tableName), "recipe from list")
    }, [])
    
    const handleAddRecipeHandler = async (values, image) => {

        const data = {
            ...values,
            ...{
                id: payload.id,
                image,
                favourite: payload.favourite
            }
        }

        //Check if the data exist and return throw alert
        const oldData = await getData(tableName);

        const findOtherExcepteCurrent = oldData && oldData.filter(item => item.id !== data.id);

        const findTitleIfExist = findOtherExcepteCurrent.find(item => item.title === data.title);

        if(findTitleIfExist) 
             return alert("Recipe title already exist in storage, please use a different title");

        const newData = [...findOtherExcepteCurrent, data ];

        // //Store to a storage point here
        await storeData(newData, tableName)

        Toast.show({
            type: 'success',
            text1: 'Update Recipe',
            text2: "Recipe updated succesfully"
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
        <ScrollLayout title="Edit Recipes" withBackButton>
            <View style={[generalStyles.container]}>
                <RecipeInsert recipe={payload} onAddRecipeHandler={handleAddRecipeHandler} />
            </View>
        </ScrollLayout>
    );
}

