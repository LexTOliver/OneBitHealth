import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    padding: 32,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
  },
  form: {
    flex: 1,
    height: 'auto',
    alignItems: 'center',
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