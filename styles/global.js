import { StyleSheet } from "react-native";

export const generalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
        backgroundColor: '#ffffff'
    },
    layoutbelowBox: {
        flex: 1,
        zIndex: 99,
        borderRadius: 8,
        width: '100%',
        height: 100,
        backgroundColor: '#ffffff'
    },
    goBackBox: {
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
      },
      goBack: {
        width: '10%', height:'100%', padding: 10, display: 'flex', flexDirection: 'row'
      },
      imageBox: {
        width: 150,
        height: 35
      },
    image:{   
        width: '100%',
        height: '100%',
    },
    twoSpaceTop: {
        marginTop: 10
    }
});
  