declare namespace AsepriteLoader {
  interface Data {
    frames: Array<AsepriteLoader.Frame>;
    layers: Array<AsepriteLoader.Layer>;
    slices: Array<AsepriteLoader.Slice>;
    tags: Array<AsepriteLoader.Tag>;
    palette?: AsepriteLoader.Palette;
    tilesets: Array<AsepriteLoader.Tileset>;
    name: string;
    fileSize: number;
    width: number;
    height: number;
    numFrames: number;
    colorDepth: number;
    numColors: number;
    pixelRatio: string;
    colorProfile: {
      type: string;
      flag: number;
      fGamma: number;
    };
  }

  interface Palette {
    paletteSize: number;
    firstColor: number;
    lastColor: number;
    colors: Array<Color>;
  }
  interface Tileset {
    id: number;
    tileCount: number;
    tileWidth: number;
    tileHeight: number;
    name: string;
    externalFile:
      | {
          id: number;
          tilesetId: number;
        }
      | undefined;
    rawTilesetData: Uint8Array | undefined;
  }
  interface Color {
    red: number;
    green: number;
    blue: number;
    alpha: number;
    name: string;
  }
  interface Cel {
    layerIndex: number;
    xpos: number;
    ypos: number;
    opacity: number;
    celType: number;
    w: number;
    h: number;
    tilemapMetadata:
      | {
          bitsPerTile: number;
          bitmaskForTileId: number;
          bitmaskForXFlip: number;
          bitmaskForYFlip: number;
          bitmaskFor90CWRotation: number;
        }
      | undefined;
    rawCelData: Uint8Array;
  }
  interface Tag {
    name: string;
    from: number;
    to: number;
    animDirection: string;
    color: string;
  }
  interface Layer {
    flags: number;
    type: number;
    layerChildLevel: number;
    blendMode: number;
    opacity: number;
    name: string;
    tilesetIndex: number | undefined;
  }
  export interface Slice {
    flags: number;
    keys: SliceKey[];
    name: string;
  }
  export interface SliceKey {
    frameNumber: number;
    x: number;
    y: number;
    width: number;
    height: number;
    patch?: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    pivot?: {
      x: number;
      y: number;
    };
  }
  interface Frame {
    bytesInFrame: number;
    frameDuration: number;
    numChunks: number;
    cels: Array<Cel>;
  }
}
