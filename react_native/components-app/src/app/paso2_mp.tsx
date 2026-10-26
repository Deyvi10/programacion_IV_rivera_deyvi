// ─── Paso 2 — children y composición (_mp: control de inventario) ──

import { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface CardProps {
  titulo: string
  subtitulo?: string
  children: ReactNode
}

export function CardMp({ titulo, subtitulo, children }: CardProps) {
  return (
    <View style={estilos2Mp.card}>
      <View style={estilos2Mp.cardCabecera}>
        <Text style={estilos2Mp.cardTitulo}>{titulo}</Text>
        {subtitulo && (
          <Text style={estilos2Mp.cardSubtitulo}>{subtitulo}</Text>
        )}
      </View>
      <View style={estilos2Mp.cardCuerpo}>{children}</View>
    </View>
  )
}

export function FilaInfoMp({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={estilos2Mp.fila}>
      <Text style={estilos2Mp.etiqueta}>{etiqueta}</Text>
      <Text style={estilos2Mp.valor}>{valor}</Text>
    </View>
  )
}

export function Paso2Mp() {
  return (
    <View style={estilos2Mp.fondo}>
      <Text style={estilos2Mp.titulo}>Detalle de producto</Text>

      <CardMp titulo="Camiseta Sport" subtitulo="Producto con mayor rotación">
        <FilaInfoMp etiqueta="Código" valor="PRD-001" />
        <FilaInfoMp etiqueta="Categoría" valor="Ropa" />
        <FilaInfoMp etiqueta="Precio" valor="$12.50" />
        <FilaInfoMp etiqueta="Stock" valor="25 unidades" />
        <FilaInfoMp etiqueta="Proveedor" valor="SportTex" />
      </CardMp>

      <CardMp titulo="Movimientos recientes">
        <FilaInfoMp etiqueta="Entradas" valor="40 unidades" />
        <FilaInfoMp etiqueta="Salidas" valor="15 unidades" />
        <FilaInfoMp etiqueta="Último movimiento" valor="hace 3 minutos" />
      </CardMp>
    </View>
  )
}

const estilos2Mp = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardCabecera: {
    backgroundColor: '#1565c0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 2,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  cardSubtitulo: {
    fontSize: 12,
    color: '#bbdefb',
  },
  cardCuerpo: {
    padding: 12,
    gap: 8,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  etiqueta: {
    fontSize: 13,
    color: '#546e7a',
    fontWeight: '500',
  },
  valor: {
    fontSize: 13,
    color: '#1a1a1a',
    fontFamily: 'monospace',
  },
})
