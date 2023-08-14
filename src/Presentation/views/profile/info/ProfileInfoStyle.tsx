import { StyleSheet } from 'react-native';

const ProfileInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%'
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '10%'
  },
  logoSize: {
    width: 125,
    height: 125,
    alignSelf: 'center'
  },
  logoText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25
  },
  logoContainerUser: {
    position: 'absolute',
    alignSelf: 'center',
    top: '35%',
    elevation: 15,
    borderRadius: 100,
  },
  logoSizeUser: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'white',
  },
  form: {
    width: '100%',
    height: '48%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 175,
    borderTopRightRadius: 175,
    padding: 20
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  
  formInfo:{
    marginTop: 20,
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  formTitle:{
    marginTop: 60,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10 
  },
  formUser:{
    fontSize: 15,
    textAlign: 'center',
    color: 'gray',
    
  },
  formImage:{
    width:35,
    height:35
  },
  formSpace:{
    marginLeft: 15
  },
  formData:{
    fontSize: 15
  },
  formDescription:{
    fontSize: 12,
    color: 'gray'
  },
  cerrarSesion:{
    position:'absolute',
    alignSelf: 'center',
    top:35,
    right: 25
  },
  cerrarSesionImage:{
    width: 30,
    height: 30,
  },
  regresar:{
    position:'absolute',
    alignSelf: 'center',
    top:35,
    left: 25
  },
  regresarIcon:{
    width: 30,
    height: 30
  }
});

export default ProfileInfoStyles;