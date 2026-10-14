import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { EPN } from '@/constants/epn-theme';


type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
    if (theme === 'primary') {
  return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: EPN.accent, borderRadius: 18 },
        ]}>
        <Pressable
          style={[styles.button, { backgroundColor: EPN.surface }]}
          onPress={(onPress)}>
          <FontAwesome name="picture-o" size={18} color={EPN.onSurface} style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: EPN.onSurface }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: EPN.text,
    fontSize: 16,
  },
});
