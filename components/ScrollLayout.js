
import React from 'react'
import { View, ActivityIndicator } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { generalStyles } from "../styles/global";
import { offlineImage, onlineImage } from '../utils/images';
import { Image } from '@rneui/themed';

const ScrollLayout = ({children}) => {
  return (
    <ScrollView>
        <>
            {children}
            <View style={generalStyles.layoutbelowBox}>
                <Image
                    source={offlineImage.layoutBelow}
                    style={generalStyles.image}
                    PlaceholderContent={<ActivityIndicator />}
                />
            </View>
        </>
    </ScrollView>
  )
}

export default ScrollLayout