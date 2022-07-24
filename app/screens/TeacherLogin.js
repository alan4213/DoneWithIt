import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('pointplus1.db');// returns Database object

const TeacherLogin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let loginOnPress = () => {
    console.log("i/p:", email, password);
    if (!email) {
      alert('Please fill Email');
      return;
    }
    if (!password) {
      alert('Please fill password');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM teacher_table where teacher_email = ? AND teacher_password = ?',
        [email, password],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            console.log('found:', res);
            navigation.navigate('TeacherDashboardScreen', { name: res.teacher_name, email: res.teacher_email, department: res.teacher_dept, sem: res.teacher_sem, div: res.teacher_div });

          } else {
            alert('No user found');

          }
          setEmail('');
          setPassword('');
        }
      );
    });

  };


  return (

    <View style={styles.container}>



      <TouchableOpacity>
        <Text style={styles.logo_button}>Point Plus+ </Text>
      </TouchableOpacity>






      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="grey"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>                            Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={loginOnPress}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.logo_button}>--------------</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sign_inBtn}>
        <Text style={styles.loginText}>Sign in With Google</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ marginBottom: 30, marginTop: 20 }}>Dont have an account already? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('TeacherRegistrationScreen')}>
          <Text style={styles.signup_button}>Sign Up </Text>
        </TouchableOpacity></View>




    </View>
  );
}
export default TeacherLogin;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 15,

  },



  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#000000',

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: "#000000",

  },

  signup_button: {
    height: 30,
    marginBottom: 30,
    color: "blue",
    marginTop: 20,
  },

  logo_button: {
    height: 50,
    marginBottom: 50,
    fontSize: 35,
    color: "#000080"


  },

  loginBtn: {
    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#332FD0",
    borderWidth: 3,
    borderColor: '#000000',
  },

  loginText: {

    color: "#ffffff",

  },
  sign_inBtn: {
    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#808080",
    borderWidth: 3,
    borderColor: '#000000',

  },


}



);
