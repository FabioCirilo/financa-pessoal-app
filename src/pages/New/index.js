import React, { useState } from 'react'
import { Background, Input, SubmitButton, SubmitText } from './styles'
import Header from '../../components/Header'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'

export default function NewMovement() {
  const [labelInput, setLabelInput] = useState('')
  const [valueInput, setValueInput] = useState('')
  const [typeInput, setTypeInput] = useState('receita')

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

          <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </View>
      </Background>
    </TouchableWithoutFeedback>
  )
}
