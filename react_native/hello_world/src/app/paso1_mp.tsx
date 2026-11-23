// Control de Inventario — Deyvi Rivera
// app/index.tsx — reemplaza la función Paso1
import { StyleSheet, Text, View } from 'react-native'

export function Paso1mp() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Sistema de Control de Inventario</Text>
      <Text style={styles.subtitulo}>Producto: Laptop Lenovo T14</Text>
      <Text style={styles.detalle}>SKU-1001 · Tecnología · Bodega Central</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    gap: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  subtitulo: {
    fontSize: 16,
    color: '#333',
  },
  detalle: {
    fontSize: 13,
    color: '#777',
  },
})
