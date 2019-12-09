 

import { Camera } from "./three-core";

export class VRControls {
    constructor(camera: Camera, callback?: (param: string) => void);

    /**
     * Update VR Instance Tracking
     */
    update(): void;

    zeroSensor(): void;

    scale: number;

    //setVRDisplay(display: VRDisplay): void; ////ERROR Context:121 - cannot find reference VRDisplay (def.types.three.VRControls.VRDisplay) at ./DefinitelyTyped/types/three/three-vrcontrols.d.ts:17(18)

}
