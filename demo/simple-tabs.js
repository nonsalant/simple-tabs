class SimpleTabs extends HTMLElement {
    constructor() {
        super();
        this.selector = '[role=tabs]';
        this.maxElementsToAnimate = 20;
    }

    connectedCallback() {
        setTimeout(() => {
            this.simpleTabs();
        });
    }

    simpleTabs() {

        const accumulateNextElements = (limit = 0) => {
            let resultArray = [];
            // const internalSelector = `${this.selector} *`;
            const internalSelector = `${this.selector} > * > *`;
            const internalCollection = this.shadowRoot.querySelectorAll(internalSelector);
            const internalElements = Array.from(internalCollection);
            // console.log(internalCollection)

            let currentEl = this;

            // Recursively accumulate elements that follow in the DOM and are not hidden
            while (currentEl.parentNode && currentEl.parentNode.tagName !== 'HTML') {
                const parent = currentEl.parentNode;
                let siblings = Array.from(parent.children).filter(el => !isHidden(el));
                siblings = siblings.slice(siblings.indexOf(currentEl) + 1);
                resultArray = [...resultArray, ...siblings];

                // Apply the limit if it's reached
                if (limit > 0 && limit < resultArray.length) {
                    resultArray = resultArray.slice(0, limit);
                    break;
                }

                currentEl = currentEl.parentNode;
            }

            return [...internalElements, ...resultArray];
        }

        // Enable view transitions if supported
        if (document.startViewTransition) {
            const triggers = this.shadowRoot.querySelectorAll('[role=tab]:has([type=radio])');
            triggers.forEach((item) => {
                let target = item.querySelector('[type=radio]');
                item.addEventListener('mousedown', (e) => { e.target.click(); });
                item.addEventListener('click', (e) => {
                    // console.log("click");
                    e.preventDefault(); // ! View Transitions don't work without this
                    const transition = document.startViewTransition(() => {
                        target.checked = true;
                    });
                    const toTransition = accumulateNextElements(this.maxElementsToAnimate);
                    addTransitionNames(toTransition); // add temp vt names
                    transition.ready.then(() => {
                        removeTransitionNames(toTransition); // clean up vt names
                    });
                });
            });
        }

        // View Transition utils
        function addTransitionNames(arr) {
            arr.forEach((el, i) => {
                if (el.style.viewTransitionName === '') {
                    el.style.viewTransitionName = 'simpletabs-transition-' + i;
                }
            });
        }
        function removeTransitionNames(arr) {
            arr.forEach((el, i) => {
                if (el.style.viewTransitionName.startsWith('simpletabs-transition-')) {
                    el.style.viewTransitionName = '';
                }
            });
        }
        // Helper function to check if an element has display: none or equivalent
        function isHidden(el) {
            const style = window.getComputedStyle(el);
            return style.display === 'none' || style.visibility === 'hidden';
        }
    }
}

customElements.define('simple-tabs', SimpleTabs);