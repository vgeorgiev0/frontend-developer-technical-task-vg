import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

 export function isXml (str: string): boolean  {
    return /^<.*>$/.test(str);
  };

  export default function twFocusClass(hasRing = false) {
    if (!hasRing) {
      return 'focus:outline-none';
    }
    return 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0';
  }

  /** Used to generate unique IDs. */
  const idCounter: Record<string, number> = {};

  /**
   * Generates a unique ID. If `prefix` is given, the ID is appended to it.
   *
   * @since 0.1.0
   * @category Util
   * @param {string} [prefix=''] The value to prefix the ID with.
   * @returns {string} Returns the unique ID.
   * @see random
   * @example
   *
   * ncNanoId('contact_')
   * // => 'contact_104'
   *
   * ncNanoId()
   * // => '105'
   */
  export function ncNanoId(prefix = 'ncNanoId_') {
    if (!idCounter[prefix]) {
      idCounter[prefix] = 0;
    }

    const id = ++idCounter[prefix];
    if (prefix === '$lodash$') {
      return `${id}`;
    }

    return `${prefix}${id}`;
  }

  export function isInViewport(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }



