// ─── Paso 4 — ScrollView y SafeAreaView (_mp: inventario) ───────────

import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const PRODUCTOS_DEMO = [
  { id: '1', nombre: 'Camiseta Sport', codigo: 'PRD-001', categoria: 'Ropa', precio: 12.5, stock: 25, stockMinimo: 10 },
  { id: '2', nombre: 'Pantalón Deportivo', codigo: 'PRD-002', categoria: 'Ropa', precio: 22, stock: 18, stockMinimo: 10 },
  { id: '3', nombre: 'Audífonos Bluetooth', codigo: 'PRD-003', categoria: 'Electrónica', precio: 35, stock: 8, stockMinimo: 10 },
  { id: '4', nombre: 'Teclado Mecánico', codigo: 'PRD-004', categoria: 'Electrónica', precio: 45, stock: 2, stockMinimo: 5 },
  { id: '5', nombre: 'Mochila Urbana', codigo: 'PRD-005', categoria: 'Accesorios', precio: 28.9, stock: 15, stockMinimo: 8 },
  { id: '6', nombre: 'Gorra Deportiva', codigo: 'PRD-006', categoria: 'Accesorios', precio: 9.5, stock: 0, stockMinimo: 6 },
  { id: '7', nombre: 'Zapatillas Running', codigo: 'PRD-007', categoria: 'Calzado', precio: 55, stock: 12, stockMinimo: 6 },
  { id: '8', nombre: 'Medias Deportivas', codigo: 'PRD-008', categoria: 'Ropa', precio: 4.5, stock: 60, stockMinimo: 20 },
  { id: '9', nombre: 'Botella Térmica', codigo: 'PRD-009', categoria: 'Accesorios', precio: 14, stock: 30, stockMinimo: 10 },
  { id: '10', nombre: 'Reloj Deportivo', codigo: 'PRD-010', categoria: 'Electrónica', precio: 75, stock: 4, stockMinimo: 5 },
  { id: '11', nombre: 'Balón de Fútbol', codigo: 'PRD-011', categoria: 'Deportes', precio: 19.9, stock: 9, stockMinimo: 6 },
  { id: '12', nombre: 'Cuerda para Saltar', codigo: 'PRD-012', categoria: 'Deportes', precio: 7, stock: 22, stockMinimo: 8 },
]

interface BarraStockProps {
  stock: number
  stockMinimo: number
  etiqueta: string
}

function BarraStock({ stock, stockMinimo, etiqueta }: BarraStockProps) {
  const porcentaje = Math.min(100, Math.round((stock / (stockMinimo * 3)) * 100))
  const color = stock === 0 ? '#c62828'
    : stock < stockMinimo ? '#f57f17'
    : '#2e7d32'

  return (
    <View style={estilos4Mp.barraFila}>
      <Text style={estilos4Mp.barraEtiqueta}>{etiqueta}</Text>
      <View style={estilos4Mp.barraFondo}>
        <View style={[estilos4Mp.barraRelleno, { width: `${porcentaje}%` as any, backgroundColor: color }]} />
      </View>
      <Text style={[estilos4Mp.barraPct, { color }]}>{stock} u.</Text>
    </View>
  )
}

function TarjetaProducto({ nombre, codigo, categoria, precio, stock, stockMinimo }: typeof PRODUCTOS_DEMO[0]) {
  return (
    <View style={estilos4Mp.producto}>
      <View style={estilos4Mp.productoEncabezado}>
        <Text style={estilos4Mp.productoNombre}>{nombre}</Text>
        <Text style={estilos4Mp.productoCodigo}>{codigo}</Text>
      </View>
      <Text style={estilos4Mp.productoCategoria}>{categoria} · ${precio.toFixed(2)}</Text>
      <BarraStock stock={stock} stockMinimo={stockMinimo} etiqueta="STK" />
      <BarraStock stock={stockMinimo} stockMinimo={stockMinimo} etiqueta="MIN" />
    </View>
  )
}

export function Paso4Mp() {
  const totalUnidades = PRODUCTOS_DEMO.reduce((total, producto) => total + producto.stock, 0)

  return (
    <SafeAreaView style={estilos4Mp.safeArea}>
      <View style={estilos4Mp.header}>
        <Text style={estilos4Mp.headerTitulo}>Catálogo de productos</Text>
        <Text style={estilos4Mp.headerSub}>
          {PRODUCTOS_DEMO.length} productos · {totalUnidades} unidades
        </Text>
      </View>
      <ScrollView
        style={estilos4Mp.scroll}
        contentContainerStyle={estilos4Mp.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {PRODUCTOS_DEMO.map((producto) => (
          <TarjetaProducto key={producto.id} {...producto} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const estilos4Mp = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1b2a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1c2e40',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  headerSub: {
    fontSize: 12,
    color: '#78909c',
    marginTop: 2,
  },
  scroll: { flex: 1 },
  scrollContenido: {
    padding: 16,
    gap: 10,
    paddingBottom: 40,
  },
  producto: {
    backgroundColor: '#132232',
    borderRadius: 10,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#1c3548',
  },
  productoEncabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  productoNombre: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  productoCodigo: {
    fontSize: 12,
    color: '#4fc3f7',
    fontFamily: 'monospace',
  },
  productoCategoria: {
    fontSize: 11,
    color: '#546e7a',
    marginBottom: 2,
  },
  barraFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barraEtiqueta: {
    fontSize: 11,
    color: '#78909c',
    width: 30,
  },
  barraFondo: {
    flex: 1,
    height: 4,
    backgroundColor: '#1c3548',
    borderRadius: 2,
    overflow: 'hidden',
  },
  barraRelleno: {
    height: '100%',
    borderRadius: 2,
  },
  barraPct: {
    fontSize: 11,
    fontWeight: '600',
    width: 38,
    textAlign: 'right',
  },
})
