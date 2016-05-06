import React, {View, Text, StyleSheet, TouchableHighlight} from 'react-native'
import Button from 'react-native-button'
import {Actions} from 'react-native-router-flux'

const MAX_LOCATIONS = 8;
var testLocations = ['Mohawk', 'Cheer up Charlies', 'Barracuda', 'Sidewinder', 'Empire Control Room', "Stubb's"];

export default class CheckinInit extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Are you at?
        </Text>
        { testLocations.map(function(item) {
                return <LocationButton name={item} key={item}/>
            })
        }
      </View>
    );
  }
}

class LocationButton extends React.Component {
  render() {
    return (
      <Button
          onPress={()=>Actions.checkinComplete({venue:this.props.name})}
      >
          {this.props.name}
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});