import React, {  useState, useEffect }  from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';


function Main() {
    const [currentRegion, setCurrentRegion] = useState(null);
    useEffect( () => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();
            
            if(granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })
            }

        }

        loadInitialPosition();
    }, [] );

    if(!currentRegion) {
        return null;
    }

    return ( 
    <MapView  initialRegion={currentRegion} style={styles.map}>
        <Marker coordinate={{ latitude: -12.9705928, longitude: -38.4713772 }}>
            <Image  style={styles.avatar}  source={{ uri: 'https://ya-webdesign.com/images/avatar-png-1.png' }} />
            <Callout>
                <View  style={styles.callout} >
                    <Text style={styles.devName}>Italo Sousa</Text>
                    <Text style={styles.devBio}>Bio Here !!!</Text>
                    <Text style={styles.devTechs}>ReactJS, PHP</Text>
                </View>

            </Callout>
        </Marker>
    </MapView> 
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: '#FFF'
    },
    callout: {
        width: 260,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    devBio: {
        color: '#666',
        marginTop: 5
    },

    devTechs: {
        marginTop: 5
    }

});

export default Main;