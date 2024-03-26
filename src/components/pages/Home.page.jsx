import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import useSessionStore from '../../store/sesion.statate';
import {Section} from "../atoms";

const HomePage = ({ navigation }) => {
  const { fullName, email } = useSessionStore();
  console.log('home page')

    const handleMenu = (type = '') => {
      if(type === 'MI PERFIL') navigation.navigate('mi-perfil');
      else if(type === 'DASHBOARD') navigation.navigate('dasboard');
      else  if(type === 'ACERCA DE') navigation.navigate('acerca-de');
      else alert(type);
    }

  return (<View style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  }}>
    <Text>Usuario: {fullName}</Text>
    <Text>Email: {email}</Text>
    <FlatList
      data={[
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'MI PERFIL',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'DASHBOARD',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'ACERCA DE',
        },
      ]}
      renderItem={({ item }) => (<Section key={item.id} title={item.title} >
        <TouchableOpacity onPress={() => handleMenu(item.title)}><Text>
          IR A..
        </Text></TouchableOpacity>
      </Section>)}
    />

  </View>);
}

export default HomePage;
