// app/index.tsx
import { Text, View } from 'react-native'
import { Paso1 } from './paso1'
import { Paso2 } from './paso2'
import { Paso1Mp } from './paso1_mp'
import { Paso2Mp } from './paso2_mp'


// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1     Texto y vistas básicas                            │
// │  2  Paso 2     Imágenes y botones                                │
// │  3  Paso 1 _mp Texto y vistas — inventario                       │
// │  4  Paso 2 _mp Imágenes y botones — registrar venta              │
// └──────────────────────────────────────────────────────────────────┘
const PASO = 1

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso1Mp />
    case 4:
      return <Paso2Mp />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}

