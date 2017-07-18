import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity, Image, AppRegistry, Alert, Text, View, Button, TextInput, NavigatorIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/myStyles';
import { findEvents } from './utils/TicketMasterService';

class EventsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder',
      data: {}
    };
    this._onPressButton = this._onPressButton.bind(this);
  }

  componentDidMount() {
    findEvents('22180').then(data => {
      this.setState({
        data: data
      })
    });
    
  }

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  static navigationOptions = {
    title: 'Events',
  };
  render() {
    return (
      <View>
        <ScrollView>
          <TouchableOpacity onPress={this._onPressButton} underlayColor='white' >
            <Image
              source={require('./../imgs/coffee.jpg')}
              style={[styles.centerBlock, styles.backdrop]}
            >
              <View style={styles.backdropView}>
                <Text style={[styles.headline]}>Morning Coffee</Text>
              </View>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPressButton} underlayColor='white' >
            <Image
              source={require('./../imgs/beer.jpg')}
              style={styles.centerBlock}
            >
              <View style={styles.backdropView}>
                <Text style={[styles.headline]}>Happy Hour</Text>
              </View>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPressButton} underlayColor='white' >
            <Image
              source={require('./../imgs/burger.jpg')}
              style={styles.centerBlock}
            >
              <View style={styles.backdropView}>
                <Text style={[styles.headline]}>Burgers</Text>
              </View>
            </Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPressButton} underlayColor='white' >
            <Image
              source={require('./../imgs/pong.jpg')}
              style={styles.centerBlock}
            >
              <View style={styles.backdropView}>
                <Text style={[styles.headline]}>Pong</Text>
              </View>
            </Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPressButton} underlayColor='white' >
            <Image
              source={require('./../imgs/billiards.jpg')}
              style={styles.centerBlock}
            >
              <View style={styles.backdropView}>
                <Text style={[styles.headline]}>Billiards</Text>
              </View>
            </Image>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={[styles.headingOne, {textAlign: 'center', paddingTop: '13%'}]}>Hello, Ronald!</Text>
        <Image
          source={require('./../imgs/ronald.jpg')}
          resizeMode='cover'
          style={[styles.centerBlock, {borderRadius: 20}]}
        />
        <Button
          onPress={() => navigate('Event')}
          title="Go"
        />
      </View>
    );
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Event: { screen: EventsPage },
});

AppRegistry.registerComponent('App', () => App);

export default App;
