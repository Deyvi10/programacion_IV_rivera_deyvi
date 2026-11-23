// Control de Inventario — Deyvi Rivera
// app/index.tsx — agrega al archivo existente
import { SafeAreaView, ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

// ─── Paso 4 — ScrollView y SafeAreaView ──────────────────────────────

const PRODUCTOS_DEMO = [
  { id: '1',  nombre: 'Laptop T14',        codigo: 'SKU-1001', modelo: 'Tecnología · Caja 12',       ocupacion: 88, stock: 72 },
  { id: '2',  nombre: 'Laptop T15',        codigo: 'SKU-1002', modelo: 'Tecnología · Caja 12',       ocupacion: 65, stock: 58 },
  { id: '3',  nombre: 'Silla Ergonómica',  codigo: 'SKU-2001', modelo: 'Mobiliario · Caja 04',       ocupacion: 92, stock: 45 },
  { id: '4',  nombre: 'Silla de Oficina',  codigo: 'SKU-2002', modelo: 'Mobiliario · Caja 04',       ocupacion: 35, stock: 90 },
  { id: '5',  nombre: 'Papel A4 · Caja',   codigo: 'SKU-3001', modelo: 'Papelería · Caja 02',        ocupacion: 41, stock: 82 },
  { id: '6',  nombre: 'Cuaderno A5',       codigo: 'SKU-4001', modelo: 'Papelería · Caja 02',        ocupacion: 89, stock: 45 },
  { id: '7',  nombre: 'Monitor 24 pulg.',  codigo: 'SKU-4002', modelo: 'Tecnología · Caja 09',       ocupacion: 95, stock: 30 },
  { id: '8',  nombre: 'Teclado Mecánico',  codigo: 'SKU-4003', modelo: 'Tecnología · Caja 09',       ocupacion: 22, stock: 95 },
  { id: '9',  nombre: 'Impresora Láser',   codigo: 'SKU-5001', modelo: 'Tecnología · Caja 15',       ocupacion: 60, stock: 99 },
  { id: '10', nombre: 'Archivador',        codigo: 'SKU-5002', modelo: 'Mobiliario · Caja 06',       ocupacion: 25, stock: 88 },
  { id: '11', nombre: 'Reserva General',   codigo: 'SKU-9999', modelo: 'Consumibles · Caja 01',      ocupacion: 2,  stock: 100 },
  { id: '12', nombre: 'Kit de Limpieza',   codigo: 'SKU-6010', modelo: 'Consumibles · Caja 01',      ocupacion: 15, stock: 60 },
]

interface BarraUsoProps {
  porcentaje: number
  etiqueta: string
}

function BarraUso({ porcentaje, etiqueta }: BarraUsoProps) {
  const color = porcentaje > 85 ? '#c62828'
              : porcentaje > 60 ? '#f57f17'
              : '#2e7d32'
  return (
    <View style={estilos4.barraFila}>
      <Text style={estilos4.barraEtiqueta}>{etiqueta}</Text>
      <View style={estilos4.barraFondo}>
        <View style={[estilos4.barraRelleno, { width: `${porcentaje}%` as any, backgroundColor: color }]} />
      </View>
      <Text style={[estilos4.barraPct, { color }]}>{porcentaje}%</Text>
    </View>
  )
}

function TarjetaProducto({ nombre, codigo, modelo, ocupacion, stock }: typeof PRODUCTOS_DEMO[0]) {
  return (
    <View style={estilos4.nodo}>
      <View style={estilos4.nodoEncabezado}>
        <Text style={estilos4.nodoNombre}>{nombre}</Text>
        <Text style={estilos4.nodoCodigo}>{codigo}</Text>
      </View>
      <Text style={estilos4.nodoCategoria}>{modelo}</Text>
      <BarraUso porcentaje={ocupacion} etiqueta="Ocup." />
      <BarraUso porcentaje={stock} etiqueta="Stock" />
    </View>
  )
}

export function Paso4mp() {
  return (
    <SafeAreaView style={estilos4.safeArea}>
      <View style={estilos4.header}>
        <Text style={estilos4.headerTitulo}>Inventario en bodega</Text>
        <Text style={estilos4.headerSub}>{PRODUCTOS_DEMO.length} productos registrados</Text>
      </View>
      <ScrollView
        style={estilos4.scroll}
        contentContainerStyle={estilos4.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {PRODUCTOS_DEMO.map((producto) => (
          <TarjetaProducto key={producto.id} {...producto} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const estilos4 = StyleSheet.create({
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
  nodo: {
    backgroundColor: '#132232',
    borderRadius: 10,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#1c3548',
  },
  nodoEncabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  nodoNombre: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  nodoCodigo: {
    fontSize: 12,
    color: '#4fc3f7',
    fontFamily: 'monospace',
  },
  nodoCategoria: {
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
    width: 36,
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
    width: 34,
    textAlign: 'right',
  },
})
