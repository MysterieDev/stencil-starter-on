![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

(i) Zur Besseren Lesbarkeit kann die Readme in einem Vorschau-Editor geöffnet werden.

# Gruppenmitglieder
Anna-Lena Kubat @annalenakbt

Antje Schmollinger @Antje-Claudia

Julian Fleischmann @julianfleischmann

Olga Merz @olgaluisemerz

Rosanna Wagner @WagnerRosanna

# Component-Description
Alle Komponenten enthalten jeweils ihre eigene Readme. Hier trotzdem nochmal etwas zusammengefasst aufgeführt.
## Hero-Banner
Ist ein Banner, welcher ein Bild und optional Text mit einem Button enthalten kann
### Variablen pflicht
- image-src: Pfad zum Bild
- image-alt-text: Alttext

### Variablen optional
- heading: Überschrift (2. Ordnung)
- text: Text unter der Überschrift
- link-href: link, dargestellt als Button

### Example-Code-Snippet
```HTML
<grpsix-herobanner image-src="pfad-zum-bild" image-alt-text="Alttext" heading="Heading 1" text="Hallo Welt!"  link-text="klick mich!" link-href="#"></grpsix-herobanner>
```
---

## Recipe Gallery
Ist eine Übersicht aller Rezepte
### Variablen
- Keine

### Example-Code-Snippet
```HTML
<grpsix-recipe-gallery></grpsix-recipe-gallery>
```
---

## Recipe Card
Ist eine Komponente zum Anzeigen eines bestimmten Rezeptes anhand einer ID
### Variablen
- recipe-id: Rezept-ID

### Example-Code-Snippet
```HTML
<grpsix-recipe-card recipe-id="40"></grpsix-recipe-card>
```
---

## Newsletter-Anmeldung
Ist ein Banner, der sich über die gesamte Breite des Bildschirms zieht und ein Anmeldeformular für einen Newsletter enthält
### Variablen
- website-name: Name der Website / des Blogs

### Example-Code-Snippet
```HTML
<grpsix-newsletter website-name="Unser"></grpsix-newsletter>
```
---

## Foodfact-Cards
Karten, die ein Bild eines Lebensmittels sowie Informationen zu diesem enthalten
### Variablen
- source-one: Pfad zu Bild 1
- alt-one: Alttext zu Bild 1
- source-two: Pfard zu Bild 2
- alt-two: Alttext zu Bild 2
- source-three: Pfard zu Bild 3
- alt-three: Alttext zu Bild 3

### Example-Code-Snippet
```HTML
<grpsix-foodfacts source-one="Erdbeere.jpeg" alt-one="Eine ganze und eine halbe Erdbeere mit Blattgrün." source-two="Erdnuss.jpeg" alt-two="Zwei Erdnüsse ohne und zwei Erdnüsse mit Schale." source-three="Spargel.jpeg" alt-three="Mehrere grüne Spargel, die auf einer Fläche liegen."></grpsix-foodfacts>
```
---

## Brightness-Slider
Slider, mit dem die Helligkeit der gesamten Seite / des gesamten Blogs verändert werden kann
### Variablen
- Keine

### Example-Code-Snippet
```HTML
<grpsix-brightnessslider></grpsix-brightnessslider>
```
---

## Cookie Banner
Banner, der auf die Cookie- und Datenschutzrichtlinien hinweist und erst verschwindet, wenn diese mit einem Klick auf den Button "akzeptieren" akzeptiert wurden

### Variablen (Pflicht)
- linkDatenschutzrichtlinie: Link zur Unterseite mit den Datenschutzrichtlinien und zu Informationen zur Verwendung von Cookies

### Example-Code-Snippet
```HTML
<grpsix-cookiebanner link-datenschutzrichtlinie="ON-your-styleguide/datenschutz.html"></grpsix-cookiebanner>
```
---

## Hover Cards
Karten mit einem Bild auf der Vorderseite, die sich beim hovern auf die Rückseite drehen und dort weitere Informationen anzeigen

### Variablen (Pflicht)
- imageQuelle: Pfad zum jeweiligen Bild
- altText: Alt Text mit einer Beschreibung zum Bild

### Variablen (optional)
- headlineLarge: Überschrift (1. Ordnung)
- headlineMedium: Überschrift (2. Ordnung)
- descriptionText: Beschreibungstext

### Example-Code-Snippet
```HTML
<grpsix-hovercards image-quelle="Antje.jpg" alt-text="Bild von Antje Schmollinger" headline-large="Antje Schmollinger" headline-medium="Developing and Design" description-text="Studentin, DHBW Mosbach"></grpsix-hovercards>
```
---

# Data-Description
## JSON for Recipes
### Beschreibung
Die JSON wurde von der Gruppe selbst erstellt und mit Daten befüllt.
Diese hat nachfolgenden Aufbau. (``Key: Dateityp`` => Beschreibung des Inhalts)
- ``id: number`` PFLICHT => Die eindeutige ID des Rezeptes, dient dem Aufruf über Comonents
- ``url: string`` => Der Dateipfad, zum Aufruf über interne Links etc. (**title** des Rezeptes wird **klein geschrieben**, **Umlaute** zu **Einzelschreibwese** (ä --> ae), **Leerzeichen** werden mit einem **Bindenstrich** getrennt.)
- ``title: string`` => Ist der Titel des Rezeptes
- ``ingredients: Array<>`` => Sind die Zudaten als Array gespeichert. Darüber kann dann iterert werden
- ``preperations: Array<>`` => Die Zubereitungsweise als Array gespeichert. Darüber kann dann iterert werden
- ``tips: string`` OPTIONAL => Zusätzliche Tips können hier gespeichert werden
- ``imageUrl: string`` => Der Dateiname zum Bild des Rezeptes inkl. Dateiendung (Bestenfalls gut komprimiertes JPEG); **Keine Sonderzeichen, Leerzeichen (ßäöü?…), Slashes (/), Klammern!** (**Name** der Datei wird **klein geschrieben**, **Umlaute** zu **Einzelschreibwese** (ä --> ae), **Leerzeichen** werden mit einem **Bindenstrich** getrennt.)

### Example JSON mit einem Rezept
```JSON
[
    {
        "id": 20,
        "url": "beispielrezept-1.html",
        "title": "Beispielrezept 1",
        "ingredients": [
            "Zutat 1",
            "Zutat 2"
        ],
        "preperations": [
            "Erst das hier machen",
            "Danach das hier machen",
        ],
        "tips": "Hier steht ein Tipp",
        "imageUrl": "bildpfad/Bildname.dateiendung"
    }
]
```

## Images

# Stencil Component Starter

This is a starter project for building a standalone Web Component using Stencil.

Stencil is also great for building entire apps. For that, use the [stencil-app-starter](https://github.com/ionic-team/stencil-app-starter) instead.

# Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/ionic-team/stencil-component-starter.git my-component
cd my-component
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).


## Naming Components

When creating new component tags, we recommend _not_ using `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with Stencil; it's just a web component!

Instead, use a prefix that fits your company or any name for a group of related components. For example, all of the Ionic generated web components use the prefix `ion`.


## Using this component

There are three strategies we recommend for using web components built with Stencil.

The first step for all three of these strategies is to [publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages).

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/my-component@0.0.1/dist/my-component.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install my-component --save`
- Put a script tag similar to this `<script src='node_modules/my-component/dist/my-component.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install my-component --save`
- Add an import to the npm packages `import my-component;`
- Then you can use the element anywhere in your template, JSX, html etc
# stencil-starter-on
