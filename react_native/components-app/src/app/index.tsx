// app/index.tsx
import { StyleSheet, Text, View } from 'react-native'
import { Paso1 } from './paso1'
import { Paso2 } from './paso2'
import { Paso3 } from './paso3'
import { Paso1Simpson } from './paso1_simpson'
import { Paso4 } from './paso4'
import { Paso5 } from './paso5'
import { Paso6 } from './paso6'
import { Paso1Mp } from './paso1_mp'
import { Paso2Mp } from './paso2_mp'
import { Paso3Mp } from './paso3_mp'
import { Paso4Mp } from './paso4_mp'
import { Paso5Mp } from './paso5_mp'
import { Paso6Mp } from './paso6_mp'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  Props tipadas — TarjetaServidor                     │
// │  2  Paso 2  children y composición — Card reutilizable          │
// │  3  Paso 3  Props opcionales y BadgeEstado                      │
// │  4  Paso 4  ScrollView y SafeAreaView                           │
// │  5  Paso 5  Modal de confirmación                               │
// │  6  Paso 6  Pantalla completa — detalle de servidor             │
// │  8  Paso 1 _mp  Props tipadas — inventario de productos         │
// │  9  Paso 2 _mp  children y composición — detalle de producto    │
// │ 10  Paso 3 _mp  Props opcionales y BadgeStock                   │
// │ 11  Paso 4 _mp  ScrollView y SafeAreaView — catálogo            │
// │ 12  Paso 5 _mp  Modal de confirmación — baja de producto        │
// │ 13  Paso 6 _mp  Pantalla completa — detalle de producto         │
// └──────────────────────────────────────────────────────────────────┘
const PASO = 7

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso1Simpson />
    case 3:
      return <Paso2 />
    case 4:
      return <Paso3 />
    case 5:
      return <Paso4 />
    case 6:
      return <Paso5 />
    case 7:
      return <Paso6 />
    case 8:
      return <Paso1Mp />
    case 9:
      return <Paso2Mp />
    case 10:
      return <Paso3Mp />
    case 11:
      return <Paso4Mp />
    case 12:
      return <Paso5Mp />
    case 13:
      return <Paso6Mp />
    default:
      return (
        <View style={styles.centrado}>
          <Text>Paso {PASO}: crea el componente primero</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})