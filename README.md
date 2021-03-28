# :car: SPOTZ CAR :car:

Find your brand new car. https://spotzcar.vercel.app/

## Technologies

This project was developed with the following technologies:

- [NuxtJS](https://github.com/axios/axios)
- [Typescript](https://github.com/axios/axios)
- [Docker](https://github.com/axios/axios)
- [Axios](https://github.com/axios/axios)
- [Formik](https://github.com/formium/formik)
- [Yup](https://github.com/jquense/yup)
- [Jest](https://github.com/facebook/jest)
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

## How to use it?

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] or higher + [Yarn][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/saulofilho/spotz-car

# Go into the repository
$ cd spotz-car

# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Setup for Docker

* Install Docker.
* Build an image from a Dockerfile: `docker build -t spotz-car .`
* Run the container: `docker run -it -p 5000:5000 spotz-car`
* Launch api: `docker-compose up`
* That's all! Go to http://localhost:5000/ to see live.

## API Rest

Endpoint: `https://us-central1-spotz-prod.cloudfunctions.net/function-sell-my-car/`

Get cars: `GET /announcements`
Post contact: `POST /contacts`

By default the objects will be sorted by `id` in order to have the most important objects first.

URL to query                   | Description
------------------------------ | ---------------------------
<code>GET</code> `/announcements`  | Return a list of `Cars`.
<code>POST</code> `/contacts`     | Post a form contact `Contacts`.

## Example

**Request**

    GET /announcements

**Return**

``` json
{
  "cars": [
    {
      "id": "string",
      "image": "string",
      "name": "string",
      "brand": "string",
      "km": 0,
      "price": 0
    }
  ],
  "count": 0,
  "properties": {
    "max_price": 0,
    "min_price": 0,
    "max_km": 0
  }
}
```

## Creator

**Saulo Filho**
- <https://github.com/saulofilho>


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
