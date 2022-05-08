import React from "react";
import { View } from "react-native";
import ScrollLayout from "../components/ScrollLayout";
import { generalStyles } from "../styles/global";
import RecipeInsert from "../components/RecipeInsert";


export default function EditScreen({ navigation }) {

    const handleEditRecipeHandler = (values, actions) => {
       
        const {title, description} = values;

        console.log(title, description)

    }

    return (
        <ScrollLayout title="Edit Recipes" withBackButton>
            <View style={[generalStyles.container]}>
                <RecipeInsert recipe={{}} onAddRecipeHandler={handleEditRecipeHandler} />
            </View>
        </ScrollLayout>
    );
}

