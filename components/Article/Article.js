import React from 'react';
import { View, Linking, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';
import styles from "./styles";


export default class Article extends React.Component {

  render() {
    let TouchablePlatformSpecific = Platform.OS === 'ios' ? 
        TouchableOpacity : 
        TouchableNativeFeedback;

    let touchableStyle = Platform.OS === 'ios' ? 
        styles.iosTouchable : 
        styles.androidTouchable
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url
    } = this.props.article;
    const { noteStyle, featuredTitleStyle } = styles;
    const time = moment(publishedAt || moment.now()).fromNow();
    const defaultImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

    return (
      <TouchablePlatformSpecific style={touchableStyle}
        useForeground
        onPress={() => Linking.openURL(url)}
      >
        <Card
          featuredTitle={title}
          featuredTitleStyle={featuredTitleStyle}
          image={{
            uri: urlToImage || defaultImg
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            {description.substring(0,120).concat("...\nRead more...") || 'Read More'}
          </Text>
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={noteStyle}>{source.toUpperCase()}</Text>
            <Text style={noteStyle}>{time}</Text>
          </View>
        </Card>
      </TouchablePlatformSpecific>
    );
  }
}
