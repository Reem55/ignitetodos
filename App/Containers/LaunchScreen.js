import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TextInput, Button, StyleSheet } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {

      state = {
        request: {
          first_name:'',
          last_name:'',
          email:'',
          subject:'',
          description:'',
        }
      };
  render () {
    return (
        <View>
          <TextInput
            placeholder='First Name....'
            inputStyle={inputs.constraints}
            onChange={(event) => { this.handleInput('first_name', event.nativeEvent.text)}}
          />
          <TextInput
            placeholder='Last Name....'
            inputStyle={inputs.constraints}
            onChange={(event) => { this.handleInput('last_name', event.nativeEvent.text)}}

          />
          <TextInput
            placeholder='Email....'
            inputStyle={inputs.constraints}
            onChange={(event) => { this.handleInput('email', event.nativeEvent.text)}}

          />
          <TextInput
            placeholder='Subject....'
            inputStyle={inputs.constraints}
            onChange={(event) => { this.handleInput('subject', event.nativeEvent.text)}}

          />
          <TextInput
            placeholder='Description....'
            inputStyle={inputs.constraints}
            onChange={(event) => { this.handleInput('description', event.nativeEvent.text)}}

          />
          <Button
            title='Done'
            buttonStyle={{
              width: 200,
              height:30,
              backgroundColor:'#C71585',
              marginTop: 10,
              marginBottom: 10,
              borderRadius: 25
            }}
            onPress={() => {}}
          />

        </View>
      );
    }
  }

  const inputs = StyleSheet.create({
    constraints: {
      paddingTop:50,
      //    paddingBottom:5,
      marginTop: 50,
      marginBottom: 50
    }
  });
