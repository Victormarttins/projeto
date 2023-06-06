import { StyleSheet, Text, View } from 'react-native';
import ClassComponent from './class-component';
import FunctionComponent from './function-component';

export default function App() {
  return (
   
    <View style={{ justifyContent:'center',alignItems:'center',top:50}}>
      <ClassComponent/>

      <FunctionComponent/>

    </View>
     
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
