import React from 'react';
import { Button, View, Text, Image } from 'react-native'
import { Platform } from 'react-native';
import GenerateForm from 'react-native-form-builder';

import sendQuery from '../../api/sendQuery'
import logoImage from "../../assets/images/logo_sinfondo.png"


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
    headerStyle: {
      marginTop: -15,
    },
  };

  _sendQuery() {
    const formValues = this.formGenerator.getValues();
    if (this._validateEmail(formValues.email) && !(formValues.subject === "")){
      sendQuery(formValues);
      this.formGenerator.resetForm();
      alert("Consulta enviada. Espera la respuesta en tu correo.")
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
          <View>
            <Text style={styles.contact}>
              ¿Tienes consultas?
              También puedes enviarlas a dipre@ing.puc.cl.
              Horario de atención de 9:15-16:00 hrs
            </Text>
          </View>
	    </View>
    );
  }
}