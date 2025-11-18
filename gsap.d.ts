// Type declarations for GSAP premium plugins
declare module 'gsap/SplitText' {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    
    static create(
      element: string | Element | Element[],
      vars?: {
        type?: 'chars' | 'words' | 'lines' | string;
        charsClass?: string;
        wordsClass?: string;
        linesClass?: string;
        mask?: 'chars' | 'words' | 'lines' | string;
        position?: string;
        [key: string]: any;
      }
    ): SplitText;
    
    revert(): void;
  }
}

declare module 'gsap/CustomEase' {
  const CustomEase: {
    create(name: string, ease: string): void;
  };
  export default CustomEase;
}
