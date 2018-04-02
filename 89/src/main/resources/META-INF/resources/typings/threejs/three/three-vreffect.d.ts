 

import { Camera, Matrix4, Renderer, Scene } from "./three-core";

export class VREffect {
    constructor(renderer: Renderer, callback?: (params: string) => void);

    render(scene: Scene, camera: Camera): void;

    setSize(width: number, height: number): void;

    setFullScreen(flag: boolean): void;

    startFullscreen(): void;

    FovToNDCScaleOffset(fov: VRFov): VREffectOffset;

    FovPortToProjection(fov: VRFov, rightHanded: boolean, zNear: number, zFar: number): Matrix4;

    FovToProjection(fov: VRFov, rightHanded: boolean, zNear: number, zFar: number): Matrix4;

    //setVRDisplay(display: VRDisplay): void;//  ERROR Context:121 - cannot find reference VRDisplay (def.types.three.VREffect.VRDisplay) at ./DefinitelyTyped/types/three/three-vreffect.d.ts:22(18)
}

export interface VRFov {
    leftTan: number;
    rightTan: number;
    upTan: number;
    downTan: number;
}

export interface VREffectOffset {
    scale: number;
    offset: number;
}
