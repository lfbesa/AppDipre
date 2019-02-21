import React from 'react';
import { ScrollView, StyleSheet, FlatList, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Link from '../../components/Link';
import getLinks from '../../api/getLinks'


import styles from "./styles";


export default class NewsScreen extends React.Component {
  static navigationOptions = {
    title: 'Links útiles',
    headerStyle: {
      marginTop: -15,
    },
    headerTitleStyle: {
      textAlign: 'center',
    },
  };
  constructor(props) {
    super(props);
    this.state = { links: [], refreshing: true };
    this.fetchLinks = this.fetchLinks.bind(this);
  }
  // Called after a component is mounted
  componentDidMount() {
    this.fetchLinks();
   }

  fetchLinks() {
    getLinks()
      .then(links => this.setState({ links, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
    },
      () => this.fetchLinks()
    );
  }

  render() {
    return (
      <View style={styles.container} >
        <FlatList
          data={this.state.links}
          renderItem={({ item }) => <Link article={item} />}
          keyExtractor={item => item.url}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh.bind(this)}
        />
      </View>
  );
  }
}
