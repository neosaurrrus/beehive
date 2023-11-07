import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Estimation Game/);
  await expect(page.getByRole('heading', { name: 'The Estimation Game' })).toBeVisible();
});

