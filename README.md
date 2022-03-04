# Simple TodoList by Remix

## Docs

- [Official Remix Docs](https://remix.run/docs)
- [Official Prisma Docs](https://www.prisma.io/docs/)

## Ideology

This is a simple project written with [Remix](https://remix.run/), [MaterialUI](https://mui.com/) and [i18next](https://www.i18next.com/) for easy app localization.

The Remix ideology implies a seamless connection between front-end and back-end parts.

Each page used in the project uses 2 functions to work with the backend:

- `actions` - a function that processes all submissions coming from the form and sends their processing to the backend part
- `loader` - а function that executes on page load, collects data from the database, other available resources and makes it available on the page

To create a form, you need to use the tag `<Form></Form>` from `remix`
After submitting the form, the data will be passed to the `action` function for processing.
How to use multiple forms on one page, you ask?
The creators of the Remix came up with an interesting solution - each `<button />` tag also contains `name` and `value` props, thus we can determine which form was called on the page in the action function. ([Read more about it](https://remix.run/docs/en/v1/pages/faq#how-do-i-handle-multiple-forms-in-one-route), [Official video guide](https://www.youtube.com/watch?v=w2i-9cYxSdc))

For simplicity and speed of development, [Prisma](https://www.prisma.io/) was chosen as the ORM system, working together with [PostgreSQL](https://www.postgresql.org/).

The following file structure is supported in the project:

- `/api/` - project back end files
- `/components/` - custom components written for use in a project
- `/helpers/` - helper Functions Used
- `/material/` - base theme used in the project
- `/routes/` - routes available in the project
- `/scenes/` - pre-designed pages, ready to use
- `/types/` - types used in the project
- `/prisma/` - database schema used in the project and the folder containing the database migrations
- `/public` - Public files and locales used in the project



## INSTALLATION

- To get started, create your .env file, as in the example .env.example
- After that apply all migrations to your Database

```sh
yarn run prisma migrate dev
```

- Start application in dev mode

```sh
yarn run dev
```

This starts your app in development mode, rebuilding assets on file changes.

> Note: The app will initially be available at [localhost:3000](http://localhost:3000/)

## Deployment

First, build your app for production:

```sh
yarn run build
```

Then run the app in production mode:

```sh
yarn start
```

Now you'll need to pick a host to deploy it to.

## DataBase

To create new migration

```sh
yarn run prisma migrate dev --name
```

## Packages used in the project

- [Remix i18n](https://github.com/sergiodxa/remix-i18next)
- [Remix Form Auth](https://github.com/sergiodxa/remix-auth-form)
- [Prisma](https://github.com/prisma/prisma)
- [MaterialUi](https://github.com/mui/material-ui)
- [i18Nex](https://www.i18next.com/)
- [date-fns](https://github.com/date-fns/date-fns)
- [Eslint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)
