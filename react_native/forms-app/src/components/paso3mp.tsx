// Control de Inventario — Deyvi Rivera
// app/index.tsx — añade debajo de styles2
import { SectionList, View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Paso3EncabezadoSeccion } from './paso3Encabezadomp'
import { ProductoInventario } from './Paso1mp'
import { Paso1FilaUnidadmp } from './paso1FilaServidormp'

type SeccionBodega = {
  title: string
  region: string
  data: ProductoInventario[]
}

const SECCIONES_BODEGA: SeccionBodega[] = [
  {
    title: 'Bodega Central (Zona Tecnología)',
    region: 'bod-01',
    data: [
      { id: 't1', nombre: 'Laptop Lenovo T14',  codigo: 'TEC-1001', activo: true  },
      { id: 't2', nombre: 'Monitor Dell 24"',   codigo: 'TEC-1002', activo: true  },
      { id: 't3', nombre: 'Impresora HP Laser', codigo: 'TEC-2001', activo: true  },
    ],
  },
  {
    title: 'Bodega Norte (Zona Consumibles)',
    region: 'bod-02',
    data: [
      { id: 't4', nombre: 'Papel Bond A4',   codigo: 'CON-1005', activo: true  },
      { id: 't5', nombre: 'Tóner HP 85A',    codigo: 'CON-3001', activo: false },
    ],
  },
  {
    title: 'Bodega Sur (Zona Mobiliario)',
    region: 'bod-03',
    data: [
      { id: 't6', nombre: 'Silla Ergonómica',     codigo: 'MUE-0001', activo: true  },
      { id: 't7', nombre: 'Archivador Metálico',  codigo: 'MUE-0002', activo: false },
      { id: 't8', nombre: 'Mesa de Trabajo',      codigo: 'MUE-0500', activo: true  },
    ],
  },
]

export function Paso3mp() {
  return (
    <SafeAreaView style={styles3.contenedor}>
      <Text style={styles3.tituloPantalla}>Control de Inventario por Bodega</Text>
      <SectionList<ProductoInventario, SeccionBodega>
        sections={SECCIONES_BODEGA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaUnidadmp unidad={item} />}
        renderSectionHeader={({ section }) => (
          <Paso3EncabezadoSeccion titulo={section.title} region={section.region} />
        )}
        stickySectionHeadersEnabled
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: '#e0e0e0', marginHorizontal: 12 }} />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  )
}

const styles3 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  tituloPantalla: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#1565c0',
  },
  encabezadoTitulo: { fontSize: 13, fontWeight: '700', color: '#0d47a1' },
  encabezadoRegion: { fontSize: 11, color: '#546e7a', fontFamily: 'monospace' },
})
