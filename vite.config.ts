import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'MyTestLibrary',
      entry: 'src/index.ts',
      formats: ['umd', 'cjs', 'es']
    },
  }
});
