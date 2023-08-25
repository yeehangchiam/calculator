import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import NormalBtn from './components/NormalBtn';
import BigBtn from './components/BigBtn';
import styles from './styles/styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';




export default function App() {
  const numberPad = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.', '=', '+', '-', 'x', '/'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayRow}><Text>0</Text></View>
      
      <View style={styles.delRow}>
        <BigBtn text="CLEAR" style={[styles.btnContainer, { backgroundColor: '#ffaaaa' }]}></BigBtn>
        <BigBtn text="DELETE" style={[styles.btnContainer, { backgroundColor: '#aaaaff' }]}></BigBtn>

      </View>
      <View style={styles.numRow}>
        <NormalBtn text={numberPad[7]}></NormalBtn>
        <NormalBtn text={numberPad[8]}></NormalBtn>
        <NormalBtn text={numberPad[9]}></NormalBtn>
        <NormalBtn text={numberPad[15]}></NormalBtn>
      </View>
      <View style={styles.numRow}>
        <NormalBtn text={numberPad[4]}></NormalBtn>
        <NormalBtn text={numberPad[5]}></NormalBtn>
        <NormalBtn text={numberPad[6]}></NormalBtn>
        <NormalBtn text={numberPad[14]}></NormalBtn>
      </View>
      <View style={styles.numRow}>
        <NormalBtn text={numberPad[1]}></NormalBtn>
        <NormalBtn text={numberPad[2]}></NormalBtn>
        <NormalBtn text={numberPad[3]}></NormalBtn>
        <NormalBtn text={numberPad[13]}></NormalBtn>
      </View>
      <View style={styles.numRow}>
        <NormalBtn text={numberPad[10]}></NormalBtn>
        <NormalBtn text={numberPad[0]}></NormalBtn>
        <NormalBtn text={numberPad[11]} ></NormalBtn>
        <NormalBtn text={numberPad[12]}></NormalBtn>
      </View>
    </SafeAreaView>
  );
}
