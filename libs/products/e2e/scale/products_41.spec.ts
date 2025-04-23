import { test, expect } from '@playwright/test';

test('can navigate to products page', async ({ page }) => {
    await page.goto('/');
    
    // Click the Products link
    await page.click('text=Products');
    
    // Verify we're on the products page
    await expect(page).toHaveURL('/products');
    
    // Verify products page heading
    await expect(page.locator('h1')).toContainText('Welcome to Products');
  
    // Verify product list items
    const productItems = page.locator('[data-testid="product-thumbnail"]');
  
    // Wait for products API request to complete
    await page.waitForResponse('https://fakestoreapi.com/products');
    await expect(productItems.nth(0).locator('a')).toHaveAttribute('href', '/products/1')
    await expect(productItems.nth(1).locator('a')).toHaveAttribute('href', '/products/2');
    await expect(productItems.nth(2).locator('a')).toHaveAttribute('href', '/products/3');
    await expect(productItems.nth(3).locator('a')).toHaveAttribute('href', '/products/4');
    await expect(productItems.nth(4).locator('a')).toHaveAttribute('href', '/products/5');
    await expect(productItems.nth(5).locator('a')).toHaveAttribute('href', '/products/6');
    await expect(productItems.nth(6).locator('a')).toHaveAttribute('href', '/products/7');
    await expect(productItems.nth(7).locator('a')).toHaveAttribute('href', '/products/8');
    await expect(productItems.nth(8).locator('a')).toHaveAttribute('href', '/products/9');
    await expect(productItems.nth(9).locator('a')).toHaveAttribute('href', '/products/10');
    await expect(productItems.nth(10).locator('a')).toHaveAttribute('href', '/products/11');
    await expect(productItems.nth(11).locator('a')).toHaveAttribute('href', '/products/12');
    await expect(productItems.nth(12).locator('a')).toHaveAttribute('href', '/products/13');
    await expect(productItems.nth(13).locator('a')).toHaveAttribute('href', '/products/14');
    await expect(productItems.nth(14).locator('a')).toHaveAttribute('href', '/products/15');
    await expect(productItems.nth(15).locator('a')).toHaveAttribute('href', '/products/16');
    await expect(productItems.nth(16).locator('a')).toHaveAttribute('href', '/products/17');
    await expect(productItems.nth(17).locator('a')).toHaveAttribute('href', '/products/18');
    await expect(productItems.nth(18).locator('a')).toHaveAttribute('href', '/products/19');
    await expect(productItems.nth(19).locator('a')).toHaveAttribute('href', '/products/20');
  
    // Click first product thumbnail
    await productItems.nth(0).click();
  
    // Verify navigation to first product's details page
    await expect(page).toHaveURL('/products/1');
  });
  
  test('can navigate to product details page', async ({ page }) => {
    await page.goto('/products/1');
    await expect(page.locator('h1')).toContainText('Fjallraven');
    await expect(page.locator('img')).toHaveAttribute('src', 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');
  });
