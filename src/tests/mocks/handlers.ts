import { HttpResponse, http } from "msw";

export const dogsHandler = [
  http.get("https://api.thedogapi.com/v1/breeds", () => {
    return HttpResponse.json({
      apiResponse: [
        {
          weight: {
            imperial: "6 - 13",
            metric: "3 - 6",
          },
          height: {
            imperial: "9 - 11.5",
            metric: "23 - 29",
          },
          id: 1,
          name: "Affenpinscher",
          bred_for: "Small rodent hunting, lapdog",
          breed_group: "Toy",
          life_span: "10 - 12 years",
          temperament:
            "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
          origin: "Germany, France",
          reference_image_id: "BJa4kxc4X",
          image: {
            id: "BJa4kxc4X",
            width: 1600,
            height: 1199,
            url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
          },
        },
      ],
      totalCount: 1,
    });
  }),
];

export const dogHandler = [
  http.get("https://api.thedogapi.com/v1/breeds/:id", () => {
    return HttpResponse.json({
      id: 2,
      name: "Afghan Hound",
      weight: " 50 to 60 pounds",
      height: "25 to 27 inches at the shoulder",
      life_span: "10 to 13 years",
      bred_for: "Coursing and hunting",
      breed_group: "Hound",
    });
  }),
];

export const searchDogHandler = [
  http.get("https://api.thedogapi.com/v1/breeds/search", ({ request }) => {
    const name = new URL(request.url).searchParams.get("q");
    return HttpResponse.json({
      apiResponse: [
        {
          weight: {
            imperial: "6 - 13",
            metric: "3 - 6",
          },
          height: {
            imperial: "9 - 11.5",
            metric: "23 - 29",
          },
          id: 1,
          name: name,
          bred_for: "Small rodent hunting, lapdog",
          breed_group: "Toy",
          life_span: "10 - 12 years",
          temperament:
            "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
          origin: "Germany, France",
          reference_image_id: "BJa4kxc4X",
          image: {
            id: "BJa4kxc4X",
            width: 1600,
            height: 1199,
            url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
          },
        },
      ],
      totalCount: 1,
    });
  }),
];
