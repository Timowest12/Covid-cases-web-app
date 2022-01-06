import '@testing-library/jest-dom/extend-expect';
import countries from '../mock/fetchData';

describe('test fetching API data', () => {
  it('test if countrie name fetched correctly', async () => {
    await countries().then((data) => expect(data.data[0].Country).toBe('Belgium'));
  });
  it('test if CountryCode fetch correctly', async () => {
    await countries().then((data) => expect(data.data[1].CountryCode).toBe('DE'));
  });
  it('test total number of cases correctly', async () => {
    await countries().then((data) => expect(data.data[1].TotalCases).toBe(110293));
  });
});
