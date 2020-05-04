import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import BackButton from './assets/backbutton.png';
import Flight from './assets/flight.png';
import ProfilePictue from './assets/profilepicture.png';
import FlightInfoCard from './FlightInfoCard';

const BoardingPass = ({ onBack }) => {
    return (
        <ScrollView style={styles.boardingPassContainer}>
            <View style={styles.backAndProfileContainer}>
                <TouchableOpacity onPress={onBack}>
                    <Image source={BackButton} style={styles.backButton} />
                </TouchableOpacity>
                <Image source={ProfilePictue} style={styles.profilePicture} />
            </View>
            <View style={styles.flightPlacesContainer}>
                <View style={styles.startingPlaceContainer}>
                    <Text style={styles.placeShort}>CHN</Text>
                    <Text style={styles.placeExpanded}>Chennai</Text>
                </View>
                <View style={styles.flightDurationContainer}>
                    <Image source={Flight} style={styles.flightIcon} />
                    <Text style={styles.duration}>35m</Text>
                </View>
                <View style={styles.destinationContainer}>
                    <Text style={styles.placeShort}>BLR</Text>
                    <Text style={styles.placeExpanded}>Bangalore</Text>
                </View>
            </View>
            <FlightInfoCard />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    boardingPassContainer: {
        alignSelf: 'stretch',
        marginVertical: 10
    },
    backAndProfileContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginVertical: 10
    },
    backButton: {
        height: 70,
        width: 70,
        resizeMode: 'contain'
    },
    profilePicture: {
        height: 70,
        width: 70,
        resizeMode: 'contain'
    },
    flightPlacesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 30,
        marginVertical: 20
    },
    startingPlaceContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    placeShort: {
        fontSize: 28,
        color: '#FFCEA1',
        marginVertical: 10
    },
    placeExpanded: {
        fontSize: 12,
        color: 'white',
        marginVertical: 10
    },
    flightDurationContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flightIcon: {
        height: 60,
        width: 80,
        resizeMode: 'contain'
    },
    duration: {
        fontSize: 12,
        color: 'white'
    },
    destinationContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default BoardingPass;
