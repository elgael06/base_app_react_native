import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native'
import Section from '../atoms/section.atom';
import useSesionStore from '../../store/sesion.statate';

const LoginPage = ({ navigation }) => {
  const { singIn, setLoading } = useSesionStore();
  const [email, setEmail] = React.useState('');
  const [password, setPass] = React.useState('');
  console.log('Login Page')

  const onPress = () => {
    setLoading(true)
    console.log({ email, password })
    singIn({
      userName: 'Gael',
      fullName: 'Cristian Val',
      email,
    });
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }

  const isActiveBtn = React.useMemo(() => email !== '' && password !== '', [email, password]);

  return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Section title={'Iniciar sesion'}>
    </Section>
    <Text>Email</Text>
    <TextInput
      autoComplete='email'
      style={styles.input}
      placeholder='email'
      onChangeText={setEmail}
      value={email}
    />
    <Text>password</Text>
    <TextInput
      autoComplete='password'
      placeholder='password'
      style={styles.input}
      onChangeText={setPass}
      value={password}
    />
    <Button
        title='Entrar'
        disabled={!isActiveBtn}
        // color="#f194ff"
        // style={styles.button}
        onPress={onPress}
      />

  </View>);
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 220,
    borderRadius: 10,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#fdaaaa",
    width: 220,
    padding: 10
  },
});

export default LoginPage;
