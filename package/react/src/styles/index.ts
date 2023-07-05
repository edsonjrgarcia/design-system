import { colors, fontSizes, fontWeights, fonts, lineHeights, radius, spacing } from "@media-recovery-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config
} = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height:'spacing',
        width:'spacing',
        
    },
    theme:{
        colors: colors,
        fontSizes: fontSizes,
        fontWeights: fontWeights,
        fonts: fonts,
        lineHeights: lineHeights,
        space: spacing,
        radii: radius,
    },
})