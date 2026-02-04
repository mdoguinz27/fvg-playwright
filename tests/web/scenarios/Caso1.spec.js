import { test, expect } from "@playwright/test";
import { home } from "../pages/homePage";
import { product } from "../pages/productPage";
import { results } from "../pages/resultsPage";
import * as utils from "../utils/helpers";
test("Añade al carrito Heladera Drean", async ({ page }) => {
  // Paso 1: Navegar a la página principal
  await page.goto("/", { waitUntil: 'load' });
  console.log("Navega a la página principal");

  // Paso 2: Ingresar código postal en modal de geolocalización
  await utils.verifyAndEnterPostalCode(page, "1419");
  console.log("Ingresando código postal");

  // Paso 3: Busca producto
  const search = page.locator(home.searchField).first();
  await search.waitFor({ state: 'visible' });
  await search.fill(home.product);
  await page.keyboard.press('Enter');
  console.log("Busca el producto");

  // Paso 4: Selecciona el 1er producto del listado de resultados
  const items = page.locator(results.itemProduct);
  await items.first().waitFor({ state: 'visible' });
  await items.first().click();
  console.log("Selecciona el producto");

  //Paso 5: Verifica precio del producto esté visible
  await expect(page.locator(product.price).first()).toBeVisible();
  console.log("Producto disponible");

  // Paso 6: Agrega el producto al carrito
  await page.getByRole("button", { name: "Comprar" }).first().click();
  console.log("Añade al carrito");

  // Paso 7: Ingresa al carrito y verifica que el producto esté añadido
  await expect(page.getByRole("heading", { name: "Mi carrito" })).toBeVisible({ timeout: 20000 });
  console.log("Ingresa al carrito");

  await expect(page.getByText(home.product)).toBeVisible();
  console.log("Heladera Drean en el carrito!");
});


