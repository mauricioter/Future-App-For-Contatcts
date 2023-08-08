import react from "react";
import { View } from "react-native";
import { Text } from "react-native";

export default function Contacts({ navigation }) {
  return (
    <View style={{ marginLeft: 20, marginTop: 20 }}>
      <View>
        <Text>
          Nome: Joao
        </Text>
        <Text>Telefone: (86) 9944-4541</Text>
        <Text onPress={() => navigation.navigate('Iformation', {
          nome: 'Joao',
          telefone: '(86) 994444541',
          endereço: 'Mocambinho'
        })} > Information... </Text>
      </View>
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <Text>
          Nome: Daniel
        </Text>
        <Text>Telefone: (86) 9944-4444</Text>
        <Text onPress={() => navigation.navigate('Iformation', {
          nome: 'Daniel',
          telefone: '(86) 994444541',
          endereço: 'Mocambinho'
        })} > Information... </Text>
      </View>
    </View>
  )
}