// Control de Inventario — Deyvi Rivera
// app/index.tsx — agrega la función Paso2
import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type EstadoLectura = 'sincronizando' | 'ok' | 'sin_respuesta' | 'inactivo'

export function Paso2mp() {
  const [lectura, setLectura] = useState<number | null>(null)
  const [estado, setEstado] = useState<EstadoLectura>('inactivo')
  const [activo, setActivo] = useState<boolean>(false)
  const [ciclos, setCiclos] = useState<number>(0)
  const [lecturasFallidas, setLecturasFallidas] = useState<number>(0);

  useEffect(() => {
    if (!activo) return   // no arrancar el intervalo si el monitoreo está detenido

    const intervalo = setInterval(() => {
      setEstado('sincronizando')

      // Simula lectura de stock: entre 10 y 200 unidades
      // con un 15 % de probabilidad de que la lectura falle
      setTimeout(() => {
        const falla = Math.random() < 0.15
        if (falla) {
          setLectura(null)
          setEstado('sin_respuesta')
          setLecturasFallidas(p => p + 1)
        } else {
          const unds = Math.floor(Math.random() * 190) + 10
          setLectura(unds)
          setEstado('ok')
        }
        setCiclos(c => c + 1)
      }, 400)
    }, 500)

    // ← función de limpieza: cancela el intervalo
    return () => clearInterval(intervalo)
  }, [activo])   // se re-ejecuta cuando 'activo' cambia

  const colorEstado: Record<EstadoLectura, string> = {
    sincronizando: '#1565c0',
    ok:       '#2e7d32',
    sin_respuesta: '#c62828',
    inactivo: '#757575',
  }
  const porcentajeFallos =
    ciclos > 0 ? (lecturasFallidas / ciclos * 100).toFixed(1) + '%' : '0.0%'

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Monitoreo de Stock — SKU-1001</Text>

      <View style={styles.tarjeta}>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
          {estado.toUpperCase()}
        </Text>
        <Text style={styles.lectura}>
          {lectura !== null ? `${lectura} unds.` : '— unds.'}
        </Text>
        <Text style={styles.ciclos}>Ciclos completados: {ciclos}</Text>
        <Text style={styles.ciclos}>Lecturas fallidas: {lecturasFallidas} ({porcentajeFallos})</Text>
        <Text style={styles.detalle}>Laptop T14 · Bodega Central · Conteo 03</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          activo ? styles.botonDetener : styles.botonIniciar,
          pressed && { opacity: 0.75 },
        ]}
        onPress={() => setActivo(a => !a)}
      >
        <Text style={styles.textoBoton}>
          {activo ? 'Detener monitoreo' : 'Iniciar monitoreo'}
        </Text>
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
  lectura: {
    color: '#18c015',
    fontSize: 15,
    fontWeight: '600',
  },
  botonIniciar: {
    backgroundColor: '#2e7d32',
  },
  botonDetener: {
    backgroundColor: '#c62828',
  },
  ciclos: {
    color: '#cc8f0d',
    fontSize: 15,
    fontWeight: '600',
  },
  etiqueta: {
    color: '#7b5214',
    fontSize: 15,
    fontWeight: '600',
  },
})
