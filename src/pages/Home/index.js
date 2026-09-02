import { create } from 'axios'
import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'

import { AuthContext } from '../../contexts/auth'

export default function HomePage() {
  const { signOut, user } = useContext(AuthContext)

  return (
    <View>
      <Text>Pagina Home</Text>
      <Text>Nome: {user.name}</Text>
      <Button title="Sair" onPress={() => signOut()} />
    </View>
  )
}
