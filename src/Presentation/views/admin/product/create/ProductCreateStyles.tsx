import React from 'react'
import { StyleSheet } from 'react-native'

const AdminProductCreateStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color: 'white'
  },

  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    bottom: "35%",
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "10%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around"

  },
  logoSize: {
    width: 110,
    height: 110,
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'white',
    margin: 5

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
    height: "60%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 160,
    borderTopRightRadius: 160,
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
  loading: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0
  },
  regresar: {
    position: 'absolute',
    alignSelf: 'center',
    top: 35,
    left: 25
  },
  regresarIcon: {
    width: 30,
    height: 30
  },
  categoryInfo:{
    // flexDirection: "row",
marginBottom: 20,
    alignItems: "center"
  },
  imageCategory: {
    width: 30,
    height: 30,
    
  },
  textCategory:{
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "gray"

    
  },
  iconCategory: {
    width: 50,
    height: 50,
    alignSelf: "center",
    borderRadius: 35,


  },
});

export default AdminProductCreateStyles;
