export default function getParents(
  el?: HTMLElement,
  selector?: string,
  filter?: string
): HTMLElement[] {
  // If no selector defined will bubble up all the way to *document*
  let parentSelector =
    selector === undefined
      ? document
      : (document.querySelector(selector) as HTMLElement);
  let parents: HTMLElement[] = [];
  let pNode = el.parentNode;

  while (pNode !== parentSelector) {
    let element = pNode as HTMLElement;

    if (filter === undefined) {
      parents.push(element); // Push that parentSelector you wanted to stop at
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      element.classList.contains(filter) && parents.push(element);
    }
    pNode = element.parentNode;
  }

  return parents;
}
