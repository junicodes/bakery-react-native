import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React, {useEffect, useState} from "react";
import { Image } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient"; // Only if no expo
import ScrollLayout from "../components/ScrollLayout";
import { generalStyles } from "../styles/global";
import { useAppContext } from "../context_api/AppContext";


export default function RecipeDetailScreen({ navigation, route }) {
  const [image, setImage] = useState(null);
  const [recipe, setRecipe] = useState({ title: "", description: "" });
  //Use Context
  const appContext = useAppContext();
  const { themeMode } = appContext;
  const themeStyle = themeMode === 'dark' ? '#fff' : '#000'

  useEffect(() => {
    //load new payload if new item is added
    if(route?.params?.recipe){
      const {recipe} = route.params;
      setImage(recipe.image)
      setRecipe({
          title: recipe.title,
          description: recipe.description
      })
    };
  }, [route])

  return (
    <ScrollLayout withBackButton>
      <View style={generalStyles.container}>
        <View style={styles.viewBox}>
          <View style={styles.imageView}>
            <View style={styles.imageDrop}>
              <Image
                source={{ uri: image }}
                style={styles.image}
                PlaceholderContent={<ActivityIndicator />}
              />
            </View>
          </View>
          <View style={generalStyles.twoSpaceTop}>
            <Text style={styles.headerTitle}>Recipe Name</Text>
            <Text style={{color: themeStyle}}>{recipe.title}</Text>
          </View>
          <View style={generalStyles.twoSpaceTop}>
            <Text style={styles.headerTitle}>Recipe Details and Ingredients</Text>
            <Text style={[{color: themeStyle}, styles.description]}>
              {recipe.description}
            </Text>
          </View>
        </View>
      </View>
    </ScrollLayout>
  );
}

const styles = StyleSheet.create({
  imageView: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 320,
  },
  headerTitle: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFD15C",
  },
  description: {
    textAlign: "justify",
  },
  imageBox: {
    width: 150,
    height: 35,
  },
  imageDrop: {
    width: "95%",
    borderStyle: "solid",
    borderColor: "#FFD15C",
    borderWidth: 2,
    height: 320,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageBox: {
    width: 150,
    height: 35,
  },
  viewBox: {
    flex: 1,
    marginTop: 30,
  },
  goBackBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goBack: {
    width: "10%",
    height: "100%",
    padding: 10,
    display: "flex",
    flexDirection: "row",
  },
});
