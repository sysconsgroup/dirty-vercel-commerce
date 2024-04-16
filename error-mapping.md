**Unclean code map**

| File                               | Description                                                                                 |
| ---------------------------------- | ------------------------------------------------------------------------------------------- |
| `app/globals.css`                  | empty class `.card-container`                                                               |
| `components/carousel.tsx`          | Missing "key" prop for element in iterator (`key={}`)                                       |
| `components/cart/add-to-cart.tsx`  | Callback function inside code (against clean)                                               |
| `components/cart/modal.tsx`        | Too much code for a component. Split code in multiple files                                 |
| `components/generic-data-view.tsx` | Possible re-rendering performance issue. Use the useCallback react hook                     |
| `components/timer.tsx`             | - missing state dependency in useEffect hook<br>- missing return callback to clear interval |
