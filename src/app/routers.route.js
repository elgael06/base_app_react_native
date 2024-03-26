import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage, LoginPage, SplashPage} from '../components/pages';
import useSessionStore from '../store/sesion.statate';
import {optionsMenu} from "../utils/options-menu";


export const Stack = createNativeStackNavigator();


const RoutesApp = () => {
  const { userName, isActive, isLoading, setLoading, singOut } = useSessionStore();
  const titleApp = React.useMemo(() => {
    return userName !== '' ? `Hola ${userName}` : 'App de prueba';
  }, [userName]);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, [isActive]);

  console.log(`is active: ${isLoading}`);
  if(isLoading) return <SplashPage />

  return (<NavigationContainer>
      {isActive ?
    <Stack.Navigator>
        <Stack.Screen options={{
        headerRight: () => (
          <Button
            onPress={() => singOut()}
            title="Salir"
            color="#E7F206"
          />
        ),
        headerShown: true,
        headerBackVisible: false,
        headerStyle: {
            backgroundColor: '#268E36',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
          headerTitle: titleApp,
          animation: 'flip',
        }} name="Home" component={HomePage} />
        {/*opciones de menu*/}
        {optionsMenu.map((item, idx) => (
            <Stack.Screen options={{
            headerTitle: item.label,
            headerBackTitle: 'atras',
            headerStyle: {
              backgroundColor: item.color,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} key={`option_${idx}`} name={item.name} component={item.component} />
        ))}
      </Stack.Navigator>
      :
    <Stack.Navigator>
      <Stack.Screen options={{
          headerShown: false,
          headerBackVisible: false,
          animation: 'slide_from_bottom',
          headerTitle: 'App de prueba',
        }} name="Login" component={LoginPage} />
    </Stack.Navigator>
    }
  </NavigationContainer>);
}

export default RoutesApp;
