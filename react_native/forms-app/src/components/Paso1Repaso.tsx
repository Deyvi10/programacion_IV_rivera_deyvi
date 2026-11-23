// app/index.tsx — añade esto debajo de los estilos
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Paso1FilaServidorRepaso } from './paso1FilaServidorRepaso'

type Figuras = {
  id: string
  nombre: string
  color: string
}

const FIGURAS: Figuras[] = [
  { id: '1', nombre: 'Triangulo', color: 'Rosado' },
  { id: '2', nombre: 'Rectangulo', color: 'Verde' },
  { id: '3', nombre: 'Cuadrado', color: 'Azúl' },
]

function FilaFiguras({ figuras }: { figuras: Figuras }) {
  return (
    <View style={styles1.fila}>
      <View style={styles1.info}>
        <Text style={styles1.nombre}>{figuras.nombre}</Text>
        <Text style={styles1.color}>{figuras.color}</Text>
      </View>
      <View
      >
      </View>
    </View>
  )
}

export function Paso1() {
  return (
    <SafeAreaView style={styles1.contenedor}>
      <Text style={styles1.titulo}>Inventario de Figuras</Text>
      <FlatList<Figuras>
        data={FIGURAS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FilaFiguras figuras={item} />}
      />
    </SafeAreaView>
  )
}

const styles1 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 8,
    padding: 12,
  },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: '600', color: '#1a1a1a' },
  ip: { fontSize: 12, color: '#666', marginTop: 2 },
  estado: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  estadoActivo: { backgroundColor: '#e8f5e9' },
  estadoInactivo: { backgroundColor: '#ffebee' },
  textoEstado: { fontSize: 11, fontWeight: '700' },
})