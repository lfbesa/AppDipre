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
    marginTop: 150,
  },
  submitButton: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  buttonSend: {
    backgroundColor: '#4CAF50', 
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    display: 'flex',
    fontSize: 16,
  },
});
