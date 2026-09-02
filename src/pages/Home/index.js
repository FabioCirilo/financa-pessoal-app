import { create } from 'axios'
import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import Header from '../../components/Header'
import { Background } from './styles'

import { AuthContext } from '../../contexts/auth'

export default function HomePage() {
  const { signOut, user } = useContext(AuthContext)

  return (
    <Background>
      <Header title="Minhas Movimentacoes" />
    </Background>
  )
}
