
import { When, Then } from '@cucumber/cucumber';
import { page } from '../hooks/hook';

When(/^I should see Watch Now link$/, async() => {
    await page.getByRole('link', { name: 'Watch Now' }).isVisible();
});

When(/^I click watch Now link$/,async () => {
    await page.getByRole('link', { name: 'Watch Now' }).click();
});

Then(/^I am redirected to search Hudl Fan page$/, async() => {
    await page.getByPlaceholder('Search Hudl Fan').isVisible();
});

Then(/^I should see the search option$/, async() => {
	await page.getByPlaceholder('Search Hudl Fan').click();
});

Then(/^I should able to type 'Ronaldo Ronaldo'$/, async() => {
    await page.getByPlaceholder('Search for an player, school').fill('Ronaldo Ronaldo');
});

Then(/^I should see record in the list$/, async() => {
    await page.getByRole('link', { name: 'RR Ronaldo Ronaldo Soccer #17' }).click({});
    await page.getByRole('heading', { name: 'Ronaldo Ronaldo', exact: true }).click({ timeout: 5000 });
});
