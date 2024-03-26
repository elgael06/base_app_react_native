import { useEffect } from 'react';
import { View, Text } from 'react-native'
import useSesionStore from '../../store/sesion.statate';

const SplashPage = ({ navigation }) => {

  console.log('splaash page')
  return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text> Nombre de la app</Text>
    <Text> cargando...</Text>
  </View>);
}

export default SplashPage;
