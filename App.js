import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, Button } from 'react-native';
import { createStackNavigator , createAppContainer} from 'react-navigation';

import Icon from './assets/park1.jpg';
import Menu from './Components/Menu.js'

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      phone_no: '',
    }
  }
  
  __gotoMenu = () => {
    this.props.navigation.navigate('Menu');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={Icon}/>
        <Text>Oh Park !!!</Text>
        <View style={styles.row}>
          <Text>Phone No. :</Text>
          <TextInput
            placeholder = "eg. 012337... "
            placeholderTextColor = 'rgba(0,122,0,0.5)'
            returnKeyType = 'next'
            onChangeText={ (x)=>this.setState({phone_no:x}) }
          />
        </View>
        <View style={styles.row1}>
          <Button title="GO!"/>
        </View>
      </View>
    );
  }
}
//  <View style={styles.row}>
//           <Text>Phone No:</Text>
//           <TextInput 
//               placeholder = "phone number"
//               placeholderTextColor = 'rgba(0,122,0,0.5)'
//               returnKeyType = 'next'
//               onChangeText={ (x)=>this.setState({phone_no:x}) }
//           />
//         </View>
//         <View style={styles.container}>
//           <Button title="GO!" onPress={this.__gotoMenu}/>
//         </View>
const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    marginTop: 30,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  row1: {
    marginTop: 40
  },
});

const AppNavigator = createStackNavigator({
  Login: {screen: Login ,
   navigationOptions : {header:null,}},
  Menu: {screen: Menu},
  // RentPark: {screen: RentPark},
})

export default createAppContainer(AppNavigator);