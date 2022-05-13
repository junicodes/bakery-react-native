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
import { LinearGradient } from 'expo-linear-gradient';

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

    const [image, setImage] = useState(null);
    const [formPayload, setFormPayload ] = useState({ title: "", description: "" });

    useEffect(() => {
        if(recipe) {
            setImage(recipe.image)
            setFormPayload({
                title: recipe.title,
                description: recipe.description
            })
        }
    }, [recipe])

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

    const handleSubmitFunc = (values) => {    
        //validate image and other data here 
        //validate the category and image
        if(!image) return alert("Please add a recipe image to continue");

        return onAddRecipeHandler(values, image)
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
                    <TouchableOpacity onPress={() => setImage(null)} style={{position: 'absolute', right: 10, top: 20}}>
                        <Icon
                            name="trash"
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
                onSubmit={(values, actions) => handleSubmitFunc(values, actions)}
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
                        numberOfLines={1}
                        style={[formViewStyles.input, formViewStyles.textArea]}
                        maxLength={400}
                        value={values.description}
                        placeholder="Write a description and ingredients about recipe"
                        onChangeText={handleChange("description")}
                        onBlur={handleBlur("description")}
                    />
                    <ErrorMessage errorValue={touched.description && errors.description} />
                    <TouchableOpacity onPress={handleSubmit}>
                        <LinearGradient
                            colors={["#FFD15C", "gray"]}
                            start={{  x: 1, y: 0 }}
                            end={{  x: 0.2, y: 0 }}
                            style={formViewStyles.buttonContainer}
                        >
                            <Text style={formViewStyles.buttonText}>Save</Text>
                        </LinearGradient>
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
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
    },
});
