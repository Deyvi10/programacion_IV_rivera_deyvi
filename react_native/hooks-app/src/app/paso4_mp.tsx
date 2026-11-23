// Control de Inventario — Deyvi Rivera
// app/index.tsx — agrega la función Paso4
import { useWindowDimensions, useColorScheme } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

export function Paso4mp() {
  const { width, height, scale, fontScale } = useWindowDimensions()
  const esquema = useColorScheme()   // 'light' | 'dark' | null

  // Paleta dinámica según el tema del sistema
  const colores = {
    fondo:     esquema === 'dark' ? '#0d1b2a' : '#f5f5f5',
    tarjeta: esquema === 'dark' ? '#1a2a3a' : '#ffffff',
    texto:     esquema === 'dark' ? '#e8eaed' : '#1a1a1a',
    detalle: esquema === 'dark' ? '#9aa0a6' : '#666666',
    borde:     esquema === 'dark' ? '#2d3e50' : '#e0e0e0',
  }

  // Layout adaptativo: 1 columna en pantallas angostas, 2 en anchas
  const columnas = width > 500 ? 2 : 1
  const anchoTarjeta = (width - 48 - (columnas - 1) * 12) / columnas

  const productos = [
    { nombre: 'Laptop T14',       codigo: 'SKU-1001', estado: 'disponible' },
    { nombre: 'Silla Ergonómica', codigo: 'SKU-2005', estado: 'disponible' },
    { nombre: 'Papel A4 · Caja',  codigo: 'SKU-3002', estado: 'stock_bajo' },
    { nombre: 'Monitor 24 pulg.', codigo: 'SKU-4001', estado: 'disponible' },
  ]

  return (
    <View style={[styles.contenedor, { backgroundColor: colores.fondo }]}>
      <Text style={[styles.titulo, { color: colores.texto }]}>
        Inventario de Bodega
      </Text>

      {/* Información de pantalla */}
      <View style={[styles.tarjeta, {
        backgroundColor: colores.tarjeta,
        borderColor: colores.borde,
        width: '100%',
      }]}>
        <Text style={[styles.etiqueta, { color: colores.detalle }]}>
          Pantalla: {Math.round(width)} × {Math.round(height)} dp
          {'  '}·{'  '}escala: {scale.toFixed(1)}
          {'  '}·{'  '}tema: {esquema ?? 'sin preferencia'}
        </Text>
      </View>

      {/* Grid de productos con columnas adaptativas */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
        {productos.map(producto => (
          <View
            key={producto.nombre}
            style={[styles.tarjeta, {
              backgroundColor: colores.tarjeta,
              borderColor: colores.borde,
              width: anchoTarjeta,
            }]}
          >
            <Text style={[styles.nombreProducto, { color: colores.texto }]}>
              {producto.nombre}
            </Text>
            <Text style={[styles.codigoProducto, { color: colores.detalle }]}>
              {producto.codigo}
            </Text>
            <Text style={{
              fontSize: 12,
              fontWeight: '600',
              color: producto.estado === 'disponible' ? '#2e7d32' : '#c62828',
            }}>
              {producto.estado.replace('_', ' ').toUpperCase()}
            </Text>
          </View>
        ))}
      </View>

      {/* Nota sobre useSafeAreaInsets */}
      <View style={[styles.nota, { borderColor: colores.borde }]}>
        <Text style={[styles.notaTexto, { color: colores.detalle }]}>
          💡 useSafeAreaInsets() — disponible desde react-native-safe-area-context
          (ya visto en Página 2 como SafeAreaView). El hook expone los valores
          numéricos {'{'}top, bottom, left, right{'}'} para cuando necesitas
          posicionar elementos manualmente respetando el notch y la barra de inicio.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  ciclos: {
    fontSize: 20,
    fontWeight: '700',
    color: '#071d11',
  },
  tarjeta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#dff3f3',
    gap: 6,
  },
  etiqueta: {
    width: '100%',
    padding: 10,
    borderRadius: 16,
    borderWidth: 2,
    gap: 3,
  },
  estado: {
    fontSize: 15,
    fontWeight: '600',
  },
  latencia: {
    fontSize: 15,
    fontWeight: '600',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonActivo: {
    backgroundColor: '#5a8068',
  },
  botonDeshabilitado: {
    backgroundColor: '#ee82e9',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  botonSecundario: {
    paddingVertical: 10,
  },
  textoSecundario: {
    color: '#1565c0',
    fontSize: 14,
  },
  input: {
    color: '#1565c0',
    fontSize: 14,
  },
  formulario: {
    width: '100%',
    gap: 12,
  },
  nota: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  notaTexto: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  nombreProducto: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  codigoProducto: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
})
