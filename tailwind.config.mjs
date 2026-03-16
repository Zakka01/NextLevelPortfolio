// Configuration Tailwind pour toutes les variantes de la police Poly
import plugin from 'tailwindcss/plugin';

export default {
    theme: {
        extend: {
          fontFamily: {
            poly: "var(--font-polysans)",
          },
        },
      }
};
