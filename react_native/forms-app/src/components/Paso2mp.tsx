// Control de Inventario — Deyvi Rivera
// app/index.tsx
import { StyleSheet, ActivityIndicator, SafeAreaView, FlatList, Text } from 'react-native'
import { useState, useCallback } from 'react'
import { ProductoInventario, UNIDADES } from './Paso1mp'
import { Paso2ListaVacia } from './paso2ListaVaciamp'
import { Paso1FilaUnidadmp } from './paso1FilaServidormp'
import { Paso2Separador } from './paso2Separadormp'

const PAGINA_2: ProductoInventario[] = [
  { id: '9',  nombre: 'Stock de Reposición 1', codigo: 'TEC-9901', activo: true  },
  { id: '10', nombre: 'Stock de Reposición 2', codigo: 'TEC-9902', activo: false },
]

export function Paso2mp() {
  const [datos, setDatos] = useState<ProductoInventario[]>(UNIDADES)
  const [refrescando, setRefrescando] = useState(false)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [paginaActual, setPaginaActual] = useState(1)

  const onRefresh = useCallback(() => {
    setRefrescando(true)
    setTimeout(() => {
      setDatos(UNIDADES)
      setPaginaActual(1)
      setRefrescando(false)
    }, 1000)
  }, [])

  const onEndReached = useCallback(() => {
    if (cargandoMas || paginaActual >= 2) return
    setCargandoMas(true)
    setTimeout(() => {
      setDatos((prev) => [...prev, ...PAGINA_2])
      setPaginaActual(2)
      setCargandoMas(false)
    }, 800)
  }, [cargandoMas, paginaActual])

  return (
    <SafeAreaView style={styles2.contenedor}>
      <Text style={styles2.titulo}>Control de Inventario · p.{paginaActual}</Text>
      <FlatList<ProductoInventario>
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaUnidadmp unidad={item} />}
        ItemSeparatorComponent={Paso2Separador}
        ListEmptyComponent={<Paso2ListaVacia />}
        refreshing={refrescando}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          cargandoMas ? (
            <ActivityIndicator style={{ margin: 16 }} color="#1565c0" />
          ) : <></>
        }
      />
    </SafeAreaView>
  )
}

const styles2 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
})
