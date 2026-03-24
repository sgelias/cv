import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Em GitHub Actions, GITHUB_REPOSITORY = "owner/repo"
// Para project pages (username.github.io/repo), base precisa ser "/repo/"
const base = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
  : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
