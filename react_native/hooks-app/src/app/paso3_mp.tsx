// app/index.tsx — agrega la función Paso3
import { useRef, useState, useEffect, ComponentRef } from 'react'
import {
  StyleSheet, Text, TextInput, View, Pressable, TextInput as RNTextInput
} from 'react-native'

export function Paso3mp() {
  // ── Uso 1: referencia a un TextInput para foco programático ─────────
  const inputUnidadRef = useRef<ComponentRef<typeof TextInput>>(null)
  const inputValidadorRef = useRef<ComponentRef<typeof TextInput>>(null)

  const [unidad, setUnidad] = useState<string>('')
  const [validador, setValidador] = useState<string>('03')

  // Foco automático al montar la pantalla
  useEffect(() => {
    inputUnidadRef.current?.focus()
  }, [])

  // ── Uso 2: contador de intentos silencioso (sin re-render) ───────────
  const intentosSilenciosRef = useRef<number>(0)
  const [ultimaConexion, setUltimaConexion] = useState<string>('—')

  function intentarConexion() {
    intentosSilenciosRef.current += 1   // muta sin re-render
    // Solo actualizamos el estado (y disparamos re-render) al conectar
    setUltimaConexion(
      `${unidad || 'unidad'}:${validador} — intento #${intentosSilenciosRef.current}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Configurar Enlace de Unidad</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Código de Unidad</Text>
        <TextInput
          ref={inputUnidadRef}
          style={styles.input}
          value={unidad}
          onChangeText={setUnidad}
          placeholder="PLQ-1001"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => inputValidadorRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Validador / Estación</Text>
        <TextInput
          ref={inputValidadorRef}
          style={styles.input}
          value={validador}
          onChangeText={setValidador}
          placeholder="03"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={intentarConexion}
      >
        <Text style={styles.textoBoton}>Conectar</Text>
      </Pressable>

      <Text style={styles.detalle}>Último intento: {ultimaConexion}</Text>
      <Text style={styles.detalle}>
        (los reintentos silenciosos no causan re-renders)
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