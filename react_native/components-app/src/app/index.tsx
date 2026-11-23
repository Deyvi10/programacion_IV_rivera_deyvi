// app/index.tsx
import { StyleSheet, Text, View } from 'react-native'
import { Paso1 } from './paso1'
import { Paso2 } from './paso2'
import { Paso3 } from './paso3'
import { Paso1Simpson } from './paso1_simpson'
import { Paso4 } from './paso4'
import { Paso5 } from './paso5'
import { Paso6 } from './paso6'
import { Paso1Transporte } from './paso1_simpson_mp'
import { Paso1mp } from './paso1_mp'
import { Paso2mp } from './paso2_mp'
import { Paso3mp } from './paso3_mp'
import { Paso4mp } from './paso4_mp'
import { Paso5mp } from './paso5_mp'
import { Paso6mp } from './paso6_mp'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  Props tipadas — TarjetaServidor                     │
// │  2  Paso 2  children y composición — Card reutilizable          │
// │  3  Paso 3  Props opcionales y BadgeEstado                      │
// │  4  Paso 4  ScrollView y SafeAreaView                           │
// │  5  Paso 5  Modal de confirmación                               │
// │  6  Paso 6  Pantalla completa — detalle de servidor             │
// └──────────────────────────────────────────────────────────────────┘
const PASO = 13

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
      return <Paso1mp/>
    case 9:
      return <Paso2mp/>
    case 10:
      return <Paso3mp/>
    case 11:
      return <Paso4mp/>
    case 12:
      return <Paso5mp/>
    case 13:
      return <Paso6mp/>
      
      
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