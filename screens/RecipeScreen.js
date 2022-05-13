import {
  StyleSheet,
  View,
  Text
} from "react-native";
import React, {useEffect, useState} from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { ListItem, Avatar, Icon } from "@rneui/themed";
import TouchableScale from "react-native-touchable-scale"; // https://github.com/kohver/react-native-touchable-scale
import { LinearGradient } from "expo-linear-gradient"; // Only if no expo
import ScrollLayout from "../components/ScrollLayout";
import { generalStyles } from "../styles/global";
import { getData, storeData } from "../utils/dataService";
import Spinner from 'react-native-loading-spinner-overlay';
import { sortObjectItem } from "../utils/helperFunction";
import { Heart2, Edit, Delete } from 'react-native-iconly'
import Toast from 'react-native-toast-message';


//constant variable
const tableName = '@recipelist';

const sortParameter ={
  key: 'title',
  order: 'asc',
  type: 'text'
}

export default function RecipeScreen({ navigation, route }) {
  const [payload, setPayload] = useState(null);
  const [loadingRecipe, setLoadingRecipe] = useState(false);

  useEffect(() => {
    fetchRecipePayload();
  }, [])

  useEffect(() => {
    //load new payload if new item is added
    route?.params?.canRefresh && fetchRecipePayload();
  }, [route])

  const fetchRecipePayload = async () => {
    //show loading
    setLoadingRecipe(true);

    const response = await getData(tableName);

    //delay for 3 sec before preview
    const timer =  setTimeout(() => {
      //hide loading
      setLoadingRecipe(false);
      if(response) {
        //Sort the reponse 
        response.sort(sortObjectItem(sortParameter));
        return setPayload(response);
      }
      return setPayload([]);
    }, 500);

    return () => clearTimeout(timer);
  }

  const handleMarkAsFavourite = async (id) => {

    //find the recipe and mark as fabourite 
    const response = await getData(tableName);

    const newData = response?.map(item =>  {
      if(item.id === id) {
        item.favourite = !item.favourite
      }
      return item;
    });

    await storeData(newData, tableName)

    //Update the preview
    await fetchRecipePayload();
    
    Toast.show({
      type: 'success',
      text1: 'Favourite',
      text2: newData.find(item => item.id === id).favourite ? 'Recipe added to favourite' : 'Recipe remove from favourite'
    });

  }

  const handleDeleteRecipe = async (id) => {

    //find the recipe and mark as fabourite 
    const response = await getData(tableName);

    const newData = response?.filter(item => item.id !== id);

    await storeData(newData, tableName)

    //Update the preview
    await fetchRecipePayload();

    Toast.show({
      type: 'success',
      text1: 'Delete',
      text2: 'Recipe deleted succesfully'
    });
  }


  return (
    <ScrollLayout title="Recipes" withBackButton>
      <View style={generalStyles.container}>
        {
          loadingRecipe && (
            <Spinner
              //visibility of Overlay Loading Spinner
              visible={true}
              //Text with the Spinner
              textContent={'Loading recipe...'}
              //Text style of the Spinner Text
              textStyle={generalStyles.spinnerTextStyle}
            />
          )
        }
        {/* Show No Recipe if no recipe is found */}
        {
          payload?.length === 0 && (
            <Text style={generalStyles.notFoundText}>No Recipe found</Text>
          )
        }
        <ScrollView style={styles.viewBox}>
          {payload?.map((item, i) => (
            <ListItem
              key={item.id}
              bottomDivider
              containerStyle={styles.listContainer}
              Component={TouchableScale}
              friction={90} //
              tension={100} // These props are passed to the parent component (here TouchableScale)
              activeScale={0.95} //
              linearGradientProps={{
                colors: ["#FFD15C", "gray"],
                start: { x: 1, y: 0 },
                end: { x: 0.2, y: 0 },
              }}
              ViewComponent={LinearGradient} // Only if no expo
         
            >
              <Avatar
                onPress={() => navigation.navigate("RecipeDetail")}
                title="Fc"
                containerStyle={{
                  backgroundColor: "coral",
                  borderColor: "#ffffff",
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderRadius: 10
                }}
                avatarStyle= {{
                  borderRadius: 10
                }}
                size={54}
                source={item.image && { uri: item.image }}
              />

              <TouchableOpacity style={{width: 170}} onPress={() => navigation.navigate("RecipeDetail")}>
                <ListItem.Content style={{ height: 50}}>
                  <ListItem.Title style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>
                    {item.title}
                  </ListItem.Title>
                  <ListItem.Subtitle style={{ fontSize: 10, color: 'white' }}>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
              </TouchableOpacity>

              <View style={{display: 'flex', flexDirection: 'row', paddingVertical: 14}}>

                <TouchableOpacity onPress={() => handleMarkAsFavourite(item.id)}>
                  <Heart2 set={`${!item.favourite ? "light" : "bold"}`} primaryColor="white" size={20}/>
                </TouchableOpacity>

                <TouchableOpacity style={{marginHorizontal: 6}} onPress={() => navigation.navigate("Edit", { recipe: item}) }>
                  <Edit set="bold" primaryColor="white" size={20}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleDeleteRecipe(item.id)}>
                  <Delete set="light" primaryColor="red" size={20}/>
                </TouchableOpacity>
              </View>
            </ListItem>
          ))}
        </ScrollView>
      </View>
    </ScrollLayout>
  );
}

const styles = StyleSheet.create({
  viewBox: {
    flex: 1
  },
  listContainer: {
    marginBottom: 10,
    borderRadius: 15,
    //IOS
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.22,
    // Android
    elevation: 2.5,
  },
});
