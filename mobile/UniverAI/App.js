import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Share, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const createTwoButtonAlert = () => {
    Alert.alert('BUTAO 02 APERTADO', 'AGORA B2 FROUXO', [
      {
        text: 'Cancel',
      },
      {
        text: 'OK', onPress: () => console.log('OK Pressionado')
      },
    ]);

    const createThreeButtonAlert = () => {
      Alert.alert('BUTAO 03 PREENCHIDO', 'AGORA B3 CHEIO', [
        {
          text: 'Perguntar depois',
          onPress: () => console.log('Perguntar 9009'),
        },
        {
          text: 'Cancel',
        },
        {
          text: 'OK', onPress: () => console.log('OK Pressionado')
        },
      ])
    }

  }
};

const compartilharExemplo = () => {
  const compartilharLigado = async () => {
    try {
      const resultado = await Share.share({
        message:
          'Se vc está lendo esta mensagem, é porque vc sabe ler :]',
      });

      if (resultado.action === Share.sharedAction) {
        if (resultado.activityType) {
          console.log('CDD - 01')
        } else {
          console.log('CDD - 02')
        }
      } else if (resultado.action === Share.dimissedAction) {
        console.log('dimissed')
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }

  }
};

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Button title={'2 : Button Alert'} onPress={createTwoButtonAlert} />
        <Button title={'3 : Button Alert'} onPress={createThreeButtonAlert} />
        <Button onPress={onShare} title="Compartilhar" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

});
