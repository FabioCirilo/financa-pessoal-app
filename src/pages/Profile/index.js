import React, { useContext } from 'react'
import {
  Container,
  LogoutButton,
  LogoutText,
  Message,
  Name,
  NewLink,
  NewText
} from './styles'
import Header from '../../components/Header'
import { AuthContext } from '../../contexts/auth'
import { useNavigation } from '@react-navigation/native'

export default function ProfileUser() {
  const { user, signOut } = useContext(AuthContext)
  const navigation = useNavigation()

  return (
    <Container>
      <Header title="Meu Perfil" />

      <Message>Hey, bem vindo de volta!</Message>

      <Name numberOfLine={1}>F{user && user.name}</Name>

      <NewLink onPress={() => navigation.navigate('New')}>
        <NewText>Fazer registro</NewText>
      </NewLink>

      <LogoutButton onPress={() => signOut()}>
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
    </Container>
  )
}
