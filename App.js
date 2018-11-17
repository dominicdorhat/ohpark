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
      <KeyboardAvoidingView style={styles.container} enabled>
        <Image source={Icon}/>
        <Text>Oh Park !!!</Text>
        <View style={styles.row}>
          <Text>Phone No:</Text>
          <TextInput 
              placeholder = "phone number"
              placeholderTextColor = 'rgba(0,122,0,0.5)'
              returnKeyType = 'next'
              onChangeText={ (x)=>this.setState({phone_no:x}) }
          />
        </View>
        <View style={styles.container}>
          <Button title="GO!" onPress={this.__gotoMenu}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  row1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNavigator = createStackNavigator({
  Login: {screen: Login ,
   navigationOptions : {header:null,}},
  Menu: {screen: Menu},
  // RentPark: {screen: RentPark},
})

export default createAppContainer(AppNavigator);