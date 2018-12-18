import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  View,
  Linking,
} from 'react-native';
import { Body, Card, CardItem, Left, Right, Text } from "native-base";
import ReadMore from 'react-native-read-more-text';
import { Divider } from 'react-native-elements';



//import ExpandableText from "../ExpandableText";

import styles from "./styles";


const MAX_LENGTH = 82;

export default class EventListElement extends Component {
  static propTypes = {
    event: PropTypes.shape({
        id: PropTypes.number,
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
    if (this.props.event.to_date){
      return (
        <Card>
          <CardItem>
            <Text >{this.props.event.epigraph}</Text>
          </CardItem>
          <CardItem>
            <Body style={styles.largeTitleBody}>
              <Text style={styles.largeTitle}>{this.props.event.title}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body style={styles.largeTitleBody}>
              <Text style={styles.largeTextBody}>Del {this.props.event.date} al {this.props.event.to_date}</Text>
            </Body>
          </CardItem>
          {!!this.props.event.description && (
            <CardItem>
              <Body style={styles.largeTextBody}>
                
                  <ReadMore
                    numberOfLines={2}
                    renderTruncatedFooter={this._renderTruncatedFooter}
                    renderRevealedFooter={this._renderRevealedFooter}>
                    <Text style={styles.cardText}>
                      {this.props.event.description}
                    </Text>
                  </ReadMore>
              </Body>
            </CardItem>
          )}
          <CardItem>
              <Text>
                {this.props.event.hour}
              </Text>
          </CardItem>
          {!!this.props.event.url && (
            <CardItem>
              <Text style={{color: '#1273DE', marginTop: 5}} onPress={() => Linking.openURL(this.props.event.url)}>
                Ir al sitio
              </Text>
            </CardItem>
          )}
        </Card>
      );
    } else {
      return (
        <Card>
          <CardItem>
            <Text >{this.props.event.epigraph}</Text>
          </CardItem>
          <CardItem>
            <Body style={styles.largeTitleBody}>
              <Text style={styles.largeTitle}>{this.props.event.title}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body style={styles.largeTitleBody}>
              <Text style={styles.largeTextBody}>{this.props.event.date}</Text>
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
          <CardItem>
              <Text>
                {this.props.event.hour}
              </Text>
          </CardItem>
          {!!this.props.event.url && (
            <CardItem>
              <Text style={{color: '#1273DE', marginTop: 5}} onPress={() => Linking.openURL(this.props.event.url)}>
                Ir al sitio
              </Text>
            </CardItem>
          )}
        </Card>
      );
    }
  };

  _renderSmall = () => {
    if (this.props.event.to_date){
      return (
        <Card>
          <CardItem header button onPress={this.props.onPressItem} style={{backgroundColor: '#FDD805'}}>
            <Body style={styles.headerBody}>
              <Text style={styles.headerBodyText}>{this.props.event.title}</Text> 
              <Divider style={{ backgroundColor: 'blue' }} />
              <Text style={styles.largeTextBody}>Del {this.props.event.date} al {this.props.event.to_date}</Text>
            </Body>
          </CardItem>
        </Card>
      );
    } else {
      return (
        <Card>
          <CardItem header button onPress={this.props.onPressItem} style={{backgroundColor: '#FDD805'}}>
            <Body style={styles.headerBody}>
              <Text style={styles.headerBodyText}>{this.props.event.title}</Text> 
              <Divider style={{ backgroundColor: 'blue' }} />
              <Text style={styles.largeTextBody}>{this.props.event.date}</Text>
            </Body>
          </CardItem>
        </Card>
      );
    }
  };


  render() {
    return this.props.selected ? this._renderLarge() : this._renderSmall();
  }
}
