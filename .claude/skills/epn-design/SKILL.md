---
name: epn-design
description: Aplica la identidad visual de la Escuela Politécnica Nacional (EPN, Quito) a la app StickerSmash — colores azul oscuro y rojo institucionales, estilo sobrio y académico. Úsala cuando el usuario pida diseño, colores, tema o estilo "EPN" / "Politécnica".
---

# Diseño EPN para StickerSmash

Identidad basada en los símbolos de la EPN: el escudo usa **azul oscuro** (el conocimiento) y la bandera combina **rojo** y **azul oscuro**. La mascota es el **Búho Politécnico**.

> Los HEX son aproximaciones: la EPN no publica un manual con códigos exactos. Si el usuario da códigos oficiales, reemplázalos en `src/constants/epn-theme.ts`.

## Paleta

| Token        | HEX       | Uso                                                 |
|--------------|-----------|-----------------------------------------------------|
| `primary`    | `#0B2A5B` | Fondo de pantallas, header y tab bar (azul EPN)     |
| `primaryAlt` | `#14396F` | Tarjetas, modal de emojis, superficies elevadas     |
| `accent`     | `#C8102E` | Bordes de botones principales, tab activa (rojo EPN)|
| `text`       | `#FFFFFF` | Texto e íconos sobre azul                           |
| `textMuted`  | `#A9B8D0` | Tabs inactivas, texto secundario                    |
| `surface`    | `#FFFFFF` | Relleno de botones principales                      |
| `onSurface`  | `#0B2A5B` | Texto/íconos sobre botones blancos                  |

## Cómo aplicarlo

1. Crear `src/constants/epn-theme.ts` con la paleta como `export const EPN = { ... } as const;` e importar desde `@/constants/epn-theme`. No escribir HEX sueltos en los componentes.
2. Reemplazar los colores del tutorial:
   - `#25292e` (fondo oscuro) → `EPN.primary`
   - `#ffd33d` (amarillo de acento) → `EPN.accent`
   - `#fff` en textos/íconos → `EPN.text`
   - fondo del modal de emojis → `EPN.primaryAlt`
3. Archivos que normalmente se tocan: `src/app/(tabs)/_layout.tsx` (header + tab bar), `src/app/(tabs)/index.tsx`, `src/app/(tabs)/about.tsx`, `src/app/+not-found.tsx`, `src/components/Buttons.tsx`, `CircleButton.tsx`, `IconButton.tsx`, `EmojiPicker.tsx`.
4. Si el usuario lo pide, usar el título "EPN" en el header de About.

## Estilo

- Sobrio y académico: bordes redondeados moderados (`borderRadius` 10–14), sin degradados ni sombras exageradas.
- Rojo solo como acento (bordes, tab activa, botón +), nunca como fondo de pantalla.
- Mantener contraste: texto blanco sobre azul, azul sobre blanco.

## Reglas para este usuario

- Cambiar **solo** colores/estilos. No borrar íconos, bordes, componentes ni lógica existente.
- No revertir `import * as MediaLibrary from 'expo-media-library/legacy'` (el import normal truena en su Expo Go).
- Al terminar: `npx tsc --noEmit` y `npx expo lint`.
- No usar el escudo ni el logo oficial de la EPN como imagen sin que el usuario lo pida y aporte el archivo.
