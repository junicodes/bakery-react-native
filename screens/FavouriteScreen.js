import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Button, CheckBox } from "react-native-elements";
import { offlineImage, onlineImage } from "../utils/images";
import { Image } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";
import { ListItem, Avatar, Icon } from "@rneui/themed";
import TouchableScale from "react-native-touchable-scale"; // https://github.com/kohver/react-native-touchable-scale
import { LinearGradient } from "expo-linear-gradient"; // Only if no expo
import ScrollLayout from "../components/ScrollLayout";
import { generalStyles } from "../styles/global";

const list = [
  {
    id: 93930,
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President",
  },
  {
    id: 9493,
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    id: 9293,
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    id: 6493,
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    id: 1493,
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
];

export default function FavouriteScreen({ navigation }) {
  return (
    <ScrollLayout title="Favourite Recipes" withBackButton>
      <View style={generalStyles.container}>
        <View style={styles.viewBox}>
          {list.map((item, i) => (
             <ListItem
             key={item.id}
             bottomDivider
             containerStyle={styles.listContainer}
             Component={TouchableScale}
             friction={90} //
             tension={100} // These props are passed to the parent component (here TouchableScale)
             activeScale={0.95} //
             linearGradientProps={{
               colors: ["#FFD15C"],
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
                source={item.avatar_url && { uri: item.avatar_url }}
              />

              <TouchableOpacity style={{width: 170}} onPress={() => navigation.navigate("RecipeDetail")}>
                <ListItem.Content style={{ height: 50}}>
                  <ListItem.Title style={{ fontSize: 14 }}>
                    {item.name}
                  </ListItem.Title>
                </ListItem.Content>
              </TouchableOpacity>

            <View style={{display:'flex', flexDirection: 'row', marginHorizontal: 8}}>
               <TouchableOpacity style={{marginRight: 6}} onPress={() => console.log("hello")}>
                 <Icon
                   name="heart"
                   type="font-awesome"
                   color="white"
                   size={20}
                 />
               </TouchableOpacity>
               <TouchableOpacity style={{marginHorizontal: 6}} onPress={() => navigation.navigate("Edit")}>
                 <Icon
                   name="edit"
                   type="font-awesome"
                   color="white"
                   size={20}
                 />
               </TouchableOpacity>
               <TouchableOpacity style={{marginLeft: 6}}  onPress={() => console.log("hello")}>
                 <Icon
                   name="remove"
                   type="font-awesome"
                   color="red"
                   size={20}
                 />
               </TouchableOpacity>
            </View>
           </ListItem>
          ))}
        </View>
      </View>
    </ScrollLayout>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  logoContainerRight: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
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
    flex: 1
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
