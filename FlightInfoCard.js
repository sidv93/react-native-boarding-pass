import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Logo from './assets/logo_white.png';
import FlightLogo from './assets/flight_white.png';
import Map from './assets/map.png';
import BarCode from './assets/barcode.png';

const FlightInfoCard = () => {
    const flightDetails = [
        {
            header: 'FLIGHT DATE',
            value: 'May 19'
        },
        {
            header: 'GATE',
            value: 'B2'
        },
        {
            header: 'FLIGHT NO',
            value: 'KB76'
        },
        {
            header: 'BOARDING TIME',
            value: '8:35AM'
        },
        {
            header: 'SEAT',
            value: '19A'
        },
        {
            header: 'CLASS',
            value: 'Economy'
        }
    ]
    return (
        <View style={styles.cardContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.headerLeftContainer}>
                    <Image source={Logo} style={styles.logo} />
                    <Image source={FlightLogo} style={styles.flightLogo} />
                    <View style={styles.ticketPriceContainer}>
                        <Text style={styles.ticketPriceHeading}>Ticket Price</Text>
                        <Text style={styles.ticketPrice}><Text style={{fontSize: 18}}>$</Text> 170.00</Text>
                    </View>
                </View>
                <View style={styles.mapContainer}>
                    <Image source={Map} style={styles.map} />
                </View>
            </View>
            <View style={styles.detailsContainer}>
                {
                    flightDetails.map(detail => (
                        <View style={styles.textContainer} key={detail.header}>
                            <Text style={styles.textHeader}>{detail.header}</Text>
                            <Text style={styles.text}>{detail.value}</Text>
                        </View>
                    ))
                }
            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.boardingPassText}>Boarding pass</Text>
                <Image source={BarCode} style={styles.barCode} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        alignSelf: 'stretch',
        borderRadius: 20
    },
    headerContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        borderBottomColor: '#425C5A',
        borderBottomWidth: 0.5,
        paddingBottom: 15
    },
    headerLeftContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    logo: {
        height: 100,
        width: 80,
        resizeMode: 'contain'
    },
    flightLogo: {
        height: 60,
        width: 80,
        resizeMode: 'contain'
    },
    ticketPriceContainer: {
        flexDirection: 'column',
    },
    ticketPriceHeading: {
        color: '#ADBDBD',
        fontSize: 18
    },
    ticketPrice: {
        color: '#425C5A',
        fontSize: 24
    },
    mapContainer: {

    },
    map: {
        height: 220,
        width: 200,
        resizeMode: 'contain'
    },
    detailsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 20,
        borderStyle: 'dashed',
        borderBottomWidth: 0.5,
        borderBottomColor: '#425C5A',
        paddingVertical: 10
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        minWidth: 80,
    },
    textHeader: {
        color: '#ADBDBD',
        fontSize: 12,
        textAlign: 'center'
    },
    text: {
        color: '#425C5A',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    footerContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boardingPassText: {
        color: '#425C5A',
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 10
    },
    barCode: {
        height: 70,
        width: 300,
        resizeMode: 'contain',
        marginVertical: 10
    }
});

export default FlightInfoCard;
