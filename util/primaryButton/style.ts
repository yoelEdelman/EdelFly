import {StyleSheet} from 'react-native';
import {PRIMARY, BLACK} from '../colors';

const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: PRIMARY,
        borderRadius: 30,
        paddingHorizontal: 50,
        alignSelf: 'center',
        flexDirection:"row",
        paddingVertical: 20,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
      },
      appButtonText: {
        fontSize: 18,
        color: BLACK,
        alignSelf: 'center',
        textAlign: 'center',
      },
});


export default styles;