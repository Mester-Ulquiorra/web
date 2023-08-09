# web
The frontend of the Ulquiorra UCP (User Control Panel). This does not contain the backend API!

## Build instructions

1.  ```sh
    git clone https://github.com/Mester-Ulquiorra/web.git
    cd web
    ```

2.  ```sh
    bun install
    bun run dev
    ```

    This will start a development server that you can view by opening `localhost:3000` in your browser.

3.  ```sh
    bun run build
    ```

    This will build the site and place the files in the `dist/` directory.

## Licenses

All of the code in this repository is under the [0BSD license](./LICENSE), unless specified otherwise.

The licenses of dependencies are in their respective folders in `node_modules/` when you install them with `bun install`.

[Astro](https://astro.build), the site generator used to build this site, is licensed under the [MIT license](https://github.com/withastro/astro/blob/main/LICENSE).

The Discord icon comes from [SVG Logos](https://github.com/gilbarbara/logos) and is licensed under the [CC0 license](https://github.com/gilbarbara/logos/blob/main/LICENSE.txt).

The bell, copy, gavel, hammer, home and menu icons come from [Material Design Icons](https://github.com/Templarian/MaterialDesign) and are licensed under the [Apache 2.0 license](https://github.com/Templarian/MaterialDesign/blob/master/LICENSE).
