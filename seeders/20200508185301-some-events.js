"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "events",
      [
        {
          title: "Double Skin | Double Mind",
          description:
            "DS/DM is a way of preparing the body for dance that is inherent to your thinking and your imagination. It needs a connection with your own choices, also during the improvisation with other elements and materials. The experience creates a condition and an opening, it is not something fixed by rules that say: this is how you should dance. It is rather the opposite, you use it, and then you contrast it in an open field of intervention and manipulation.",
          teacher: "Suzan Tunca",
          dj: "",
          location: "ICK",
          address: "",
          longitude: "",
          latitude: "",
          datetime: new Date(),
          maxDancers: 10,
          duration: 2,
          price: 0,
          imageUrl:
            "https://www.ickamsterdam.com/public_data/diapo/academy/1466014366/thumb/dsdm-web.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Floor Improvisation",
          description: "",
          teacher: "Manuela",
          dj: "",
          location: "OT301",
          address: "Meer en Vaart 290, 1068 LE Amsterdam",
          longitude: "4.8656877",
          latitude: "52.3600834",
          datetime: new Date(),
          maxDancers: 10,
          duration: 2,
          price: 10,
          imageUrl: "https://www.contactdance.org/sml-michelle-serve.png",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Passion Dance",
          description: "",
          teacher: "Maria",
          dj: "",
          location: "International Dance Theatre",
          address: "",
          longitude: "",
          latitude: "",
          datetime: new Date(),
          maxDancers: 10,
          duration: 2,
          price: 0,
          imageUrl:
            "https://www.ndt.nl/content/uploads/2020/02/BELLA-FIGURA-2020-%C2%A9-Joris-Jan-Bos-online-4_2022_1626_.jpg?t=38fe3b05cbb4bbc1bb28295c9d499c14",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("events", null, {});
  },
};
