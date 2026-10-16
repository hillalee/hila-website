# Answers

Answer the questions below in this file, under each question. Put screenshots in
a `screenshots/` folder and link them from your answers.

## 1. Challenges and dilemmas

List at list 2 challenges or dilemmas that you faced while building the design in Part 1,
and how you decided to solve them?

**Answer:**

1. Adding the links to the text from Wikipedia was a bit Sisyphean, because when I copied the text, it was plain with no links. I had to wrap every linked word in an `<a>` tag with its URL.
2. The footer I made didn't stay at the bottom because the page is short, so I made the body as tall as the screen and let the main part grow to fill the empty space so the footer stays at the bottom.

## 2. Box model

Build the `.hello-world` example from the lesson 1 "CSS Box Model" slides, exactly as it appears
there, on a new page of your website. This page is only for answering questions
2 and 4, so it can be a temporary file, and you don't need to submit it.

Inspect the element with your browser's devtools.
Enable and disable `box-sizing: border-box;` and inspect the size of the element.
What is the total width, and why? Explain in detail.

**Answer:**
The code:
```
.hello-world {
  width: 100px;
  margin: 10px;
  padding: 5px;
  border: 2px blue;
}
```
The total width is 100px with `border-box` and 110px without it. With `border-box`, the padding is part of the 100px. Without it, the padding is added to the 100px, so it is 100 + 5 + 5. 
The border is 0 because the code says `border: 2px blue` without the border style, and as the default value is `none`, its width is 0. The margin is the space around the box, so it is not part of the width.

## 3. The viewport

Open the website on a mobile browser, or in the mobile view of Chrome's
devtools, then delete this line from the `<head>` of `index.html`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

What happens to your page? What does
this line tell the browser, and why does removing it affect your mobile design?

**Answer:**

Without it, I see the desktop version of my page. The content is very small and there is no hamburger menu. It happens because the browser thinks the screen is much wider than it is. This line tells the browser to use the real width of the
screen.

With the line:

![With the viewport line](screenshots/viewport-with-meta.jpg)

Without it:

![Without the viewport line](screenshots/viewport-without-meta.jpg)
