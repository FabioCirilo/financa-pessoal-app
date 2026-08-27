import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import HomePage from '../pages/Home'

const AppDrawer = createDrawerNavigator()

function AppRoutes() {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name="Home" component={HomePage} />
    </AppDrawer.Navigator>
  )
}

export default AppRoutes
