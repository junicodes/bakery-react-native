import React from "react";
import { View } from "react-native";
import ScrollLayout from "../components/ScrollLayout";
import { generalStyles } from "../styles/global";
import RecipeInsert from "../components/RecipeInsert";



export default function AddNewScreen({ navigation }) {

   const handleAddRecipeHandler = (values, actions) => {
       const {title, description} = values;

        console.log(title, description)

    }
    

  return (
    <ScrollLayout title="Add Recipes" withBackButton>
        <View style={[generalStyles.container]}>
            <RecipeInsert onAddRecipeHandler={handleAddRecipeHandler} />
        </View>
    </ScrollLayout>
  );
  
}

