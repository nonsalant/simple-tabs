# Simple Tabs

Tabs that change into an Accordion in small spaces.

## 1. Demo
**[CodePen Demo](https://codepen.io/nonsalant/pen/JojYLGQ)**

## 2. Scripts and Styles

### 2.1. Script
- Load the scrip. Adjust the path as needed:
```html
<script src="./simple-tabs.js"></script>
```
Or use the module version:
```html
<script src="./simple-tabs.js" type="module"></script>
```

### 2.2. Styles
- Adjust the URL of the Scoped Style Sheet to the correct path:
```html
<simple-tabs>
    <template shadowrootmode="open">
        <!-- Scoped Stylesheet -->
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
You can override the default styles by adding your own. E.g:

```css
:root {
    --st-tabs-color: light-dark(red, hotpink);
    --st-tab-font: system-ui;
    --st-max-tabs: 10;
}

```