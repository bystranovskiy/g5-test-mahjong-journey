# "Mahjong Journey Game" - G5 Entertainment Test task
[![](screenshot.jpg)](https://bystranovskiy.github.io/g5-test-mahjong-journey/)

*This is a [test task](https://www.dropbox.com/s/1nzetgsragl9y4q/Test%20Task_Front-end%20Developer.pdf) for the position of [Front-end Developer](https://djinni.co/jobs/297169-front-end-developer/) ([G5 EntertainmentAB](http://jobs.g5e.com/))* <br/><br/>
It lives at ---> [<b>DEMO:</b> *(https://bystranovskiy.github.io/g5-test-mahjong-journey/)*](https://bystranovskiy.github.io/g5-test-mahjong-journey/)

---

## About the task
The <b>goal</b> of the task is a layout landing page based on the mockup provided in [Figma file](https://www.dropbox.com/s/9e524ihyns8yl04/Test.fig). <br/>
<b>Requirements:</b> use [Bootstrap grid](https://getbootstrap.com/docs/4.0/layout/grid/) for responsive page and create animations for elements.
## Implementation
In development, I used [Webpack](https://webpack.js.org/) to work with the [SASS](https://sass-lang.com/) preprocessor, <b>autoprefixer</b>, compile <b>ES6</b>, <b>minify styles and scripts</b>, etc.
I have included [Bootstrap v4.6.0](https://getbootstrap.com/docs/4.6/getting-started/download/) from source files. From there, I used only the minimum of the necessary tools - <b>grid</b>, <b>utilities</b>, <b>mixins</b>.
For the reviews slider, I used the [jQuery](https://code.jquery.com/) plugin [Slick](https://kenwheeler.github.io/slick/) carousel.
All images are pre-prepared and optimized, support for [WebP](https://developers.google.com/speed/webp) file format, as well as files of appropriate quality for [Retina displays](https://en.wikipedia.org/wiki/Retina_display), is implemented. [Lazy loading](https://github.com/aFarkas/lazysizes) has been applied to images and <b>youtube</b> video to make perceived performance even faster.
Animations are implemented using [GSAP](https://greensock.com/gsap/) technology (<b>Parallax</b> effect, Effective appearance of elements on <b>ScrollTrigger</b>, other).


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
