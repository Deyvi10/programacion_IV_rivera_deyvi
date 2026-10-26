// app/paso1.tsx
import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

// Paso 1: primeros hooks → useState guarda estado y useEffect ejecuta efectos.
export default function Paso1() {
  const [contador, setContador] = useState<number>(0)
  const [segundos, setSegundos] = useState<number>(0)

  // useEffect con cleanup: el intervalo se limpia al desmontar el componente.
  useEffect(() => {
    const id = setInterval(() => setSegundos((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Paso 1 · useState y useEffect</Text>
      <Text style={styles.descripcion}>
        useState guarda valores que cambian y provocan un re-render. useEffect corre código
        después de montar el componente.
      </Text>

      <View style={styles.tarjeta}>
        <Text style={styles.etiqueta}>Contador (useState)</Text>
        <Text style={styles.valorGrande}>{contador}</Text>

        <View style={styles.filaBotones}>
          <Pressable
            style={[styles.boton, styles.botonSecundario]}
            onPress={() => setContador((c) => c - 1)}
          >
            <Text style={styles.textoBotonSecundario}>−1</Text>
          </Pressable>

          <Pressable
            style={[styles.boton, styles.botonPrimario]}
            onPress={() => setContador((c) => c + 1)}
          >
            <Text style={styles.textoBotonPrimario}>+1</Text>
          </Pressable>
        </View>

        <Pressable style={styles.enlace} onPress={() => setContador(0)}>
          <Text style={styles.textoEnlace}>Reiniciar</Text>
        </Pressable>
      </View>

      <View style={styles.tarjeta}>
        <Text style={styles.etiqueta}>Tiempo en este paso (useEffect)</Text>
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
    fontSize: 16,
  },
  textoBotonSecundario: {
    color: '#1e293b',
    fontWeight: '700',
    fontSize: 16,
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
