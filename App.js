import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POND: 0.11,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.19,
  YEN: 1.54,
  DINAR: 0.0034,
  BITCOIN: 0.000004,
};

const App = () => {
  const [inputValue, setinputValue] = useState(0);
  const [resultValue, setresultValue] = useState(0);
  const buttonPressed = currency => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please Enter Valid Input',
        backgroundColor: '#EA7773',
        textColor: '#FFFFFF',
      });
    }
    let result = parseFloat(inputValue) * currencyPerRupee[currency];
    setresultValue(result.toFixed(2));
  };
  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter Value"
              placeholderTextColor="#c1c1c1"
              value={inputValue}
              onChangeText={input => setinputValue(input)}></TextInput>
          </View>
          <View style={styles.converButtonContainer}>
            {Object.keys(currencyPerRupee).map(currency => (
              <TouchableOpacity
                key={currency}
                style={styles.coverterButton}
                onPress={() => buttonPressed(currency)}>
                <Text style={styles.temp}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center',
  },
  resultValue: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center',
  },
  input: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  converButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  temp: {
    color: 'white',
    fontSize: 15,
  },
  coverterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#0f4c75',
    width: '33.3%',
    borderWidth: 2,
    borderColor: '#bbe1fa',
    marginTop: 10,
  },
});
