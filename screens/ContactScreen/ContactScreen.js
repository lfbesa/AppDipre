import React from 'react';
import { Button, View, Text } from 'react-native'
import { Platform } from 'react-native';
import GenerateForm from 'react-native-form-builder';

import sendQuery from '../../api/sendQuery'


import styles from "./styles";

const fields = [
  {
    type: 'email',
    name: 'email',
    required: true,
    icon: 'ios-person',
    label: 'Email donde responder',
  },
  {
    type: 'text',
    name: 'subject',
    icon: Platform.OS === 'ios'
          ? `ios-mail`
          : 'md-mail',
    required: true,
    label: 'Asunto',
  },
  {
    type: 'text',
    name: 'body',
    icon: 'md-list',
    label: 'Cuerpo de la consulta',
    required: true,
    props: {
    	multiline: true
    }
  },
];


export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Contáctanos',
  };

  _sendQuery() {
    const formValues = this.formGenerator.getValues();
    console.log('FORM VALUES', formValues);
    sendQuery(formValues);
  }

  render() {
  	return (
  		<View style={styles.wrapper}>
	        <View>
	          <GenerateForm
	            ref={(c) => {
	              this.formGenerator = c;
	            }}
	            fields={fields}
	          />
	        </View>
	        <View style={styles.submitButton}>
	          <Button block onPress={() => this._sendQuery()} title="Enviar">
	            <Text>Enviar</Text>
	          </Button>
	        </View>
	    </View>
    );
  }
}