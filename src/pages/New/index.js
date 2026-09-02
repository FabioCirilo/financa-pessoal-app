import React, { useState } from 'react'
import { Background, Input, SubmitButton, SubmitText } from './styles'
import Header from '../../components/Header'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import RegisterTypes from '../../components/RegisterTypes'

export default function NewMovement() {
  const [labelInput, setLabelInput] = useState('')
  const [valueInput, setValueInput] = useState('')
  const [type, setType] = useState('receita')

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header title="Registrando" />

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Input
            placeholder="Descricao desse registro"
            value={labelInput}
            onChangeText={text => setLabelInput(text)}
          />
          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={text => setValueInput(text)}
          />

          <RegisterTypes type={type} sendTypeChanged={item => setType(item)} />

          <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </View>
      </Background>
    </TouchableWithoutFeedback>
  )
}
