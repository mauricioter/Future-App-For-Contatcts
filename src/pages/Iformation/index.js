import react from "react";
import { View } from "react-native";
import { Text } from "react-native";

export default function Iformation({ route }) {
  return (
    <View>
      <Text>Nome: {route.params?.nome} </Text>
      <Text>Telefone: {route.params?.telefone}</Text>
      <Text>Endereço: {route.params?.endereço}</Text>
      {/* <Text>n: 3141</Text> */}
      {/* <Text>Profissão: Cantor</Text> */}
    </View>
  )
}