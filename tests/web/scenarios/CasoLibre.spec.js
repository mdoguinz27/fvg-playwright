import { test, expect } from "@playwright/test";
import { home } from "../pages/homePage";
import { product } from "../pages/productPage";
import { results } from "../pages/resultsPage";
import * as utils from "../utils/helpers";
test("Ofertas", async ({
  page,
}) => {
  // Paso 1: Navegar a la página principal
  await page.goto("/", { waitUntil: 'load' });
  console.log("Navegando a la página");

  // Paso 2: Ingresar código postal en modal de geolocalización
  await utils.verifyAndEnterPostalCode(page, "1419");
  console.log("Ingresando código postal");

  // Paso 3: Accede al menú Ofertas
  await page.locator(home.menuOfertas).waitFor({ state: 'visible' });
  await page.locator(home.menuOfertas).click();

  // Paso 4: Filtrar por marca y ordena menor precio
  const marcaFilter = page.locator(results.filterMarca);
  await marcaFilter.nth(3).waitFor({ state: 'visible' });
  await marcaFilter.nth(3).click();
  console.log("Filtra por marca");

  await page.locator(results.orderBySelect).waitFor({ state: 'visible' });
  await page.locator(results.orderBySelect).click();
  await page.getByRole("link", { name: "Menor precio" }).click();
  console.log("Ordena por Menor precio");

  // Paso 5: Selecciona el 1er producto del listado de resultados
  const products = page.locator(results.itemProduct);
  await products.first().waitFor({ state: 'visible' });
  await products.first().click();

  // Paso 6: Verifica precio del producto
  await expect(page.locator(product.price).first()).toBeVisible();

  // Paso 7: Agrega el producto al carrito
  await page.getByRole("button", { name: "Comprar" }).first().click();
  console.log("Agrega el producto al carrito");

  // Paso 8: Ingresa al carrito y verifica que el producto esté añadido
  await expect(page.getByRole("heading", { name: "Mi carrito" })).toBeVisible({ timeout: 20000 });
  console.log("Ingresa al carrito");

  await expect(page.getByText("finalizar compra")).toBeVisible();
  console.log("Verifica que exista el btn de Finalizar Compra");
});