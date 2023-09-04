import { StyleSheet } from "react-native";


const ClientProductDetailStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white"
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
        productImage: {
        width: '100%',
        height: '50%'
    },
    productDetail:{
        position: 'absolute',
        width: '100%',
        height: '55%',
        backgroundColor: 'white',
        bottom: 0,
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,
        elevation:20
    },

    divider: {
        height: 1,
        backgroundColor: "#f2f2f2",
        marginTop: 15
    }, 
    nameProduct:{
        fontWeight: "bold", 
        fontSize:20,  
        alignSelf:"center"
    },
    productInfo:{
        padding: 30,
        flex: 1
    },
    descriptionTitle:{
        marginTop: 20,
        fontWeight: "bold",
        fontSize: 16
    },
    descriptionContent:{
        fontSize: 15,
        marginTop: 3,
        justifyContent: "space-between"
    },
    productActions:{
        flexDirection: "row",
        height: 70
    },
    actionLess:{
        backgroundColor: 'red',
        paddingVertical: 2,
        paddingHorizontal: 15,
        alignSelf:"center",
        // borderBottomLeftRadius:10,
        // borderBottomRightRadius:10,
        borderRadius:30,
        marginLeft: 25
       
    },
    actionTextLess:{
        color: 'white',
        fontSize: 25,
        alignSelf:"center",

    }, 
    actionAdd:{
        backgroundColor: 'green',
        paddingVertical: 2,
        paddingHorizontal: 12,
        alignSelf:"center",
        // borderBottomLeftRadius:10,
        // borderBottomRightRadius:10,
        borderRadius:30,
        
       
    },
    actionTextAdd:{
        color: 'white',
        fontSize: 25,
        alignSelf:"center",

    }, 
    quantity:{
        
        paddingVertical: 2,
        paddingHorizontal: 10,
        alignSelf:"center",
    },
    quantityText:{
        color: 'black',
        fontSize: 30,
        // fontWeight: "bold", 
    }, 
    buttonAdd:{
        flex: 1,
        marginLeft: 20,
        marginRight: 25,
        justifyContent: "center",
        alignItems:"center"
    }
});

export default ClientProductDetailStyles;