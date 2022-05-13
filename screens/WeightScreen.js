import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import ScrollLayout from "../components/ScrollLayout";
import { generalStyles, formViewStyles } from "../styles/global";
import { useAppContext } from "../context_api/AppContext";

export default function WeightScreen({ navigation }) {

  //Use Context
  const appContext = useAppContext();
  const { themeMode } = appContext;
  const themeStyle = themeMode === 'dark' ? '#fff' : '#000'

  const data = {
      gram: 0,
      oz: 0,
      ibs: 0
  }

  const [values, setValues] = useState(data);

  const convertFromGram = (value) => {

    //Convert gram to once 
    const ouncePerGram = 0.035274;
    //Convert gram to Pounds
    const poundsPerGram = 0.00220462;

    setValues({...values, ...{
        gram: value,
        oz:  value * ouncePerGram,
        ibs: value * poundsPerGram
    }})
    
  }

  const convertFromOunces = (value) => {

    //Convert ounce to gram
    const gramPerOunce = 28.3495;
    //Convert gram to Pounds
    const poundsPerOunce = 0.06249994901875

    setValues({...values, ...{
        gram: value * gramPerOunce,
        oz: value,
        ibs: value * poundsPerOunce
    }})

  }

  const convertFromPounds = (value) => {

    //Convert ounce to gram
    const gramPerPound = 453.59200000470383429;
    //Convert gram to Pounds
    const ouncePerPound = 15.99998694880000194
    
    setValues({...values, ...{
        gram: value * gramPerPound,
        oz: value * ouncePerPound,
        ibs: value
    }})
  }

  const handleChange = (value, unit) => {
   switch (unit) {
       case 'gram':
          return convertFromGram(value);  
       case 'oz':
          return convertFromOunces(value);
       case 'ibs':
          return convertFromPounds(value);
   }
  }

  return (
    <ScrollLayout title="Weight Converter" withBackButton>
        <View style={[generalStyles.container]}>
           <View style={formViewStyles.block}>
               <Text style={[{color: themeStyle}, formViewStyles.title]}>Grams (g)</Text>
               <TextInput
                    style={[formViewStyles.input, {color: themeStyle}]}
                    numberOfLines={1}
                    value={values.gram > 0 ? values.gram.toString() : ''}
                    keyboardType={"number-pad"}
                    placeholder="0.00 g"
                    placeholderTextColor="#e6e6e6"
                    onChangeText={(value) => handleChange(value, "gram")}
                    onPressIn={() => setValues(data)}
                />
           </View>
           <View style={formViewStyles.block}>
               <Text style={[ {color: themeStyle}, formViewStyles.title]}>Ounces (oz)</Text>
               <TextInput
                    style={[formViewStyles.input, {color: themeStyle}]}
                    numberOfLines={1}
                    value={values.oz > 0 ? values.oz.toString() : ''}
                    keyboardType={"number-pad"}
                    placeholder="0.00 oz"
                    placeholderTextColor="#e6e6e6"
                    onChangeText={(value) => handleChange(value, "oz")}
                    onPressIn={() => setValues(data)}
                />
           </View>
           <View style={formViewStyles.block}>
               <Text style={[ {color: themeStyle}, formViewStyles.title]}>Pounds (ibs)</Text>
               <TextInput
                    style={[formViewStyles.input, {color: themeStyle}]}
                    numberOfLines={1}
                    value={values.ibs > 0 ? values.ibs.toString() : ''}
                    keyboardType="numeric"
                    placeholder="0.00 ibs"
                    placeholderTextColor="#e6e6e6"
                    onChangeText={(value) => handleChange(value, "ibs")}
                    onPressIn={() => setValues(data)}
                />
           </View>
        </View>
    </ScrollLayout>
  );
  
}

