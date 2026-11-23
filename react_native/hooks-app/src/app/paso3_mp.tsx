// Control de Inventario — Deyvi Rivera
// app/index.tsx — agrega la función Paso3
import { useRef, useState, useEffect, ComponentRef } from 'react'
import {
  StyleSheet, Text, TextInput, View, Pressable, TextInput as RNTextInput
} from 'react-native'

export function Paso3mp() {
  // ── Uso 1: referencia a un TextInput para foco programático ─────────
  const inputSkuRef = useRef<ComponentRef<typeof TextInput>>(null)
  const inputBodegaRef = useRef<ComponentRef<typeof TextInput>>(null)

  const [sku, setSku] = useState<string>('')
  const [bodega, setBodega] = useState<string>('Central')

  // Foco automático al montar la pantalla
  useEffect(() => {
    inputSkuRef.current?.focus()
  }, [])

  // ── Uso 2: contador de conteos silencioso (sin re-render) ───────────
  const conteosSilenciosRef = useRef<number>(0)
  const [ultimoConteo, setUltimoConteo] = useState<string>('—')

  function registrarConteo() {
    conteosSilenciosRef.current += 1   // muta sin re-render
    // Solo actualizamos el estado (y disparamos re-render) al registrar
    setUltimoConteo(
      `${sku || 'SKU'} · ${bodega} — conteo #${conteosSilenciosRef.current}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Registrar Conteo de Inventario</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>SKU del producto</Text>
        <TextInput
          ref={inputSkuRef}
          style={styles.input}
          value={sku}
          onChangeText={setSku}
          placeholder="SKU-1001"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => inputBodegaRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Bodega</Text>
        <TextInput
          ref={inputBodegaRef}
          style={styles.input}
          value={bodega}
          onChangeText={setBodega}
          placeholder="Central"
          placeholderTextColor="#aaa"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={registrarConteo}
      >
        <Text style={styles.textoBoton}>Registrar conteo</Text>
      </Pressable>

      <Text style={styles.detalle}>Último conteo: {ultimoConteo}</Text>
      <Text style={styles.detalle}>
        (los conteos silenciosos no causan re-renders)
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  ciclos: {
    fontSize: 20,
    fontWeight: '700',
    color: '#071d11',
  },
  tarjeta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#dff3f3',
    gap: 6,
  },
  etiqueta: {
    width: '100%',
    padding: 10,
    borderRadius: 16,
    borderWidth: 2,
    gap: 3,
  },
  estado: {
    fontSize: 15,
    fontWeight: '600',

  },
  latencia: {
    fontSize: 15,
    fontWeight: '600',

  },
  detalle: {
    fontSize: 13,
    color: '#666',

  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonActivo: {
    backgroundColor: '#5a8068',
  },
  botonDeshabilitado: {
    backgroundColor: '#ee82e9',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  botonSecundario: {
    paddingVertical: 10,
  },
  textoSecundario: {
    color: '#1565c0',
    fontSize: 14,
  },
  input: {
    color: '#1565c0',
    fontSize: 14,
  },
  formulario: {
    width: '100%',
    gap: 12,
  },
})
