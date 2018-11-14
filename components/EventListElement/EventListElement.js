import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  View,
} from 'react-native';
import { Body, Card, CardItem, Left, Right, Text } from "native-base";
import ReadMore from 'react-native-read-more-text';


//import ExpandableText from "../ExpandableText";

import styles from "./styles";


const MAX_LENGTH = 82;

export default class EventListElement extends Component {
  static propTypes = {
    event: PropTypes.shape({
        id: PropTypes.string,
        epigraph: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.string,
    }),
    selected: PropTypes.bool
  };

  static defaultProps = {
    event: {
      title: "No title",
      description:
        'No hay descripción disponible',
      epigraph: "nn",
      date: "nnn",
    },
    selected: false
  };



  _cardItemHeader = children => (
    <CardItem header button onPress={this.props.onPressItem}>
      {children}
    </CardItem>
  );


  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{color: '#1273DE', marginTop: 5}} onPress={handlePress}>
        Ver más
      </Text>
    );
  }
  _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{color: '#1273DE', marginTop: 5}} onPress={handlePress}>
        Ver menos
      </Text>
    );
  }

  
  _renderLarge = () => {

    return (
      <Card>
        <CardItem>
          <Body style={styles.largeTitleBody}>
            <Text style={styles.largeTitle}>{this.props.event.title}</Text>
          </Body>
        </CardItem>
        {!!this.props.event.description && (
          <CardItem>
            <Body style={styles.largeTextBody}>
              <View style={styles.card}>
                <ReadMore
                  numberOfLines={2}
                  renderTruncatedFooter={this._renderTruncatedFooter}
                  renderRevealedFooter={this._renderRevealedFooter}>
                  <Text style={styles.cardText}>
                    {this.props.event.description}
                  </Text>
                </ReadMore>
              </View>
            </Body>
          </CardItem>
        )}
      </Card>
    );
  };

  _renderSmall = () => (
    <Card>
      <CardItem header button onPress={this.props.onPressItem}>
        <Body style={styles.headerBody}>
          <Text style={styles.headerBodyText}>{this.props.event.title}</Text>
        </Body>
      </CardItem>
    </Card>
  );


  render() {
    return this.props.selected ? this._renderLarge() : this._renderSmall();
  }
}
