// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  about: ["index", "bibliography"/*, "features", "glossary"*/],
  classes: [
    {
      type: "category",
      label: "Classes",
      collapsible: false,
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Classes",
        description: " ",
        slug: "/classes",
        keywords: [],
      },
      items: [
        "Activity",
        "Airport",
        "Appointment",
        "Birth",
        "Birthday",
        "BirthdayParty",
        "BuddhistTemple",
        "Cafe",
        "Church",
        "Class",
        "Community",
        "Company",
        "Conference",
        "Congregation",
        "Consortium",
        "Corporation",
        "Death",
        "Event",
        "Family",
        "File",
        "Government",
        "Graduation",
        "Group",
        "HinduTemple",
        "Holiday",
        "Hospital",
        "Hotel",
        "Landmark",
        "Link",
        "Meeting",
        "Meetup",
        "Mosque",
        "Nationality",
        "Organization",
        "Party",
        "Person",
        "Place",
        "Pub",
        "Restaurant",
        "School",
        "Synagogue",
        "Temple",
        "Thing",
        "University",
        "Venue",
        "Wedding",
      ],
    },
  ],
  properties: [
    {
      type: "category",
      label: "Properties",
      collapsible: false,
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Properties",
        description: " ",
        slug: "/properties",
        keywords: [],
      },
      items: [
        "ancestor",
        "aunt",
        //"birth", // FIXME
        "brother",
        "child",
        "colleague",
        "cousin",
        "daughter",
        //"death", // FIXME
        "descendant",
        "father",
        "grandchild",
        "granddaughter",
        "grandfather",
        "grandmother",
        "grandparent",
        "grandson",
        "husband",
        "knows",
        //"link", // FIXME
        "member",
        "memberOf",
        "mother",
        "nephew",
        "nibling",
        "niece",
        "parent",
        "partner",
        "pibling",
        //"place", // FIXME
        "relative",
        "sibling",
        "sister",
        "son",
        "spouse",
        "stepchild",
        "stepdaughter",
        "stepfather",
        "stepmother",
        "stepparent",
        "stepson",
        "uncle",
        "wife",
      ],
    },
  ],
  downloads: ["downloads"],
  sdk: [
    {
      type: "category",
      label: "Frameworks",
      collapsible: false,
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Software Development Kits (SDKs)",
        description: " ",
        slug: "/sdk",
        keywords: [],
      },
      items: [{ type: "autogenerated", dirName: "sdk" }],
    },
  ],
};

export default sidebars;
