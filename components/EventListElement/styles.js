import { Platform, StyleSheet, Dimensions } from 'react-native';


const { width } = Dimensions.get('window');
const largeThumbnailWidth = width - (5);

const commonThumbnail = {
  flex: 1,
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  paddingLeft: 5,
  paddingBottom: 5,
};

export default StyleSheet.create({
  largeThumbnail: {
    ...commonThumbnail,
    width: largeThumbnailWidth,
    height: largeThumbnailWidth * (9 / 16),
  },
  largeTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  largeTitleBody: {
    alignItems: 'center',
    marginVertical: 5,
  },
  largeTextBody: {
    marginHorizontal: 10,
  },
  largeButtonLeft: {
    marginLeft: 5,
  },
  largeButtonRight: {
    marginRight: 5,
  }, 
  smallThumbnail: {
    ...commonThumbnail,
    height: 103,
    width: 184,
    alignSelf: 'stretch',
  },
  headerBody: {
    flex: 1,
    justifyContent: 'center',
    padding: 10 + 5,
    paddingVertical: 10 + 5,
  },
  headerBodyText: {
    marginLeft: 15,
    fontSize: 20,
    fontWeight: Platform.OS === 'ios' ? '600' : '500',
  },
  card: {
    marginHorizontal: 1,
    padding: 10,
    borderRadius: 3,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  cardText: {
    fontSize: 14,
  },
});
