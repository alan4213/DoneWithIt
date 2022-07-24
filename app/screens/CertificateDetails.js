import React from "react";
import {
    View,
    Text,
    Input,
    SafeAreaView, Modal, Pressable, Alert,
    Keyboard,
    ScrollView,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Platform, Image
} from 'react-native';
import { Card, Button, Title, Paragraph } from 'react-native-paper';
//import Icon from 'react-native-vector-icons/FontAwesome5';
import Unorderedlist from 'react-native-unordered-list';

const CertificateDetails = ({ route, navigation }) => {
    const certificate = route.params.certificate;
    console.log(certificate);

    return (
        <View>
            <ScrollView>
                <Card style={Styles.text}>

                    <Card.Cover source={{ uri: certificate.certificate_uri }} />

                </Card>
                <Card style={Styles.container}>
                    <Card.Content>
                        <Paragraph style={Styles.bg}>Name: {" " + certificate.certificate_name} </Paragraph>
                        <Paragraph style={Styles.bg}>Date:  {" " + certificate.certificate_date}</Paragraph>
                        <Paragraph style={Styles.bg}>Venue:  {" " + certificate.certificate_venue}</Paragraph>
                        <Paragraph style={Styles.bg}>Duration:  {" " + certificate.certificate_days + " days"}</Paragraph>
                        <Paragraph style={Styles.bg1}>
                            <Text>Activity Type:</Text>
                            <Text>{'\n -  '}{certificate.certificate_type}</Text>
                            <Text>{'\n ->  '}{certificate.certificate_subtype}</Text>
                        </Paragraph>
                        <Paragraph style={Styles.bg2}>Points Awarded :  {" " + certificate.certificate_points}</Paragraph>


                    </Card.Content>

                </Card>

                <Button style={Styles.raise}>Raise A Ticket</Button>
            </ScrollView>
        </View>
    )
}
export default CertificateDetails;

const Styles = StyleSheet.create({
    container: {
        alignContent: 'center',

    },
    bg: {
        backgroundColor: '#FEFBF6',
        borderRadius: 5,
        width: 350,
        height: 30,
        marginTop: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,

    },
    bg1: {
        backgroundColor: '#FEFBF6',
        borderRadius: 5,
        width: 350,
        height: 85,
        marginTop: 15,
        paddingTop: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,

    },
    bg2: {
        backgroundColor: '#CEE5D0',
        borderRadius: 5,
        width: 350,
        height: 40,
        marginTop: 30,
        paddingTop: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,

    },
})