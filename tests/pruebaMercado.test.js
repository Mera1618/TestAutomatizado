const { test, expect } = require("@playwright/test");

test("Prueba Técnica Mercado Libre busqueda y filtros para PS5", async ({
  page,
}) => {
  test.setTimeout(90000);

  await page.goto("https://www.mercadolibre.com/");
  await page.click("#MX");

  const buscador = page.locator("#cb1-edit");
  await buscador.fill("PlayStation 5");
  await page.keyboard.press("Enter");

  await page.click('text="Nuevo"');
  await page.waitForTimeout(2000);

  const filtroLocal = page.getByText("Local", { exact: true }).first();
  await filtroLocal.click();
  await page.waitForTimeout(2000);

  await page.click('button[aria-label="Más relevantes"]');

  await page.waitForTimeout(1000);

  await page.click('text="Mayor precio"');

  await page.waitForTimeout(4000);

  const productos = await page.evaluate(() => {
    const items = Array.from(
      document.querySelectorAll(".ui-search-result__wrapper")
    );
    return items.slice(0, 5).map((item, index) => {
      const nombre = item.querySelector("h2")?.innerText || "Play Station 5";
      const precio =
        item.querySelector(".andes-money-amount__fraction")?.innerText || "0";
      return {
        TOP: index + 1,
        NOMBRE: nombre.trim(),
        PRECIO: `$ ${precio}`,
      };
    });
  });

  console.log("\n--- LOS 5 PRIMEROS ---");
  console.table(productos);

  expect(productos.length).toBe(5);
});
