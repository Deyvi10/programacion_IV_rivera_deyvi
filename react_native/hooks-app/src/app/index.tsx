// app/index.tsx
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

// Importas cada paso desde su respectivo archivo
import Paso1 from '../app/paso1'


export default function Index() {
  const [pasoActual, setPasoActual] = useState<number>(1)

  const renderPaso = () => {
    switch (pasoActual) {
      case 1: return <Paso1 />

      default: return <Paso1 />
    }
  }

  return (
    <View style={styles.contenedorPadre}>
      {/* Barra superior de selección */}
      <View style={styles.barraMenu}>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <Pressable
            key={num}
            style={[styles.botonPaso, pasoActual === num && styles.botonActivo]}
            onPress={() => setPasoActual(num)}
          >
            <Text style={[styles.textoPaso, pasoActual === num && styles.textoActivo]}>
              P{num}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Renderizado del paso seleccionado */}
      <View style={styles.contenidoPaso}>
        {renderPaso()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorPadre: {
    flex: 1,
    backgroundColor: '#fff',
  },
  barraMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 50, // Espacio para el status bar
    paddingBottom: 10,
    backgroundColor: '#1e293b',
  },
  botonPaso: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#334155',
  },
  botonActivo: {
    backgroundColor: '#2563eb',
  },
  textoPaso: {
    color: '#94a3b8',
    fontWeight: '600',
    fontSize: 13,
  },
  textoActivo: {
    color: '#ffffff',
  },
  contenidoPaso: {
    flex: 1,
  },
})