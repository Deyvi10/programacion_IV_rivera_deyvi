// Control de Inventario — Deyvi Rivera
// app/index.tsx — agrega al archivo existente
import { StyleSheet, Text, View } from 'react-native'
// ─── Paso 3 — Props opcionales ───────────────────────────────────────

type EstadoProducto = 'activo' | 'degradado' | 'inactivo' | 'error' | 'mantenimiento'

interface BadgeEstadoProps {
  estado: EstadoProducto
  tamaño?: number           // opcional — valor por defecto: 12
  mostrarIcono?: boolean    // opcional — valor por defecto: false
}

const COLOR_ESTADO: Record<EstadoProducto, { fondo: string; texto: string }> = {
  activo:    { fondo: '#e8f5e9', texto: '#2e7d32' },
  degradado: { fondo: '#fff8e1', texto: '#f57f17' },
  inactivo:  { fondo: '#f5f5f5', texto: '#616161' },
  error:     { fondo: '#fce4ec', texto: '#c62828' },
  mantenimiento: { fondo: '#e3e9ff', texto: '#2559bb' },
}

const ICONO_ESTADO: Record<EstadoProducto, string> = {
  activo:    '●',
  degradado: '◐',
  inactivo:  '○',
  error:     '✕',
  mantenimiento: '+',
}

const ETIQUETA_ESTADO: Record<EstadoProducto, string> = {
  activo:    'DISPONIBLE',
  degradado: 'STOCK BAJO',
  inactivo:  'SIN MOVIMIENTO',
  error:     'AGOTADO',
  mantenimiento: 'EN REPOSICIÓN',
}

export function BadgeEstado({
  estado,
  tamaño = 12,
  mostrarIcono = false,
}: BadgeEstadoProps) {
  const colores = COLOR_ESTADO[estado]
  return (
    <View style={[estilos3.badge, { backgroundColor: colores.fondo }]}>
      {mostrarIcono && (
        <Text style={[estilos3.icono, { color: colores.texto, fontSize: tamaño }]}>
          {ICONO_ESTADO[estado]}{' '}
        </Text>
      )}
      <Text style={[estilos3.textoBadge, { color: colores.texto, fontSize: tamaño }]}>
        {ETIQUETA_ESTADO[estado]}
      </Text>
    </View>
  )
}

interface FilaProductoProps {
  nombre: string
  ubicacion: string
  estado: EstadoProducto
  diasReposicion?: number  // días estimados para reposición — opcional
}

function FilaProducto({ nombre, ubicacion, estado, diasReposicion }: FilaProductoProps) {
  return (
    <View style={estilos3.fila}>
      <View style={estilos3.infoIzq}>
        <Text style={estilos3.nombreProducto}>{nombre}</Text>
        <Text style={estilos3.ubicacionTexto}>{ubicacion}</Text>
      </View>
      <View style={estilos3.infoDer}>
        {diasReposicion !== undefined && (
          <Text style={estilos3.diasTexto}>{diasReposicion} días</Text>
        )}
        <BadgeEstado estado={estado} mostrarIcono tamaño={11} />
      </View>
    </View>
  )
}

export function Paso3mp() {
  return (
    <View style={estilos3.fondo}>
      <Text style={estilos3.titulo}>Estado del inventario</Text>
      <FilaProducto nombre="Laptop T14"       ubicacion="Bodega Central · Pasillo A" estado="activo"        diasReposicion={2}  />
      <FilaProducto nombre="Silla Ergonómica" ubicacion="Bodega Norte · Pasillo B" estado="mantenimiento" diasReposicion={0}  />
      <FilaProducto nombre="Papel A4 · Caja"  ubicacion="Bodega Sur · Pasillo C"   estado="degradado"     diasReposicion={12} />
      <FilaProducto nombre="Monitor 24''"     ubicacion="Bodega Central · Pasillo A" estado="error"                         />
      <FilaProducto nombre="Teclado Mecánico" ubicacion="Bodega Norte · Pasillo B" estado="inactivo"                       />
    </View>
  )
}

const estilos3 = StyleSheet.create({
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
  ubicacionTexto: { fontSize: 12, color: '#90a4ae', fontFamily: 'monospace' },
  diasTexto: { fontSize: 11, color: '#546e7a' },
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
