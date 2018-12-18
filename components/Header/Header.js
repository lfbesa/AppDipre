import PropTypes from "prop-types";
import React, { Component } from "react";
import { StatusBar, Image, TouchableOpacity } from "react-native";
import {
  Body,
  Header,
  Input,
  Item,
  Right,
  Left,
  Title,
} from "native-base";


import styles from "./styles";
import logoSource from "../../assets/images/logo_sinfondo.png"

export default class CustomHeader extends Component {
  render() {
    return (
      <Header  searchBar rounded style={{
        paddingTop: 10
      }}>
         <Image
            style={{ height: 70 }}
            source={logoSource}
            resizeMode="contain"
          />
        <Body>
          <Title>Orientadores Docentes</Title>
        </Body>
      </Header>
     
    );
  }
}
