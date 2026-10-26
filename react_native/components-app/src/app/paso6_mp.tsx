// ─── Paso 6 — Pantalla completa de detalle (_mp: inventario) ────────

import { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { CardMp, FilaInfoMp } from './paso2_mp'
import { BadgeStock } from './paso3_mp'
import { ModalConfirmMp } from './paso5_mp'

interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos6Mp.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={estilos6Mp.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

export function Paso6Mp() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [log, setLog] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} ejecutado en Camiseta Sport`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={estilos6Mp.safeArea}>
      <View style={estilos6Mp.cabecera}>
        <View>
          <Text style={estilos6Mp.cabNombre}>Camiseta Sport</Text>
          <Text style={estilos6Mp.cabCodigo}>PRD-001 · Ropa</Text>
        </View>
        <BadgeStock estado="bajo" mostrarIcono tamaño={12} />
      </View>

      <ScrollView
        contentContainerStyle={estilos6Mp.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        <CardMp titulo="Datos del inventario" subtitulo="Última actualización: hace 30 s">
          <FilaInfoMp etiqueta="Stock" valor="8 unidades" />
          <FilaInfoMp etiqueta="Stock mínimo" valor="10 unidades" />
          <FilaInfoMp etiqueta="Precio unitario" valor="$12.50" />
          <FilaInfoMp etiqueta="Valor en stock" valor="$100.00" />
          <FilaInfoMp etiqueta="Ubicación" valor="Pasillo 2 · Estante 4" />
        </CardMp>

        <CardMp titulo="Proveedor">
          <FilaInfoMp etiqueta="Nombre" valor="SportTex" />
          <FilaInfoMp etiqueta="País" valor="Ecuador" />
          <FilaInfoMp etiqueta="Contacto" valor="ventas@sporttex.ec" />
          <FilaInfoMp etiqueta="Última entrega" valor="hace 5 días" />
          <FilaInfoMp etiqueta="Tiempo de reposición" valor="3 días hábiles" />
        </CardMp>

        <CardMp titulo="Acciones">
          <View style={estilos6Mp.gridAcciones}>
            <BotonAccion
              etiqueta="Vender"
              color="#1565c0"
              onPress={() => pedirConfirmacion('Venta de 1 unidad')}
            />
            <BotonAccion
              etiqueta="Reponer"
              color="#2e7d32"
              onPress={() => pedirConfirmacion('Reposición de stock')}
            />
            <BotonAccion
              etiqueta="Proveedor"
              color="#6a1b9a"
              onPress={() => pedirConfirmacion('Contacto con proveedor')}
            />
            <BotonAccion
              etiqueta="Dar de baja"
              color="#b71c1c"
              onPress={() => pedirConfirmacion('Baja del producto')}
            />
          </View>
        </CardMp>

        {log.length > 0 && (
          <CardMp titulo="Actividad reciente">
            {log.map((entrada, i) => (
              <Text key={i} style={estilos6Mp.entradaLog}>{entrada}</Text>
            ))}
          </CardMp>
        )}
      </ScrollView>

      <ModalConfirmMp
        visible={modalVisible}
        titulo={`Confirmar: ${accionPendiente}`}
        mensaje={`¿Ejecutar "${accionPendiente}" en Camiseta Sport?\nEsta acción modificará el inventario.`}
        etiquetaConfirmar="Ejecutar"
        onConfirmar={ejecutarAccion}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const estilos6Mp = StyleSheet.create({
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
