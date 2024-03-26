import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground:{
    width: '100%',
    height: '100%',
  },
  form: {
      width: '100%',
      height: '40%',
      backgroundColor: 'white',
      position: 'absolute',
      bottom: 0,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      padding: 30,
  },
  formText: {
      fontWeight: 'bold',
      fontSize: 16,
  },
  formRegister: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30,
  },

  formRegisterText: {
      fontStyle: 'italic',
      color: 'orange',
      borderBottomWidth: 1,
      borderBottomColor: 'orange',
      fontWeight: 'bold',
      marginLeft: 10,
  },
  logoContainer: {
      position: 'absolute',
      alignSelf: 'center',
      top: '15%',
      alignItems: 'center',
  },
  logoImage: {
      width: 100,
      height: 100,
  },
  logoText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      marginTop: 10,
      fontWeight: 'bold',
  }
});

export default HomeStyles