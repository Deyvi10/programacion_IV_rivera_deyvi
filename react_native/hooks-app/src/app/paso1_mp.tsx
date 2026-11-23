// Control de Inventario — Deyvi Rivera
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export function Paso1mp() {
  const [intentos, setIntentos] = useState<number>(0)
  const [conciliado, setConciliado] = useState<boolean>(false)
  const [mensajeError, setMensajeError] = useState<string>('')

  function manejarReintento() {
    if (conciliado) return
    const nuevoIntento = intentos + 1
    setIntentos(nuevoIntento)
    // Simula éxito al cuarto intento de conteo
    if (nuevoIntento >= 4) {
      setConciliado(true)
      setMensajeError('')
    } else {
      setMensajeError('Diferencia de existencias detectada')
    }
  }

  function reiniciar() {
    setIntentos(0)
    setConciliado(false)
    setMensajeError('')
  }

  const estadoTexto = conciliado
    ? '✓ Conciliado con SKU-1001'
    : `Intento ${intentos} de 3 fallido`

  const colorEstado = conciliado ? '#2e7d32' : '#c62828'

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Conciliación de Inventario</Text>

      <View style={[styles.tarjeta, { borderColor: colorEstado }]}>
        <Text style={[styles.estado, { color: colorEstado }]}>
          {estadoTexto}
        </Text>
        <Text style={styles.detalle}>Laptop T14 · Bodega Central · Conteo 03</Text>
      </View>
      <Text style={[styles.detalle, { color: colorEstado }]}>{
        intentos > 0 && !conciliado ? mensajeError : ''}</Text>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          conciliado ? styles.botonDeshabilitado : styles.botonActivo,
          pressed && !conciliado && { opacity: 0.75 },
        ]}
        onPress={manejarReintento}
        disabled={conciliado}
      >
        <Text style={styles.textoBoton}>
          {conciliado ? 'Conciliado' : 'Repetir conteo'}
        </Text>
      </Pressable>

      <Pressable style={styles.botonSecundario} onPress={reiniciar}>
        <Text style={styles.textoSecundario}>Reiniciar simulación</Text>
      </Pressable>
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
  tarjeta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  estado: {
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
    backgroundColor: '#1565c0',
  },
  botonDeshabilitado: {
    backgroundColor: '#a5d6a7',
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
})
