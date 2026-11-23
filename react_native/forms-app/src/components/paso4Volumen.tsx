// app/index.tsx — añade debajo de styles3
import { ComponentRef, useRef, useState } from 'react'
import { SafeAreaView, TextInput, Text, View, StyleSheet } from 'react-native'

export function Paso4() {
  const [base, setBase] = useState('')
  const [altura, setAltura] = useState('')
  const [profundidad, setProfundidad] = useState('')

  const refBase = useRef<ComponentRef<typeof TextInput>>(null)
  const refAltura = useRef<ComponentRef<typeof TextInput>>(null)
  const refProfundidad = useRef<ComponentRef<typeof TextInput>>(null)

  // 1. Convertimos los valores a números (si está vacío, toma 0 para que no dé NaN)
  const numBase = parseFloat(base) || 0
  const numAltura = parseFloat(altura) || 0
  const numProfundidad = parseFloat(profundidad) || 0

  // 2. Hacemos las operaciones
  const area = numBase * numAltura
  const volumen = numBase * numAltura * numProfundidad

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Cálculo de Área y Volumen</Text>

      {/* Base */}
      <Text style={styles4.etiqueta}>Base</Text>
      <TextInput
        ref={refBase}
        style={styles4.campo}
        value={base}
        onChangeText={setBase}
        placeholder="Ej. 5"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => refAltura.current?.focus()}
      />

      {/* Altura */}
      <Text style={styles4.etiqueta}>Altura</Text>
      <TextInput
        ref={refAltura}
        style={styles4.campo}
        value={altura}
        onChangeText={setAltura}
        placeholder="Ej. 10"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => refProfundidad.current?.focus()}
      />

      {/* Profundidad */}
      <Text style={styles4.etiqueta}>Profundidad</Text>
      <TextInput
        ref={refProfundidad}
        style={styles4.campo}
        value={profundidad}
        onChangeText={setProfundidad}
        placeholder="Ej. 2"
        keyboardType="numeric"
        returnKeyType="done"
      />

      {/* Vista previa con los resultados en tiempo real */}
      <View style={styles4.preview}>
        <Text style={styles4.previewTexto}>Área (Base × Altura): {area}</Text>
        <Text style={styles4.previewTexto}>Volumen (+ Profundidad): {volumen}</Text>
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