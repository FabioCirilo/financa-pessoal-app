import React, { useState } from 'react'
import { Background, Input, SubmitButton, SubmitText } from './styles'
import Header from '../../components/Header'
import { Alert, Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import RegisterTypes from '../../components/RegisterTypes'
import api from '../../services/api'
import { format } from 'date-fns'
import { useNavigation } from '@react-navigation/native'

export default function NewMovement() {
  const navigation = useNavigation()

  const [labelInput, setLabelInput] = useState('')
  const [valueInput, setValueInput] = useState('')
  const [type, setType] = useState('receita')

  function handleSubmit() {
    Keyboard.dismiss()

    if (isNaN(parseFloat(valueInput)) || type === null) {
      alert('Preencha todos os campos')
      return
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo: ${type} - Valor: ${parseFloat(valueInput)} - Descrição: ${labelInput}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handlleAdd()
        }
      ]
    )
  }

  async function handlleAdd() {
    Keyboard.dismiss()

    await api.post('/receive', {
      description: labelInput,
      value: Number(valueInput),
      type: type,
      date: format(new Date(), 'dd/MM/yyyy')
    })

    setLabelInput('')
    setValueInput('')
    navigation.navigate('Home', { reload: true })
  }

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

          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </View>
      </Background>
    </TouchableWithoutFeedback>
  )
}
