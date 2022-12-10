import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
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
    padding: 12
  },
  shareTextButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default styles;