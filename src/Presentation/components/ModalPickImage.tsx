import React, { useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import RoundedButton from "./RoundedButton";

interface Props {
    openGallery: () => void,
    openCamera: () => void,
    modelUseState: boolean,
    setModalUseState: React.Dispatch<React.SetStateAction<boolean>>
}
export const ModalPickImage = ({ openGallery, openCamera, setModalUseState, modelUseState }: Props) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modelUseState}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalUseState(!modelUseState);
                }}>
                <View style={styles.centeredView}>
                    {/* <Text>Selecciona una imagen</Text> */}
                    <View style={styles.modalView}>
                        <Text style={styles.modalTextOption}>Selecciona una imagen</Text>
                        <View style={styles.buttonContainer}>
                            <RoundedButton
                                onPress={() => {
                                    openGallery(),
                                    setModalUseState(false)
                                }}
                                text="Gallery"
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <RoundedButton
                                onPress={() =>  {
                                    openCamera(),
                                    setModalUseState(false)
                                }}
                                text="Camara"
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    modalView: {
        width: 250,
        height: 200,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 30,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 15,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    modalTextOption: {
        marginTop: 5,
        marginBottom: 5,
        textAlign: "center",
    },
    buttonContainer: {
        width: '100%',
        marginTop: 8
    }
});

export default ModalPickImage;
