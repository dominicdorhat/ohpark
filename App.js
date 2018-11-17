import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const API_URL = 'https://lpr.recoqnitics.com/detect';
const ACCESS_KEY = '8044c46d33a99d066ace';
const SECRET_KEY = '4705011ce68297849185e18c15ab2413d1019ebc';


class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBooked : true,
    }
  }

  static navigationOptions = {
    title: 'Welcome'
  };
  
  __gotoUnlock = () => {
    console.log("Unlock UI");
  }

  __gotoRegister = () => {
    console.log("Register");
  }

  render() {
    const showUnlock = <Button title = "Unlock car park" onPress = {this.__gotoUnlock}></Button>;
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Button title = "Book a car park" onPress = {() => navigate('RentPark')}/>      
        <View>
          {this.state.isBooked ? showUnlock: null}
        </View>
        <Button title="Register car plate" onPress={this.__gotoRegister} />      
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Menu: {screen: Menu},
  // RentPark: {screen: RentPark},
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(AppNavigator);
