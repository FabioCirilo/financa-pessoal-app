import React from 'react'
import { Container, IconView, Tipo, TipoText, ValorText } from './styles'
import { Feather } from '@expo/vector-icons'
import { Alert, TouchableWithoutFeedback } from 'react-native'

export default function HistolicoList({ data, deleteItem }) {
  function handleDeleteItem() {
    Alert.alert(
      'Atenção',
      'Você tem certeza que deseja eliminar esse registro?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => deleteItem(data.id)
        }
      ]
    )
  }

  return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
      <Container>
        <Tipo>
          <IconView tipo={data.type}>
            <Feather
              name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
              size={20}
              color="#FFF"
            />
            <TipoText>{data.type}</TipoText>
          </IconView>
        </Tipo>

        <ValorText>AO {data.value}</ValorText>
      </Container>
    </TouchableWithoutFeedback>
  )
}
