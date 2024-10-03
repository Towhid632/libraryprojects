const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/screens/LoginPage'; // Adjust the import path
import SignupPage from './src/components/SignupPage'; // Adjust the import path

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
