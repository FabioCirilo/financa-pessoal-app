import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import HomePage from '../pages/Home'
import NewMovement from '../pages/New'
import ProfileUser from '../pages/Profile'

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

        drawerItemStyle: {
          marginVertical: 4, // espaço entre cada item
          borderRadius: 8 // opcional, deixa mais bonito com o fundo ativo
        },

        drawerActiveBackgroundColor: '#3b3dbf',
        drawerActiveTintColor: '#fff',

        drawerInactiveBackgroundColor: '#f0f2ff',
        drawerInactiveTintColor: '#121212'
      }}
    >
      <AppDrawer.Screen name="Home" component={HomePage} />
      <AppDrawer.Screen name="New" component={NewMovement} />
      <AppDrawer.Screen name="Profile" component={ProfileUser} />
    </AppDrawer.Navigator>
  )
}

export default AppRoutes
