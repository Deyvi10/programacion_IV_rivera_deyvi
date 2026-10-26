// app/paso1_mp.tsx — Texto y vistas básicas (control de inventario)
import { StyleSheet, Text, View } from 'react-native'

export function Paso1Mp() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Sistema de Inventario</Text>
      <Text style={styles.subtitulo}>Producto: Camiseta Sport</Text>
      <Text style={styles.detalle}>Stock: 25 unidades · Precio: $12.50</Text>
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
