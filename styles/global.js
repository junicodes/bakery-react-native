import { Dimensions, StyleSheet } from "react-native";

export const generalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  layoutbelowBox: {
    width: "100%",
    height: 100,
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
  imageBox: {
    width: 150,
    height: 35,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  twoSpaceTop: {
    marginTop: 10,
  },
  goBackBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  goBack: {
    width: "10%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
  },
  screenText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20
  },
  notFoundText: {
    textAlign: 'center', 
    marginTop: 20, 
    fontSize: 16,
    color: 'gray'
  },
  spinnerTextStyle: {
    color: '#FFF',
  }
});

export const imageStyle = StyleSheet.create({
  logoContainer: {
    width: "100%",
    paddingTop: 50,
    paddingBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageBox: {
    width: 150,
    height: 35,
  },
  logoContainerRight: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

// Dimensions.get("window").width 

export const formViewStyles = StyleSheet.create({
  block: {
    marginVertical: 20
  },
  title: {
    fontSize: 20,
  },
  errorContainer: {
    marginVertical: 1,
  },
  errorText: {
      color: "red",
  },
  input: {
    marginVertical: 5,
    width: "100%",
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    color: 'black',
    borderColor: '#FFD15C',
  },

  textArea: {
    height: 150,
  },

  buttonContainer: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: '100%',
    height: 54,
    borderRadius: 8,
    backgroundColor: "#FFD15C",
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
  },
  
  gselect: {
      backgroundColor: '#ffffff',
      borderRadius: 6,
      width: '100%',
      height: 45,
      borderColor: '#F4F4F4',
      borderWidth: 1,
  },
  gselectText: {
      textAlign: 'left',
      color: '#757575',
      fontSize: 14,
  }
});
