import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Picker, TouchableOpacity, Alert } from 'react-native';
import { Constants } from 'expo';
import DateTimePicker from 'react-native-modal-datetime-picker'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

let startTime = '';
let endTime = '';


export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isInitialTimePickerVisible: false,
            isEndTimePickerVisible: false,
            startingTime: '',
            endingTime: '',
        }
    }

    // initial time
    _showInitialTimePicker = () => this.setState({ isInitialTimePickerVisible: true });
    _hideInitialTimePicker = () => this.setState({ isInitialTimePickerVisible: false });

    // end date time
    _showEndTimePicker = () => this.setState({ isEndTimePickerVisible: true });
    _hideEndTimePicker = () => this.setState({ isEndTimePickerVisible: false });

    _handleInitialTimePicked = (time) => {
        let currentTime = new Date().getTime().valueOf();
        let inputTime = time.getTime().valueOf();

        if (currentTime  > inputTime )  {
            Alert.alert(
                'Invalid Input',
                '',
                [
                    { text: 'Cancel', onPress: () => console.log('CANCEL') },
                    { text: 'Ok', onPress: () => console.log('OK') },
                ]
            )
        
            this.setState({
                isInitialTimePickerVisible: false,               
            });
            
        } else {
            startTime = time;
            console.log(startTime);
            this.setState({
                isInitialTimePickerVisible: false,
            });
        }
    }

    _handleEndTimePicked = (time) => {
        let currentTime = new Date().getTime().valueOf();
        let inputTime = time.getTime().valueOf();

        if (currentTime > inputTime && startTime.getTime() > inputTime) {
            Alert.alert(
                'Invalid Input',
                '',
                [
                    { text: 'Cancel', onPress: () => console.log('CANCEL') },
                    { text: 'Ok', onPress: () => console.log('OK') },
                ]
            )

            this.setState({
                isEndTimePickerVisible: false,
            });            

        } else {            
            endTime = time;
            console.log(endTime); 
            this.setState({
                isEndTimePickerVisible: false,
            });
        }        
    }

    _saveState = () => {
        this.setState({
            startingTime: startTime,
            endingTime: endTime,
        })
        console.log(this.state.startingTime);
        console.log(this.state.endingTime);
    }


    render() {
        return (
            <View style={styles.container} >
                <Text>Location: </Text>
                <Image />
                <TouchableOpacity onPress={this._showInitialTimePicker}>
                    <Text>Intial date and time : </Text>
                </TouchableOpacity>
                <DateTimePicker
                    mode='time'
                    isVisible={this.state.isInitialTimePickerVisible}
                    onConfirm={this._handleInitialTimePicked}
                    onCancel={this._hideInitialTimePicker}
                />

                <TouchableOpacity onPress={this._showEndTimePicker}>
                    <Text>End Time: </Text>
                </TouchableOpacity>
                <DateTimePicker
                    mode='time'
                    isVisible={this.state.isEndTimePickerVisible}
                    onConfirm={this._handleEndTimePicked}
                    onCancel={this._hideEndTimePicker}
                />

                <Button title="BOOK" onPress={this._saveState}></Button>
            
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // sets top padding to follow status bar 
        paddingTop: Constants.statusBarHeight,
        marginBottom: 0,

    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
        padding: 10,
        alignItems: 'center',

    },
});

