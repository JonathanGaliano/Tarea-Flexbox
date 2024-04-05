import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './components/Button';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Primer Proyecto RN </Text>
      <Button size="lg" variant="danger" text="Eliminar"/>
      <Button size="lg" variant="default" text="Cancelar"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
