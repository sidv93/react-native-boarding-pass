import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import LoginScreen from './LoginScreen';
import BoardingPass from './BoardingPass';
import Constants from 'expo-constants';

export default function App() {
  const [login, setLogin] = useState(true);
  const onLogin = () => {
    setLogin(!login);
  }
  return (
      <View style={styles.container}>
        {login ? <LoginScreen onLogin={onLogin} /> : <BoardingPass onBack={onLogin} />}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#425C5A',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  }
});
