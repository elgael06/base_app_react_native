import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import Section from '../atoms/section.atom';
import useSessionStore from '../../store/sesion.statate';
import useValidateSession from "../../hooks/useValidateSession.hook";

const LoginPage = ({ navigation }) => {
  const { email, setEmail, password, setPass, isActiveBtn, handleSubmit } = useValidateSession();
  const { singIn, setLoading } = useSessionStore();
  console.log('Login Page')

  const onPress = async () => {
    setLoading(true)
    console.log({ email, password })
    try {
      const session = await handleSubmit(email, password );
      if(!!session)  singIn({
        userName: session.userName,
        fullName: session.fullName,
        email,
      });
    }catch(err) {
     alert(err);
    } finally {
      setLoading(false);
    }
  }

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
