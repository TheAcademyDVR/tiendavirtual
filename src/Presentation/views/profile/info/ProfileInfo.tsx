import React from "react";
import { Button, Text, View } from "react-native";
import ProfileInfoViewModel from "./ProfileInfoViewModel";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";

interface Props extends StackScreenProps<RootStackParamList, 'ProfileInfoScreen'>{};

export const ProfileInfoScreen = ({navigation, route}: Props) => {

  const { removeSession } = ProfileInfoViewModel();
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Button
      onPress={() => {
        removeSession();
        navigation.navigate('HomeScreen');
      }}
      title="Cerrar Session"
      />
      {/* <Text>ProfileInfoScreen</Text> */}
    </View>
  );
};
