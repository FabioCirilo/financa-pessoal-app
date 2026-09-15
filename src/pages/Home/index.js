import { create } from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Text, View, Button, TouchableOpacity, Modal } from 'react-native'
import Header from '../../components/Header'
import { Area, Background, List, ListBalance, Title } from './styles'

import { AuthContext } from '../../contexts/auth'
import { format } from 'date-fns'
import api from '../../services/api'
import { useIsFocused } from '@react-navigation/native'
import BalanceItem from '../../components/BalanceItem'
import { MaterialIcons } from '@expo/vector-icons'
import HistolicoList from '../../components/HistoricoList'
import CalendarModal from '../../components/CalendarModal'

export default function HomePage() {
  const isFocused = useIsFocused()
  const [listBalance, setListBalance] = useState([])
  const [dateMovements, setDateMovements] = useState(new Date())
  const [moviments, setMoviments] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    let isActive = true

    async function getMovements() {
      //let dateFormated = format(dateMovements, 'dd/MM/yyyy')
      let date = new Date(dateMovements)
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000
      let dateFormated = format(onlyDate, 'dd/MM/yyyy')

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
  }, [isFocused, dateMovements])

  async function handleDelete(id) {
    try {
      await api.delete('/receives/delete', {
        params: {
          item_id: id
        }
      })

      setDateMovements(new Date())
    } catch (err) {
      console.log(err)
    }
  }

  function filterDateMovements(dateSelected) {
    //console.log(dateSelected)
    setDateMovements(dateSelected)
  }

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
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <MaterialIcons name="event" color="#121212" size={30} />
        </TouchableOpacity>
        <Title>Últimas movimentações</Title>
      </Area>

      <List
        data={moviments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <HistolicoList data={item} deleteItem={handleDelete} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <CalendarModal
          setVisible={() => setModalVisible(false)}
          handleFilter={filterDateMovements}
        />
      </Modal>
    </Background>
  )
}
