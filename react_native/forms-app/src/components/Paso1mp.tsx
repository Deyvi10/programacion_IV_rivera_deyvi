// Control de Inventario — Deyvi Rivera
// app/index.tsx — añade esto debajo de los estilos
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

export type ProductoInventario = {
  id: string
  nombre: string
  codigo: string
  activo: boolean
}

export const UNIDADES: ProductoInventario[] = [
  { id: '1', nombre: 'Laptop Lenovo T14',     codigo: 'TEC-1001', activo: true  },
  { id: '2', nombre: 'Monitor Dell 24"',      codigo: 'TEC-1002', activo: true  },
  { id: '3', nombre: 'Impresora HP Laser',    codigo: 'TEC-2001', activo: true  },
  { id: '4', nombre: 'Teclado Mecánico',      codigo: 'TEC-2005', activo: false },
  { id: '5', nombre: 'Silla Ergonómica',      codigo: 'MUE-0001', activo: true  },
  { id: '6', nombre: 'Archivador Metálico',   codigo: 'MUE-0002', activo: false },
  { id: '7', nombre: 'Router Corporativo',    codigo: 'RED-3001', activo: true  },
  { id: '8', nombre: 'Disco SSD 1TB',         codigo: 'RED-0010', activo: true  },
]

export const PRODUCTOS = UNIDADES

export function FilaUnidad({ unidad }: { unidad: ProductoInventario }) {
  const producto = unidad
  return (
    <View style={styles1.fila}>
      <View style={styles1.info}>
        <Text style={styles1.nombre}>{producto.nombre}</Text>
        <Text style={styles1.ip}>SKU: {producto.codigo}</Text>
      </View>
      <View
        style={[
          styles1.estado,
          producto.activo ? styles1.estadoActivo : styles1.estadoInactivo,
        ]}
      >
        <Text style={styles1.textoEstado}>
          {producto.activo ? 'DISPONIBLE' : 'AGOTADO'}
        </Text>
      </View>
    </View>
  )
}

export function Paso1mp() {
  return (
    <SafeAreaView style={styles1.contenedor}>
      <Text style={styles1.titulo}>Inventario de productos · Bodega Central</Text>
      <FlatList<ProductoInventario>
        data={UNIDADES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FilaUnidad unidad={item} />}
      />
    </SafeAreaView>
  )
}

const styles1 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 8,
    padding: 12,
  },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: '600', color: '#1a1a1a' },
  ip: { fontSize: 12, color: '#666', marginTop: 2 },
  estado: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  estadoActivo: { backgroundColor: '#e8f5e9' },
  estadoInactivo: { backgroundColor: '#ffebee' },
  textoEstado: { fontSize: 11, fontWeight: '700' },
})
