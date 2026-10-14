import { ScrollView, Text, View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { EPN } from '@/constants/epn-theme';

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

const FACTS: { value: string; label: string }[] = [
  { value: '1869', label: 'Fundación' },
  { value: 'Quito', label: 'Ecuador' },
  { value: 'Pública', label: 'Universidad' },
];

const SECTIONS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'school-outline',
    title: 'Historia',
    body:
      'La Escuela Politécnica Nacional fue fundada en 1869 durante el gobierno de Gabriel García Moreno. Es una de las instituciones de educación superior más antiguas y prestigiosas del Ecuador.',
  },
  {
    icon: 'cog-outline',
    title: 'Ingeniería y Ciencias',
    body:
      'Forma profesionales en ingenierías como Sistemas, Electrónica, Civil, Mecánica, Química y Geología, además de carreras en Ciencias como Física y Matemática.',
  },
  {
    icon: 'earth',
    title: 'Instituto Geofísico',
    body:
      'El Instituto Geofísico de la EPN vigila los volcanes y la actividad sísmica del país, un servicio clave para la seguridad de todos los ecuatorianos.',
  },
  {
    icon: 'telescope',
    title: 'Observatorio Astronómico',
    body:
      'La EPN administra el Observatorio Astronómico de Quito, uno de los observatorios más antiguos de Sudamérica, ubicado en el parque La Alameda.',
  },
];

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <View style={styles.logoCircle}>
          <MaterialCommunityIcons name="owl" size={48} color={EPN.onSurface} />
        </View>
        <Text style={styles.title}>Escuela Politécnica Nacional</Text>
        <View style={styles.accentBar} />
        <Text style={styles.subtitle}>Ciencia y tecnología al servicio del Ecuador</Text>
      </View>

      <View style={styles.factsRow}>
        {FACTS.map((fact) => (
          <View key={fact.label} style={styles.factCard}>
            <Text style={styles.factValue}>{fact.value}</Text>
            <Text style={styles.factLabel}>{fact.label}</Text>
          </View>
        ))}
      </View>

      {SECTIONS.map((section) => (
        <View key={section.title} style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconBadge}>
              <MaterialCommunityIcons name={section.icon} size={22} color={EPN.text} />
            </View>
            <Text style={styles.cardTitle}>{section.title}</Text>
          </View>
          <Text style={styles.cardBody}>{section.body}</Text>
        </View>
      ))}

      <Text style={styles.footer}>🦉 StickerSmash · Hecho con orgullo politécnico</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: EPN.primary,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
    gap: 16,
  },
  hero: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  logoCircle: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: EPN.surface,
    borderWidth: 4,
    borderColor: EPN.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    color: EPN.text,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  accentBar: {
    width: 56,
    height: 4,
    borderRadius: 2,
    backgroundColor: EPN.accent,
    marginVertical: 12,
  },
  subtitle: {
    color: EPN.textMuted,
    fontSize: 15,
    textAlign: 'center',
  },
  factsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  factCard: {
    flex: 1,
    backgroundColor: EPN.primaryAlt,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: EPN.accent,
  },
  factValue: {
    color: EPN.text,
    fontSize: 18,
    fontWeight: '700',
  },
  factLabel: {
    color: EPN.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
  card: {
    backgroundColor: EPN.primaryAlt,
    borderRadius: 14,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: EPN.accent,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  iconBadge: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: EPN.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    color: EPN.text,
    fontSize: 17,
    fontWeight: '600',
  },
  cardBody: {
    color: EPN.textMuted,
    fontSize: 14,
    lineHeight: 21,
  },
  footer: {
    color: EPN.textMuted,
    fontSize: 13,
    textAlign: 'center',
    marginTop: 8,
  },
});
