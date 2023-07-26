import { StyleSheet } from "react-native";

const RegisterStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
  
    imageBackground: {
      width: "100%",
      height: "100%",
      opacity: 0.7,
      bottom: "30%",
    },
    logoContainer: {
      position: "absolute",
      alignSelf: "center",
      top: "10%",
      alignItems: "center",
    },
    logoSize: {
      width: 120,
      height: 120,
      alignSelf: "center",
    },
    logoText: {
      color: "white",
      textAlign: "center",
      fontSize: 20,
      marginTop: 10,
      fontWeight: "bold",
    },
    form: {
      width: "100%",
      height: "65%",
      backgroundColor: "white",
      position: "absolute",
      bottom: 0,
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      padding: 20,
    },
    formText: {
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center",
    },
    formInput: {
      flexDirection: "row",
      marginTop: 30,
    },
    formIcon: {
      width: 25,
      height: 25,
      marginTop: 5,
    },
    formtextInput: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: "#AAAAAA",
      marginLeft: 15,
    },
    formButton: {
      backgroundColor: "azul",
    },
    formRegistrar: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 25,
    },
    formtextRegistrar: {
      // fontStyle: 'italic',
      color: "red",
      borderBottomWidth: 1,
      borderBottomColor: "red",
      fontWeight: "bold",
      marginLeft: 10,
    },
    iconMore: {
      position: "absolute",
      alignSelf: "center",
      top: "0%",
      alignItems: "center",
    },
    iconSize: {
      width: 20,
      height: 20,
      marginTop: 190,
      marginLeft: 75,
    },
  });
  
  export default RegisterStyles;