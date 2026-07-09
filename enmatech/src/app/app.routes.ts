import { Routes } from '@angular/router';
import { HomeComponent} from './pages/home/home';
import { ProductosComponent } from './pages/productos/productos';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto';
import { CarritoComponent } from './pages/carrito/carrito';
import { CheckoutComponent } from './pages/checkout/checkout';
import { ContactoComponent } from './pages/contacto/contacto';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'producto/:id', component: DetalleProductoComponent },
{ path: 'carrito', component: CarritoComponent },
{ path: 'checkout', component: CheckoutComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', component: NotFound } // El comodín de error 404 siempre debe ir al final
];