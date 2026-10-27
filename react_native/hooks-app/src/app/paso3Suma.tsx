// app/index.tsx — agrega la función Paso3
import { useRef, useState, useEffect, ComponentRef } from 'react'
import {
  StyleSheet, Text, TextInput, View, Pressable, TextInput as RNTextInput
} from 'react-native'

export function Paso3Suma() {
  // ── Uso 1: referencia a un TextInput para foco programático ─────────
  const n1 = useRef<ComponentRef<typeof TextInput>>(null)
  const n2 = useRef<ComponentRef<typeof TextInput>>(null)

  const [host, setHost] = useState<number>(0)
  const [puerto, setPuerto] = useState<number>(0)

  // Foco automático al montar la pantalla
  useEffect(() => {
    n1.current?.focus()
  }, [])

  // ── Uso 2: contador de intentos silencioso (sin re-render) ───────────
  const intentosSilenciosRef = useRef<number>(0)
  const [ultimaConexion, setUltimaConexion] = useState<string>('—')

  function intentarConexion() {
    intentosSilenciosRef.current += 1   // muta sin re-render
    // Solo actualizamos el estado (y disparamos re-render) al conectar
    setUltimaConexion(
      `${host + puerto} — resultado #${intentosSilenciosRef.current}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>SUMA</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Ingrese numero 1</Text>
        <TextInput
          ref={n1}
          style={styles.input}
          value={host}
          onChangeText={setHost}
          placeholder="1, 2, 45, 6"
          placeholderTextColor="#e79696"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => n2.current?.focus()}
        />

        <Text style={styles.etiqueta}>Ingrese numero 2</Text>
        <TextInput
          ref={n2}
          style={styles.input}
          value={puerto}
          onChangeText={setPuerto}
          placeholder="1, 2, 45, 6"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>


      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={intentarConexion}
      >
        <Text style={styles.textoBoton}>SUMAR</Text>
      </Pressable>

      <Text style={styles.detalle}>rESULTADO: {ultimaConexion}</Text>
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