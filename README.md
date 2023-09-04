# web
The frontend of the Ulquiorra UCP (User Control Panel). This does not contain the backend API!

## Build instructions

1.  ```sh
    git clone https://github.com/Mester-Ulquiorra/web.git
    cd web
    ```

2.  ```sh
    npm install
    npm run dev
    ```

    This will start a development server that you can view by opening `localhost:3000` in your browser.

3.  ```sh
    npm run build
    ```

    This will build the site and place the files in the `dist/` directory.

## Licenses

All of the code in this repository is under the [0BSD license](./LICENSE), unless specified otherwise.

The licenses of dependencies are in their respective folders in `node_modules/` when you install them with `npm install`.

[Astro](https://astro.build), the site generator used to build this site, is licensed under the [MIT license](https://github.com/withastro/astro/blob/main/LICENSE).
