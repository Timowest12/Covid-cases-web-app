const countries = () => Promise.resolve({
  data: [
    {
      CountryCode: 'BE',
      Country: 'Belgium',
      TotalCases: 254654,
    },
    {
      CountryCode: 'DE',
      Country: 'Germany',
      TotalCases: 110293,
    },
  ],
});

export default countries;
