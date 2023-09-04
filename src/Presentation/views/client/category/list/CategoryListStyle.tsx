import { StyleSheet } from "react-native";
import { MyColors } from "../../../../theme/AppTheme";

const CategoryListStyle = StyleSheet.create({
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
        top: 0.1
        // backgroundColor: 'black',
    },
    title:{
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20
  
    },  imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.95
    }, 
   
    logoSize: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: '75%'
        
        
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

export default CategoryListStyle;