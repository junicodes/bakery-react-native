
import React from 'react'
import { View, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { generalStyles, imageStyle } from "../styles/global";
import { offlineImage, onlineImage } from '../utils/images';
import { Image, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const ScrollLayout = ({ children, title = '', withBackButton = false}) => {

  const navigation = useNavigation();

  return (
    <>
      <ScrollView contentContainerStyle={{flex: 1, backgroundColor: '#fff'}}>
          {
            !withBackButton && (
              <View style={imageStyle.logoContainer}>
                <View style={imageStyle.imageBox}>
                    <Image
                        source={offlineImage.appLogo}
                        style={imageStyle.image}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </View>
              </View>
            )
          }
          {
            withBackButton && (
              <View style={generalStyles.goBackBox}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={generalStyles.goBack}
                >
                  <Icon
                    name="angle-left"
                    type="font-awesome"
                    color="#FFD15C"
                    size={30}
                  />
                </TouchableOpacity>
                <View style={[imageStyle.logoContainerRight]}>
                  <View style={imageStyle.imageBox}>
                    <Image
                      source={offlineImage.appLogo}
                      style={imageStyle.image}
                      PlaceholderContent={<ActivityIndicator />}
                    />
                  </View>
                </View>
              </View>
            )
          }
          <Text style={generalStyles.screenText}>{title}</Text>
          <ScrollView>
            {children}
          </ScrollView>
          <View style={generalStyles.layoutbelowBox}>
            <Image
                source={offlineImage.layoutBelow}
                style={generalStyles.image}
                PlaceholderContent={<ActivityIndicator />}
            />
          </View>
      </ScrollView>
    </>
  )
}

export default ScrollLayout