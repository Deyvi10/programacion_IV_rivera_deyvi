// ─── Paso 3 — Props opcionales y BadgeStock (_mp: inventario) ──────

import { StyleSheet, Text, View } from 'react-native'

type EstadoStock = 'disponible' | 'bajo' | 'critico' | 'agotado'

interface BadgeStockProps {
  estado: EstadoStock
  tamaño?: number
  mostrarIcono?: boolean
}

const COLOR_ESTADO: Record<EstadoStock, { fondo: string; texto: string }> = {
  disponible: { fondo: '#e8f5e9', texto: '#2e7d32' },
  bajo: { fondo: '#fff8e1', texto: '#f57f17' },
  critico: { fondo: '#fce4ec', texto: '#c62828' },
  agotado: { fondo: '#f5f5f5', texto: '#616161' },
}

const ICONO_ESTADO: Record<EstadoStock, string> = {
  disponible: '●',
  bajo: '◐',
  critico: '✕',
  agotado: '○',
}

export function BadgeStock({
  estado,
  tamaño = 12,
  mostrarIcono = false,
}: BadgeStockProps) {
  const colores = COLOR_ESTADO[estado]
  return (
    <View style={[estilos3Mp.badge, { backgroundColor: colores.fondo }]}>
      {mostrarIcono && (
        <Text style={[estilos3Mp.icono, { color: colores.texto, fontSize: tamaño }]}>
          {ICONO_ESTADO[estado]}{' '}
        </Text>
      )}
      <Text style={[estilos3Mp.textoBadge, { color: colores.texto, fontSize: tamaño }]}>
        {estado.toUpperCase()}
      </Text>
    </View>
  )
}

interface FilaProductoProps {
  nombre: string
  codigo: string
  estado: EstadoStock
  stock?: number
}

function FilaProducto({ nombre, codigo, estado, stock }: FilaProductoProps) {
  return (
    <View style={estilos3Mp.fila}>
      <View style={estilos3Mp.infoIzq}>
        <Text style={estilos3Mp.nombreProducto}>{nombre}</Text>
        <Text style={estilos3Mp.codigoTexto}>{codigo}</Text>
      </View>
      <View style={estilos3Mp.infoDer}>
        {stock !== undefined && (
          <Text style={estilos3Mp.stock}>{stock} u.</Text>
        )}
        <BadgeStock estado={estado} mostrarIcono tamaño={11} />
      </View>
    </View>
  )
}

export function Paso3Mp() {
  return (
    <View style={estilos3Mp.fondo}>
      <Text style={estilos3Mp.titulo}>Estado del inventario</Text>
      <FilaProducto nombre="Camiseta Sport" codigo="PRD-001" estado="disponible" stock={25} />
      <FilaProducto nombre="Audífonos Bluetooth" codigo="PRD-002" estado="bajo" stock={8} />
      <FilaProducto nombre="Teclado Mecánico" codigo="PRD-003" estado="critico" stock={2} />
      <FilaProducto nombre="Mochila Urbana" codigo="PRD-004" estado="disponible" stock={15} />
      <FilaProducto nombre="Gorra Deportiva" codigo="PRD-005" estado="agotado" />
    </View>
  )
}

const estilos3Mp = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 8,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 8,
  },
  fila: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  infoIzq: { gap: 2 },
  infoDer: { alignItems: 'flex-end', gap: 4 },
  nombreProducto: { fontSize: 14, fontWeight: '600', color: '#1a1a1a' },
  codigoTexto: { fontSize: 12, color: '#90a4ae', fontFamily: 'monospace' },
  stock: { fontSize: 11, color: '#546e7a' },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  icono: { fontWeight: '700' },
  textoBadge: { fontWeight: '600' },
})
