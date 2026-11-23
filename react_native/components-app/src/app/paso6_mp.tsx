// Control de Inventario — Deyvi Rivera
// app/index.tsx — agrega al archivo existente

// ─── Paso 6 — Pantalla completa de detalle ───────────────────────────
import { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { BadgeEstado } from './paso3'
import { Card, FilaInfo } from './paso2'
import { ModalConfirm } from './paso5'

interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos6.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={estilos6.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

export function Paso6mp() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [log, setLog] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} ejecutado en SKU-1001`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={estilos6.safeArea}>
      {/* Cabecera fija — fuera del scroll */}
      <View style={estilos6.cabecera}>
        <View>
          <Text style={estilos6.cabNombre}>Laptop Lenovo T14</Text>
          <Text style={estilos6.cabCodigo}>SKU-1001 · Tecnología · Bodega Central</Text>
        </View>
        <BadgeEstado estado="activo" mostrarIcono tamaño={12} />
      </View>

      {/* Contenido desplazable */}
      <ScrollView
        contentContainerStyle={estilos6.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {/* Card de métricas */}
        <Card titulo="Métricas de inventario" subtitulo="Última actualización: hace 30 s">
          <FilaInfo etiqueta="Stock disponible" valor="78 unds. · mínimo 20" />
          <FilaInfo etiqueta="Valorización" valor="$ 1.240,00 c/u · $ 96.720,00 total" />
          <FilaInfo etiqueta="Último movimiento" valor="Entrada · 40 unds. · 15 nov" />
          <FilaInfo etiqueta="Rotación" valor="4,2 veces por mes" />
          <FilaInfo etiqueta="Conteo físico" valor="Deyvi Rivera · 15 nov 2026" />
        </Card>

        {/* Card de configuración */}
        <Card titulo="Configuración del producto">
          <FilaInfo etiqueta="Categoría" valor="Tecnología · Caja 12" />
          <FilaInfo etiqueta="Proveedor" valor="Distribuidora Andina" />
          <FilaInfo etiqueta="Ubicación" valor="Bodega Central · Pasillo A" />
          <FilaInfo etiqueta="Stock mínimo" valor="20 unidades" />
          <FilaInfo etiqueta="Responsable" valor="Deyvi Rivera" />
        </Card>

        {/* Card de acciones */}
        <Card titulo="Movimientos de inventario">
          <View style={estilos6.gridAcciones}>
            <BotonAccion
              etiqueta="Registrar entrada"
              color="#1565c0"
              onPress={() => pedirConfirmacion('Entrada de mercancía')}
            />
            <BotonAccion
              etiqueta="Registrar salida"
              color="#b71c1c"
              onPress={() => pedirConfirmacion('Salida de mercancía')}
            />
            <BotonAccion
              etiqueta="Ajustar stock"
              color="#2e7d32"
              onPress={() => pedirConfirmacion('Ajuste por conteo físico')}
            />
            <BotonAccion
              etiqueta="Ver movimientos"
              color="#6a1b9a"
              onPress={() => pedirConfirmacion('Consulta de movimientos')}
            />
          </View>
        </Card>

        {/* Card de log de actividad */}
        {log.length > 0 && (
          <Card titulo="Actividad reciente">
            {log.map((entrada, i) => (
              <Text key={i} style={estilos6.entradaLog}>{entrada}</Text>
            ))}
          </Card>
        )}
      </ScrollView>

      {/* Modal reutilizado del Paso 5 */}
      <ModalConfirm
        visible={modalVisible}
        titulo={`Confirmar: ${accionPendiente}`}
        mensaje={`¿Ejecutar "${accionPendiente}" en SKU-1001?\nEsta acción actualizará las existencias de la bodega.`}
        etiquetaConfirmar="Ejecutar"
        onConfirmar={ejecutarAccion}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const estilos6 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e7ef',
  },
  cabNombre: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a237e',
  },
  cabCodigo: {
    fontSize: 12,
    color: '#78909c',
    fontFamily: 'monospace',
    marginTop: 2,
  },
  scrollContenido: {
    padding: 16,
    gap: 14,
    paddingBottom: 40,
  },
  gridAcciones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  botonAccion: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: '45%',
    alignItems: 'center',
  },
  textoBotonAccion: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  entradaLog: {
    fontSize: 11,
    color: '#2e7d32',
    fontFamily: 'monospace',
    lineHeight: 18,
  },
})
