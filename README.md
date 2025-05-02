## Running the Project with Bun

If you prefer to use Bun as your package manager, follow these steps:

1. **Install Bun**:
   If you haven't installed Bun yet, you can do so by running:
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. **Install Dependencies**:
   Navigate to your project directory in the terminal and run:
   ```bash
   bun install
   ```

3. **Start the Development Server**:
   After the dependencies are installed, you can start the development server with:
   ```bash
   bun run dev
   ```

4. **Open Your Browser**:
   Once the server is running, open your web browser and go to `http://localhost:3000` (or the port specified in your Vite configuration) to see your application in action.

5. **Build for Production** (optional):
   If you want to create a production build of your application, you can run:
   ```bash
   bun run build
   ```

6. **Preview the Production Build** (optional):
   To preview the production build locally, you can run:
   ```bash
   bun run serve
   ```

Make sure to check your `package.json` file for any specific scripts or configurations that might differ from the standard setup.
