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
          address: "Meer en Vaart 290, 1068 LE Amsterdam",
          longitude: "4.806075",
          latitude: "52.3615422",
          datetime: "2020-06-20T18:00",
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
          description:
            "Developing our relation to the floor through all movement levels, using multiple floor-work patterns and phrases. Using levers and clear pathways, building up a vocabulary that can be used in further understanding the mechanics of movement. From basic floor-work patterns to advanced, complicated ones, floor acrobatics, handstands, coordinations.",
          teacher: "Manuela",
          dj: "",
          location: "OT301",
          address: "Overtoom 301, Amsterdam",
          longitude: "4.8656877",
          latitude: "52.3600834",
          datetime: "2020-06-06T19:00",
          maxDancers: 10,
          duration: 2,
          price: 10,
          imageUrl: "https://www.contactdance.org/sml-michelle-serve.png",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ecstatic Dance",
          description:
            "Ecstatic dance is a form of dance in which the dancers, sometimes without the need to follow specific steps, abandon themselves to the rhythm and move freely as the music takes them, leading to trance and a feeling of ecstasy",
          teacher: "",
          dj: "Navid",
          location: "Odessa",
          address: "Veemkade 259, 1019 CZ Amsterdam",
          longitude: "4.8656877",
          latitude: "52.3600834",
          datetime: "2020-06-06T19:00",
          maxDancers: 10,
          duration: 2,
          price: 15,
          imageUrl:
            "https://www.balispiritfestival.com/wp-content/uploads/2019/07/ecstatic-dance-balispirit-festival-ubud-min.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ballet Beginners",
          description: "",
          teacher: "Gordon",
          dj: "",
          location: "Chasse Theatre",
          address: "Overtoom 301, Amsterdam",
          longitude: "4.8656877",
          latitude: "52.3600834",
          datetime: "2020-06-06T19:00",
          maxDancers: 10,
          duration: 2,
          price: 10,
          imageUrl: "https://pbs.twimg.com/media/DzKWHHoX4AEkPcR.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Flamenco",
          description:
            "Flamenco baile is a dance of passion, courtship, expressing a wide range of situations ranging from sadness to joy. The technique is complex, differing depending on whether the performer is male (heavier use of the feet) or female (gentler, more sensual movements). Toque, or the art of guitar playing has long surpassed its original role as accompaniment. ",
          teacher: "Ester",
          dj: "",
          location: "International Dance Theatre",
          address: "Meer en Vaart 290, 1068 LE Amsterdam",
          longitude: "4.806075",
          latitude: "52.3615422",
          datetime: "2020-06-16T20:00",
          maxDancers: 10,
          duration: 2,
          price: 0,
          imageUrl:
            "https://www.ndt.nl/content/uploads/2020/02/BELLA-FIGURA-2020-%C2%A9-Joris-Jan-Bos-online-4_2022_1626_.jpg?t=38fe3b05cbb4bbc1bb28295c9d499c14",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "5Rhythms",
          description:
            "The five rhythms are Flowing, Staccato, Chaos, Lyrical and Stillness. They come together to create the Wave, a movement meditation practice. Rather than having steps to follow, each rhythm is a different energy field in which you find your own expression and choreography, thereby stretching your imagination as well as your body. Each rhythm is a teacher and you can expect to meet different and sometimes unknown aspect of yourself as your dance unfolds and your practice of the rhythms deepens over time.",
          teacher: "Miriam",
          dj: "Miriam",
          location: "The Jungle",
          address: "Tweede van Swindenstraat 26, 1093 VS Amsterdam",
          longitude: "4.926425099999999",
          latitude: "52.3617376",
          datetime: "2020-06-06T19:00",
          maxDancers: 10,
          duration: 2,
          price: 15,
          imageUrl:
            "https://images.unsplash.com/photo-1533106958148-daaeab8b83fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
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
