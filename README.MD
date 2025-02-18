# Simple Tabs

Keyboard accessible **Tabs** Web Component that changes to an **Accordion** in small spaces.

![Preview of 3 horizontal tabs with the first one being active and showing 2 paragraphs of dummy text as content below. A subtle horizontal line separates the tabs from the contents of the active tab. The segment of the line below the active tab is in a brighter color.](./dist/preview.png)

JavaScript is used to enable View Transitions that animate the the page when the active tab is changed.

## 1. Demo
- **[View `📁dist/` folder on Netlify](https://simple-tabs-web-component.netlify.app/)**
- **[CodePen Demo](https://codepen.io/nonsalant/pen/JojYLGQ)**

## 2. Scripts and Styles

### 2.1. Script
- Load the scrip. Adjust the path as needed:
```html
<script src="./simple-tabs.js"></script>
```
- *Or* load it as a module:
```html
<script src="./simple-tabs.js" type="module"></script>
```

### 2.2. Styles
- Adjust the URL of the Scoped Style Sheet to the correct path:
```html
<simple-tabs>
    <template shadowrootmode="open">
        <!-- Scoped Style Sheet -->
        <link rel="stylesheet" href="./simple-tabs.css">
        <!-- ... -->
    </template>
</simple-tabs>
```

## 3. Tabs and Tab Panels
```html
<label role="tab" id="tab-1">
    <input type="radio" name="tabs" checked>
    Tab Name
</label>
<div role="tabpanel" aria-labelledby="tab-1">
    <p>Tab Content.</p>
</div><!-- /tabpanel -->
```

## 4. Full Example
```html
<simple-tabs>
    <template shadowrootmode="open">
        <!-- Scoped Stylesheet -->
        <link rel="stylesheet" href="./simple-tabs.css">
        <div class="simple-tabs" role="tabs">

            <label role="tab" id="tab-1">
                <input type="radio" name="tabs" checked>
                First Tab
            </label>
            <div role="tabpanel" aria-labelledby="tab-1">
                <p>Lorem ipsum dolor.</p>
            </div><!-- /[role=tabpanel] -->

            <label role="tab" id="tab-2">
                <input type="radio" name="tabs">
                Second Tab
            </label>
            <div role="tabpanel" aria-labelledby="tab-2">
                <p>Tempora facilis aperiam.</p>
            </div><!-- /[role=tabpanel] -->

        </div><!-- /.simple-tabs -->
    </template>
</simple-tabs>

<!-- Simple Tabs Script -->
<script src="./simple-tabs.js type="module"></script>
```

## 5. Style Overriding
You can override the default values for certain properties from your global CSS. E.g:

```css
:root {
    --st-tabs-color: red;
    --st-tab-font: system-ui;
    --st-max-tabs: 10;
}

```

## 6. Notes

### 6.1. Uses:
- **Container Queries** to change between tabs and accordion at 600px.
- **View Transitions** to animate elements that follow the tabs in the DOM.
- **Declarative Shadow DOM** to isolate the tab styles.

### 6.2. Features:
<ul>
    <li>Keyboard accessible: the <kbd>←</kbd> and <kbd>→</kbd> keys (as well as <kbd>↑</kbd>/<kbd>↓</kbd>) can be used after keyboard-navigating into the tabs.</li>
    <li>JavaScript is only used to add the <code>view-transition-name</code>'s that enable the View Transitions.</li>
    <li>The Declarative Shadow DOM, particularly <b>the isolated CSS inside the component's <code>&lt;template&gt;</code>, works without JavaScript</b>.</li>
</ul>