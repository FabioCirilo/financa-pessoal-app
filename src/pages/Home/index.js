import { create } from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import { Area, Background, List, ListBalance, Title } from './styles'

import { AuthContext } from '../../contexts/auth'
import { format } from 'date-fns'
import api from '../../services/api'
import { useIsFocused } from '@react-navigation/native'
import BalanceItem from '../../components/BalanceItem'
import { MaterialIcons } from '@expo/vector-icons'
import HistolicoList from '../../components/HistoricoList'

export default function HomePage() {
  const isFocused = useIsFocused()
  const [listBalance, setListBalance] = useState([])
  const [dateMovements, setDateMovements] = useState(new Date())
  const [moviments, setMoviments] = useState([])

  useEffect(() => {
    let isActive = true

    async function getMovements() {
      let dateFormated = format(dateMovements, 'dd/MM/yyyy')

      const receives = await api.get('/receives', {
        params: {
          date: dateFormated
        }
      })

      const balance = await api.get('/balance', {
        params: {
          date: dateFormated
        }
      })

      if (isActive) {
        setMoviments(receives.data)
        setListBalance(balance.data)
      }
    }

    getMovements()

    return () => {
      isActive = false
    }
  }, [isFocused])

  return (
    <Background>
      <Header title="Minhas Movimentacoes" />

      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.tag}
        renderItem={({ item }) => <BalanceItem data={item} />}
      />

      <Area>
        <TouchableOpacity>
          <MaterialIcons name="event" color="#121212" size={30} />
        </TouchableOpacity>
        <Title>Últimas movimentações</Title>
      </Area>

      <List
        data={moviments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <HistolicoList data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </Background>
  )
}
