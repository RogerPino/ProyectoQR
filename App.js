import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import Auth from './src/screens/Auth';

export default function App() {
  return (
    <Container style={styles.container}>
     <Auth />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
