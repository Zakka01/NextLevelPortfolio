// Configuration Tailwind pour toutes les variantes de la police Poly
import plugin from 'tailwindcss/plugin';

export default {
  theme: {
    extend: {
      fontFamily: {
        polysans: [
          'PolySansBulky',
          'PolySansBulkyMono',
          'PolySansBulkyWide',
          'PolySansMedian',
          'PolySansMedianMono',
          'PolySansMedianWide',
          'PolySansNeutral',
          'PolySansNeutralMono',
          'PolySansNeutralWide',
          'PolySansSlim',
          'PolySansSlimMono',
          'PolySansSlimWide',
          'PolySansBulkyItalic',
          'PolySansBulkyMonoItalic',
          'PolySansBulkyWideItalic',
          'PolySansMedianItalic',
          'PolySansMedianMonoItalic',
          'PolySansMedianWideItalic',
          'PolySansNeutralItalic',
          'PolySansNeutralMonoItalic',
          'PolySansNeutralWideItalic',
          'PolySansSlimItalic',
          'PolySansSlimMonoItalic',
          'PolySansSlimWideItalic',
          'sans-serif'
        ]
      }
    }
  },
  plugins: [plugin(function() {})]
};
