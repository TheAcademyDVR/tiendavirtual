import React from 'react'
import { StyleSheet } from 'react-native'

const AdminCategoryUpdateStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color: 'white'
  },

  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    bottom: "20%",
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "10%",
    
    // alignItems: "center"
  },

  logoText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 5,
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    height: "30%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
  },
  formText: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    color: 'white',
    marginBottom: 15
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

  image: {
    marginTop: 40,
    width: '100%',
    height: '92%',
    
  },
  imageSelect: {
    marginTop: 12,
    // marginBottom: 5,
    width: '135%',
    height: '130%',
    borderRadius: 50,
    alignSelf: "center",
  },
});


export default AdminCategoryUpdateStyles;
