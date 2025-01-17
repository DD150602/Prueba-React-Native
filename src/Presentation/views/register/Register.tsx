import React, {useEffect} from 'react'
import { Image, Text, View, ScrollView, ToastAndroid } from 'react-native'
import RoundedButton from '../../components/RoundedButton';
import useViewModel from './ViewModel'
import CustomTextInput from '../../components/CustomTextInput';
import styles from './Styles'



const RegisterScreen = () => {
  const { name, lastname, phone, email, password, confirmPassword, errorMessage, onChange, register } = useViewModel();

  useEffect(()=>{
    if (errorMessage !== ''){
      ToastAndroid.show(errorMessage, ToastAndroid.LONG)
    }
  },[errorMessage])

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/wallpaper.png')}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/user_image.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>REGISTRARSE</Text>

          <CustomTextInput
            image={require('../../../../assets/user.png')}
            placeholder='Nombres'
            value={name}
            keyboardType='default'
            property='name'
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require('../../../../assets/my_user.png')}
            placeholder='Apellidos'
            value={lastname}
            keyboardType='default'
            property='lastname'
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require('../../../../assets/email.png')}
            placeholder='Correo electrónico'
            value={email}
            keyboardType='email-address'
            property='email'
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require('../../../../assets/phone.png')}
            placeholder='Teléfono'
            value={phone}
            keyboardType='numeric'
            property='phone'
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require('../../../../assets/password.png')}
            placeholder='Contraseña'
            value={password}
            keyboardType='default'
            secureTextEntry={true}
            property='password'
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require('../../../../assets/confirm_password.png')}
            placeholder='Confirmar contraseña'
            value={confirmPassword}
            keyboardType='default'
            secureTextEntry={true}
            property='confirmPassword'
            onChangeText={onChange}
          />

          <View style={{ marginTop: 30 }}>
            <RoundedButton text='GUARDAR' onPress={() => register()}/>
          </View>
        </ScrollView>
      </View>
    </View>


  )
}

export default RegisterScreen
