import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import HomePage from '../pages/Home'
import NewMovement from '../pages/New'

const AppDrawer = createDrawerNavigator()

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: '#fff',
          paddingTop: 20
        },

        drawerActiveBackgroundColor: '#3b3dbf',
        drawerActiveTintColor: '#fff',

        drawerInactiveBackgroundColor: '#f0f2ff',
        drawerInactiveTintColor: '#121212'
      }}
    >
      <AppDrawer.Screen name="Home" component={HomePage} />
      <AppDrawer.Screen name="New" component={NewMovement} />
    </AppDrawer.Navigator>
  )
}

export default AppRoutes
