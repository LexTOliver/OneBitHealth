import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  formContext: {
    width: '100%',
    height: '100%',
    bottom: 0,
    padding: 32,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
  },
  form: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
  },
  formLabel: {
    width: '100%',
    color: '#000',
    fontSize: 20,
  },
  formInput: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#FF0043',
    marginVertical: 8,
    padding: 10,
    fontSize: 16
  },
  formButton: {
    borderRadius: 8,
    backgroundColor: '#FF0043',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
    padding: 10
  },
  formTextButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default styles;