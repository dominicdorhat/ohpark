import React from 'react' ;
import { StyleSheet, Text, View, Button , Alert} from 'react-native';

class Unlock extends React.Component{
constructor(props){
	super(props)
}

alert = () => {
	parkingUnlocked = this.props.navigation.getParam('parkingUnlocked',null)
	Alert.alert(
		'Parking Unlocked',
		'You may now leave the parking spot..',
		[
			{text:'Ok' , onPress:()=>{
				parkingUnlocked()
				this.props.navigation.navigate("Menu")
				}
			},
			{text: 'Cancel' , onPress:() =>console.log('CANCEL')},
		]
		)
}

render(){
	return(
		<View>
			<Button title="Unlock" onPress={this.alert}/>
		</View>		
		)
}

}

export default Unlock