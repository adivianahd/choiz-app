**Choiz Challenge**


**Objetivo:**  
Desarrollar un formulario interactivo en Next.js que guíe al usuario a través de una serie de preguntas médicas y, basado en sus respuestas, muestre una recomendación personalizada. El proyecto está construido con TypeScript, utiliza Tailwind CSS para los estilos y está desplegado en Vercel.

**Criterios de Aceptación Implementados:**

1. **Pantalla de Bienvenida:**
   - Se implementó una pantalla inicial (`Welcome`) que da la bienvenida al usuario y lo introduce al formulario.
   - Diseño responsivo utilizando **Tailwind CSS**.

2. **Preguntas Médicas:**
   - El formulario incluye **cuatro preguntas médicas**, cada una con un tipo de respuesta:
     - **Respuesta única:** Selección de una opción entre varias.
     - **Respuesta múltiple:** Selección de varias opciones.
     - **Texto libre:** Entrada de texto (usando un campo de texto).
   - Las respuestas se guardan en un estado usando un hook y son persistentes a lo largo del formulario.
   - Si el usuario retrocede, las respuestas previamente seleccionadas se muestran correctamente.

3. **Pantalla de Recomendación:**
   - Al finalizar las preguntas, se muestra una **pantalla de recomendación** basada en las respuestas proporcionadas.
   - Las condiciones para cada recomendación se implementaron según las especificaciones del diseño (Figma).

4. **Integración con API:**
   - En la pantalla de recomendación, se realiza una llamada al endpoint `https://679938bebe2191d708b25ceb.mockapi.io/api/faqs` para obtener las **preguntas y respuestas frecuentes (FAQs)**.
   - Los datos obtenidos se muestran en la pantalla de recomendación, utilizando componentes dinámicos y estilos de **Tailwind CSS**.

5. **Mostrar Respuestas Anteriores:**
   - En la pantalla de recomendación, al hacer clic en "Seleccionar", se muestra un resumen de las **respuestas previamente dadas** en el formulario.

**Tecnologías Utilizadas:**
- **Next.js:** Para el enrutamiento y la renderización del lado del servidor (SSR).
- **TypeScript:** Para garantizar tipado seguro y un código más mantenible.
- **Tailwind CSS:** Para los estilos, asegurando un diseño responsivo y consistente.
- **React:** Para el manejo del estado de las respuestas y Fetch para realizar la llamada al endpoint de FAQs.
- **Vercel:** Para la publicación del proyecto.

**Despliegue en Vercel:**
- El proyecto está desplegado en Vercel, accesible a través de un enlace público.

- La URL del proyecto es: [Choiz](choiz-app.vercel.app).

**Instrucciones para Ejecutar el Proyecto Localmente:**
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/adivianahd/choiz-app
   ```
2. Instalar dependencias:
   ```bash
   cd choiz-app
   npm install
   ```
3. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir el navegador en `http://localhost:3000`.

**Capturas de Pantalla o Demo:**
- Se incluyen capturas de pantalla o un video demostrando el flujo completo del formulario, desde la pantalla de bienvenida hasta la pantalla de recomendación.

**Nota:**  
El diseño visual y las condiciones específicas para las recomendaciones se implementaron siguiendo las especificaciones del archivo de Figma proporcionado. El código está documentado y sigue buenas prácticas de desarrollo.

