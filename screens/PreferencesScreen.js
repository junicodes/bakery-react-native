import React, {useState, useRef, useEffect} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ScrollLayout from "../components/ScrollLayout";
import { generalStyles, formViewStyles } from "../styles/global";
import { Switch, Icon } from '@rneui/themed';
import SelectDropdown from 'react-native-select-dropdown';
import { useColorScheme } from "react-native";
import { getData, storeData } from "../utils/dataService";
import { useAppContext, useDispatchAppContext } from "../context_api/AppContext";

const fontFamily = [
  'Poppins',
  'Serif',
  'Monospace'
]
const fontSize = [
  10,11,12,13,14,15,16,17,18,19,20
]

//constant variable
const tableName = '@themeMode';

export default function WeightScreen({ navigation }) {
  const [fontFamilyDefault, setFontFamilyDefault] = useState('Poppins')
  const [fontSizeDefault, setFontSizeDefault] = useState('14')

  //Use Context
  const appContext = useAppContext();
  const dispatchAppContext = useDispatchAppContext();
  const { themeMode } = appContext;

  //Ref
  const selDropDownRef = useRef({});

  return (
    <ScrollLayout title="Preferences" withBackButton>
        <View style={[generalStyles.container, {marginTop: 50}]}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 2, borderColor: '#e6e6e6', paddingVertical: 15}}>
              <Text style={[ {color: (themeMode === 'dark') ? '#fff' : '#000'}, formViewStyles.title]}>
                Dark Mode
              </Text>
              <Switch
                value={themeMode === 'dark' ? true : false }
                color="#F8B64C"
                onValueChange={(value) => {
                  dispatchAppContext({
                    type: 'THEME_MODE',
                    payload: value ? 'dark' : 'light'
                  })
                }}
              />
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 2, borderColor: '#e6e6e6', paddingVertical: 15,position: 'relative'}}>
              <Text style={[{color: (themeMode === 'dark') ? '#fff' : '#000'}, formViewStyles.title]}>
                Change Font Faces
              </Text>
              <View  style={{position: 'relative'}}>
                <SelectDropdown
                  data={fontFamily}
                  ref={selDropDownRef}
                  onSelect={selectedItem => {  
                    //set type for tag selection
                    console.log(selectedItem)
                  }}
                  defaultButtonText={fontFamilyDefault}
                  buttonStyle={{...formViewStyles.gselect, ...{width: 150, height: 30 }}}
                  buttonTextStyle={{...formViewStyles.gselectText}}
                  buttonTextAfterSelection={ selectedItem => selectedItem }
                  rowTextForSelection={item => item }
                />
                <Icon
                  name="angle-down"
                  type="font-awesome"
                  color="#4F4F4F"
                  size={14}
                  containerStyle={{position: 'absolute', right: 10, top: 8}}
                />
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 2, borderColor: '#e6e6e6', paddingVertical: 15}}>
              <Text style={[{color: (themeMode === 'dark') ? '#fff' : '#000'}, formViewStyles.title]}>
                Change Font Size
              </Text>
              <View  style={{position: 'relative'}}>
                <SelectDropdown
                  data={fontSize}
                  ref={selDropDownRef}
                  onSelect={selectedItem => {  
                    //set type for tag selection
                    console.log(selectedItem)
                  }}
                  defaultButtonText={fontSizeDefault}
                  buttonStyle={{...formViewStyles.gselect, ...{width: 150, height: 30 }}}
                  buttonTextStyle={{...formViewStyles.gselectText}}
                  buttonTextAfterSelection={ selectedItem => selectedItem }
                  rowTextForSelection={item => item }
                />
                <Icon
                  name="angle-down"
                  type="font-awesome"
                  color="#4F4F4F"
                  size={14}
                  containerStyle={{position: 'absolute', right: 10, top: 8}}
                />
              </View>
            </View>
        </View>
    </ScrollLayout>
  );
  
}

