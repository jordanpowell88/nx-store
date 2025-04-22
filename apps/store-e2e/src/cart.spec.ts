import { expect, test } from "@playwright/test";

test('can add product to cart', async ({ page }) => {
    await page.goto('/products/1');
    await page.click('button:has-text("Add to Cart")');
    
    const navItems = page.locator('nav ul li');
    await navItems.nth(2).click();
  
    await expect(page.locator('h1')).toContainText('Cart');
    await expect(page.locator('text=No items in cart')).not.toBeVisible();
    await expect(page.locator('text=Total: $')).toBeVisible();
  });
  
  test('can remove product from cart', async ({ page }) => {
    await page.goto('/products/1');
    await page.click('button:has-text("Add to Cart")');
    const navItems = page.locator('nav ul li');
    await navItems.nth(2).click();
    await page.click('button:has-text("X")');
    await expect(page.locator('text=No items in cart')).toBeVisible();
    await expect(page.locator('text=Total: $')).not.toBeVisible();
  });
  
  test('can clear cart', async ({ page }) => {
    await page.goto('/products/1');
    await page.click('button:has-text("Add to Cart")');
    const navItems = page.locator('nav ul li');
    await navItems.nth(2).click();
    await page.click('button:has-text("Clear Cart")');
    await expect(page.locator('text=No items in cart')).toBeVisible();
  });