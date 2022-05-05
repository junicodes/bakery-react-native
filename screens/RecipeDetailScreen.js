import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, FlatList, SafeAreaView } from "react-native";
import { Button, CheckBox } from "react-native-elements";
import { offlineImage, onlineImage } from '../utils/images';
import { Image } from '@rneui/themed';
import { ScrollView } from "react-native-gesture-handler";
import { ListItem, Avatar, Icon } from '@rneui/themed'
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import {LinearGradient} from 'expo-linear-gradient'; // Only if no expo
import ScrollLayout from "../components/ScrollLayout";
import { generalStyles } from "../styles/global";


const image = 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg';

export default function RecipeDetailScreen({ navigation }) {
  return (
    <ScrollLayout>
       <View style={generalStyles.container}>
                <View style={styles.goBackBox}>
                    <TouchableOpacity onPress={() => navigation.goBack()} 
                    style={styles.goBack}>
                        <Icon 
                            name='angle-left' 
                            type='font-awesome' 
                            color='#FFD15C'
                            size={30} 
                        />
                    </TouchableOpacity>
                    <View style={[styles.logoContainer, styles.logoContainerRight]}>
                        <View style={styles.imageBox}>
                            <Image
                                source={offlineImage.appLogo}
                                style={styles.image}
                                PlaceholderContent={<ActivityIndicator />}
                            />
                        </View>
                    </View>
                </View>

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
                      <Text>Bazy Food Sweet</Text>
                  </View>
                  <View style={generalStyles.twoSpaceTop}>
                    <Text style={styles.headerTitle}>Recipe Details</Text>
                      <Text style={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a galley of t
                        ype and scrambled it to make a type specimen book
                      </Text>
                  </View>
                </View>
       </View>
    </ScrollLayout>
  );
}

const styles = StyleSheet.create({
  imageView: {
    width: '100%',
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height: 320
  },
  headerTitle: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD15C',
  },
  description: {
    textAlign: 'justify'
  },
  imageBox: {
    width: 150,
    height: 35
  },
  imageDrop: {
    width: '95%',
    borderStyle: 'solid',
    borderColor: '#FFD15C',
    borderWidth: 2,
    height: 320,
    borderRadius: 10
  },
  image:{   
    width: '100%',
    height: '100%',
  },
  imageBox: {
    width: 150,
    height: 35
  },
  viewBox: {
      flex: 1,
      marginTop: 30,
  },
  goBackBox: {
    display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  goBack: {
    width: '10%', height:'100%', padding: 10, display: 'flex', flexDirection: 'row'
  },
});
