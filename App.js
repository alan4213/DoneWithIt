import * as React from 'react';
import { Button, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from './app/screens/RegistrationScreen';
import LoginScreen from './app/screens/LoginScreen';
import StudentDashboard from './app/screens/StudentDashboard';
import TeacherDashboardScreen from './app/screens/TeacherDashboardScreen';
import EnterDetails from './app/screens/EnterDetails';
import TeacherLogin from './app/screens/TeacherLogin';
import TeacherRegistrationScreen from './app/screens/TeacherRegistrationScreen';
import ViewCertificates from './app/screens/ViewCertificates';
import ViewActivityPoints from './app/screens/ViewActivityPoints';
//import HomeScreen from './app/screens/HomeScreen';
import ImageSelector from './app/screens/ImageSelector';
import BarCodeScanner from './app/screens/BarCodeScanner';
import CertificateDetails from './app/screens/CertificateDetails';
import StudentListView from './app/screens/StudentListView';

import { Alert } from 'react-native';
import { useEffect } from 'react';
import * as SQLite from 'expo-sqlite';
//const db = SQLite.openDatabase('db.testDb');// returns Database object
const db = SQLite.openDatabase('pointplus1.db');// returns Database object

function HomeScreen({ navigation }) {

  useEffect(() => {

    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT * FROM sqlite_master WHERE type='table' AND name='teacher_table'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS teacher_table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS teacher_table(teacher_id INTEGER PRIMARY KEY AUTOINCREMENT, teacher_name VARCHAR(20), teacher_dept VARCHAR(20), teacher_sem VARCHAR(10), teacher_div VARCHAR(10), teacher_email VARCHAR(30), teacher_password VARCHAR(20))',
              []
            );
          }
        }
      );
    });

    console.log("----- Teacher Data------")
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM teacher_table',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            console.log("reading: ", i);
            temp.push(results.rows.item(i));
          }
          console.log(temp);
        }
      );
    });

    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT * FROM sqlite_master WHERE type='table' AND name='student_table'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS student_table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS student_table(student_id INTEGER PRIMARY KEY AUTOINCREMENT, student_name VARCHAR(20), student_dept VARCHAR(20), student_sem VARCHAR(10), student_div VARCHAR(10), student_email VARCHAR(30), student_password VARCHAR(20), student_points INTEGER(4))',
              []
            );
          }
        }
      );
    });

    console.log("----- Student Data------")
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM student_table',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            console.log("reading: ", i);
            temp.push(results.rows.item(i));
          }
          console.log(temp);
        }
      );
    });

    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT * FROM sqlite_master WHERE type='table' AND name='certificate_table'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS certificate_table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS certificate_table(certificate_id INTEGER PRIMARY KEY AUTOINCREMENT, student_ref INTEGER REFERENCES student_table(student_id), teacher_ref INTEGER REFERENCES teacher_table(teacher_id), certificate_name VARCHAR(30), certificate_uri VARCHAR(250), certificate_venue VARCHAR(30), certificate_days VARCHAR(10), certificate_date VARCHAR(50), certificate_type VARCHAR(50), certificate_subtype VARCHAR(50), certificate_status VARCHAR(10), certificate_points INTEGER(4))',
              []
            );
          }
        }
      );
    });
    console.log("----- Certificate Data------")
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM certificate_table',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            console.log("reading: ", i);
            temp.push(results.rows.item(i));
          }
          console.log(temp);
        }
      );
    });

  }, []);


  return (
    <View >

      <Text style={{ fontSize: 36, marginTop: 100, marginLeft: 100 }}>Point Plus+</Text>
      <View style={{ flexDirection: 'row', marginTop: 300, marginLeft: 50 }}><Button style={{ marginLeft: 100 }}
        title="Login as Teacher"
        onPress={() => navigation.navigate('TeacherLogin')}
      /><View style={{ width: 20, height: 20 }} />
        <Button style={{ marginLeft: 10 }}
          title="Login as Student"
          onPress={() => navigation.navigate('Login')}
        /></View>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Point Plus" component={HomeScreen} options={{
            title: '',

            headerShown: false,


            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TeacherLogin" component={TeacherLogin} />
        <Stack.Screen name="Register" component={RegistrationScreen} />
        <Stack.Screen name="TeacherRegistrationScreen" component={TeacherRegistrationScreen} />
        <Stack.Screen name="TeacherDashboardScreen" component={TeacherDashboardScreen} />
        <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
        <Stack.Screen name="EnterDetails" component={EnterDetails} />
        <Stack.Screen name="ViewActivityPoints" component={ViewActivityPoints} />
        <Stack.Screen name="ImageSelector" component={ImageSelector} />
        <Stack.Screen name="BarCodeScanner" component={BarCodeScanner} />
        <Stack.Screen name="ViewCertificates" component={ViewCertificates} />
        <Stack.Screen name="CertificateDetails" component={CertificateDetails} />
        <Stack.Screen name="StudentListView" component={StudentListView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;