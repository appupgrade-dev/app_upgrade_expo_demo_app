import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {appUpgradeVersionCheck} from 'app-upgrade-react-native-sdk';

export default function App() {
  let appId;
  if (Platform.OS === 'android') {
    appId = 'com.android.chrome';
  } else {
    appId = 'id310633997';
  }
  const xApiKey = "ZWY0ZDhjYjgtYThmMC00NTg5LWI0NmUtMjM5OWZkNjkzMzQ5"; // Your project key
  const appInfo = {
    appId, // Your app id in playstore or app store.
    appName: 'Wallpaper app', // Your app name
    appVersion: '1.0.0', // Your app version
    platform: 'android', // App Platform, android or ios
    environment: 'production', // App Environment, production, development
    appLanguage: 'es', // App Language, en, es etc
  };

  // Alert config is optional
  const alertConfig = {
    title: 'Please Update',
    updateButtonTitle: 'Update Now',
    laterButtonTitle: 'Later',
    onDismissCallback: () => { console.log('Dismiss') },
    onLaterCallback: () => { console.log('Later') }
  };

  appUpgradeVersionCheck(appInfo, xApiKey, alertConfig);
  
  return (
    <View style={styles.container}>
      <Text>New Test 21:20pm</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
