# Intertech - frontend test

*This is a [test task](https://www.dropbox.com/s/1nzetgsragl9y4q/Test%20Task_Front-end%20Developer.pdf) for the position of [Front-end Developer](https://djinni.co/jobs/297169-front-end-developer/) ([G5 EntertainmentAB](http://jobs.g5e.com/))

It lives at ---> [Stage](https://bystranovskiy.github.io/g5-test-mahjong-journey/)*

---

## About the task
The <b>goal</b> of the task is a layout landing page based on the mockup provided in [Figma file](https://www.dropbox.com/s/9e524ihyns8yl04/Test.fig). <br/>
<b>Requirements:</b> use [Bootstrap grid](https://getbootstrap.com/docs/4.0/layout/grid/) for responsive page and create animations for elements.
## Implementation
In development, I used [Webpack](https://webpack.js.org/) to work with the [SASS](https://sass-lang.com/) preprocessor, compile javascripts, minify styles and scripts, etc.
I have included [Bootstrap v4.6.0] (https://getbootstrap.com/docs/4.6/getting-started/download/) from source files. From there, I used only the minimum of the necessary tools - grid, utilities, mixins.
For the reviews slider, I used the jQuery plugin [Slick carousel] (https://kenwheeler.github.io/slick/).
All images are pre-prepared and optimized, support for [WebP file format] (https://developers.google.com/speed/webp), as well as files of appropriate quality for Retina displays, is implemented. Lazy loading has been applied to images and videos to make perceived performance even faster.
Animations are implemented using [GSAP] technology (https://greensock.com/gsap/).


## Get started

Install the dependencies...

```bash
npm install
```

## To start

...as `dev` mode:

```bash
npm run dev
```

...as `build` mode:

```bash
npm run build
```
