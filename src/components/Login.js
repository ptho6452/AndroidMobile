
import React, { useEffect, useState } from 'react';
import { StyleSheet,
    ImageBackground, 
    Image,
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    Alert,
   } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
  
export default function LoginForm() {
    const navigation = useNavigation();
    const [users, setUser] = useState([]);

    useEffect(() => {
      const getUser = async () => {
        try {
          const data = await fetch('https://6541aa53f0b8287df1fe9f7e.mockapi.io/restaurant/1/Users', { method: 'GET' });
          const user = await data.json();
          console.log(user); // Log the user variable to check its structure
          setUser(user);
        } catch (error) {
          console.error('Error:', error);
        }
      };
      getUser();
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
      if (Array.isArray(users) && users.length > 0) {
        const user = users.find((user) => user.email === email && user.password === password);
        if (user) {
          Alert.alert('Login Successfully');
          navigation.navigate('Navigation');
        } else {
          Alert.alert('Error', 'Login failed. Please check information.');
        }
      } else {
        Alert.alert('Error', 'No user data found. Please try again later.');
      }
    };
    return (
      <ImageBackground source={require('../assets/Profiles/background-profiles.png')} style={styles.imageBackground}>
        <View style={styles.image}>
        <Image source={{ uri: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo%2C-hotel-logo-design-template-00f9be74854d2ccf01ff3005cd3041ee_screen.jpg?ts=1665425217" }} style={{ width: 200, height: 200 }} />     
        </View>
        <View style={styles.form}>
          <Text style={styles.tittle}>Login To Your Account</Text>
          <View style={styles.textInput}>
            <TextInput
                style={styles.input} 
                placeholder="email" 
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input} 
                placeholder="password" 
                onChangeText={text => setPassword(text)}
                value={password}
            />
          </View>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.newAccount} onPress={() => navigation.navigate('Signup')}>Don't have an account ?</Text>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btnLogin}  onPress={handleLogin}>
              <Text style={styles.textbtn}>Login</Text>
            </TouchableOpacity>
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
      flex: 2,
      marginTop: 20,
      marginHorizontal: 20,},
textInput: {
  margin: 20,
},

btn: {
  marginTop: 20,
  alignItems: 'center',
},
btnLogin: {
  alignItems: 'center',
  backgroundColor: 'blue',
  padding: 15,
  width: 150,
  borderRadius: 15,
},
textbtn: {
  fontWeight: 'bold',
  fontSize: 20,
  color: '#fff'
},
newAccount: {
  color: 'blue',
  textAlign:'center',
  fontSize: 15,
  textDecorationLine: 'underline',
},
forgotPassword: {
    padding: 10,
    color: 'blue',
    fontWeight:'bold',
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
}
})