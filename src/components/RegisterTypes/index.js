import React, { useState } from 'react'
import { RegisterContainer, RegisterLabel, RegisterTypeButton } from './styles'
import { Feather } from '@expo/vector-icons'

export default function RegisterTypes({ type, sendTypeChanged }) {
  const [typeSelected, setTypeSelected] = useState(type)

  function changeType(name) {
    setTypeSelected(name)
    sendTypeChanged(name)
  }

  return (
    <RegisterContainer>
      <RegisterTypeButton
        checked={typeSelected === 'receita' ? true : false}
        onPress={() => changeType('receita')}
      >
        <Feather name="arrow-up" size={30} color="#121212" />
        <RegisterLabel>Receita</RegisterLabel>
      </RegisterTypeButton>

      <RegisterTypeButton
        checked={typeSelected === 'despesa' ? true : false}
        onPress={() => changeType('despesa')}
      >
        <Feather name="arrow-down" size={30} color="#121212" />
        <RegisterLabel>Despesa</RegisterLabel>
      </RegisterTypeButton>
    </RegisterContainer>
  )
}
