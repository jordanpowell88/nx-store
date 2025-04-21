import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});

test('has navigation', async ({ page }) => {
  await page.goto('/');
  // Get the navigation list items
  const navItems = page.locator('nav ul li');

  // Verify first nav item text and link
  await expect(navItems.nth(0)).toContainText('Home');
  await expect(navItems.nth(0).locator('a')).toHaveAttribute('href', '/');

  // Verify second nav item text and link  
  await expect(navItems.nth(1)).toContainText('Products');
  await expect(navItems.nth(1).locator('a')).toHaveAttribute('href', '/products');

  // Verify third nav item text and link
  await expect(navItems.nth(2)).toContainText('🛒');
  await expect(navItems.nth(2).locator('a')).toHaveAttribute('href', '/checkout');
})