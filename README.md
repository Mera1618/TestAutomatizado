# TestAutomatizado

Prueba Técnica

La siguiente prueba consiste en realizar los siguentes pasos dentro de la tienda en linea de mercado libre:

1.  Entra en la página web
2.  Selecciona México como país
3.  Busca el término "playstation 5"
4.  Filtrar por condición "Nuevos"
5.  Filtrar por ubicación "Cdmx"
6.  Orden de "mayor a "menor precio"
7.  Obtén el nombre y el precio de los primeros 5 productos
8.  Imprime estos productos en la consola

Este test se realizo con Playwright y Javascript como su lenguaje.
Para su correcta ejecución se debe instalar Playwright, siga los pasos a continuación:

# Instalación de Playwright

En su consola ingre el siguiente comando: npm init playwright@latest
Dentro de lainstalción le pregunrtara si quiere instalar los githuib actions y el emulador en ambos colocar la s y permitir la instalación.

# Ejecución de las pruebas

Una vez instaladas las herramietnas ingreser el siguiente comando: npx playwright test --project=chromium --workers=1 --headed

Esto va a desplegar la ejeción en tiempo real en donde se podran observar los pasos que se estan realizando
Una vez concluida la prueba se cerrar
