export const mockPageProps = {
  slug: "sample-tour",
  data: {
    sections: [
      {
        _type: "pricing_section",
        title: "Sample Pricing Section",
      },
    ],
    payment: {
      room_options: [
        {
          title: {
            en: "Standard Room",
          },
          rating: 4,
          description: {
            en: "A comfortable standard room",
          },
          price: {
            discounted_price: {
              en: 200,
            },
            currency_symbol: {
              en: "$",
            },
          },
        },
      ],
      room_sharing_options: [
        {
          title: {
            en: "Double Room",
          },
          image: "/path/to/double-room-image.jpg",
          description: {
            en: "A cozy double room",
          },
          price: {
            discounted_price: {
              en: 250,
            },
            currency_symbol: {
              en: "$",
            },
          },
        },
      ],
      extras: [
        {
          _key: "city1",
          city_name: {
            en: "City 1",
          },
          visits: [
            {
              _key: "visit1",
              title: {
                en: "Excursion 1",
              },
              description: {
                en: "A fascinating excursion",
              },
              image: "/path/to/excursion1-image.jpg",
              price: {
                discounted_price: {
                  en: 50,
                },
                currency_symbol: {
                  en: "$",
                },
              },
            },
          ],
        },
      ],
    },
  },
  locale: "en",
  globals: {},
  promo: ["data"],
  from: 1678876800000,
  to: 1678963200000,
};
