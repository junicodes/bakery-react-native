import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    TextInput,
    StyleSheet,
    Dimensions,
} from "react-native";
import { Button, CheckBox } from "react-native-elements";
import { offlineImage, onlineImage } from '../utils/images';
import { Image, Icon } from '@rneui/themed';
import { ScrollView } from "react-native-gesture-handler";
import ScrollLayout from "../components/ScrollLayout";
import { generalStyles, formViewStyles } from "../styles/global";
import { Formik } from "formik";
import * as Yup from "yup";
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';


const validationSchema = Yup.object().shape({
    title: Yup.string()
      .label("title")
      .required("Please enter a title to continue"),
    description: Yup.string()
      .label("description")
      .required("Please enter a short description about recipe")
      .min(6, "Decription text is too short, should be greater than 6 character's"),
});



const ErrorMessage = ({ errorValue }) => (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{errorValue}</Text>
    </View>
);



export default function RecipeInsert({recipe = null, onAddRecipeHandler}) {

    const [image, setImage] = useState(recipe ? recipe.image : null);
    let formPayload = { title: "", description: "" };

    if(recipe) { formPayload = recipe; }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) { setImage(result.uri) }
    };

   const onLoginHandler = (values, actions) => {
        const {title, description} = values;

        console.log(title, description)
    }
    

  return (
    <>
        <View style={[generalStyles.container]}>

          <View style={styles.imageView}>
            <View style={styles.imageDrop}>
            {
                image && (
                  <Image
                    source={{ uri: image }}
                    style={styles.image}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                )
            }
            </View>
            {
                !image && (
                    <TouchableOpacity onPress={pickImage} style={{position: 'absolute'}}>
                        <Icon
                            name="cloud-upload"
                            type="font-awesome"
                            color="gray"
                            size={30}
                        />
                    </TouchableOpacity>
                )
            }
            {
                image && (
                    <TouchableOpacity onPress={() => setImage(null)} style={{position: 'absolute', right: 20, top: 20}}>
                        <Icon
                            name="remove"
                            type="font-awesome"
                            color="red"
                            size={20}
                        />
                    </TouchableOpacity>
                )
            }
          </View>

            <Formik
                enableReinitialize
                initialValues={formPayload}
                onSubmit={(values, actions) => onAddRecipeHandler(values, actions)}
                validationSchema={validationSchema}
            >
                {({
                handleChange,
                values,
                errors,
                touched,
                handleSubmit,
                handleBlur,
                }) => (
                <View style={formViewStyles.container}>

                    <TextInput
                        style={formViewStyles.input}
                        numberOfLines={1}
                        value={values.title}
                        placeholder="Enter Recipe Title"
                        onChangeText={handleChange("title")}
                        onBlur={handleBlur("title")}
                    />
                    <ErrorMessage errorValue={touched.title && errors.title} />
                    <TextInput
                        multiline
                        style={[formViewStyles.input, formViewStyles.textArea]}
                        maxLength={400}
                        value={values.description}
                        placeholder="Write a description and ingredients about recipe"
                        onChangeText={handleChange("description")}
                        onBlur={handleBlur("description")}
                    />
                    <ErrorMessage errorValue={touched.description && errors.description} />
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={formViewStyles.buttonContainer}
                    >
                        <Text style={formViewStyles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
                )}
            </Formik>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    imageView: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 350,
    },
    imageDrop: {
        width: "100%",
        borderStyle: "solid",
        borderColor: "#FFD15C",
        borderWidth: 2,
        height: 320,
        borderRadius: 8,
        marginBottom: 10
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
    },
});
