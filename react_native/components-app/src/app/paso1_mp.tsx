// Control de Inventario — Deyvi Rivera
import { StyleSheet, Text, View } from 'react-native'

interface TarjetaProductoProps {
  nombre: string
  capacidad: number
  tipo: string
  estado: string
}

function TarjetaProducto({ nombre, capacidad, tipo, estado }: TarjetaProductoProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreProducto}>{nombre}</Text>
      <Text style={styles.datoStock}>{capacidad} unidades disponibles</Text>
      <Text style={styles.datoCategoria}>{tipo}</Text>
      <Text style={styles.datoCategoria}>{estado ?? 'sin estado'}</Text>
    </View>
  )
}

export function Paso1Inventario() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Sistema de Control de Inventario</Text>
      <TarjetaProducto
        nombre="Laptop Lenovo T14"
        capacidad={80}
        tipo='Tecnología · Bodega Central'
        estado='Disponible'
      />
      <TarjetaProducto
        nombre="Silla Ergonómica"
        capacidad={45}
        tipo='Mobiliario · Bodega Norte'
        estado='Stock bajo'
      />
      <TarjetaProducto
        nombre="Papel A4 · Caja"
        capacidad={300}
        tipo='Papelería · Bodega Sur'
        estado='Disponible'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  encabezado: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  nombreProducto: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  datoStock: {
    fontSize: 13,
    color: '#1565c0',
    fontFamily: 'serif',
  },
  datoCategoria: {
    fontSize: 12,
    color: '#757575',
  },
})
