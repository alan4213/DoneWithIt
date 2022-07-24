import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Platform, TouchableOpacity } from 'react-native';
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';
import { Card, Icon } from 'react-native-elements';

const TeacherDashboardScreen = ({ route, navigation }) => {
    const name = route.params.name;
    const email = route.params.email;
    const department = route.params.department;
    const sem = route.params.sem;
    const div = route.params.div;
    console.log('logged in:', name, email, department, sem, div)

    return (

        <View style={styles.container}>


            <View style={{ marginTop: 30 }}>
                <Card >
                    <View>
                        <Card.Title style={{ marginLeft: -180 }}>{'Welcome, ' + name}</Card.Title></View>
                    <View><Card.Image style={{ height: 70, width: 70, marginLeft: 280 }} source={require('../assets/user.png')} />
                    </View>


                </Card></View><View style={{ flexDirection: 'row', marginLeft: 7, marginTop: 50 }}>
                <TouchableOpacity activeOpacity={0.96} onPress={() => navigation.navigate('ViewCertificates')}><Card containerStyle={{ width: 170, height: 170, borderRadius: 15, backgroundColor: 'silver' }}>
                    <Icon
                        name='award' type='font-awesome-5' size={40} />
                    <Card.Title style={{ marginTop: 20, fontSize: 18, color: 'white' }}>Assign Points</Card.Title></Card></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.96} style={{ color: 'white' }}><Card containerStyle={{ width: 170, height: 170, borderRadius: 15, backgroundColor: 'silver' }}>
                    <Icon
                        name='check' type='font-awesome-5' size={40} />
                    <Card.Title style={{ marginTop: 20, fontSize: 18, color: 'white' }}>Resolve Tickets</Card.Title></Card></TouchableOpacity></View>
            <View style={{ flexDirection: 'row', marginLeft: 100, marginTop: 50 }}>
                <TouchableOpacity activeOpacity={0.96} onPress={() => navigation.navigate('StudentListView')}><Card containerStyle={{ width: 170, height: 170, borderRadius: 15, backgroundColor: 'silver' }}>
                    <Icon
                        name='star' type='font-awesome-5' size={45} />
                    <Card.Title style={{ marginTop: 20, fontSize: 18, color: 'white' }}>Student Performance Review</Card.Title></Card></TouchableOpacity>

            </View>
        </View>

    );
}

export default TeacherDashboardScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',

    },
});