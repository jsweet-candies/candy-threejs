//import {
//    Camera,
//    Mesh,
//    Scene,
//    Shader,
//    ShaderMaterial,
//    WebGLRenderTarget,
//    WebGLRenderer
//} from "./three-core";
import {Camera} from "./three-core";
import {Mesh} from "./three-core";
import {Scene} from "./three-core";
import {Shader} from "./three-core";
import {ShaderMaterial} from "./three-core";
import {WebGLRenderTarget} from "./three-core";
import {WebGLRenderer} from "./three-core";

export class ShaderPass {
    constructor(shader: Shader, textureID?: string);

    textureID: string;
    uniforms: any;
    material: ShaderMaterial;
    renderToScreen: boolean;
    enabled: boolean;
    needsSwap: boolean;
    clear: boolean;
    camera: Camera;
    scene: Scene;
    quad: Mesh;

    render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, delta: number): void;
}
