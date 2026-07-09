import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  categoria: string;
  especificaciones: { [clave: string]: string };
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Laptop Dell - Core i7 11th Gen',
      precio: 1250,
      descripcion: 'Potencia pura con 16GB de RAM. Ideal para compilar en Java y gestionar bases de datos sin interrupciones.',
      imagen: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80',
      categoria: 'Computación',
      especificaciones: {
        'Marca': 'Dell',
        'Modelo de CPU': 'Intel Core i7',
        'Tamaño de RAM': '16 GB',
        'Disco Duro': '512 GB SSD',
        'Sistema Operativo': 'Windows 11 Pro'
      }
    },
    {
      id: 2,
      nombre: 'Samsung Galaxy S23 Ultra',
      precio: 1100,
      descripcion: 'El smartphone definitivo. Rendimiento extremo y la mejor cámara del mercado para fotografía móvil.',
      imagen: '/imagenes/s23-ultra.jpeg', 
      categoria: 'Smartphones',
      especificaciones: {
        'Marca': 'Samsung',
        'Pantalla': '6.8 pulgadas AMOLED',
        'Almacenamiento': '256 GB',
        'Cámara Principal': '200 MP',
        'S-Pen': 'Incluido'
      }
    },
    {
      id: 3,
      nombre: 'Mando Inalámbrico PlayStation 4',
      precio: 65,
      descripcion: 'Control de máxima precisión, perfecto para explorar las calles de Los Santos o dominar la cancha.',
      imagen: '/imagenes/mando-ps4.webp', 
      categoria: 'Gaming',
      especificaciones: {
        'Marca': 'Sony',
        'Conectividad': 'Bluetooth',
        'Batería': 'Recargable integrada',
        'Compatibilidad': 'PS4, PC, Móvil'
      }
    },
    {
      id: 4,
      nombre: 'Grand Theft Auto V (PS4)',
      precio: 29,
      descripcion: 'El clásico mundo abierto. Prepara tus misiones y atracos mientras esperamos la llegada de GTA VI.',
      imagen: '/imagenes/gta5.jpeg', 
      categoria: 'Videojuegos',
      especificaciones: {
        'Desarrollador': 'Rockstar Games',
        'Plataforma': 'PlayStation 4',
        'Género': 'Acción / Mundo Abierto',
        'Clasificación': 'Adultos (M)'
      }
    },
    {
      id: 5,
      nombre: 'NBA 2K24 (PS4)',
      precio: 49,
      descripcion: 'La experiencia definitiva de baloncesto. Recrea los mejores duelos históricos de la liga.',
      imagen: '/imagenes/nba2k24.jpg', 
      categoria: 'Videojuegos',
      especificaciones: {
        'Desarrollador': '2K Sports',
        'Plataforma': 'PlayStation 4',
        'Género': 'Deportes',
        'Multijugador': 'Sí'
      }
    },
    {
      id: 6,
      nombre: 'Monitor UltraWide 29"',
      precio: 250,
      descripcion: 'Pantalla ultra ancha ideal para tener tu código a un lado y la vista previa de tu proyecto al otro.',
      imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80',
      categoria: 'Periféricos',
      especificaciones: {
        'Marca': 'LG',
        'Tamaño de pantalla': '29 pulgadas',
        'Resolución': '2560 x 1080',
        'Tasa de refresco': '75 Hz'
      }
    },
    {
      id: 7,
      nombre: 'Teclado Mecánico Switch Blue',
      precio: 85,
      descripcion: 'Respuesta táctil inigualable para largas horas de escritura y programación. Retroiluminación RGB.',
      imagen: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80',
      categoria: 'Periféricos',
      especificaciones: {
        'Tipo de Switch': 'Azul (Táctil y Sonoro)',
        'Iluminación': 'RGB personalizable',
        'Conexión': 'USB',
        'Distribución': 'Inglés US'
      }
    },
    {
      id: 8,
      nombre: 'Audífonos Gamer 7.1',
      precio: 75,
      descripcion: 'Sonido envolvente para escuchar los pasos con claridad y micrófono con cancelación de ruido.',
      imagen: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=80',
      categoria: 'Gaming',
      especificaciones: {
        'Sonido': 'Surround 7.1 Virtual',
        'Micrófono': 'Cancelación de ruido',
        'Conexión': 'USB',
        'Almohadillas': 'Memory Foam'
      }
    },
    {
      id: 9,
      nombre: 'Mousepad XL Pro',
      precio: 25,
      descripcion: 'Superficie extendida negra para mouse y teclado. Deslizamiento perfecto y precisión milimétrica.',
      imagen: '/imagenes/mousepad.jpg',
      categoria: 'Accesorios',
      especificaciones: {
        'Tamaño': '900mm x 400mm',
        'Grosor': '3mm',
        'Material base': 'Goma antideslizante',
        'Bordes': 'Cosidos reforzados'
      }
    },
    {
      id: 10,
      nombre: 'Silla Ergonómica Pro',
      precio: 190,
      descripcion: 'Cuida tu postura durante las sesiones intensas de estudio universitario o tus maratones frente a la pantalla.',
      imagen: '/imagenes/silla.webp',
      categoria: 'Mobiliario',
      especificaciones: {
        'Material': 'Malla transpirable',
        'Soporte lumbar': 'Ajustable',
        'Apoyabrazos': '3D (Altura, ángulo y profundidad)',
        'Capacidad': 'Hasta 130 kg'
      }
    }
  ];

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  obtenerProductoPorId(id: number): Producto | undefined {
    return this.productos.find(producto => producto.id === id);
  }
}