// app/paso1_mp.tsx — primeros hooks aplicados al control de inventario
import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

// Paso 1 _mp: useState guarda el stock y useEffect ejecuta efectos.
export default function Paso1Mp() {
  const [stock, setStock] = useState<number>(25)
  const [segundos, setSegundos] = useState<number>(0)

  // useEffect con cleanup: el intervalo se limpia al desmontar el componente.
  useEffect(() => {
    const id = setInterval(() => setSegundos((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Paso 1 _mp · Control de inventario</Text>
      <Text style={styles.descripcion}>
        useState guarda el stock del producto y useEffect controla el tiempo
        transcurrido desde la última auditoría.
      </Text>

      <View style={styles.tarjeta}>
        <Text style={styles.etiqueta}>Stock actual (useState)</Text>
        <Text style={styles.valorGrande}>{stock} u.</Text>

        <View style={styles.filaBotones}>
          <Pressable
            style={[styles.boton, styles.botonSecundario]}
            onPress={() => setStock((s) => Math.max(0, s - 1))}
          >
            <Text style={styles.textoBotonSecundario}>−1 salida</Text>
          </Pressable>

          <Pressable
            style={[styles.boton, styles.botonPrimario]}
            onPress={() => setStock((s) => s + 1)}
          >
            <Text style={styles.textoBotonPrimario}>+1 entrada</Text>
          </Pressable>
        </View>

        <Pressable style={styles.enlace} onPress={() => setStock(25)}>
          <Text style={styles.textoEnlace}>Reiniciar stock</Text>
        </Pressable>
      </View>

      <View style={styles.tarjeta}>
        <Text style={styles.etiqueta}>Tiempo desde la auditoría (useEffect)</Text>
        <Text style={styles.valorGrande}>{segundos}s</Text>
        <Text style={styles.descripcion}>
          El intervalo se limpia automáticamente al salir de la pantalla.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 6,
  },
  descripcion: {
    fontSize: 14,
    lineHeight: 20,
    color: '#475569',
    marginBottom: 14,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  etiqueta: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  valorGrande: {
    fontSize: 40,
    fontWeight: '700',
    color: '#1e293b',
    marginVertical: 8,
  },
  filaBotones: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  boton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonPrimario: {
    backgroundColor: '#2563eb',
  },
  botonSecundario: {
    backgroundColor: '#e2e8f0',
  },
  textoBotonPrimario: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 15,
  },
  textoBotonSecundario: {
    color: '#1e293b',
    fontWeight: '700',
    fontSize: 15,
  },
  enlace: {
    marginTop: 12,
    alignItems: 'center',
  },
  textoEnlace: {
    color: '#2563eb',
    fontWeight: '600',
  },
})
