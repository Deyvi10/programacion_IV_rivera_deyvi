// Control de Inventario — Deyvi Rivera
// app/index.tsx — añade debajo de styles5
import { useState } from 'react'
import { KeyboardAvoidingView, Platform, Text, View, StyleSheet, Alert, SafeAreaView, ScrollView, TextInput, Pressable} from 'react-native'

export function Paso6mp() {
  const [nombre, setNombre] = useState('')
  const [sku, setSku] = useState('')
  const [bodega, setBodega] = useState('01')
  const [observacion, setObservacion] = useState('')
  const [error, setError] = useState<string | null>(null)

  function onAgregar() {
    if (!nombre.trim() || !sku.trim() || !bodega.trim()) {
      setError('Completa todos los campos obligatorios antes de continuar')
      return
    }
    setError(null)
    Alert.alert(
      'Producto registrado en sistema',
      `${nombre} · SKU: ${sku.toUpperCase()} · Bodega: ${bodega}\nObservación: ${observacion || 'sin novedades'}\nResponsable: Deyvi Rivera`
    )
  }

  return (
    <KeyboardAvoidingView
      style={styles6.raiz}
      behavior={Platform.select({ ios: 'padding', android: 'height' })}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 24 })}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* Cabecera fija */}
        <View style={styles6.cabecera}>
          <Text style={styles6.cabeceraTitulo}>Registro de Producto · Bodega</Text>
          <Text style={styles6.cabeceraPlataforma}>
            {Platform.OS === 'ios' ? 'iOS · padding mode' : 'Android · height mode'}
          </Text>
        </View>

        {/* Cuerpo con scroll — los campos inferiores no quedan tapados por el teclado */}
        <ScrollView
          contentContainerStyle={styles6.cuerpo}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles6.etiquetaCampo}>Nombre del producto</Text>
          <TextInput
            style={styles6.campo}
            value={nombre}
            onChangeText={setNombre}
            placeholder="ej. Laptop Lenovo T14"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles6.etiquetaCampo}>SKU del producto</Text>
          <TextInput
            style={styles6.campo}
            value={sku}
            onChangeText={setSku}
            placeholder="TEC-1001"
            autoCapitalize="characters"
          />

          <Text style={styles6.etiquetaCampo}>Bodega asignada</Text>
          <TextInput
            style={styles6.campo}
            value={bodega}
            onChangeText={setBodega}
            placeholder="01"
            keyboardType="number-pad"
          />

          <Text style={styles6.etiquetaCampo}>Conteo físico u observación (opcional)</Text>
          <TextInput
            style={[styles6.campo, styles6.campoMultilinea]}
            value={observacion}
            onChangeText={setObservacion}
            placeholder="Conteo físico realizado por Deyvi Rivera. Revisar lote con vencimiento próximo y ajustar stock."
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />

          {error !== null && (
            <View style={styles6.bannerError}>
              <Text style={styles6.bannerErrorTexto}>{error}</Text>
            </View>
          )}

          <Pressable
            style={({ pressed }) => [
              styles6.boton,
              pressed && { opacity: 0.8 },
            ]}
            onPress={onAgregar}
          >
            <Text style={styles6.textoBoton}>Registrar producto</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles6 = StyleSheet.create({
  raiz: { flex: 1, backgroundColor: '#f0f4f8' },
  cabecera: {
    backgroundColor: '#1565c0',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  cabeceraTitulo: { fontSize: 18, fontWeight: '700', color: '#fff' },
  cabeceraPlataforma: { fontSize: 11, color: '#90caf9', marginTop: 2 },
  cuerpo: { padding: 20, paddingBottom: 40 },
  etiquetaCampo: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 1 },
      },
      android: { elevation: 1 },
    }),
  },
  campoMultilinea: { height: 80, paddingTop: 10 },
  bannerError: {
    backgroundColor: '#ffebee',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#e53935',
  },
  bannerErrorTexto: { fontSize: 13, color: '#c62828' },
  boton: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})
