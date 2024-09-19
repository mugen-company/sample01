declare module 'three/examples/jsm/loaders/FontLoader' {
    import { Loader } from 'three';
  
    export class Font {
      data: {
        familyName: string;
        resolution: number;
        boundingBox: {
          top: number;
          left: number;
          right: number;
          bottom: number;
        };
        underlineThickness: number;
        underlinePosition: number;
      };
    }
  
    export class FontLoader extends Loader {
      load(
        url: string,
        onLoad: (font: Font) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void
      ): void;
    }
  }
  