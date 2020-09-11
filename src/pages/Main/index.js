import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Header from '../../components/Header';

import { Container } from './styles';

export default function Main() {
  return (
	  <Container>
	  <Header />
	      <StatusBar style="light" />
	  </Container>
  )
}
