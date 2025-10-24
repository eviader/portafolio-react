# Configuración de EmailJS

Este proyecto usa EmailJS para el envío de correos desde el formulario de contacto. Sigue estos pasos para configurarlo:

## Paso 1: Crear una cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita (permite 200 emails/mes)

## Paso 2: Configurar un servicio de email

1. En el dashboard de EmailJS, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Conecta tu cuenta de correo (emanuel.viader@gmail.com)
5. Copia el **Service ID** que se genera

## Paso 3: Crear un template de email

1. Ve a **Email Templates** en el dashboard
2. Haz clic en **Create New Template**
3. Usa este contenido para el template:

**Subject:**
```
Nuevo mensaje de contacto de {{from_name}}
```

**Content:**
```
Has recibido un nuevo mensaje desde tu portafolio:

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}
```

4. Guarda el template y copia el **Template ID**

## Paso 4: Obtener tu Public Key

1. Ve a **Account** > **General**
2. Encuentra tu **Public Key** (también llamado User ID)
3. Cópialo

## Paso 5: Configurar las variables de entorno

1. Crea un archivo `.env` en la raíz del proyecto
2. Copia el contenido de `.env.example`:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

3. Reemplaza los valores con tus credenciales de EmailJS

## Paso 6: Probar el formulario

1. Reinicia el servidor de desarrollo si está corriendo:
```bash
npm run dev
```

2. Ve a la sección de contacto en tu sitio
3. Envía un mensaje de prueba
4. Deberías recibir el email en emanuel.viader@gmail.com

## Funcionalidades implementadas

✅ Formulario de contacto con validación
✅ Envío de emails a emanuel.viader@gmail.com
✅ Mensajes de confirmación (éxito/error)
✅ Estado de carga mientras se envía
✅ Icono de mail en la página principal que redirige al formulario
✅ Diseño responsive y animado

## Notas importantes

- **NUNCA** subas el archivo `.env` a GitHub (ya está en .gitignore)
- El plan gratuito de EmailJS permite 200 emails/mes
- Los emails pueden tardar unos segundos en llegar
- Si usas Gmail, es posible que los emails lleguen a spam la primera vez
