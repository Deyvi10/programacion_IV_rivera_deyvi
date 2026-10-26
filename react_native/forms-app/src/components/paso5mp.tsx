// Control de Inventario — Deyvi Rivera
// app/index.tsx — añade debajo de styles4
import { useState } from 'react'
import { Alert, ScrollView, View, Text, StyleSheet, SafeAreaView, TextInput, Pressable } from 'react-native'

// Regex de SKU simple: 3 letras mayúsculas · guión · 4 dígitos
const REGEX_SKU = /^[A-Z]{3}-\d{4}$/

type CamposFormulario = {
  nombre: string
  codigo: string
  validador: string
}

type ErroresFormulario = {
  nombre: string | null
  codigo: string | null
  validador: string | null
}

function validar(campos: CamposFormulario): ErroresFormulario {
  const errores: ErroresFormulario = { nombre: null, codigo: null, validador: null }

  // Nombre: obligatorio, al menos 2 caracteres, sin espacios
  if (campos.nombre.trim().length === 0) {
    errores.nombre = 'El nombre del producto es obligatorio'
  } else if (campos.nombre.trim().length < 2) {
    errores.nombre = 'Debe tener al menos 2 caracteres'
  } else if (/\s/.test(campos.nombre)) {
    errores.nombre = 'No puede contener espacios'
  }

  // SKU: formato de código de inventario válido
  if (campos.codigo.trim().length === 0) {
    errores.codigo = 'El SKU es obligatorio'
  } else if (!REGEX_SKU.test(campos.codigo.trim().toUpperCase())) {
    errores.codigo = 'Formato inválido (ej. TEC-1001)'
  }

  // Stock mínimo: número entero entre 1 y 99
  const numeroValidador = Number(campos.validador)
  if (campos.validador.trim().length === 0) {
    errores.validador = 'El stock mínimo es obligatorio'
  } else if (!Number.isInteger(numeroValidador) || numeroValidador < 1 || numeroValidador > 99) {
    errores.validador = 'Stock mínimo inválido (1 – 99)'
  }

  return errores
}

function hayErrores(errores: ErroresFormulario): boolean {
  return Object.values(errores).some((e) => e !== null)
}

function CampoConError({
  etiqueta,
  children,
  error,
}: {
  etiqueta: string
  children: React.ReactNode
  error: string | null
}) {
  return (
    <View style={styles5.campoWrapper}>
      <Text style={styles5.etiqueta}>{etiqueta}</Text>
      {children}
      {error !== null && <Text style={styles5.textoError}>{error}</Text>}
    </View>
  )
}

export function Paso5mp() {
  const [campos, setCampos] = useState<CamposFormulario>({
    nombre: '',
    codigo: '',
    validador: '01',
  })
  const [errores, setErrores] = useState<ErroresFormulario>({
    nombre: null,
    codigo: null,
    validador: null,
  })
  const [enviado, setEnviado] = useState(false)

  function actualizarCampo(campo: keyof CamposFormulario, valor: string) {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    // Borra el error del campo mientras el usuario escribe
    if (errores[campo] !== null) {
      setErrores((prev) => ({ ...prev, [campo]: null }))
    }
  }

  function onSubmit() {
    const nuevosErrores = validar(campos)
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) return

    setEnviado(true)
    Alert.alert(
      'Producto registrado',
      `${campos.nombre} · SKU: ${campos.codigo.toUpperCase()} · Stock mínimo: ${campos.validador}\nResponsable: Deyvi Rivera`,
      [
        {
          text: 'Registrar otro',
          onPress: () => {
            setCampos({ nombre: '', codigo: '', validador: '01' })
            setErrores({ nombre: null, codigo: null, validador: null })
            setEnviado(false)
          },
        },
      ]
    )
  }

  return (
    <SafeAreaView style={styles5.contenedor}>
      <ScrollView
        contentContainerStyle={styles5.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles5.titulo}>Registrar Nuevo Producto</Text>
        <Text style={styles5.subtitulo}>
          Los campos marcados con * son obligatorios
        </Text>

        <CampoConError etiqueta="Nombre del producto *" error={errores.nombre}>
          <TextInput
            style={[
              styles5.campo,
              errores.nombre !== null && styles5.campoError,
            ]}
            value={campos.nombre}
            onChangeText={(v) => actualizarCampo('nombre', v)}
            placeholder="ej. Laptop Lenovo T14"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="SKU *" error={errores.codigo}>
          <TextInput
            style={[
              styles5.campo,
              errores.codigo !== null && styles5.campoError,
            ]}
            value={campos.codigo}
            onChangeText={(v) => actualizarCampo('codigo', v)}
            placeholder="TEC-1001"
            autoCapitalize="characters"
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Stock mínimo *" error={errores.validador}>
          <TextInput
            style={[
              styles5.campo,
              errores.validador !== null && styles5.campoError,
            ]}
            value={campos.validador}
            onChangeText={(v) => actualizarCampo('validador', v)}
            placeholder="10"
            keyboardType="number-pad"
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />
        </CampoConError>

        <Pressable
          style={({ pressed }) => [
            styles5.botonEnviar,
            pressed && styles5.botonEnviarPresionado,
            enviado && styles5.botonEnviarExito,
          ]}
          onPress={onSubmit}
        >
          <Text style={styles5.textoBoton}>
            {enviado ? '✓ Registrado' : 'Registrar producto'}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles5 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  scroll: { padding: 20, paddingBottom: 40 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1565c0', marginBottom: 4 },
  subtitulo: { fontSize: 12, color: '#888', marginBottom: 20 },
  campoWrapper: { marginBottom: 16 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
  },
  campoError: {
    borderColor: '#e53935',
    backgroundColor: '#fff8f8',
  },
  textoError: {
    fontSize: 12,
    color: '#e53935',
    marginTop: 4,
  },
  botonEnviar: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  botonEnviarPresionado: { backgroundColor: '#0d47a1' },
  botonEnviarExito: { backgroundColor: '#2e7d32' },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})
