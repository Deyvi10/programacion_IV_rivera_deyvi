// Control de Inventario — Deyvi Rivera
// app/index.tsx — añade debajo de styles3
import { ComponentRef, useRef, useState } from 'react'
import { SafeAreaView, TextInput, Text, View, StyleSheet } from 'react-native'

export function Paso4mp() {
  const [stockActual, setStockActual] = useState('')
  const [capacidadBodega, setCapacidadBodega] = useState('')
  const [precioUnitario, setPrecioUnitario] = useState('')

  const refStockActual = useRef<ComponentRef<typeof TextInput>>(null)
  const refCapacidad = useRef<ComponentRef<typeof TextInput>>(null)
  const refPrecio = useRef<ComponentRef<typeof TextInput>>(null)

  // 1. Convertimos los valores a números (si está vacío, toma 0 para que no dé NaN)
  const numStock = parseFloat(stockActual) || 0
  const numCapacidad = parseFloat(capacidadBodega) || 0
  const numPrecio = parseFloat(precioUnitario) || 0

  // 2. Hacemos los cálculos de inventario
  const ocupacionPorcentaje = numCapacidad > 0 ? Math.round((numStock / numCapacidad) * 100) : 0
  const valorInventario = numStock * numPrecio

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Ocupación de Bodega y Valorización</Text>

      {/* Unidades disponibles */}
      <Text style={styles4.etiqueta}>Unidades disponibles (stock)</Text>
      <TextInput
        ref={refStockActual}
        style={styles4.campo}
        value={stockActual}
        onChangeText={setStockActual}
        placeholder="Ej. 65"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => refCapacidad.current?.focus()}
      />

      {/* Capacidad máxima de la bodega */}
      <Text style={styles4.etiqueta}>Capacidad máxima de la bodega</Text>
      <TextInput
        ref={refCapacidad}
        style={styles4.campo}
        value={capacidadBodega}
        onChangeText={setCapacidadBodega}
        placeholder="Ej. 100"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => refPrecio.current?.focus()}
      />

      {/* Valor unitario del producto */}
      <Text style={styles4.etiqueta}>Valor unitario (USD)</Text>
      <TextInput
        ref={refPrecio}
        style={styles4.campo}
        value={precioUnitario}
        onChangeText={setPrecioUnitario}
        placeholder="Ej. 12"
        keyboardType="numeric"
        returnKeyType="done"
      />

      {/* Vista previa con los resultados en tiempo real */}
      <View style={styles4.preview}>
        <Text style={styles4.previewTexto}>Ocupación: {ocupacionPorcentaje}% de la capacidad</Text>
        <Text style={styles4.previewTexto}>Valor del inventario: ${valorInventario.toFixed(2)}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles4 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8', padding: 16 },
  titulo: { fontSize: 18, fontWeight: '700', color: '#1565c0', marginBottom: 20 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 14,
    color: '#1a1a1a',
  },
  preview: {
    marginTop: 8,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#a8ff78',
    marginBottom: 4,
  },
})
