// app/paso2_mp.tsx — Imágenes y botones (control de inventario)
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'

export function Paso2Mp() {
  return (
    <View style={styles.contenedor}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.logo}
      />
      <Text style={styles.titulo}>Registrar venta</Text>
      <Text style={styles.detalle}>Camiseta Sport · Stock disponible: 25</Text>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          pressed && styles.botonPresionado,
        ]}
        onPress={() => Alert.alert('Venta registrada', 'Se descontó 1 unidad del inventario.')}
      >
        <Text style={styles.textoBoton}>Vender 1 unidad</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  logo: {
    width: 80,
    height: 80,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
  },
  detalle: {
    fontSize: 13,
    color: '#777',
  },
  boton: {
    backgroundColor: '#2e7d32',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  botonPresionado: {
    backgroundColor: '#1b5e20',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
})
