# EnergyLine — Bélgica (energyline.be)

Landing de llamadas para Bélgica en **francés (`/fr/`)** y **neerlandés (`/nl/`)** (Selectra Internacional). HTML estático + Vite, publicada en **Netlify** desde `main`.

Datos tomados de la hoja *Javier x Selectra International Mapping* (proveedores partner, números BE FR / BE NL, dominio, horario L–V 8–19 h).

## Estructura
| Ruta | Página |
|---|---|
| `/` | Selector de idioma. Netlify redirige solo a `/fr/` o `/nl/` según el idioma del navegador (`netlify.toml`) |
| `/fr/` | Landing BE FR (Wallonie + Bruxelles) |
| `/nl/` | Landing BE NL (Vlaanderen + Brussel) |
| `/fr/mentions-legales`, `/fr/politique-de-confidentialite`, `/fr/politique-cookies` | Legales FR |
| `/nl/wettelijke-vermeldingen`, `/nl/privacybeleid`, `/nl/cookiebeleid` | Legales NL |

Cada página tiene un botón FR/NL arriba para cambiar de idioma (Bruselas). **Los anuncios deben apuntar directamente a `/fr/` o `/nl/`**, nunca a la portada.

## Teléfono por grupo de anuncios
Añade `?n=<id>` a la URL final. Sin parámetro se muestra el primero de cada idioma.

| Idioma | `?n=` | Lead source Zoho | Número |
|---|---|---|---|
| FR | `12540` (defecto) | be-ei-pa-javierdfr12540 | 078 48 49 77 |
| FR | `12541` | be-ei-pa-javierdfr12541 | 078 48 50 58 |
| FR | `12542` | be-ei-pa-javierdfr12542 | 078 48 50 77 |
| NL | `12543` (defecto) | be-ei-pa-javierdnl12543 | 02 588 43 79 |
| NL | `12544` | be-ei-pa-javierdnl12544 | 02 586 19 39 |
| NL | `12545` | be-ei-pa-javierdnl12545 | 02 320 30 61 |

Cada idioma solo acepta sus propios ids. El número se mantiene en las páginas legales durante la visita y se envía a GTM como evento `phone_variant`.

## H1 personalizable
`?h1=Texte du titre&em=mot`: cambia el titular y resalta la palabra (se inserta como texto, sin HTML).

## Pendiente
- `GTM-XXXXXXX` → contenedor GTM de Bélgica (todas las páginas).
- `+34 XXX XXX XXX` → teléfono del editor en mentions légales / wettelijke vermeldingen.
- Cookiebot: dar de alta `energyline.be`, banner en FR y NL.
- Dominio: comprar `energyline.be` y conectarlo en Netlify.
