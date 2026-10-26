// ─── Paso 1 — Props tipadas (_mp: control de inventario) ────────────

import { StyleSheet, Text, View } from 'react-native'

interface TarjetaProductoProps {
  nombre: string
  precio: number
  stock: number
  categoria: string
  proveedor?: string
}

function TarjetaProducto({ nombre, precio, stock, categoria, proveedor }: TarjetaProductoProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreProducto}>{nombre}</Text>
      <Text style={styles.datoPrecio}>${precio.toFixed(2)}</Text>
      <Text style={styles.datoCategoria}>{categoria}</Text>
      <Text style={styles.datoStock}>{stock} unidades en stock</Text>
      <Text style={styles.datoProveedor}>{proveedor ?? 'sin proveedor'}</Text>
    </View>
  )
}

export function Paso1Mp() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Inventario de productos</Text>
      <TarjetaProducto
        nombre="Camiseta Sport"
        precio={12.5}
        stock={25}
        categoria="Ropa"
        proveedor="SportTex"
      />
      <TarjetaProducto
        nombre="Audífonos Bluetooth"
        precio={35}
        stock={8}
        categoria="Electrónica"
      />
      <TarjetaProducto
        nombre="Mochila Urbana"
        precio={28.9}
        stock={15}
        categoria="Accesorios"
        proveedor="Andes Gear"
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
  datoPrecio: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1565c0',
  },
  datoCategoria: {
    fontSize: 12,
    color: '#546e7a',
  },
  datoStock: {
    fontSize: 13,
    color: '#2e7d32',
    fontFamily: 'serif',
  },
  datoProveedor: {
    fontSize: 12,
    color: '#757575',
  },
})
