import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from "./styles";
import { MonoText } from '../../components/StyledText';
import  EventList  from '../../components/EventList';
import getEvents from '../../api/getEvents'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Eventos'
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      refreshing: false,
      events: [],
      errorText: ""
    };
    this.data = [];
  }

  componentDidMount() {
    this._loadEvents();
  }

  _loadEvents = async () => {
    this.setState(
      {
        loading: true,
        error: false,
      },
      () => {
        getEvents()
          .then(eventsList => {
            this._saveEventsList(eventsList);
            })
          .catch(e => {
            this._errorEvents();
          });
      }
    );
  };

  _saveEventsList(eventsList) {
    this.setState({
      events: eventsList,
      error: false,
      errorText: "",
      loading: false,
      refreshing: false
    });
    console.log("bb");
    this.data = eventsList;
  }

  _errorEvents() {
    alert(
      "¡Atención!",
      "No hay eventos para mostrar"
    );

    this.setState({
      events: [],
      loading: false,
      error: true,
      errorText: "Hubo un error descargando la información."
    });
  }

  _refresh = async () => {
    console.log("refreshing");
    this.setState({ refreshing: true, error: false, loading: false }, () => {
      getEvents()
        .then(eventList => {
          this._saveEventsList(eventList);
        })
        .catch(_ => this._errorEvents());
    });
    //console.log(this.state.refreshing);
  };

  render() {
    return (
      <View style={styles.container}>
        <EventList
          refreshing={this.state.refreshing}
          error={this.state.error}
          errorText={this.state.errorText}
          onRefresh={this._refresh}
          eventList={this.state.events}
        />
      </View>
    );
  }
}
