import React from 'react'
import { Container, IconView, Tipo, TipoText, ValorText } from './styles'
import { Feather } from '@expo/vector-icons'

export default function HistolicoList({ data }) {
  return (
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
  )
}
