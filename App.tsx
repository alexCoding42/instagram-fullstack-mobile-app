import React from 'react';
import {Text, View} from 'react-native';
import colors from './src/themes/colors';
import fonts from './src/themes/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

function App(): JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.primary, fontSize: fonts.size.lg}}>
        Hello World
        <AntDesign name="stepforward" size={25} />
      </Text>
    </View>
  );
}

export default App;
