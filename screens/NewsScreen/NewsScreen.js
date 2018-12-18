import React from 'react';
import { ScrollView, StyleSheet, FlatList, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Article from '../../components/Article';
import getNews from '../../api/getNews'


import styles from "./styles";


export default class NewsScreen extends React.Component {
  static navigationOptions = {
    title: 'Noticias',
    headerStyle: {
      marginTop: -15,
    },
  };
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }
  // Called after a component is mounted
  componentDidMount() {
    this.fetchNews();
   }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
    },
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <View style={styles.container} >
        <FlatList
          data={this.state.articles}
          renderItem={({ item }) => <Article article={item} />}
          keyExtractor={item => item.title}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh.bind(this)}
        />
      </View>
  );
  }
}
