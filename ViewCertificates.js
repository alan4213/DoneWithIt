import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    TextInput,
    FlatList
} from 'react-native';

/*import * as SQLite from 'expo-sqlite';
//const db = SQLite.openDatabase('db.testDb');// returns Database object
const db = SQLite.openDatabase('pointplus1.db');// returns Database object*/

const ViewCertificates = ({ route, navigation }) => {
    /*const sid = route.params.sid;
    const sname = route.params.sname;
    const tid = route.params.tid;
    const tname = route.params.tname;

    const [data, setData] = useState([]);
    useEffect(() => {

        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM certificate_table where student_ref = ?',
                [sid],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i) {
                        console.log("reading: ", i);
                        temp.push(results.rows.item(i));
                    }
                    console.log(temp);
                    setData(temp);
                }
            );
        });


    }, []);*/
const data=[{certificate_name:'abc',
certificate_date:'dcc',
certificate_points:10,
certificate_uri:"https://media.istockphoto.com/vectors/elegant-blue-and-gold-diploma-certificate-template-vector-id1128426035?k=20&m=1128426035&s=612x612&w=0&h=IRbCMn_Ueo36GgkQJxxsvsmMdp4JII73KZabuvhJY64=",

},
{certificate_name:'efg',
certificate_date:'fffffff',
certificate_points:10,
certificate_uri:"https://media.istockphoto.com/vectors/elegant-blue-and-gold-diploma-certificate-template-vector-id1128426035?k=20&m=1128426035&s=612x612&w=0&h=IRbCMn_Ueo36GgkQJxxsvsmMdp4JII73KZabuvhJY64=",

},


]
    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.inputContainer}>
                    <Text style={styles.headertxt}>"'s certificates"</Text>
                </View>

                <FlatList
                    style={styles.notificationList}
                    data={data}
                    scrollEnabled={false}
                    keyExtractor={(item) => {
                        return item.certificate_id;
                    }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={[styles.card, { borderColor: '#00bfff' }]}
                                onPress={() => { navigation.navigate('CertificateDetails', { certificate: item }) }}>
                                <View style={styles.cardContent}>
                                    <Image style={[styles.image, styles.imageContent]} source={{ uri: item.certificate_uri }} />
                                    <Text style={styles.name}>{item.certificate_name}</Text>
                                </View>
                                <View style={[styles.cardContent, styles.tagsContent]}>
                                    <Text style={styles.btnColor}>{item.certificate_date}</Text>
                                    <Text style={styles.btnColor1}>{'+ ' + item.certificate_points}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
            </View>
        </ScrollView>
    )
}
export default ViewCertificates;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    formContent: {
        flexDirection: 'row',
        marginTop: 30,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        margin: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    iconBtnSearch: {
        alignSelf: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        marginLeft: 15,
        justifyContent: 'center'
    },
    notificationList: {
        marginTop: 20,
        padding: 10,
    },
    card: {
        borderRadius: 8,
        height: null,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        backgroundColor: '#FEFBF6',
        flexDirection: 'column',
        borderTopWidth: 40,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 4,
    },
    cardContent: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    imageContent: {
        marginTop: -40,
    },
    tagsContent: {
        marginTop: 10,
        flexWrap: 'wrap'
    },
    image: {
        width: 100,
        height: 80,
        borderRadius: 0,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: -20,
        alignSelf: 'center'
    },
    btnColor: {
        padding: 10,
        fontWeight: 'bold',
        marginHorizontal: 3,

        marginTop: 5,
    },
    btnColor1: {
        padding: 10,
        fontWeight: 'bold',
        marginHorizontal: 3,
        backgroundColor: '#C6EBC9',
        marginTop: 5,
        marginLeft: 210,
        marginBottom: 10,
        borderRadius: 15,
        width: 50,

    },
    headertxt: {
        borderRadius: 8,
        height: 80,
        paddingTop: 30,
        textAlign: 'center',
        paddingBottom: 10,
        marginTop: 5,
        width: '100%',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        backgroundColor: '#C6EBC9',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 4,
    },
});  