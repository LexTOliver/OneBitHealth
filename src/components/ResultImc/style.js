import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  resultContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 16,
  },
  resultInfo: {
    fontSize: 18,
    color: '#FF0043',
  },
  resultNumber: {
    fontSize: 48,
    color: '#FF0043',
    fontWeight: 'bold',
    paddingTop: 16,
    paddingBottom: 20,
  },
  shareButton: {
    borderRadius: 32,
    backgroundColor: '#1877F2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  shareTextButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default styles;