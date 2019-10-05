require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `D&D SRD Online`,
    description: `An online repository for the D&D System Reference Document`,
    author: `@MrLeebo`,
    menuLinks: [
      { link: "/monsters", name: "Monsters" },
      { link: "/spells", name: "Spells" },
      { link: "/skills", name: "Skills" },
      { link: "/races", name: "Races" },
      { link: "/classes", name: "Classes" },
      { link: "/equipment", name: "Equipment" },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `@mosch/gatsby-source-github`,
      options: {
        user: "adrpadua",
        repository: "5e-database",
        tree: true,
        releases: false,
        secrets: {
          token: process.env.GITHUB_ACCESS_TOKEN,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node, object, isArray }) => {
          if (node.internal.type !== "GithubFile") return node.name
          const [, label] = /5e-SRD-([a-zA-Z-]+)\.json/.exec(node.base)
          return label.replace(/-/g, "")
        },
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: ["title", "tags", "type"],
        resolvers: {
          AbilityScores: {
            title: node => node.full_name,
            tags: node => [node.name],
            path: node => node.fields.slug,
            type: () => "Ability Score",
          },
          Conditions: {
            title: node => node.name,
            path: node => node.fields.slug,
            type: () => "Condition",
          },
          Classes: {
            title: node => node.name,
            path: node => node.fields.slug,
            type: () => "Class",
          },
          DamageTypes: {
            title: node => node.name,
            path: node => node.fields.slug,
            type: () => "Damage Type",
          },
          Equipment: {
            title: node => node.name,
            path: node => node.fields.slug,
            type: () => "Equipment",
          },
          EquipmentCategories: {
            title: node => node.name,
            path: node => node.fields.slug,
            type: () => "Equipment Category",
          },
          Features: {
            title: node => node.name,
            path: node => node.fields.slug,
            type: () => "Feature",
          },
          Languages: {
            title: node => node.name,
            path: node => node.fields.slug,
            type: () => "Language",
          },
          MagicSchools: {
            title: node => node.name,
            path: node => node.fields.slug,
            type: () => "Magic School",
          },
          Monsters: {
            title: node => node.name,
            path: node => node.fields.slug,
            type: () => "Monster",
          },
          Proficiencies: {
            title: node => `Proficiency: ${node.name}`,
            tags: node => [node.type],
            path: node => node.fields.slug,
            type: () => "Proficiency",
          },
          Races: {
            title: node => node.name,
            path: node => node.fields.slug,
            type: () => "Race",
          },
          Skills: {
            title: node => node.name,
            path: node => node.fields.slug,
            type: () => "Skill",
          },
          Spellcasting: {
            title: node => `${node.class.name} Spellcasting`,
            path: node => node.fields.slug,
            type: () => "Spellcasting Class",
          },
          Spells: {
            title: node => node.name,
            path: node => node.fields.slug,
            type: () => "Spell",
          },
          StartingEquipment: {
            title: node => `${node.class.name} Starting Equipment`,
            path: node => node.fields.slug,
            type: () => "Starting Equipment",
          },
          Subclasses: {
            title: node => node.name,
            path: node => node.fields.slug,
            type: () => "Subclass",
          },
          Subraces: {
            title: node => node.name,
            path: node => node.fields.slug,
            type: () => "Subrace",
          },
          Traits: {
            title: node => node.name,
            path: node => node.fields.slug,
            type: () => "Trait",
          },
          WeaponProperties: {
            title: node => node.name,
            path: node => node.fields.slug,
            type: () => "Weapon Property",
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `D&D SRD Online`,
        short_name: `D&D SRD`,
        start_url: `/`,
        background_color: `#e7040f`,
        theme_color: `#e7040f`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline",
  ],
}
