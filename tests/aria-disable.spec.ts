import { test, expect } from '@playwright/test';

test('aria-disabled is not ignored', async ({ page }) => {
  await page.goto('http://aquamarine-willyt-64.tiiny.site');
  const button = await page.locator('#button')
  await expect(button).toBeDisabled();
});
