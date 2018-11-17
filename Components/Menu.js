import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {ImagePicker , Permissions} from 'expo';

import Unlock from './Unlock.js'

const url = "https://lpr.recoqnitics.com/detect"
const access_key = "8044c46d33a99d066ace"
const secret_key = "4705011ce68297849185e18c15ab2413d1019ebc"


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
    this.props.navigation.navigate('Unlock' , {parkingUnlocked:this.parkingUnlocked})
  }

  __gotoRegister = () => {
    this.uploadCarPlatePicture();
  }

  parkingUnlocked = () => {
    this.setState({
      isBooked:false,
    })
  }

  uploadCarPlatePicture = async() => {
    var formData = new FormData();

    //manually get permissions
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
     } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if(cameraPerm === 'granted' && cameraRollPerm === 'granted'){
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
      })

      console.log(result)

      var image = {
        uri: result.uri,
        type: 'image/jpg',
        name: 'image.jpg',
      }

      formData.append("filename",image)
      formData.append("access_key",access_key)
      formData.append("secret_key",secret_key)

      fetch(url, {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(json => console.log(json))
    }     

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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MenuNavigator = createStackNavigator({
  Menu: {screen: Menu},
  Unlock: {screen: Unlock},
  // RentPark: {screen: RentPark},
})

export default MenuNavigator


