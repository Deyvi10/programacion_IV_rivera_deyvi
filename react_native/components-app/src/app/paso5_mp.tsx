// ─── Paso 5 — Modal de confirmación (_mp: inventario) ───────────────

import { useState } from 'react'
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'

interface ModalConfirmProps {
  visible: boolean
  titulo: string
  mensaje: string
  etiquetaConfirmar?: string
  etiquetaCancelar?: string
  onConfirmar: () => void
  onCancelar: () => void
}

export function ModalConfirmMp({
  visible,
  titulo,
  mensaje,
  etiquetaConfirmar = 'Confirmar',
  etiquetaCancelar = 'Cancelar',
  onConfirmar,
  onCancelar,
}: ModalConfirmProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancelar}
    >
      <Pressable style={estilos5Mp.fondo} onPress={onCancelar}>
        <Pressable style={estilos5Mp.dialogo} onPress={() => {}}>
          <Text style={estilos5Mp.dialogoTitulo}>{titulo}</Text>
          <Text style={estilos5Mp.dialogoMensaje}>{mensaje}</Text>
          <View style={estilos5Mp.botones}>
            <Pressable
              style={[estilos5Mp.boton, estilos5Mp.botonCancelar]}
              onPress={onCancelar}
            >
              <Text style={estilos5Mp.textoCancelar}>{etiquetaCancelar}</Text>
            </Pressable>
            <Pressable
              style={[estilos5Mp.boton, estilos5Mp.botonConfirmar]}
              onPress={onConfirmar}
            >
              <Text style={estilos5Mp.textoConfirmar}>{etiquetaConfirmar}</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  )
}

export function Paso5Mp() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionEjecutada, setAccionEjecutada] = useState<string | null>(null)

  return (
    <SafeAreaView style={estilos5Mp.safeArea}>
      <Text style={estilos5Mp.titulo}>Gestión de producto</Text>
      <Text style={estilos5Mp.subtitulo}>Camiseta Sport · PRD-001</Text>

      <View style={estilos5Mp.infoProducto}>
        <Text style={estilos5Mp.infoTexto}>Precio: $12.50</Text>
        <Text style={estilos5Mp.infoTexto}>Stock actual: 25 unidades</Text>
      </View>

      <View style={estilos5Mp.acciones}>
        <Pressable
          style={estilos5Mp.botonAccion}
          onPress={() => {
            setAccionEjecutada(null)
            setModalVisible(true)
          }}
        >
          <Text style={estilos5Mp.textoAccion}>Dar de baja del inventario</Text>
        </Pressable>
      </View>

      {accionEjecutada && (
        <View style={estilos5Mp.resultado}>
          <Text style={estilos5Mp.textoResultado}>{accionEjecutada}</Text>
        </View>
      )}

      <ModalConfirmMp
        visible={modalVisible}
        titulo="Dar de baja producto"
        mensaje={'¿Confirmas dar de baja Camiseta Sport?\nEl producto dejará de estar disponible para la venta.'}
        etiquetaConfirmar="Dar de baja"
        onConfirmar={() => {
          setModalVisible(false)
          setAccionEjecutada('Camiseta Sport dado de baja a las ' + new Date().toLocaleTimeString())
        }}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const estilos5Mp = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 24,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a237e',
  },
  subtitulo: {
    fontSize: 14,
    color: '#546e7a',
    marginTop: 4,
    fontFamily: 'monospace',
  },
  infoProducto: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 4,
    marginTop: 16,
    marginBottom: 32,
  },
  infoTexto: {
    fontSize: 14,
    color: '#37474f',
  },
  acciones: { gap: 12 },
  botonAccion: {
    backgroundColor: '#b71c1c',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  textoAccion: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  resultado: {
    marginTop: 24,
    backgroundColor: '#e8f5e9',
    borderRadius: 8,
    padding: 14,
  },
  textoResultado: {
    color: '#2e7d32',
    fontSize: 13,
    fontFamily: 'monospace',
  },
  fondo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogo: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    width: '85%',
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
  },
  dialogoTitulo: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  dialogoMensaje: {
    fontSize: 14,
    color: '#546e7a',
    lineHeight: 20,
  },
  botones: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  boton: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  botonCancelar: {
    backgroundColor: '#f5f5f5',
  },
  botonConfirmar: {
    backgroundColor: '#b71c1c',
  },
  textoCancelar: {
    color: '#424242',
    fontWeight: '600',
    fontSize: 14,
  },
  textoConfirmar: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
})
