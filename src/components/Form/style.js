import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    padding: 32,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
  },
  form: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
  },
  formButton: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#FF0043',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    padding: 10
  },
  formTextButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  exhibitResultImc: {
    flex: 1,
  },
  listImcContainer: {
    width: '100%',
    borderTopWidth: 0.5,
    borderColor: '#0F0F0F',
    padding: 8,
  },
  listImcItem: {
    alignSelf: 'auto',
    borderBottomWidth: 0.5,
    borderColor: '#FF0043',
    padding: 8, 
  },
  listImcText: {
    color: '#FF0043',
    fontSize: 16,
  },
});

export default styles;