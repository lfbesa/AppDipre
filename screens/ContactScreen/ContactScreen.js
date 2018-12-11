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
    if (this._validateEmail(formValues.email) && !(formValues.subject === "")){
      sendQuery(formValues);
    } else {
      alert('Debes entregar al menos tu correo y un asunto.')
    }
    console.log('FORM VALUES', formValues);
    //sendQuery(formValues);
  }
  _validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
  	return (
  		<View style={styles.wrapper}>
          <GenerateForm
            ref={(c) => {
              this.formGenerator = c;
            }}
            fields={fields}
          />
	        <View style={styles.submitButton}>
	          <Button block onPress={() => this._sendQuery()} title="Enviar">
	            <Text>Enviar</Text>
	          </Button>
	        </View>
	    </View>
    );
  }
}