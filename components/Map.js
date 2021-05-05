import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions, LogBox } from 'react-native';
import * as Location from 'expo-location';
import { firebase } from '../firebase/Config';

const { height, width } = Dimensions.get('window');
const LATITUDE_DELTA = 0.98;
const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height)

export default class MapContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      markers: []
    };
  }

  componentDidMount() {

    let markers = [];
    firebase.database().ref('Places').on('value', (snapshot) => {
      let data = snapshot.val() ? snapshot.val() : {};
      let places = { ...data };
      for (let key in places) {
        if (places.hasOwnProperty(key)) {
          let lat = parseFloat(places[key].latitude);
          let lon = parseFloat(places[key].longitude);
          let title = places[key].title;
          let desc = places[key].description;

          markers.push({ "lat": lat, "lon": lon, "title": title, "desc": desc });
        }
      }
    });
    this.setState({ markers: markers });

    this.getLocationAsync();

    // ignores warnings
    LogBox.ignoreAllLogs();
  }

  handleMapRegionChange = (region) => {
    this.setState({ region });
  };

  async getLocationAsync() {

    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      this.setState({ hasLocationPermissions: true });

      //  let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ locationResult: JSON.stringify(location) });
      
      // Center the map on the location we just fetched.
      this.setState({
        region: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });
    } else {
      alert("Location permission not granted");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}>
          <Marker
            coordinate={this.state.region}
            title={'You are here'}
          />
          {this.state.markers.map((marker, index) => {
            return <Marker
              key={index}
              coordinate={{ latitude: marker.lat, longitude: marker.lon }}
              title={marker.title}
              description={marker.desc}
              pinColor={'green'}
            />
          })}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
});