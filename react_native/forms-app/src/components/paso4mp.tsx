// Control de Inventario — Deyvi Rivera
// app/index.tsx — añade debajo de styles3
import { ComponentRef, useRef, useState } from 'react'
import { SafeAreaView, TextInput, Text, View, Pressable, StyleSheet } from 'react-native'

export function Paso4mp() {
  const [nombre, setNombre] = useState('')
  const [codigo, setCodigo] = useState('')
  const [validador, setValidador] = useState('')
  const [token, setToken] = useState('')
  const [mostrarToken, setMostrarToken] = useState(false)

  const refCodigo = useRef<ComponentRef<typeof TextInput>>(null)
  const refValidador = useRef<ComponentRef<typeof TextInput>>(null)
  const refToken = useRef<ComponentRef<typeof TextInput>>(null)

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Registrar Producto en Inventario</Text>

      {/* Nombre del producto */}
      <Text style={styles4.etiqueta}>Nombre del producto</Text>
      <TextInput
        style={styles4.campo}
        value={nombre}
        onChangeText={setNombre}
        placeholder="ej. Laptop Lenovo T14"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        onSubmitEditing={() => refCodigo.current?.focus()}
      />

      {/* SKU / Código de inventario */}
      <Text style={styles4.etiqueta}>SKU / Código de inventario</Text>
      <TextInput
        ref={refCodigo}
        style={styles4.campo}
        value={codigo}
        onChangeText={setCodigo}
        placeholder="TEC-1001"
        autoCapitalize="characters"
        returnKeyType="next"
        onSubmitEditing={() => refValidador.current?.focus()}
      />

      {/* Stock mínimo */}
      <Text style={styles4.etiqueta}>Stock mínimo</Text>
      <TextInput
        ref={refValidador}
        style={styles4.campo}
        value={validador}
        onChangeText={setValidador}
        placeholder="10"
        keyboardType="number-pad"
        returnKeyType="next"
        onSubmitEditing={() => refToken.current?.focus()}
      />

      {/* PIN del responsable del conteo */}
      <Text style={styles4.etiqueta}>PIN del responsable</Text>
      <View style={styles4.campoConIcono}>
        <TextInput
          ref={refToken}
          style={[styles4.campo, { flex: 1, marginBottom: 0 }]}
          value={token}
          onChangeText={setToken}
          placeholder="••••••••"
          secureTextEntry={!mostrarToken}
          returnKeyType="done"
          autoCapitalize="none"
        />
        <Pressable
          onPress={() => setMostrarToken((v) => !v)}
          style={styles4.togglePass}
        >
          <Text style={styles4.togglePassTexto}>
            {mostrarToken ? 'Ocultar' : 'Ver'}
          </Text>
        </Pressable>
      </View>

      {/* Vista previa */}
      <View style={styles4.preview}>
        <Text style={styles4.previewTexto}>
          producto: {nombre || '<producto>'} | SKU: {codigo || '<código>'} | stock mínimo: {validador || '10'} | responsable: Deyvi Rivera
        </Text>
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
  campoConIcono: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  togglePass: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
  },
  togglePassTexto: { fontSize: 13, color: '#1565c0', fontWeight: '600' },
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
  },
})
