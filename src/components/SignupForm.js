import React, { useState } from 'react';
import { StyleSheet,
    ImageBackground, 
    Image,
    Text, 
    View,
    TextInput,
    TouchableOpacity,
   } from 'react-native';
   import { useNavigation } from '@react-navigation/native';

  export default function SignupForm() {
    const navigation = useNavigation();

    const [check, setcheck] = useState(false);
    const [check1, setcheck1] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOnChange = (value, setter) => {
      setter(value);
    };
    const handleSignup = async () => {
      const userData = {
        name,
        email,
        password,
      };

      try {
        const response = await fetch('https://6410c403da042ca131fb737e.mockapi.io/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (response.status === 201) {
          Alert.alert("Success", "Register successfully! let's login", [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('Login');
              },
            },
          ]);
        } else {
          Alert.alert('Error', 'Register Failed. Please check information.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const toggleCheckbox1 = () => {
        setcheck(!check);
    };

    const toggleCheckbox2 = () => {
        setcheck1(!check1);
    };

    return (
      <ImageBackground source={require('../assets/Profiles/background-profiles.png')} style={styles.imageBackground}>
        <View style={styles.image}>
          <Image source={require('../assets/Profiles/DIDFOOD.png')}></Image>
        </View>
        <View style={styles.form}>
          <Text style={styles.tittle}>Sign Up For Free</Text>
          <View style={styles.textInput}>
            <TextInput
                style={styles.input} 
                placeholder="Name" 
                value={name}
                onChangeText={text => handleOnChange(text, setName)}
            />
            <TextInput
                style={styles.input} 
                placeholder="Email" 
                value={email}
                onChangeText={text => handleOnChange(text, setEmail)}
            />
            <TextInput
                style={styles.input} 
                placeholder="Password" 
                value={password}
                onChangeText={text => handleOnChange(text, setPassword)}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.group}>
                <TouchableOpacity
                    style={[styles.checkbox, check ? styles.checked : styles.unchecked]}
                    onPress={toggleCheckbox1}
                >
                    {check && (
                    <Text style={styles.checkmark}>&#10003;</Text> 
                    )}
                </TouchableOpacity>
                <Text style={styles.nameCheckbox}>Keep Me Signed In</Text>
            </View>
            <View style={styles.group}>
                <TouchableOpacity
                    style={[styles.checkbox, check1 ? styles.checked : styles.unchecked]}
                    onPress={toggleCheckbox2}
                >
                    {check1 && (
                    <Text style={styles.checkmark}>&#10003;</Text>
                    )}
                </TouchableOpacity>
                <Text style={styles.nameCheckbox}>Email Me About SpecialPricing</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btnLogin}>
              <Text style={styles.textbtn} onPress={handleSignup}>Create Account</Text>
            </TouchableOpacity>
            <Text style={styles.hyperlink} onPress={() => {navigation.navigate('Login')}}>Already have an account ?</Text>
          </View>
        </View>
      </ImageBackground>
    )
  }
  
  const styles = StyleSheet.create({
    imageBackground :  {
      flex: 1,
    },
    image: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    tittle: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign:'center',
    },
    form: {
      flex: 3,
      marginTop: 20,
      marginHorizontal: 20,
    },
    textInput: {
      margin: 20,
    },
    input: {
      marginTop: 20,
      maxHeight: 60,
      paddingVertical: 20,
      fontSize: 15,
      color: "#000",
      paddingLeft: 40,
      borderWidth: 0.5,
      borderRadius: 15,
      borderColor: '#F4F4F4',
      backgroundColor: '#FFF',
      shadowColor: '#5A6CEA',
      shadowOffset: {
          width: 12,
          height: 26,
        },
      shadowRadius: 50,
      shadowOpacity: 0.07,
      elevation: 3,
    },
    orContinue: {
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: -20,
    },
    social: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 30,
      marginRight: 30,
    },
    socialButton: {
      flex: 1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 10,
      borderWidth: 0.5,
      borderRadius: 15,    
      margin: 10,
    },
    socialButtonText: {
      color: '#000',
      paddingLeft: 10,
    },
    btn: {
      marginTop: 20,
      alignItems: 'center',
    },
    btnLogin: {
      alignItems: 'center',
      backgroundColor: 'blue',
      padding: 15,
      width: 180,
      borderRadius: 15,
    },
    textbtn: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#fff'
    },
    forgotPassword: {
      color: 'blue',
      textAlign:'center',
    },

    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 20,
      },
      group: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      checkbox: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
      },
      checked: {
        backgroundColor: '#007AFF', 
      },
      unchecked: {
        backgroundColor: '#FFF',
      },
      checkmark: {
        color: '#FFF', 
        fontSize: 18,
      },
      nameCheckbox: {
        marginLeft: 10,
        color: '#22242E',
        fontSize: 14,
    },
    hyperlink: {
        marginTop:10,
        fontWeight: 'bold',
        fontSize: 14,
        color: 'blue',
        textDecorationLine: 'underline',
    },
})