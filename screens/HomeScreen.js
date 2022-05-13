import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, FlatList, SafeAreaView } from "react-native";
import { Button, CheckBox } from "react-native-elements";
import { offlineImage, onlineImage } from '../utils/images';
import { Image } from '@rneui/themed';
import { ScrollView } from "react-native-gesture-handler";
import ScrollLayout from "../components/ScrollLayout";
import { generalStyles } from "../styles/global";


export default function HomeScreen({ navigation }) {
  return (
    <ScrollLayout>
        <View style={generalStyles.container}>
          <View style={styles.menuTab}>
            <View style={styles.block}>
              <TouchableOpacity onPress={() => navigation.navigate("Recipe")} style={[styles.menuImgBox]}>
                <Image
                    source={offlineImage.recipeMenu}
                    style={[styles.menuImage]}
                    PlaceholderContent={<ActivityIndicator />}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Favourite")} style={[styles.menuImgBox]}>
                <Image
                    source={offlineImage.favouriteMenu}
                    style={[styles.menuImage]}
                    PlaceholderContent={<ActivityIndicator />}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.block}>
              <TouchableOpacity onPress={() => navigation.navigate("AddNew")} style={[styles.menuImgBox]}>
                <Image
                    source={offlineImage.addMenu}
                    style={[styles.menuImage]}
                    PlaceholderContent={<ActivityIndicator />}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Weight")} style={[styles.menuImgBox]}>
                <Image
                    source={offlineImage.weightMenu}
                    style={[styles.menuImage]}
                    PlaceholderContent={<ActivityIndicator />}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.block}>
              <TouchableOpacity onPress={() => navigation.navigate("Preferences")} style={[styles.menuImgBox]}>
                <Image
                    source={offlineImage.preferenceMenu}
                    style={[styles.menuImage]}
                    PlaceholderContent={<ActivityIndicator />}
                />
              </TouchableOpacity>
            </View>
        </View>
        </View>
    </ScrollLayout>
  );
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    backgroundColor: '#000',
  },
  item: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
   menuTab: {
    flex: 1,
   },
  block: {
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  menuImgBox: {
    borderRadius: 8,
    width: '50%',
    height: 180,
    marginBottom: 10
  },
  menuImage:{   
    width: '100%',
    height: '100%',
    borderRadius: 20
  },
});
