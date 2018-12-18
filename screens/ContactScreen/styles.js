import {
  Platform,
  StyleSheet,
} from 'react-native';

import {
  BACKGROUND_COLOR,
  FONT_PRIMARY_COLOR,
  INPUT_BACKGROUND_COLOR,
} from '../../styles/common';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#EDEDED',
  },
  submitButton: {
    margin: 20,
    paddingTop: 10,
    paddingBottom: 10,
    color: 'white',
    display: 'flex',
    textAlign: 'center',
    backgroundColor: '#67B4BA',
    borderRadius: 10,
  },
  buttonSend: {
    backgroundColor: '#4CAF50', 
    color: '#FFFFFF',
    padding: '15px 32px',
    paddingBottom: 20,
    marginBottom: 20,
    textAlign: 'center',
    display: 'flex',
    fontSize: 16,
  },
  stretch: {
    height: 70,
  },
  contact: {
    margin: 40,
    display: 'flex',
    textAlign: 'center',
    alignSelf: 'center',
     fontSize: 10,
  }
});
