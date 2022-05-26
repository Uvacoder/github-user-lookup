# Github Lookup

Fetch publicly available information of any Github user, along with all their public repositories.

## Authors

-   [@rangshuman](https://www.github.com/rangshuman)

## UI

![Home Screen](https://ik.imagekit.io/angshumanroy/GitHub_Lookup/home?ik-sdk-version=javascript-1.4.3&updatedAt=1653498238026)

![Lookup Screen](https://ik.imagekit.io/angshumanroy/GitHub_Lookup/lookup_zYQepbW4Y?ik-sdk-version=javascript-1.4.3&updatedAt=1653557306741)

## Tech Stack

**Client:** Vite, Vue3, Vue-Router4, Axios, TailwindCSS

## Features

-   Fetch publicly availble data of any GitHub user.
-   Fetch list of all the public repositories of any GitHub user.

## Run Locally

Clone the project

```bash
  git clone https://github.com/rangshuman/github_lookup.git .
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## API Reference

#### Get user data

```http
  GET `https://api.github.com/users/${username}`
```

| Parameter  | Type     | Description                                                              |
| :--------- | :------- | :----------------------------------------------------------------------- |
| `username` | `string` | **Required**. Give the username for which you want to retrieve the data. |

#### Get item

```http
  GET `https://api.github.com/users/${username}/repos?per_page=10&page=${pageNumber}`
```

| Parameter  | Type     | Description                                                                 |
| :--------- | :------- | :-------------------------------------------------------------------------- |
| `per_page` | `string` | **Required**. Enter the number of repositories you want per page (max: 100) |
| `page`     | `string` | **Required**. Enter the page number                                         |

## Deployment

Deployed on Netlify

[https://lookup-github.netlify.app/](https://lookup-github.netlify.app/)
