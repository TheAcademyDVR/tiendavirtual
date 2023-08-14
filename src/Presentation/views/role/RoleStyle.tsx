import { StyleSheet } from "react-native";
import { MyColors } from "../../theme/AppTheme";

const RoleStyles = StyleSheet.create({
    container: {
        marginTop: 25,
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
    },
    GHRcontainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: 'black',
    },
    title:{
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 25

    },  imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.95
    }, 
   
    logoSize: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        
        marginBottom: -10
    },
    cerrarSession:{
        margin: 15,
        width: 200,
        height: 40,
        alignSelf: "center", 
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",

      },
      titleButton:{
        color: MyColors.primary,
        fontSize: 15 ,
        fontWeight: "bold",
      }
      
})

export default RoleStyles;