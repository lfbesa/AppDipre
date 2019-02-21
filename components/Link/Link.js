import React from 'react';
import { View, Linking, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';
import styles from "./styles";


export default class Link extends React.Component {

  _openurl = url => {
    if (!(url.includes("http"))){
      Linking.openURL("http://".concat(url))
    } else {
      Linking.openURL(url);
    }
  };

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
      //urlToImage,
      url
    } = this.props.article;
    const { noteStyle, featuredTitleStyle } = styles;
    const defaultImg =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAFVBMVEUZGRna18308+8AAADq6urp5+H+/v8sRrjgAAABG0lEQVR4nO3PgQ2CQBRAMUTu9h9ZiMYd3k+7QY/XdMdrnZOte3jua659PsPrPdf1Gx5TGfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2/YdzfYf7mms/w3VOtu7hdB9snCJ9ivKkowAAAABJRU5ErkJggg==';

    return (
      <TouchablePlatformSpecific style={touchableStyle}
        useForeground
        onPress={() => this._openurl(url)}
      >
        <Card
          featuredTitle={title}
          featuredTitleStyle={featuredTitleStyle}
          image={{
            uri: defaultImg
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            {description.concat("\nIr al sitio...") || 'Leer más'}
          </Text>
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={noteStyle}>{url.toUpperCase()}</Text>
          </View>
        </Card>
      </TouchablePlatformSpecific>
    );
  }
}
