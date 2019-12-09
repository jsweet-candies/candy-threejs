/* Generated from Java with JSweet 3.0.0-SNAPSHOT - http://www.jsweet.org */
declare class Audio {
    public constructor(listener : AudioListener);

    public type : string;

    public context : AudioContext;

    public source : AudioBufferSourceNode;

    public gain : GainNode;

    public autoplay : boolean;

    public startTime : number;

    public playbackRate : number;

    public hasPlaybackControl : boolean;

    public isPlaying : boolean;

    public sourceType : string;

    public filters : any[];

    public getOutput() : GainNode;

    public setNodeSource(audioNode : AudioBufferSourceNode) : Audio;

    public setBuffer(audioBuffer : AudioBuffer) : Audio;

    public play() : Audio;

    public pause() : Audio;

    public stop() : Audio;

    public connect() : Audio;

    public disconnect() : Audio;

    public getFilters() : any[];

    public setFilter(value : any[]) : Audio;

    public getFilter() : any;

    public setFilter(filter : any) : Audio;

    public setPlaybackRate(value : number) : Audio;

    public getPlaybackRate() : number;

    public onEnded();

    public getLoop() : boolean;

    public setLoop(value : boolean);

    public getVolume() : number;

    public setVolume(value : number) : Audio;

    /**
     * @deprecated Use {@link AudioLoader} instead.
     * @param {string} file
     * @return {Audio}
     */
    public load(file : string) : Audio;

    constructor();
}

declare class AudioBuffer {
    public constructor(context : any);

    public context : any;

    public ready : boolean;

    public readyCallbacks : Function[];

    public load(file : string) : AudioBuffer;

    public onReady(callback : Function);

    constructor();
}

declare class AudioListener {
    public constructor();

    public type : string;

    public context : AudioContext;

    public gain : GainNode;

    public getInput() : GainNode;

    public removeFilter();

    public setFilter(value : any);

    public getFilter() : any;

    public setMasterVolume(value : number);

    public getMasterVolume() : number;
}

interface DetectorStatic {
    canvas : boolean;

    webgl : boolean;

    workers : boolean;

    fileapi : boolean;

    getWebGLErrorMessage() : HTMLElement;

    addGetWebGLMessage(parameters : any);

    addGetWebGLMessage();
}

interface Event {
    type : string;

    target : any;
}

declare var Detector : DetectorStatic;


declare namespace THREE {
    /**
     * This creates a Ambientlight with a color.
     * @param {THREE.Color} color Numeric value of the RGB component of the color or a Color instance.
     * @param {number} intensity
     * @class
     * @extends THREE.Light
     */
    export class AmbientLight extends THREE.Light {
        public constructor(color : THREE.Color, intensity : number);

        public castShadow : boolean;

        public constructor(color : THREE.Color);

        public constructor();

        public constructor(color : number, intensity : number);

        public constructor(color : string, intensity : number);

        public constructor(color : number);

        public constructor(color : string);
    }
}
declare namespace THREE {
    export class AnimationAction {
        public loop : boolean;

        public time : number;

        public timeScale : number;

        public weight : number;

        public repetitions : number;

        public paused : boolean;

        public enabled : boolean;

        public clampWhenFinished : boolean;

        public zeroSlopeAtStart : boolean;

        public zeroSlopeAtEnd : boolean;

        public play() : AnimationAction;

        public stop() : AnimationAction;

        public reset() : AnimationAction;

        public isRunning() : boolean;

        public startAt(time : number) : AnimationAction;

        public setLoop(mode : THREE.AnimationActionLoopStyles, repetitions : number) : AnimationAction;

        public setEffectiveWeight(weight : number) : AnimationAction;

        public getEffectiveWeight() : number;

        public fadeIn(duration : number) : AnimationAction;

        public fadeOut(duration : number) : AnimationAction;

        public crossFadeFrom(fadeOutAction : AnimationAction, duration : number, warp : boolean) : AnimationAction;

        public crossFadeTo(fadeInAction : AnimationAction, duration : number, warp : boolean) : AnimationAction;

        public stopFading() : AnimationAction;

        public setEffectiveTimeScale(timeScale : number) : AnimationAction;

        public getEffectiveTimeScale() : number;

        public setDuration(duration : number) : AnimationAction;

        public syncWith(action : AnimationAction) : AnimationAction;

        public halt(duration : number) : AnimationAction;

        public warp(statTimeScale : number, endTimeScale : number, duration : number) : AnimationAction;

        public stopWarping() : AnimationAction;

        public getMixer() : THREE.AnimationMixer;

        public getClip() : THREE.AnimationClip;

        public getRoot() : any;
    }
}
declare namespace THREE {
    export enum AnimationActionLoopStyles {
      
    }
}
declare namespace THREE {
    export class AnimationClip {
        public constructor(name : string, duration : number, tracks : THREE.KeyframeTrack[]);

        public name : string;

        public tracks : THREE.KeyframeTrack[];

        public duration : number;

        public uuid : string;

        public results : any[];

        public resetDuration();

        public trim() : AnimationClip;

        public optimize() : AnimationClip;

        public static CreateFromMorphTargetSequence(name : string, morphTargetSequence : THREE.MorphTarget[], fps : number, noLoop : boolean) : AnimationClip;

        public static findByName(clipArray : AnimationClip[], name : string) : AnimationClip;

        public static CreateClipsFromMorphTargetSequences(morphTargets : THREE.MorphTarget[], fps : number, noLoop : boolean) : AnimationClip[];

        public static parse(json : any) : AnimationClip;

        public static parseAnimation(animation : any, bones : THREE.Bone[], nodeName : string) : AnimationClip;

        public static toJSON() : any;

        public constructor(name : string, duration : number);

        public constructor(name : string);

        public constructor();
    }
}
declare namespace THREE {
    export class AnimationMixer extends THREE.EventDispatcher {
        public constructor(root : any);

        public time : number;

        public timeScale : number;

        public clipAction(clip : THREE.AnimationClip, root : any) : THREE.AnimationAction;

        public existingAction(clip : THREE.AnimationClip, root : any) : THREE.AnimationAction;

        public stopAllAction() : AnimationMixer;

        public update(deltaTime : number) : AnimationMixer;

        public getRoot() : any;

        public uncacheClip(clip : THREE.AnimationClip);

        public uncacheRoot(root : any);

        public uncacheAction(clip : THREE.AnimationClip, root : any);

        public clipAction(clip : THREE.AnimationClip) : THREE.AnimationAction;

        public existingAction(clip : THREE.AnimationClip) : THREE.AnimationAction;

        public uncacheAction(clip : THREE.AnimationClip);

        constructor();
    }
}
declare namespace THREE {
    export class AnimationObjectGroup {
        public constructor(...args : any[]);

        public uuid : string;

        public stats : any;

        public add(...args : any[]);

        public remove(...args : any[]);

        public uncache(...args : any[]);

        constructor();
    }
}
declare namespace THREE.AnimationUtils {}
declare namespace THREE {
    /**
     * Utility class.
     * @extends Object
     * @class
     */
    export class AnimationUtils {
        constructor();

        public static arraySlice(array : any, from : number, to : number) : any;

        public static convertArray(array : any, type : any, forceClone : boolean) : any;

        public static isTypedArray(object : any) : boolean;

        public static getKeyFrameOrder(times : number) : number[];

        public static sortedArray(values : any[], stride : number, order : number[]) : any[];

        public static flattenJSON(jsonKeys : string[], times : any[], values : any[], valuePropertyName : string);
    }
}
declare namespace THREE {
    /**
     * Interface for all loaders
     * CompressedTextureLoader don't extends Loader class, but have load method
     * @class
     * @extends Object
     */
    export interface AnyLoader {
        load(url : string, onLoad : (p1: any) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void) : any;

        load(url : string, onLoad : (p1: any) => void, onProgress : (p1: ProgressEvent) => void) : any;

        load(url : string, onLoad : (p1: any) => void) : any;

        load(url : string) : any;
    }
}
declare namespace THREE {
    export class ArcCurve extends THREE.EllipseCurve {
        public constructor(aX : number, aY : number, aRadius : number, aStartAngle : number, aEndAngle : number, aClockwise : boolean);

        constructor();
    }
}
declare namespace THREE {
    export class ArrayCamera extends THREE.PerspectiveCamera {
        public constructor(cameras : THREE.PerspectiveCamera[]);

        public cameras : THREE.PerspectiveCamera[];

        public isArrayCamera : boolean;

        public constructor();
    }
}
declare namespace THREE {
    export class ArrowHelper extends THREE.Object3D {
        public constructor(dir : THREE.Vector3, origin : THREE.Vector3, length : number, hex : number, headLength : number, headWidth : number);

        public line : THREE.Line;

        public cone : THREE.Mesh;

        public setDirection(dir : THREE.Vector3);

        public setLength(length : number, headLength : number, headWidth : number);

        public setColor(hex : number);

        public constructor(dir : THREE.Vector3, origin : THREE.Vector3, length : number, hex : number, headLength : number);

        public constructor(dir : THREE.Vector3, origin : THREE.Vector3, length : number, hex : number);

        public constructor(dir : THREE.Vector3, origin : THREE.Vector3, length : number);

        public constructor(dir : THREE.Vector3, origin : THREE.Vector3);

        public constructor(dir : THREE.Vector3);

        public setLength(length : number, headLength : number);

        public setLength(length : number);

        constructor();
    }
}
declare namespace THREE {
    export class AudioAnalyser {
        public constructor(audio : any, fftSize : number);

        public analyser : any;

        public data : Uint8Array;

        public getFrequencyData() : Uint8Array;

        public getAverageFrequency() : number;

        /**
         * @deprecated Use {@link AudioAnalyser#getFrequencyData} instead.
         * @param {*} file
         * @return {*}
         */
        public getData(file : any) : any;

        constructor();
    }
}
declare namespace THREE {
    export class AudioLoader {
        public constructor(manager : THREE.LoadingManager);

        public load(url : string, onLoad : Function, onPrgress : Function, onError : Function);

        public constructor();
    }
}
declare namespace THREE {
    export class AxesHelper extends THREE.LineSegments {
        public constructor(size : number);

        public constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated since 0.84.0. Use {@link DataTextureLoader} (renamed)
     * @class
     * @extends THREE.DataTextureLoader
     */
    export class BinaryTextureLoader extends THREE.DataTextureLoader {    }
}
declare namespace THREE {
    export enum Blending {
      
    }
}
declare namespace THREE {
    export enum BlendingDstFactor {
      
    }
}
declare namespace THREE {
    export enum BlendingEquation {
      
    }
}
declare namespace THREE {
    export enum BlendingSrcFactor {
      
    }
}
declare namespace THREE {
    export class Bone extends THREE.Object3D {
        public constructor(skin : THREE.SkinnedMesh);

        public skin : THREE.SkinnedMesh;

        constructor();
    }
}
declare namespace THREE {
    export class BooleanKeyframeTrack extends THREE.KeyframeTrack {
        public constructor(name : string, times : any[], values : any[]);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated Use {@link BoxHelper} instead.
     * @param {THREE.Object3D} object
     * @param {number} hex
     * @class
     * @extends THREE.Mesh
     */
    export class BoundingBoxHelper extends THREE.Mesh {
        public constructor(object : THREE.Object3D, hex : number);

        public object : THREE.Object3D;

        public box : THREE.Box3;

        public update();

        public constructor(object : THREE.Object3D);

        public constructor();
    }
}
declare namespace THREE {
    export class Box2 {
        public constructor(min : THREE.Vector2, max : THREE.Vector2);

        public max : THREE.Vector2;

        public min : THREE.Vector2;

        public set(min : THREE.Vector2, max : THREE.Vector2) : Box2;

        public setFromPoints(points : THREE.Vector2[]) : Box2;

        public setFromCenterAndSize(center : THREE.Vector2, size : THREE.Vector2) : Box2;

        public clone() : Box2;

        public copy(box : Box2) : Box2;

        public makeEmpty() : Box2;

        public isEmpty() : boolean;

        public getCenter(optionalTarget : THREE.Vector2) : THREE.Vector2;

        public getSize(optionalTarget : THREE.Vector2) : THREE.Vector2;

        public expandByPoint(point : THREE.Vector2) : Box2;

        public expandByVector(vector : THREE.Vector2) : Box2;

        public expandByScalar(scalar : number) : Box2;

        public containsPoint(point : THREE.Vector2) : boolean;

        public containsBox(box : Box2) : boolean;

        public getParameter(point : THREE.Vector2) : THREE.Vector2;

        public intersectsBox(box : Box2) : boolean;

        public clampPoint(point : THREE.Vector2, optionalTarget : THREE.Vector2) : THREE.Vector2;

        public distanceToPoint(point : THREE.Vector2) : number;

        public intersect(box : Box2) : Box2;

        public union(box : Box2) : Box2;

        public translate(offset : THREE.Vector2) : Box2;

        public equals(box : Box2) : boolean;

        /**
         * @deprecated Use {@link Box2#isEmpty} instead.
         * @return {*}
         */
        public empty() : any;

        /**
         * @deprecated Use {@link Box2#intersectsBox} instead.
         * @param {*} b
         * @return {*}
         */
        public isIntersectionBox(b : any) : any;

        public constructor(min : THREE.Vector2);

        public constructor();

        public getCenter() : THREE.Vector2;

        public getSize() : THREE.Vector2;

        public clampPoint(point : THREE.Vector2) : THREE.Vector2;
    }
}
declare namespace THREE {
    export class Box3 {
        public constructor(min : THREE.Vector3, max : THREE.Vector3);

        public max : THREE.Vector3;

        public min : THREE.Vector3;

        public set(min : THREE.Vector3, max : THREE.Vector3) : Box3;

        public setFromArray(array : ArrayLike<number>) : Box3;

        public setFromPoints(points : THREE.Vector3[]) : Box3;

        public setFromCenterAndSize(center : THREE.Vector3, size : THREE.Vector3) : Box3;

        public setFromObject(object : THREE.Object3D) : Box3;

        public clone() : Box3;

        public copy(box : Box3) : Box3;

        public makeEmpty() : Box3;

        public isEmpty() : boolean;

        public getCenter(optionalTarget : THREE.Vector3) : THREE.Vector3;

        public getSize(optionalTarget : THREE.Vector3) : THREE.Vector3;

        public expandByPoint(point : THREE.Vector3) : Box3;

        public expandByVector(vector : THREE.Vector3) : Box3;

        public expandByScalar(scalar : number) : Box3;

        public expandByObject(object : THREE.Object3D) : Box3;

        public containsPoint(point : THREE.Vector3) : boolean;

        public containsBox(box : Box3) : boolean;

        public getParameter(point : THREE.Vector3) : THREE.Vector3;

        public intersectsBox(box : Box3) : boolean;

        public intersectsSphere(sphere : THREE.Sphere) : boolean;

        public intersectsPlane(plane : THREE.Plane) : boolean;

        public clampPoint(point : THREE.Vector3, optionalTarget : THREE.Vector3) : THREE.Vector3;

        public distanceToPoint(point : THREE.Vector3) : number;

        public getBoundingSphere(optionalTarget : THREE.Sphere) : THREE.Sphere;

        public intersect(box : Box3) : Box3;

        public union(box : Box3) : Box3;

        public applyMatrix4(matrix : THREE.Matrix4) : Box3;

        public translate(offset : THREE.Vector3) : Box3;

        public equals(box : Box3) : boolean;

        /**
         * @deprecated Use {@link Box3#isEmpty} instead.
         * @return {*}
         */
        public empty() : any;

        /**
         * @deprecated Use {@link Box3#intersectsBox} instead.
         * @param {*} b
         * @return {*}
         */
        public isIntersectionBox(b : any) : any;

        /**
         * @deprecated Use {@link Box3#intersectsSphere} instead.
         * @param {*} s
         * @return {*}
         */
        public isIntersectionSphere(s : any) : any;

        public constructor(min : THREE.Vector3);

        public constructor();

        public getCenter() : THREE.Vector3;

        public getSize() : THREE.Vector3;

        public clampPoint(point : THREE.Vector3) : THREE.Vector3;

        public getBoundingSphere() : THREE.Sphere;

        public setFromArray(array : number[]) : Box3;
    }
}
declare namespace THREE {
    export class BoxBufferGeometry extends THREE.BufferGeometry {
        public constructor(width : number, height : number, depth : number, widthSegments : number, heightSegments : number, depthSegments : number);

        public parameters : any;

        public constructor(width : number, height : number, depth : number, widthSegments : number, heightSegments : number);

        public constructor(width : number, height : number, depth : number, widthSegments : number);

        public constructor(width : number, height : number, depth : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @param {number} width — Width of the sides on the X axis.
     * @param {number} height — Height of the sides on the Y axis.
     * @param {number} depth — Depth of the sides on the Z axis.
     * @param {number} widthSegments — Number of segmented faces along the width of the sides.
     * @param {number} heightSegments — Number of segmented faces along the height of the sides.
     * @param {number} depthSegments — Number of segmented faces along the depth of the sides.
     * @class
     * @extends THREE.Geometry
     */
    export class BoxGeometry extends THREE.Geometry {
        public constructor(width : number, height : number, depth : number, widthSegments : number, heightSegments : number, depthSegments : number);

        public parameters : any;

        public constructor(width : number, height : number, depth : number, widthSegments : number, heightSegments : number);

        public constructor(width : number, height : number, depth : number, widthSegments : number);

        public constructor(width : number, height : number, depth : number);

        constructor();
    }
}
declare namespace THREE {
    export class BoxHelper extends THREE.LineSegments {
        public constructor(object : THREE.Object3D, color : THREE.Color);

        public update(object : THREE.Object3D);

        public constructor(object : THREE.Object3D);

        public constructor();

        public update();
    }
}
declare namespace THREE {
    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js">src/core/BufferAttribute.js</a>
     * @param {*} array
     * @param {number} itemSize
     * @param {boolean} normalized
     * @class
     * @extends Object
     */
    export class BufferAttribute {
        public constructor(array : ArrayLike<number>, itemSize : number, normalized : boolean);

        public uuid : string;

        public array : ArrayLike<number>;

        public itemSize : number;

        public dynamic : boolean;

        public updateRange : any;

        public version : number;

        public normalized : boolean;

        public needsUpdate : boolean;

        public count : number;

        public onUpload : any;

        public setArray(array : ArrayBufferView);

        public setDynamic(dynamic : boolean) : BufferAttribute;

        public clone() : BufferAttribute;

        public copy(source : BufferAttribute) : BufferAttribute;

        public copyAt(index1 : number, attribute : BufferAttribute, index2 : number) : BufferAttribute;

        public copyArray(array : ArrayLike<number>) : BufferAttribute;

        public copyColorsArray(colors : any[]) : BufferAttribute;

        public copyIndicesArray(indices : any[]) : BufferAttribute;

        public copyVector2sArray(vectors : any[]) : BufferAttribute;

        public copyVector3sArray(vectors : any[]) : BufferAttribute;

        public copyVector4sArray(vectors : any[]) : BufferAttribute;

        public set(value : ArrayLike<number>, offset : number) : BufferAttribute;

        public getX(index : number) : number;

        public setX(index : number, x : number) : BufferAttribute;

        public getY(index : number) : number;

        public setY(index : number, y : number) : BufferAttribute;

        public getZ(index : number) : number;

        public setZ(index : number, z : number) : BufferAttribute;

        public getW(index : number) : number;

        public setW(index : number, z : number) : BufferAttribute;

        public setXY(index : number, x : number, y : number) : BufferAttribute;

        public setXYZ(index : number, x : number, y : number, z : number) : BufferAttribute;

        public setXYZW(index : number, x : number, y : number, z : number, w : number) : BufferAttribute;

        /**
         * @deprecated Use {@link BufferAttribute#count} instead.
         */
        public length : number;

        public constructor(array : ArrayLike<number>, itemSize : number);

        public setArray();

        public set(value : ArrayLike<number>) : BufferAttribute;

        public set(value : ArrayBufferView, offset : number) : BufferAttribute;

        public set(value : ArrayBufferView) : BufferAttribute;

        public constructor(array : number[], itemSize : number, normalized : boolean);

        public copyArray(array : number[]) : BufferAttribute;

        public set(value : number[], offset : number) : BufferAttribute;

        public constructor(array : number[], itemSize : number);

        public set(value : number[]) : BufferAttribute;

        constructor();
    }
}
declare namespace THREE {
    /**
     * This creates a new BufferGeometry. It also sets several properties to an default value.
     * @class
     * @extends THREE.EventDispatcher
     */
    export class BufferGeometry extends THREE.EventDispatcher {
        public constructor();

        public static MaxIndex : number;

        /**
         * Unique number of this buffergeometry instance
         */
        public id : number;

        public uuid : string;

        public name : string;

        public type : string;

        public index : THREE.BufferAttribute;

        public attributes : ((THREE.BufferAttribute)|(THREE.InterleavedBufferAttribute[]));

        public morphAttributes : any;

        public groups : any[];

        public boundingBox : THREE.Box3;

        public boundingSphere : THREE.Sphere;

        public drawRange : any;

        public getIndex() : THREE.BufferAttribute;

        public setIndex(index : THREE.BufferAttribute);

        public addAttribute(name : string, attribute : THREE.BufferAttribute) : BufferGeometry;

        public getAttribute(name : string) : ((THREE.BufferAttribute)|(THREE.InterleavedBufferAttribute));

        public removeAttribute(name : string) : BufferGeometry;

        public addGroup(start : number, count : number, materialIndex : number);

        public clearGroups();

        public setDrawRange(start : number, count : number);

        /**
         * Bakes matrix transform directly into vertex coordinates.
         * @param {THREE.Matrix4} matrix
         * @return {THREE.BufferGeometry}
         */
        public applyMatrix(matrix : THREE.Matrix4) : BufferGeometry;

        public rotateX(angle : number) : BufferGeometry;

        public rotateY(angle : number) : BufferGeometry;

        public rotateZ(angle : number) : BufferGeometry;

        public translate(x : number, y : number, z : number) : BufferGeometry;

        public scale(x : number, y : number, z : number) : BufferGeometry;

        public lookAt(v : THREE.Vector3);

        public center() : THREE.Vector3;

        public setFromObject(object : THREE.Object3D) : BufferGeometry;

        public setFromPoints(points : THREE.Vector3[]) : BufferGeometry;

        public updateFromObject(object : THREE.Object3D);

        public fromGeometry(geometry : THREE.Geometry, settings : any) : BufferGeometry;

        public fromDirectGeometry(geometry : THREE.DirectGeometry) : BufferGeometry;

        /**
         * Computes bounding box of the geometry, updating Geometry.boundingBox attribute.
         * Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are null.
         */
        public computeBoundingBox();

        /**
         * Computes bounding sphere of the geometry, updating Geometry.boundingSphere attribute.
         * Bounding spheres aren't' computed by default. They need to be explicitly computed, otherwise they are null.
         */
        public computeBoundingSphere();

        /**
         * Computes vertex normals by averaging face normals.
         */
        public computeVertexNormals();

        public merge(geometry : BufferGeometry, offset : number) : BufferGeometry;

        public normalizeNormals();

        public toNonIndexed() : BufferGeometry;

        public toJSON() : any;

        public clone() : BufferGeometry;

        public copy(source : BufferGeometry) : BufferGeometry;

        /**
         * Disposes the object from memory.
         * You need to call this when you want the bufferGeometry removed while the application is running.
         */
        public dispose();

        /**
         * @deprecated Use {@link BufferGeometry#groups} instead.
         */
        public drawcalls : any;

        /**
         * @deprecated Use {@link BufferGeometry#groups} instead.
         */
        public offsets : any;

        /**
         * @deprecated Use {@link BufferGeometry#setIndex} instead.
         * @param {*} index
         */
        public addIndex(index : any);

        /**
         * @deprecated Use {@link BufferGeometry#addGroup} instead.
         * @param {*} start
         * @param {*} count
         * @param {*} indexOffset
         */
        public addDrawCall(start : any, count : any, indexOffset : any);

        /**
         * @deprecated Use {@link BufferGeometry#clearGroups} instead.
         */
        public clearDrawCalls();

        public addAttribute(name : any, array : any, itemSize : any) : any;

        public addGroup(start : number, count : number);

        public fromGeometry(geometry : THREE.Geometry) : BufferGeometry;

        /**
         * @deprecated Use {@link BufferGeometry#addGroup} instead.
         * @param {*} start
         * @param {*} count
         */
        public addDrawCall(start : any, count : any);

        public setIndex(index : number[]);

        public addAttribute(name : string, attribute : THREE.InterleavedBufferAttribute) : BufferGeometry;
    }
}
declare namespace THREE {
    export class BufferGeometryLoader {
        public constructor(manager : THREE.LoadingManager);

        public manager : THREE.LoadingManager;

        public load(url : string, onLoad : (p1: THREE.BufferGeometry) => void, onProgress : (p1: any) => void, onError : (p1: any) => void);

        public parse(json : any) : THREE.BufferGeometry;

        public constructor();

        public load(url : string, onLoad : (p1: THREE.BufferGeometry) => void, onProgress : (p1: any) => void);

        public load(url : string, onLoad : (p1: THREE.BufferGeometry) => void);
    }
}
declare namespace THREE.Cache {}
declare namespace THREE {
    /**
     * Utility class.
     * @extends Object
     * @class
     */
    export class Cache {
        constructor();

        public static enabled : boolean;

        public static files : any;

        public static add(key : string, file : any);

        public static get(key : string) : any;

        public static remove(key : string);

        public static clear();
    }
}
declare namespace THREE {
    /**
     * This constructor sets following properties to the correct type: matrixWorldInverse, projectionMatrix and projectionMatrixInverse.
     * @class
     * @extends THREE.Object3D
     */
    export class Camera extends THREE.Object3D {
        public constructor();

        /**
         * This is the inverse of matrixWorld. MatrixWorld contains the Matrix which has the world transform of the Camera.
         */
        public matrixWorldInverse : THREE.Matrix4;

        /**
         * This is the matrix which contains the projection.
         */
        public projectionMatrix : THREE.Matrix4;
    }
}
declare namespace THREE {
    export class CameraHelper extends THREE.LineSegments {
        public constructor(camera : THREE.Camera);

        public camera : THREE.Camera;

        public pointMap : any;

        public update();

        constructor();
    }
}
declare namespace THREE {
    export class CanvasTexture extends THREE.Texture {
        public constructor(canvas : HTMLImageElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType, anisotropy : number);

        public constructor(canvas : HTMLImageElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType);

        public constructor(canvas : HTMLImageElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat);

        public constructor(canvas : HTMLImageElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter);

        public constructor(canvas : HTMLImageElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter);

        public constructor(canvas : HTMLImageElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping);

        public constructor(canvas : HTMLImageElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping);

        public constructor(canvas : HTMLImageElement, mapping : THREE.Mapping);

        public constructor(canvas : HTMLImageElement);

        public constructor(canvas : HTMLCanvasElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType, anisotropy : number);

        public constructor(canvas : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType, anisotropy : number);

        public constructor(canvas : HTMLCanvasElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType);

        public constructor(canvas : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType);

        public constructor(canvas : HTMLCanvasElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat);

        public constructor(canvas : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat);

        public constructor(canvas : HTMLCanvasElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter);

        public constructor(canvas : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter);

        public constructor(canvas : HTMLCanvasElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter);

        public constructor(canvas : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter);

        public constructor(canvas : HTMLCanvasElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping);

        public constructor(canvas : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping);

        public constructor(canvas : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping);

        public constructor(canvas : HTMLCanvasElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping);

        public constructor(canvas : HTMLCanvasElement, mapping : THREE.Mapping);

        public constructor(canvas : HTMLVideoElement, mapping : THREE.Mapping);

        public constructor(canvas : HTMLVideoElement);

        public constructor(canvas : HTMLCanvasElement);

        constructor();
    }
}
declare namespace THREE {
    export class CatmullRomCurve3 extends THREE.Curve<THREE.Vector3> {
        public constructor(points : THREE.Vector3[]);

        public points : THREE.Vector3[];

        public constructor();
    }
}
declare namespace THREE {
    export class CircleBufferGeometry extends THREE.BufferGeometry {
        public constructor(radius : number, segments : number, thetaStart : number, thetaLength : number);

        public parameters : any;

        public constructor(radius : number, segments : number, thetaStart : number);

        public constructor(radius : number, segments : number);

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    export class CircleGeometry extends THREE.Geometry {
        public constructor(radius : number, segments : number, thetaStart : number, thetaLength : number);

        public parameters : any;

        public constructor(radius : number, segments : number, thetaStart : number);

        public constructor(radius : number, segments : number);

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    export class ClearMaskPass {
        public constructor();

        public enabled : boolean;

        public render(renderer : THREE.WebGLRenderer, writeBuffer : THREE.WebGLRenderTarget, readBuffer : THREE.WebGLRenderTarget, delta : number);
    }
}
declare namespace THREE {
    /**
     * @param {boolean} autoStart Automatically start the clock.
     * @class
     * @extends Object
     */
    export class Clock {
        public constructor(autoStart : boolean);

        /**
         * If set, starts the clock automatically when the first update is called.
         */
        public autoStart : boolean;

        /**
         * When the clock is running, It holds the starttime of the clock.
         * This counted from the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
         */
        public startTime : number;

        /**
         * When the clock is running, It holds the previous time from a update.
         * This counted from the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
         */
        public oldTime : number;

        /**
         * When the clock is running, It holds the time elapsed between the start of the clock to the previous update.
         * This parameter is in seconds of three decimal places.
         */
        public elapsedTime : number;

        /**
         * This property keeps track whether the clock is running or not.
         */
        public running : boolean;

        /**
         * Starts clock.
         */
        public start();

        /**
         * Stops clock.
         */
        public stop();

        /**
         * Get the seconds passed since the clock started.
         * @return {number}
         */
        public getElapsedTime() : number;

        /**
         * Get the seconds passed since the last call to this method.
         * @return {number}
         */
        public getDelta() : number;

        public constructor();
    }
}
declare namespace THREE {
    export class ColladaLoader {
        public constructor();

        public load(url : string, onLoad : (p1: THREE.ColladaModel) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);

        public setCrossOrigin(value : any);

        public parse(text : string) : THREE.ColladaModel;

        public load(url : string, onLoad : (p1: THREE.ColladaModel) => void, onProgress : (p1: ProgressEvent) => void);

        public load(url : string, onLoad : (p1: THREE.ColladaModel) => void);
    }
}
declare namespace THREE {
    export interface ColladaLoaderReturnType {    }
}
declare namespace THREE {
    export class ColladaModel {
        public animations : any[];

        public kinematics : any;

        public scene : THREE.Scene;

        public library : any;
    }
}
declare namespace THREE {
    /**
     * Represents a color. See also {@link ColorUtils}.
     * 
     * @example
     * var color = new THREE.Color( 0xff0000 );
     * 
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/math/Color.js">src/math/Color.js</a>
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @class
     * @extends Object
     */
    export class Color {
        public constructor(color : Color);

        public constructor(color : string);

        public constructor(color : number);

        public constructor(r : number, g : number, b : number);

        /**
         * Red channel value between 0 and 1. Default is 1.
         */
        public r : number;

        /**
         * Green channel value between 0 and 1. Default is 1.
         */
        public g : number;

        /**
         * Blue channel value between 0 and 1. Default is 1.
         */
        public b : number;

        public set(color : Color) : Color;

        public set(color : number) : Color;

        public set(color : string) : Color;

        public setScalar(scalar : number) : Color;

        public setHex(hex : number) : Color;

        /**
         * Sets this color from RGB values.
         * @param {number} r Red channel value between 0 and 1.
         * @param {number} g Green channel value between 0 and 1.
         * @param {number} b Blue channel value between 0 and 1.
         * @return {THREE.Color}
         */
        public setRGB(r : number, g : number, b : number) : Color;

        /**
         * Sets this color from HSL values.
         * Based on MochiKit implementation by Bob Ippolito.
         * 
         * @param {number} h Hue channel value between 0 and 1.
         * @param {number} s Saturation value channel between 0 and 1.
         * @param {number} l Value channel value between 0 and 1.
         * @return {THREE.Color}
         */
        public setHSL(h : number, s : number, l : number) : Color;

        /**
         * Sets this color from a CSS context style string.
         * @param contextStyle Color in CSS context style format.
         * @param {string} style
         * @return {THREE.Color}
         */
        public setStyle(style : string) : Color;

        /**
         * Clones this color.
         * @return {THREE.Color}
         */
        public clone() : Color;

        /**
         * Copies given color.
         * @param {THREE.Color} color Color to copy.
         * @return {THREE.Color}
         */
        public copy(color : Color) : Color;

        /**
         * Copies given color making conversion from gamma to linear space.
         * @param {THREE.Color} color Color to copy.
         * @param {number} gammaFactor
         * @return {THREE.Color}
         */
        public copyGammaToLinear(color : Color, gammaFactor : number) : Color;

        /**
         * Copies given color making conversion from linear to gamma space.
         * @param {THREE.Color} color Color to copy.
         * @param {number} gammaFactor
         * @return {THREE.Color}
         */
        public copyLinearToGamma(color : Color, gammaFactor : number) : Color;

        /**
         * Converts this color from gamma to linear space.
         * @return {THREE.Color}
         */
        public convertGammaToLinear() : Color;

        /**
         * Converts this color from linear to gamma space.
         * @return {THREE.Color}
         */
        public convertLinearToGamma() : Color;

        /**
         * Returns the hexadecimal value of this color.
         * @return {number}
         */
        public getHex() : number;

        /**
         * Returns the string formated hexadecimal value of this color.
         * @return {string}
         */
        public getHexString() : string;

        public getHSL() : THREE.HSL;

        /**
         * Returns the value of this color in CSS context style.
         * Example: rgb(r, g, b)
         * @return {string}
         */
        public getStyle() : string;

        public offsetHSL(h : number, s : number, l : number) : Color;

        public add(color : Color) : Color;

        public addColors(color1 : Color, color2 : Color) : Color;

        public addScalar(s : number) : Color;

        public sub(color : Color) : Color;

        public multiply(color : Color) : Color;

        public multiplyScalar(s : number) : Color;

        public lerp(color : Color, alpha : number) : Color;

        public equals(color : Color) : boolean;

        public fromArray(rgb : number[], offset : number) : Color;

        public toArray(array : number[], offset : number) : number[];

        public constructor();

        /**
         * Copies given color making conversion from gamma to linear space.
         * @param {THREE.Color} color Color to copy.
         * @return {THREE.Color}
         */
        public copyGammaToLinear(color : Color) : Color;

        /**
         * Copies given color making conversion from linear to gamma space.
         * @param {THREE.Color} color Color to copy.
         * @return {THREE.Color}
         */
        public copyLinearToGamma(color : Color) : Color;

        public fromArray(rgb : number[]) : Color;

        public toArray(array : number[]) : number[];

        public toArray() : number[];
    }
}
declare namespace THREE {
    export class ColorKeyframeTrack extends THREE.KeyframeTrack {
        public constructor(name : string, times : any[], values : any[], interpolation : THREE.InterpolationModes);

        constructor();
    }
}
declare namespace THREE.ColorKeywords {}
declare namespace THREE {
    /**
     * Utility class.
     * @extends Object
     * @class
     */
    export class ColorKeywords {
        constructor();

        public static aliceblue : number;

        public static antiquewhite : number;

        public static aqua : number;

        public static aquamarine : number;

        public static azure : number;

        public static beige : number;

        public static bisque : number;

        public static black : number;

        public static blanchedalmond : number;

        public static blue : number;

        public static blueviolet : number;

        public static brown : number;

        public static burlywood : number;

        public static cadetblue : number;

        public static chartreuse : number;

        public static chocolate : number;

        public static coral : number;

        public static cornflowerblue : number;

        public static cornsilk : number;

        public static crimson : number;

        public static cyan : number;

        public static darkblue : number;

        public static darkcyan : number;

        public static darkgoldenrod : number;

        public static darkgray : number;

        public static darkgreen : number;

        public static darkgrey : number;

        public static darkkhaki : number;

        public static darkmagenta : number;

        public static darkolivegreen : number;

        public static darkorange : number;

        public static darkorchid : number;

        public static darkred : number;

        public static darksalmon : number;

        public static darkseagreen : number;

        public static darkslateblue : number;

        public static darkslategray : number;

        public static darkslategrey : number;

        public static darkturquoise : number;

        public static darkviolet : number;

        public static deeppink : number;

        public static deepskyblue : number;

        public static dimgray : number;

        public static dimgrey : number;

        public static dodgerblue : number;

        public static firebrick : number;

        public static floralwhite : number;

        public static forestgreen : number;

        public static fuchsia : number;

        public static gainsboro : number;

        public static ghostwhite : number;

        public static gold : number;

        public static goldenrod : number;

        public static gray : number;

        public static green : number;

        public static greenyellow : number;

        public static grey : number;

        public static honeydew : number;

        public static hotpink : number;

        public static indianred : number;

        public static indigo : number;

        public static ivory : number;

        public static khaki : number;

        public static lavender : number;

        public static lavenderblush : number;

        public static lawngreen : number;

        public static lemonchiffon : number;

        public static lightblue : number;

        public static lightcoral : number;

        public static lightcyan : number;

        public static lightgoldenrodyellow : number;

        public static lightgray : number;

        public static lightgreen : number;

        public static lightgrey : number;

        public static lightpink : number;

        public static lightsalmon : number;

        public static lightseagreen : number;

        public static lightskyblue : number;

        public static lightslategray : number;

        public static lightslategrey : number;

        public static lightsteelblue : number;

        public static lightyellow : number;

        public static lime : number;

        public static limegreen : number;

        public static linen : number;

        public static magenta : number;

        public static maroon : number;

        public static mediumaquamarine : number;

        public static mediumblue : number;

        public static mediumorchid : number;

        public static mediumpurple : number;

        public static mediumseagreen : number;

        public static mediumslateblue : number;

        public static mediumspringgreen : number;

        public static mediumturquoise : number;

        public static mediumvioletred : number;

        public static midnightblue : number;

        public static mintcream : number;

        public static mistyrose : number;

        public static moccasin : number;

        public static navajowhite : number;

        public static navy : number;

        public static oldlace : number;

        public static olive : number;

        public static olivedrab : number;

        public static orange : number;

        public static orangered : number;

        public static orchid : number;

        public static palegoldenrod : number;

        public static palegreen : number;

        public static paleturquoise : number;

        public static palevioletred : number;

        public static papayawhip : number;

        public static peachpuff : number;

        public static peru : number;

        public static pink : number;

        public static plum : number;

        public static powderblue : number;

        public static purple : number;

        public static red : number;

        public static rosybrown : number;

        public static royalblue : number;

        public static saddlebrown : number;

        public static salmon : number;

        public static sandybrown : number;

        public static seagreen : number;

        public static seashell : number;

        public static sienna : number;

        public static silver : number;

        public static skyblue : number;

        public static slateblue : number;

        public static slategray : number;

        public static slategrey : number;

        public static snow : number;

        public static springgreen : number;

        public static steelblue : number;

        public static tan : number;

        public static teal : number;

        public static thistle : number;

        public static tomato : number;

        public static turquoise : number;

        public static violet : number;

        public static wheat : number;

        public static white : number;

        public static whitesmoke : number;

        public static yellow : number;

        public static yellowgreen : number;
    }
}
declare namespace THREE {
    export enum Colors {
      
    }
}
declare namespace THREE {
    export enum Combine {
      
    }
}
declare namespace THREE {
    export enum CompressedPixelFormat {
      
    }
}
declare namespace THREE {
    export class CompressedTexture extends THREE.Texture {
        public constructor(mipmaps : ImageData[], width : number, height : number, format : THREE.PixelFormat, type : THREE.TextureDataType, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, anisotropy : number, encoding : THREE.TextureEncoding);

        public image : any;

        public constructor(mipmaps : ImageData[], width : number, height : number, format : THREE.PixelFormat, type : THREE.TextureDataType, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, anisotropy : number);

        public constructor(mipmaps : ImageData[], width : number, height : number, format : THREE.PixelFormat, type : THREE.TextureDataType, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter);

        public constructor(mipmaps : ImageData[], width : number, height : number, format : THREE.PixelFormat, type : THREE.TextureDataType, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter);

        public constructor(mipmaps : ImageData[], width : number, height : number, format : THREE.PixelFormat, type : THREE.TextureDataType, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping);

        public constructor(mipmaps : ImageData[], width : number, height : number, format : THREE.PixelFormat, type : THREE.TextureDataType, mapping : THREE.Mapping, wrapS : THREE.Wrapping);

        public constructor(mipmaps : ImageData[], width : number, height : number, format : THREE.PixelFormat, type : THREE.TextureDataType, mapping : THREE.Mapping);

        public constructor(mipmaps : ImageData[], width : number, height : number, format : THREE.PixelFormat, type : THREE.TextureDataType);

        public constructor(mipmaps : ImageData[], width : number, height : number, format : THREE.PixelFormat);

        public constructor(mipmaps : ImageData[], width : number, height : number);

        constructor();
    }
}
declare namespace THREE {
    export class CompressedTextureLoader {
        public constructor(manager : THREE.LoadingManager);

        public manager : THREE.LoadingManager;

        public path : string;

        public load(url : string, onLoad : (p1: THREE.CompressedTexture) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);

        public setPath(path : string) : CompressedTextureLoader;

        public constructor();

        public load(url : string, onLoad : (p1: THREE.CompressedTexture) => void, onProgress : (p1: ProgressEvent) => void);

        public load(url : string, onLoad : (p1: THREE.CompressedTexture) => void);
    }
}
declare namespace THREE {
    export class ConeBufferGeometry extends THREE.BufferGeometry {
        public constructor(radius : number, height : number, radialSegment : number, heightSegment : number, openEnded : boolean, thetaStart : number, thetaLength : number);

        public constructor(radius : number, height : number, radialSegment : number, heightSegment : number, openEnded : boolean, thetaStart : number);

        public constructor(radius : number, height : number, radialSegment : number, heightSegment : number, openEnded : boolean);

        public constructor(radius : number, height : number, radialSegment : number, heightSegment : number);

        public constructor(radius : number, height : number, radialSegment : number);

        public constructor(radius : number, height : number);

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    export class ConeGeometry extends THREE.CylinderGeometry {
        public constructor(radius : number, height : number, radialSegment : number, heightSegment : number, openEnded : boolean, thetaStart : number, thetaLength : number);

        public constructor(radius : number, height : number, radialSegment : number, heightSegment : number, openEnded : boolean, thetaStart : number);

        public constructor(radius : number, height : number, radialSegment : number, heightSegment : number, openEnded : boolean);

        public constructor(radius : number, height : number, radialSegment : number, heightSegment : number);

        public constructor(radius : number, height : number, radialSegment : number);

        public constructor(radius : number, height : number);

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    export class CSS3DObject extends THREE.Object3D {
        public constructor(element : any);

        public element : any;

        constructor();
    }
}
declare namespace THREE {
    export class CSS3DRenderer {
        public constructor();

        public domElement : HTMLElement;

        public setSize(width : number, height : number);

        public render(scene : THREE.Scene, camera : THREE.Camera);
    }
}
declare namespace THREE {
    export class CSS3DSprite extends THREE.CSS3DObject {
        public constructor(element : any);

        constructor();
    }
}
declare namespace THREE {
    export class CTMLoader extends THREE.Loader {
        public constructor();

        /**
         * load multiple CTM parts defined in JSON.
         * @param {string} url(required)
         * @param {*} callback(required)
         * @param {*} parameters
         * @return {*}
         */
        public loadParts(url : string, callback : () => any, parameters : any) : any;

        /**
         * Load CTMLoader compressed models
         * @param {string} url(required)
         * @param {*} callback(required)
         * @param {*} parameters
         * @return {*}
         */
        public load(url : string, callback : (p1: any) => any, parameters : any) : any;

        /**
         * create buffergeometry by ctm file.
         * @param {string} file(required)
         * @param {*} callback(required)
         * @return {*}
         */
        public createModel(file : string, callback : () => any) : any;

        /**
         * load multiple CTM parts defined in JSON.
         * @param {string} url(required)
         * @param {*} callback(required)
         * @param parameters
         * @return {*}
         */
        public loadParts(url : string, callback : () => any) : any;

        /**
         * Load CTMLoader compressed models
         * @param {string} url(required)
         * @param {*} callback(required)
         * @param parameters
         * @return {*}
         */
        public load(url : string, callback : (p1: any) => any) : any;
    }
}
declare namespace THREE {
    export class CubeCamera extends THREE.Object3D {
        public constructor(near : number, far : number, cubeResolution : number);

        public renderTarget : THREE.WebGLRenderTargetCube;

        /**
         * @deprecated Use {@link CubeCamera#update} instead
         * @param {*} renderer
         * @param {THREE.Scene} scene
         */
        public updateCubeMap(renderer : THREE.Renderer, scene : THREE.Scene);

        public update(renderer : THREE.Renderer, scene : THREE.Scene);

        public constructor(near : number, far : number);

        public constructor(near : number);

        public constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated Use {@link BoxGeometry} instead.
     * @class
     * @extends THREE.BoxGeometry
     */
    export class CubeGeometry extends THREE.BoxGeometry {    }
}
declare namespace THREE {
    export class CubeTexture extends THREE.Texture {
        public constructor(images : any[], mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType, anisotropy : number, encoding : THREE.TextureEncoding);

        public images : any;

        public constructor(images : any[], mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType, anisotropy : number);

        public constructor(images : any[], mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType);

        public constructor(images : any[], mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat);

        public constructor(images : any[], mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter);

        public constructor(images : any[], mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter);

        public constructor(images : any[], mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping);

        public constructor(images : any[], mapping : THREE.Mapping, wrapS : THREE.Wrapping);

        public constructor(images : any[], mapping : THREE.Mapping);

        public constructor(images : any[]);

        public constructor();
    }
}
declare namespace THREE {
    export class CubeTextureLoader {
        public constructor(manager : THREE.LoadingManager);

        public manager : THREE.LoadingManager;

        public corssOrigin : string;

        public path : string;

        public load(urls : Array<string>, onLoad : (p1: THREE.CubeTexture) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void) : THREE.CubeTexture;

        public setCrossOrigin(crossOrigin : string) : CubeTextureLoader;

        public setPath(path : string) : CubeTextureLoader;

        public constructor();

        public load(urls : Array<string>, onLoad : (p1: THREE.CubeTexture) => void, onProgress : (p1: ProgressEvent) => void) : THREE.CubeTexture;

        public load(urls : Array<string>, onLoad : (p1: THREE.CubeTexture) => void) : THREE.CubeTexture;

        public load(urls : Array<string>) : THREE.CubeTexture;

        public load(urls : string[], onLoad : (p1: THREE.CubeTexture) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void) : THREE.CubeTexture;

        public load(urls : string[], onLoad : (p1: THREE.CubeTexture) => void, onProgress : (p1: ProgressEvent) => void) : THREE.CubeTexture;

        public load(urls : string[], onLoad : (p1: THREE.CubeTexture) => void) : THREE.CubeTexture;

        public load(urls : string[]) : THREE.CubeTexture;
    }
}
declare namespace THREE {
    export class CubicBezierCurve extends THREE.Curve<THREE.Vector2> {
        public constructor(v0 : THREE.Vector2, v1 : THREE.Vector2, v2 : THREE.Vector2, v3 : THREE.Vector2);

        public v0 : THREE.Vector2;

        public v1 : THREE.Vector2;

        public v2 : THREE.Vector2;

        public v3 : THREE.Vector2;

        constructor();
    }
}
declare namespace THREE {
    export class CubicBezierCurve3 extends THREE.Curve<THREE.Vector3> {
        public constructor(v0 : THREE.Vector3, v1 : THREE.Vector3, v2 : THREE.Vector3, v3 : THREE.Vector3);

        public v0 : THREE.Vector3;

        public v1 : THREE.Vector3;

        public v2 : THREE.Vector3;

        public v3 : THREE.Vector3;

        constructor();
    }
}
declare namespace THREE {
    export class CubicInterpolant extends THREE.Interpolant {
        public constructor(parameterPositions : any, samplesValues : any, sampleSize : number, resultBuffer : any);

        public interpolate_(i1 : number, t0 : number, t : number, t1 : number) : any;

        public constructor(parameterPositions : any, samplesValues : any, sampleSize : number);

        constructor();
    }
}
declare namespace THREE {
    export enum CullFace {
      
    }
}
declare namespace THREE {
    /**
     * An extensible curve object which contains methods for interpolation
     * class Curve&lt;T extends Vector&gt;
     * @class
     * @extends Object
     */
    export class Curve<T extends THREE.Vector> {
        /**
         * Returns a vector for point t of the curve where t is between 0 and 1
         * getPoint(t: number): T;
         * @param {number} t
         * @return {*}
         */
        public getPoint(t : number) : T;

        /**
         * Returns a vector for point at relative position in curve according to arc length
         * getPointAt(u: number): T;
         * @param {number} u
         * @return {*}
         */
        public getPointAt(u : number) : T;

        /**
         * Get sequence of points using getPoint( t )
         * getPoints(divisions?: number): T[];
         * @param {number} divisions
         * @return {T[]}
         */
        public getPoints(divisions : number) : T[];

        /**
         * Get sequence of equi-spaced points using getPointAt( u )
         * getSpacedPoints(divisions?: number): T[];
         * @param {number} divisions
         * @return {T[]}
         */
        public getSpacedPoints(divisions : number) : T[];

        /**
         * Get total curve arc length
         * @return {number}
         */
        public getLength() : number;

        /**
         * Get list of cumulative segment lengths
         * @param {number} divisions
         * @return {double[]}
         */
        public getLengths(divisions : number) : number[];

        /**
         * Update the cumlative segment distance cache
         */
        public updateArcLengths();

        /**
         * Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equi distance
         * @param {number} u
         * @param {number} distance
         * @return {number}
         */
        public getUtoTmapping(u : number, distance : number) : number;

        /**
         * Returns a unit vector tangent at t. If the subclassed curve do not implement its tangent derivation, 2 points a small delta apart will be used to find its gradient which seems to give a reasonable approximation
         * getTangent(t: number): T;
         * @param {number} t
         * @return {*}
         */
        public getTangent(t : number) : T;

        /**
         * Returns tangent at equidistance point u on the curve
         * getTangentAt(u: number): T;
         * @param {number} u
         * @return {*}
         */
        public getTangentAt(u : number) : T;

        /**
         * @deprecated since r84.
         * @param {Function} constructorFunc
         * @param {Function} getPointFunc
         * @return {Function}
         */
        public static create(constructorFunc : Function, getPointFunc : Function) : Function;

        /**
         * Get sequence of points using getPoint( t )
         * getPoints(divisions?: number): T[];
         * @return {T[]}
         */
        public getPoints() : T[];

        /**
         * Get sequence of equi-spaced points using getPointAt( u )
         * getSpacedPoints(divisions?: number): T[];
         * @return {T[]}
         */
        public getSpacedPoints() : T[];

        /**
         * Get list of cumulative segment lengths
         * @return {double[]}
         */
        public getLengths() : number[];
    }
}
declare namespace THREE {
    export class CurvePath<T extends THREE.Vector> extends THREE.Curve<T> {
        public constructor();

        public curves : THREE.Curve<T>[];

        public autoClose : boolean;

        public add(curve : THREE.Curve<T>);

        public checkConnection() : boolean;

        public closePath();

        public getCurveLengths() : number[];

        /**
         * @deprecated Use {@link Geometry#setFromPoints} instead.
         * @param {number} divisions
         * @return {THREE.Geometry}
         */
        public createPointsGeometry(divisions : number) : THREE.Geometry;

        /**
         * @deprecated Use {@link Geometry#setFromPoints} instead.
         * @param {number} divisions
         * @return {THREE.Geometry}
         */
        public createSpacedPointsGeometry(divisions : number) : THREE.Geometry;

        /**
         * @deprecated Use {@link Geometry#setFromPoints} instead.
         * @param {T[]} points
         * @return {THREE.Geometry}
         */
        public createGeometry(points : T[]) : THREE.Geometry;
    }
}
declare namespace THREE.CurveUtils {}
declare namespace THREE {
    /**
     * Utility class.
     * @extends Object
     * @class
     */
    export class CurveUtils {
        constructor();

        public static tangentQuadraticBezier(t : number, p0 : number, p1 : number, p2 : number) : number;

        public static tangentCubicBezier(t : number, p0 : number, p1 : number, p2 : number, p3 : number) : number;

        public static tangentSpline(t : number, p0 : number, p1 : number, p2 : number, p3 : number) : number;

        public static interpolate(p0 : number, p1 : number, p2 : number, p3 : number, t : number) : number;
    }
}
declare namespace THREE {
    export class CylinderBufferGeometry extends THREE.BufferGeometry {
        public constructor(radiusTop : number, radiusBottom : number, height : number, radialSegments : number, heightSegments : number, openEnded : boolean, thetaStart : number, thetaLength : number);

        public parameters : any;

        public constructor(radiusTop : number, radiusBottom : number, height : number, radialSegments : number, heightSegments : number, openEnded : boolean, thetaStart : number);

        public constructor(radiusTop : number, radiusBottom : number, height : number, radialSegments : number, heightSegments : number, openEnded : boolean);

        public constructor(radiusTop : number, radiusBottom : number, height : number, radialSegments : number, heightSegments : number);

        public constructor(radiusTop : number, radiusBottom : number, height : number, radialSegments : number);

        public constructor(radiusTop : number, radiusBottom : number, height : number);

        public constructor(radiusTop : number, radiusBottom : number);

        public constructor(radiusTop : number);

        public constructor();
    }
}
declare namespace THREE {
    /**
     * @param {number} radiusTop — Radius of the cylinder at the top.
     * @param {number} radiusBottom — Radius of the cylinder at the bottom.
     * @param {number} height — Height of the cylinder.
     * @param {number} radiusSegments — Number of segmented faces around the circumference of the cylinder.
     * @param {number} heightSegments — Number of rows of faces along the height of the cylinder.
     * @param {boolean} openEnded - A Boolean indicating whether or not to cap the ends of the cylinder.
     * @param {number} thetaStart
     * @param {number} thetaLength
     * @class
     * @extends THREE.Geometry
     */
    export class CylinderGeometry extends THREE.Geometry {
        public constructor(radiusTop : number, radiusBottom : number, height : number, radiusSegments : number, heightSegments : number, openEnded : boolean, thetaStart : number, thetaLength : number);

        public parameters : any;

        public constructor(radiusTop : number, radiusBottom : number, height : number, radiusSegments : number, heightSegments : number, openEnded : boolean, thetaStart : number);

        public constructor(radiusTop : number, radiusBottom : number, height : number, radiusSegments : number, heightSegments : number, openEnded : boolean);

        public constructor(radiusTop : number, radiusBottom : number, height : number, radiusSegments : number, heightSegments : number);

        public constructor(radiusTop : number, radiusBottom : number, height : number, radiusSegments : number);

        public constructor(radiusTop : number, radiusBottom : number, height : number);

        public constructor(radiusTop : number, radiusBottom : number);

        public constructor(radiusTop : number);

        public constructor();
    }
}
declare namespace THREE {
    export class Cylindrical {
        public constructor(radius : number, theta : number, y : number);

        public radius : number;

        public theta : number;

        public y : number;

        public clone() : Cylindrical;

        public copy(other : Cylindrical) : Cylindrical;

        public set(radius : number, theta : number, y : number) : Cylindrical;

        public setFromVector3(vec3 : THREE.Vector3) : Cylindrical;

        public constructor(radius : number, theta : number);

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    export class DataTexture extends THREE.Texture {
        public constructor(data : any, width : number, height : number, format : THREE.PixelFormat, type : THREE.TextureDataType, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, anisotropy : number, encoding : THREE.TextureEncoding);

        public image : ImageData;

        public constructor(data : any, width : number, height : number, format : THREE.PixelFormat, type : THREE.TextureDataType, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, anisotropy : number);

        public constructor(data : any, width : number, height : number, format : THREE.PixelFormat, type : THREE.TextureDataType, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter);

        public constructor(data : any, width : number, height : number, format : THREE.PixelFormat, type : THREE.TextureDataType, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter);

        public constructor(data : any, width : number, height : number, format : THREE.PixelFormat, type : THREE.TextureDataType, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping);

        public constructor(data : any, width : number, height : number, format : THREE.PixelFormat, type : THREE.TextureDataType, mapping : THREE.Mapping, wrapS : THREE.Wrapping);

        public constructor(data : any, width : number, height : number, format : THREE.PixelFormat, type : THREE.TextureDataType, mapping : THREE.Mapping);

        public constructor(data : any, width : number, height : number, format : THREE.PixelFormat, type : THREE.TextureDataType);

        public constructor(data : any, width : number, height : number, format : THREE.PixelFormat);

        public constructor(data : any, width : number, height : number);

        constructor();
    }
}
declare namespace THREE {
    export class DataTextureLoader {
        public constructor(manager : THREE.LoadingManager);

        public manager : THREE.LoadingManager;

        public load(url : string, onLoad : (p1: THREE.DataTexture) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);

        public constructor();

        public load(url : string, onLoad : (p1: THREE.DataTexture) => void, onProgress : (p1: ProgressEvent) => void);

        public load(url : string, onLoad : (p1: THREE.DataTexture) => void);
    }
}
declare namespace THREE {
    export interface Dds {
        mipmaps : ImageData[];

        width : number;

        height : number;

        format : THREE.CompressedPixelFormat;

        mipmapCount : number;
    }
}
declare namespace THREE {
    export class DDSLoader extends THREE.CompressedTextureLoader {
        public constructor();

        public parse(buffer : string, loadMipmaps : boolean) : THREE.Dds;
    }
}
declare namespace THREE {
    export enum DepthModes {
      
    }
}
declare namespace THREE {
    export enum DepthPackingStrategies {
      
    }
}
declare namespace THREE {
    export class DepthTexture extends THREE.Texture {
        public constructor(width : number, heighht : number, type : THREE.TextureDataType, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, anisotropy : number);

        public image : any;

        public constructor(width : number, heighht : number, type : THREE.TextureDataType, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter);

        public constructor(width : number, heighht : number, type : THREE.TextureDataType, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter);

        public constructor(width : number, heighht : number, type : THREE.TextureDataType, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping);

        public constructor(width : number, heighht : number, type : THREE.TextureDataType, mapping : THREE.Mapping, wrapS : THREE.Wrapping);

        public constructor(width : number, heighht : number, type : THREE.TextureDataType, mapping : THREE.Mapping);

        public constructor(width : number, heighht : number, type : THREE.TextureDataType);

        public constructor(width : number, heighht : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/DirectGeometry.js">src/core/DirectGeometry.js</a>
     * @class
     * @extends THREE.EventDispatcher
     */
    export class DirectGeometry extends THREE.EventDispatcher {
        public constructor();

        public id : number;

        public uuid : string;

        public name : string;

        public type : string;

        public indices : number[];

        public vertices : THREE.Vector3[];

        public normals : THREE.Vector3[];

        public colors : THREE.Color[];

        public uvs : THREE.Vector2[];

        public uvs2 : THREE.Vector2[];

        public groups : any[];

        public morphTargets : THREE.MorphTarget[];

        public skinWeights : number[];

        public skinIndices : number[];

        public boundingBox : THREE.Box3;

        public boundingSphere : THREE.Sphere;

        public verticesNeedUpdate : boolean;

        public normalsNeedUpdate : boolean;

        public colorsNeedUpdate : boolean;

        public uvsNeedUpdate : boolean;

        public groupsNeedUpdate : boolean;

        public computeBoundingBox();

        public computeBoundingSphere();

        public computeGroups(geometry : THREE.Geometry);

        public fromGeometry(geometry : THREE.Geometry) : DirectGeometry;

        public dispose();
    }
}
declare namespace THREE {
    /**
     * Affects objects using MeshLambertMaterial or MeshPhongMaterial.
     * 
     * @example
     * // White directional light at half intensity shining from the top.
     * var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
     * directionalLight.position.set( 0, 1, 0 );
     * scene.add( directionalLight );
     * 
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLight.js">src/lights/DirectionalLight.js</a>
     * @param {THREE.Color} color
     * @param {number} intensity
     * @class
     * @extends THREE.Light
     */
    export class DirectionalLight extends THREE.Light {
        public constructor(color : THREE.Color, intensity : number);

        /**
         * Target used for shadow camera orientation.
         */
        public target : THREE.Object3D;

        /**
         * Light's intensity.
         * Default — 1.0.
         */
        public intensity : number;

        public shadow : THREE.DirectionalLightShadow;

        public constructor(color : THREE.Color);

        public constructor();

        public constructor(color : string, intensity : number);

        public constructor(color : number, intensity : number);

        public constructor(color : string);

        public constructor(color : number);
    }
}
declare namespace THREE {
    export class DirectionalLightHelper extends THREE.Object3D {
        public constructor(light : THREE.Light, size : number);

        public light : THREE.Light;

        public lightPlane : THREE.Line;

        public dispose();

        public update();

        public constructor(light : THREE.Light);

        constructor();
    }
}
declare namespace THREE {
    export class DirectionalLightShadow extends THREE.LightShadow {
        public camera : THREE.OrthographicCamera;
    }
}
declare namespace THREE {
    export class DiscreteInterpolant extends THREE.Interpolant {
        public constructor(parameterPositions : any, samplesValues : any, sampleSize : number, resultBuffer : any);

        public interpolate_(i1 : number, t0 : number, t : number, t1 : number) : any;

        public constructor(parameterPositions : any, samplesValues : any, sampleSize : number);

        constructor();
    }
}
declare namespace THREE {
    export class DodecahedronBufferGeometry extends THREE.PolyhedronBufferGeometry {
        public constructor(radius : number, detail : number);

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    export class DodecahedronGeometry extends THREE.Geometry {
        public constructor(radius : number, detail : number);

        public parameters : any;

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated Use {@link BufferAttribute#setDynamic} instead.
     * @class
     * @extends THREE.BufferAttribute
     */
    export class DynamicBufferAttribute extends THREE.BufferAttribute {    }
}
declare namespace THREE {
    export class EdgesGeometry extends THREE.BufferGeometry {
        public constructor(geometry : THREE.BufferGeometry, thresholdAngle : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated Use {@link EdgesGeometry}
     * @param {THREE.Object3D} object
     * @param {number} hex
     * @param {number} thresholdAngle
     * @class
     * @extends THREE.LineSegments
     */
    export class EdgesHelper extends THREE.LineSegments {
        public constructor(object : THREE.Object3D, hex : number, thresholdAngle : number);

        public constructor(object : THREE.Object3D, hex : number);

        public constructor(object : THREE.Object3D);

        constructor();
    }
}
declare namespace THREE {
    export class EditorControls extends THREE.EventDispatcher {
        public constructor(object : THREE.Camera, domElement : HTMLElement);

        public enabled : boolean;

        public center : THREE.Vector3;

        public focus(target : THREE.Object3D, frame : boolean);

        public pan(delta : THREE.Vector3);

        public zoom(delta : THREE.Vector3);

        public rotate(delta : THREE.Vector3);

        public dispose();

        public constructor(object : THREE.Camera);

        constructor();
    }
}
declare namespace THREE {
    export class EffectComposer {
        public constructor(renderer : THREE.WebGLRenderer, renderTarget : THREE.WebGLRenderTarget);

        public renderTarget1 : THREE.WebGLRenderTarget;

        public renderTarget2 : THREE.WebGLRenderTarget;

        public writeBuffer : THREE.WebGLRenderTarget;

        public readBuffer : THREE.WebGLRenderTarget;

        public passes : any[];

        public copyPass : THREE.ShaderPass;

        public swapBuffers();

        public addPass(pass : any);

        public insertPass(pass : any, index : number);

        public render(delta : number);

        public reset(renderTarget : THREE.WebGLRenderTarget);

        public setSize(width : number, height : number);

        public constructor(renderer : THREE.WebGLRenderer);

        public render();

        public reset();

        constructor();
    }
}
declare namespace THREE {
    export class EllipseCurve extends THREE.Curve<THREE.Vector2> {
        public constructor(aX : number, aY : number, xRadius : number, yRadius : number, aStartAngle : number, aEndAngle : number, aClockwise : boolean, aRotation : number);

        public aX : number;

        public aY : number;

        public xRadius : number;

        public yRadius : number;

        public aStartAngle : number;

        public aEndAngle : number;

        public aClockwise : boolean;

        public aRotation : number;

        constructor();
    }
}
declare namespace THREE {
    export class Euler {
        public constructor(x : number, y : number, z : number, order : string);

        public x : number;

        public y : number;

        public z : number;

        public order : string;

        public onChangeCallback : any;

        public set(x : number, y : number, z : number, order : string) : Euler;

        public clone() : Euler;

        public copy(euler : Euler) : Euler;

        public setFromRotationMatrix(m : THREE.Matrix4, order : string, update : boolean) : Euler;

        public setFromQuaternion(q : THREE.Quaternion, order : string, update : boolean) : Euler;

        public setFromVector3(v : THREE.Vector3, order : string) : Euler;

        public reorder(newOrder : string) : Euler;

        public equals(euler : Euler) : boolean;

        public fromArray(xyzo : any[]) : Euler;

        public toArray(array : number[], offset : number) : number[];

        public toVector3(optionalResult : THREE.Vector3) : THREE.Vector3;

        public onChange(callback : Function);

        public static RotationOrders : string[];

        public static DefaultOrder : string;

        public constructor(x : number, y : number, z : number);

        public constructor(x : number, y : number);

        public constructor(x : number);

        public constructor();

        public set(x : number, y : number, z : number) : Euler;

        public setFromRotationMatrix(m : THREE.Matrix4, order : string) : Euler;

        public setFromRotationMatrix(m : THREE.Matrix4) : Euler;

        public setFromQuaternion(q : THREE.Quaternion, order : string) : Euler;

        public setFromQuaternion(q : THREE.Quaternion) : Euler;

        public setFromVector3(v : THREE.Vector3) : Euler;

        public toArray(array : number[]) : number[];

        public toArray() : number[];

        public toVector3() : THREE.Vector3;
    }
}
declare namespace THREE {
    /**
     * Creates eventDispatcher object. It needs to be call with '.call' to add the functionality to an object.
     * @class
     * @extends Object
     */
    export class EventDispatcher {
        public constructor();

        /**
         * Adds a listener to an event type.
         * @param {string} type The type of the listener that gets removed.
         * @param {*} listener The listener function that gets removed.
         */
        public addEventListener(type : string, listener : (p1: Event) => void);

        /**
         * Adds a listener to an event type.
         * @param {string} type The type of the listener that gets removed.
         * @param {*} listener The listener function that gets removed.
         */
        public hasEventListener(type : string, listener : (p1: Event) => void);

        /**
         * Removes a listener from an event type.
         * @param {string} type The type of the listener that gets removed.
         * @param {*} listener The listener function that gets removed.
         */
        public removeEventListener(type : string, listener : (p1: Event) => void);

        /**
         * Fire an event type.
         * @param type The type of event that gets fired.
         * @param {THREE.EventDispatcher.EventData} event
         */
        public dispatchEvent(event : any);
    }
}
declare namespace THREE {
    export class ExtrudeGeometry extends THREE.Geometry {
        public constructor(shape : THREE.Shape, options : any);

        public constructor(shapes : THREE.Shape[], options : any);

        public static WorldUVGenerator : any;

        public addShapeList(shapes : THREE.Shape[], options : any);

        public addShape(shape : THREE.Shape, options : any);

        public constructor(shape : THREE.Shape);

        public constructor();

        public constructor(shapes : THREE.Shape[]);

        public addShapeList(shapes : THREE.Shape[]);

        public addShape(shape : THREE.Shape);
    }
}
declare namespace THREE {
    /**
     * @param {number} a Vertex A index.
     * @param {number} b Vertex B index.
     * @param {number} c Vertex C index.
     * @param {THREE.Vector3} normal Face normal or array of vertex normals.
     * @param {THREE.Color} color Face color or array of vertex colors.
     * @param {number} materialIndex Material index.
     * @class
     * @extends Object
     */
    export class Face3 {
        public constructor(a : number, b : number, c : number, normal : THREE.Vector3, color : THREE.Color, materialIndex : number);

        public constructor(a : number, b : number, c : number, normal : THREE.Vector3, vertexColors : THREE.Color[], materialIndex : number);

        public constructor(a : number, b : number, c : number, vertexNormals : THREE.Vector3[], color : THREE.Color, materialIndex : number);

        public constructor(a : number, b : number, c : number, vertexNormals : THREE.Vector3[], vertexColors : THREE.Color[], materialIndex : number);

        /**
         * Vertex A index.
         */
        public a : number;

        /**
         * Vertex B index.
         */
        public b : number;

        /**
         * Vertex C index.
         */
        public c : number;

        /**
         * Face normal.
         */
        public normal : THREE.Vector3;

        /**
         * Array of 4 vertex normals.
         */
        public vertexNormals : THREE.Vector3[];

        /**
         * Face color.
         */
        public color : THREE.Color;

        /**
         * Array of 4 vertex normals.
         */
        public vertexColors : THREE.Color[];

        /**
         * Material index (points to {@link Geometry.materials}).
         */
        public materialIndex : number;

        public clone() : Face3;

        public copy(source : Face3) : Face3;

        public constructor(a : number, b : number, c : number, normal : THREE.Vector3, color : THREE.Color);

        public constructor(a : number, b : number, c : number, normal : THREE.Vector3);

        public constructor(a : number, b : number, c : number);

        public constructor(a : number, b : number, c : number, normal : THREE.Vector3, vertexColors : THREE.Color[]);

        public constructor(a : number, b : number, c : number, vertexNormals : THREE.Vector3[], color : THREE.Color);

        public constructor(a : number, b : number, c : number, vertexNormals : THREE.Vector3[]);

        public constructor(a : number, b : number, c : number, vertexNormals : THREE.Vector3[], vertexColors : THREE.Color[]);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated Use {@link Face3} instead.
     * @class
     * @extends THREE.Face3
     */
    export class Face4 extends THREE.Face3 {    }
}
declare namespace THREE {
    export class FaceNormalsHelper extends THREE.LineSegments {
        public constructor(object : THREE.Object3D, size : number, hex : number, linewidth : number);

        public object : THREE.Object3D;

        public size : number;

        public update(object : THREE.Object3D);

        public constructor(object : THREE.Object3D, size : number, hex : number);

        public constructor(object : THREE.Object3D, size : number);

        public constructor(object : THREE.Object3D);

        public update();

        constructor();
    }
}
declare namespace THREE {
    export class FBXLoader {
        public constructor(manager : THREE.LoadingManager);

        public manager : THREE.LoadingManager;

        public load(url : string, onLoad : (p1: THREE.Group) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);

        public parse(FBXText : string, resourceDirectory : string) : THREE.Group;

        public constructor();

        public load(url : string, onLoad : (p1: THREE.Group) => void, onProgress : (p1: ProgressEvent) => void);

        public load(url : string, onLoad : (p1: THREE.Group) => void);
    }
}
declare namespace THREE {
    export class FileLoader {
        public constructor(manager : THREE.LoadingManager);

        public manager : THREE.LoadingManager;

        public mimeType : MimeType;

        public path : string;

        public responseType : string;

        public withCredentials : string;

        public load(url : string, onLoad : (p1: string) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void) : any;

        public setMimeType(mimeType : MimeType) : FileLoader;

        public setPath(path : string) : FileLoader;

        public setResponseType(responseType : string) : FileLoader;

        public setWithCredentials(value : string) : FileLoader;

        public constructor();

        public load(url : string, onLoad : (p1: string) => void, onProgress : (p1: ProgressEvent) => void) : any;

        public load(url : string, onLoad : (p1: string) => void) : any;

        public load(url : string) : any;
    }
}
declare namespace THREE {
    export class FilmPass extends THREE.Pass {
        public constructor(noiseIntensity : number, scanlinesIntensity : number, scanlinesCount : number, grayscale : boolean);

        public scene : THREE.Scene;

        public camera : THREE.Camera;

        public uniforms : THREE.IUniform;

        public material : THREE.Material;

        public quad : THREE.Mesh;

        constructor();
    }
}
declare namespace THREE {
    export class FirstPersonControls {
        public constructor(object : THREE.Camera, domElement : HTMLElement);

        public object : THREE.Object3D;

        public target : THREE.Vector3;

        public domElement : ((HTMLCanvasElement)|(HTMLDocument));

        public enabled : boolean;

        public movementSpeed : number;

        public lookSpeed : number;

        public noFly : boolean;

        public lookVertical : boolean;

        public autoForward : boolean;

        public activeLook : boolean;

        public heightSpeed : boolean;

        public heightCoef : number;

        public heightMin : number;

        public heightMax : number;

        public constrainVertical : boolean;

        public verticalMin : number;

        public verticalMax : number;

        public autoSpeedFactor : number;

        public mouseX : number;

        public mouseY : number;

        public lat : number;

        public lon : number;

        public phi : number;

        public theta : number;

        public moveForward : boolean;

        public moveBackward : boolean;

        public moveLeft : boolean;

        public moveRight : boolean;

        public freeze : any;

        public mouseDragOn : boolean;

        public update(delta : number);

        public dispose();

        public constructor(object : THREE.Camera);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.
     * @param {*} array
     * @param {number} itemSize
     * @class
     * @extends THREE.BufferAttribute
     */
    export class Float32Attribute extends THREE.BufferAttribute {
        public constructor(array : any, itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    export class Float32BufferAttribute extends THREE.BufferAttribute {
        public constructor(array : Array<number>, itemSize : number);

        public constructor(array : ArrayBuffer, itemSize : number);

        public constructor(array : ArrayLike<number>, itemSize : number);

        public constructor(array : number[], itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.
     * @param {*} array
     * @param {number} itemSize
     * @class
     * @extends THREE.BufferAttribute
     */
    export class Float64Attribute extends THREE.BufferAttribute {
        public constructor(array : any, itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    export class Float64BufferAttribute extends THREE.BufferAttribute {
        public constructor(array : Array<number>, itemSize : number);

        public constructor(array : ArrayLike<number>, itemSize : number);

        public constructor(array : ArrayBuffer, itemSize : number);

        public constructor(array : number[], itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * This class contains the parameters that define linear fog, i.e., that grows linearly denser with the distance.
     * @param {number} hex
     * @param {number} near
     * @param {number} far
     * @class
     * @extends *
     */
    export class Fog implements THREE.IFog {
        public constructor(hex : number, near : number, far : number);

        public name : string;

        /**
         * Fog color.
         */
        public color : THREE.Color;

        /**
         * The minimum distance to start applying fog. Objects that are less than 'near' units from the active camera won't be affected by fog.
         */
        public near : number;

        /**
         * The maximum distance at which fog stops being calculated and applied. Objects that are more than 'far' units away from the active camera won't be affected by fog.
         * Default is 1000.
         */
        public far : number;

        public constructor(hex : number, near : number);

        public constructor(hex : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * This class contains the parameters that define linear fog, i.e., that grows exponentially denser with the distance.
     * @param {number} hex
     * @param {number} density
     * @class
     * @extends *
     */
    export class FogExp2 implements THREE.IFog {
        public constructor(hex : number, density : number);

        public name : string;

        public color : THREE.Color;

        /**
         * Defines how fast the fog will grow dense.
         * Default is 0.00025.
         */
        public density : number;

        public constructor(hex : number);

        public constructor(hex : string, density : number);

        public constructor(hex : string);

        constructor();
    }
}
declare namespace THREE {
    export class Font {
        public constructor(jsondata : string);

        public data : string;

        public generateShapes(text : string, size : number, divisions : number) : any[];

        constructor();
    }
}
declare namespace THREE {
    export class FontLoader {
        public constructor(manager : THREE.LoadingManager);

        public manager : THREE.LoadingManager;

        public load(url : string, onLoad : (p1: THREE.Font) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);

        public parse(json : string) : THREE.Font;

        public constructor();

        public load(url : string, onLoad : (p1: THREE.Font) => void, onProgress : (p1: ProgressEvent) => void);

        public load(url : string, onLoad : (p1: THREE.Font) => void);

        public load(url : string);
    }
}
declare namespace THREE {
    export enum FrontFaceDirection {
      
    }
}
declare namespace THREE {
    /**
     * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
     * @param {THREE.Plane} p0
     * @param {THREE.Plane} p1
     * @param {THREE.Plane} p2
     * @param {THREE.Plane} p3
     * @param {THREE.Plane} p4
     * @param {THREE.Plane} p5
     * @class
     * @extends Object
     */
    export class Frustum {
        public constructor(p0 : THREE.Plane, p1 : THREE.Plane, p2 : THREE.Plane, p3 : THREE.Plane, p4 : THREE.Plane, p5 : THREE.Plane);

        /**
         * Array of 6 vectors.
         */
        public planes : THREE.Plane[];

        public set(p0 : number, p1 : number, p2 : number, p3 : number, p4 : number, p5 : number) : Frustum;

        public clone() : Frustum;

        public copy(frustum : Frustum) : Frustum;

        public setFromMatrix(m : THREE.Matrix4) : Frustum;

        public intersectsObject(object : THREE.Object3D) : boolean;

        public intersectsObject(sprite : THREE.Sprite) : boolean;

        public intersectsSphere(sphere : THREE.Sphere) : boolean;

        public intersectsBox(box : THREE.Box3) : boolean;

        public containsPoint(point : THREE.Vector3) : boolean;

        public constructor(p0 : THREE.Plane, p1 : THREE.Plane, p2 : THREE.Plane, p3 : THREE.Plane, p4 : THREE.Plane);

        public constructor(p0 : THREE.Plane, p1 : THREE.Plane, p2 : THREE.Plane, p3 : THREE.Plane);

        public constructor(p0 : THREE.Plane, p1 : THREE.Plane, p2 : THREE.Plane);

        public constructor(p0 : THREE.Plane, p1 : THREE.Plane);

        public constructor(p0 : THREE.Plane);

        public constructor();

        public set(p0 : number, p1 : number, p2 : number, p3 : number, p4 : number) : Frustum;

        public set(p0 : number, p1 : number, p2 : number, p3 : number) : Frustum;

        public set(p0 : number, p1 : number, p2 : number) : Frustum;

        public set(p0 : number, p1 : number) : Frustum;

        public set(p0 : number) : Frustum;

        public set() : Frustum;
    }
}
declare namespace THREE {
    /**
     * Base class for geometries
     * 
     * # Example
     * var geometry = new THREE.Geometry();
     * geometry.vertices.push( new THREE.Vector3( -10, 10, 0 ) );
     * geometry.vertices.push( new THREE.Vector3( -10, -10, 0 ) );
     * geometry.vertices.push( new THREE.Vector3( 10, -10, 0 ) );
     * geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
     * geometry.computeBoundingSphere();
     * 
     * @see https://github.com/mrdoob/three.js/blob/master/src/core/Geometry.js
     * @class
     * @extends THREE.EventDispatcher
     */
    export class Geometry extends THREE.EventDispatcher {
        public constructor();

        /**
         * Unique number of this geometry instance
         */
        public id : number;

        public uuid : string;

        /**
         * Name for this geometry. Default is an empty string.
         */
        public name : string;

        public type : string;

        /**
         * The array of vertices hold every position of points of the model.
         * To signal an update in this array, Geometry.verticesNeedUpdate needs to be set to true.
         */
        public vertices : THREE.Vector3[];

        /**
         * Array of vertex colors, matching number and order of vertices.
         * Used in ParticleSystem, Line and Ribbon.
         * Meshes use per-face-use-of-vertex colors embedded directly in faces.
         * To signal an update in this array, Geometry.colorsNeedUpdate needs to be set to true.
         */
        public colors : THREE.Color[];

        /**
         * Array of triangles or/and quads.
         * The array of faces describe how each vertex in the model is connected with each other.
         * To signal an update in this array, Geometry.elementsNeedUpdate needs to be set to true.
         */
        public faces : THREE.Face3[];

        /**
         * Array of face UV layers.
         * Each UV layer is an array of UV matching order and number of vertices in faces.
         * To signal an update in this array, Geometry.uvsNeedUpdate needs to be set to true.
         */
        public faceVertexUvs : THREE.Vector2[][][];

        /**
         * Array of morph targets. Each morph target is a Javascript object:
         * 
         * { name: "targetName", vertices: [ new THREE.Vector3(), ... ] }
         * 
         * Morph vertices match number and order of primary vertices.
         */
        public morphTargets : THREE.MorphTarget[];

        /**
         * Array of morph normals. Morph normals have similar structure as morph targets, each normal set is a Javascript object:
         * 
         * morphNormal = { name: "NormalName", normals: [ new THREE.Vector3(), ... ] }
         */
        public morphNormals : THREE.MorphNormals[];

        /**
         * Array of skinning weights, matching number and order of vertices.
         */
        public skinWeights : number[];

        /**
         * Array of skinning indices, matching number and order of vertices.
         */
        public skinIndices : number[];

        /**
         * 
         */
        public lineDistances : number[];

        /**
         * Bounding box.
         */
        public boundingBox : THREE.Box3;

        /**
         * Bounding sphere.
         */
        public boundingSphere : THREE.Sphere;

        /**
         * Set to true if the vertices array has been updated.
         */
        public verticesNeedUpdate : boolean;

        /**
         * Set to true if the faces array has been updated.
         */
        public elementsNeedUpdate : boolean;

        /**
         * Set to true if the uvs array has been updated.
         */
        public uvsNeedUpdate : boolean;

        /**
         * Set to true if the normals array has been updated.
         */
        public normalsNeedUpdate : boolean;

        /**
         * Set to true if the colors array has been updated.
         */
        public colorsNeedUpdate : boolean;

        /**
         * Set to true if the linedistances array has been updated.
         */
        public lineDistancesNeedUpdate : boolean;

        /**
         * 
         */
        public groupsNeedUpdate : boolean;

        /**
         * Bakes matrix transform directly into vertex coordinates.
         * @param {THREE.Matrix4} matrix
         * @return {THREE.Geometry}
         */
        public applyMatrix(matrix : THREE.Matrix4) : Geometry;

        public rotateX(angle : number) : Geometry;

        public rotateY(angle : number) : Geometry;

        public rotateZ(angle : number) : Geometry;

        public translate(x : number, y : number, z : number) : Geometry;

        public scale(x : number, y : number, z : number) : Geometry;

        public lookAt(vector : THREE.Vector3);

        public fromBufferGeometry(geometry : THREE.BufferGeometry) : Geometry;

        public center() : THREE.Vector3;

        public normalize() : Geometry;

        /**
         * Computes face normals.
         */
        public computeFaceNormals();

        /**
         * Computes vertex normals by averaging face normals.
         * Face normals must be existing / computed beforehand.
         * @param {boolean} areaWeighted
         */
        public computeVertexNormals(areaWeighted : boolean);

        /**
         * Compute vertex normals, but duplicating face normals.
         */
        public computeFlatVertexNormals();

        /**
         * Computes morph normals.
         */
        public computeMorphNormals();

        public computeLineDistances();

        /**
         * Computes bounding box of the geometry, updating {@link Geometry.boundingBox} attribute.
         */
        public computeBoundingBox();

        /**
         * Computes bounding sphere of the geometry, updating Geometry.boundingSphere attribute.
         * Neither bounding boxes or bounding spheres are computed by default. They need to be explicitly computed, otherwise they are null.
         */
        public computeBoundingSphere();

        public merge(geometry : Geometry, matrix : THREE.Matrix, materialIndexOffset : number);

        public mergeMesh(mesh : THREE.Mesh);

        /**
         * Checks for duplicate vertices using hashmap.
         * Duplicated vertices are removed and faces' vertices are updated.
         * @return {number}
         */
        public mergeVertices() : number;

        public setFromPoints(points : any) : Geometry;

        public sortFacesByMaterialIndex();

        public toJSON() : any;

        /**
         * Creates a new clone of the Geometry.
         * @return {THREE.Geometry}
         */
        public clone() : Geometry;

        public copy(source : Geometry) : Geometry;

        /**
         * Removes The object from memory.
         * Don't forget to call this method when you remove an geometry because it can cuase meomory leaks.
         */
        public dispose();

        public bones : THREE.Bone[];

        public animation : THREE.AnimationClip;

        public animations : THREE.AnimationClip[];

        /**
         * Computes vertex normals by averaging face normals.
         * Face normals must be existing / computed beforehand.
         */
        public computeVertexNormals();

        public merge(geometry : Geometry, matrix : THREE.Matrix);

        public merge(geometry : Geometry);

        public setFromPoints(points : any) : Geometry;

        public setFromPoints(points : THREE.Vector2[]) : Geometry;

        public setFromPoints(points : THREE.Vector3[]) : Geometry;
    }
}
declare namespace THREE.GeometryUtils {}
declare namespace THREE {
    /**
     * Utility class.
     * @extends Object
     * @class
     */
    export class GeometryUtils {
        constructor();

        /**
         * @deprecated Use {@link Geometry#merge} instead.
         * @param {*} geometry1
         * @param {*} geometry2
         * @param {*} materialIndexOffset
         * @return {*}
         */
        public static merge(geometry1 : any, geometry2 : any, materialIndexOffset : any) : any;

        /**
         * @deprecated Use {@link Geometry#center} instead.
         * @param {*} geometry
         * @return {*}
         */
        public static center(geometry : any) : any;

        /**
         * @deprecated Use {@link Geometry#merge} instead.
         * @param {*} geometry1
         * @param {*} geometry2
         * @return {*}
         */
        public static merge(geometry1 : any, geometry2 : any) : any;
    }
}
declare namespace THREE {
    export var REVISION : string;

    export var CullFaceNone : THREE.CullFace;

    export var CullFaceBack : THREE.CullFace;

    export var CullFaceFront : THREE.CullFace;

    export var CullFaceFrontBack : THREE.CullFace;

    export var FrontFaceDirectionCW : THREE.FrontFaceDirection;

    export var FrontFaceDirectionCCW : THREE.FrontFaceDirection;

    export var BasicShadowMap : THREE.ShadowMapType;

    export var PCFShadowMap : THREE.ShadowMapType;

    export var PCFSoftShadowMap : THREE.ShadowMapType;

    export var FrontSide : THREE.Side;

    export var BackSide : THREE.Side;

    export var DoubleSide : THREE.Side;

    export var FlatShading : THREE.Shading;

    export var SmoothShading : THREE.Shading;

    export var NoColors : THREE.Colors;

    export var FaceColors : THREE.Colors;

    export var VertexColors : THREE.Colors;

    export var NoBlending : THREE.Blending;

    export var NormalBlending : THREE.Blending;

    export var AdditiveBlending : THREE.Blending;

    export var SubtractiveBlending : THREE.Blending;

    export var MultiplyBlending : THREE.Blending;

    export var CustomBlending : THREE.Blending;

    export var AddEquation : THREE.BlendingEquation;

    export var SubtractEquation : THREE.BlendingEquation;

    export var ReverseSubtractEquation : THREE.BlendingEquation;

    export var MinEquation : THREE.BlendingEquation;

    export var MaxEquation : THREE.BlendingEquation;

    export var ZeroFactor : THREE.BlendingDstFactor;

    export var OneFactor : THREE.BlendingDstFactor;

    export var SrcColorFactor : THREE.BlendingDstFactor;

    export var OneMinusSrcColorFactor : THREE.BlendingDstFactor;

    export var SrcAlphaFactor : THREE.BlendingDstFactor;

    export var OneMinusSrcAlphaFactor : THREE.BlendingDstFactor;

    export var DstAlphaFactor : THREE.BlendingDstFactor;

    export var OneMinusDstAlphaFactor : THREE.BlendingDstFactor;

    export var DstColorFactor : THREE.BlendingDstFactor;

    export var OneMinusDstColorFactor : THREE.BlendingDstFactor;

    export var SrcAlphaSaturateFactor : THREE.BlendingSrcFactor;

    export var NeverDepth : THREE.DepthModes;

    export var AlwaysDepth : THREE.DepthModes;

    export var LessDepth : THREE.DepthModes;

    export var LessEqualDepth : THREE.DepthModes;

    export var EqualDepth : THREE.DepthModes;

    export var GreaterEqualDepth : THREE.DepthModes;

    export var GreaterDepth : THREE.DepthModes;

    export var NotEqualDepth : THREE.DepthModes;

    export var MultiplyOperation : THREE.Combine;

    export var MixOperation : THREE.Combine;

    export var AddOperation : THREE.Combine;

    export var NoToneMapping : THREE.ToneMapping;

    export var LinearToneMapping : THREE.ToneMapping;

    export var ReinhardToneMapping : THREE.ToneMapping;

    export var Uncharted2ToneMapping : THREE.ToneMapping;

    export var CineonToneMapping : THREE.ToneMapping;

    export var UVMapping : THREE.Mapping;

    export var CubeReflectionMapping : THREE.Mapping;

    export var CubeRefractionMapping : THREE.Mapping;

    export var EquirectangularReflectionMapping : THREE.Mapping;

    export var EquirectangularRefractionMapping : THREE.Mapping;

    export var SphericalReflectionMapping : THREE.Mapping;

    export var CubeUVReflectionMapping : THREE.Mapping;

    export var CubeUVRefractionMapping : THREE.Mapping;

    export var RepeatWrapping : THREE.Wrapping;

    export var ClampToEdgeWrapping : THREE.Wrapping;

    export var MirroredRepeatWrapping : THREE.Wrapping;

    export var NearestFilter : THREE.TextureFilter;

    export var NearestMipMapNearestFilter : THREE.TextureFilter;

    export var NearestMipMapLinearFilter : THREE.TextureFilter;

    export var LinearFilter : THREE.TextureFilter;

    export var LinearMipMapNearestFilter : THREE.TextureFilter;

    export var LinearMipMapLinearFilter : THREE.TextureFilter;

    export var UnsignedByteType : THREE.TextureDataType;

    export var ByteType : THREE.TextureDataType;

    export var ShortType : THREE.TextureDataType;

    export var UnsignedShortType : THREE.TextureDataType;

    export var IntType : THREE.TextureDataType;

    export var UnsignedIntType : THREE.TextureDataType;

    export var FloatType : THREE.TextureDataType;

    export var HalfFloatType : THREE.TextureDataType;

    export var UnsignedShort4444Type : THREE.PixelType;

    export var UnsignedShort5551Type : THREE.PixelType;

    export var UnsignedShort565Type : THREE.PixelType;

    export var UnsignedInt248Type : THREE.PixelType;

    export var AlphaFormat : THREE.PixelFormat;

    export var RGBFormat : THREE.PixelFormat;

    export var RGBAFormat : THREE.PixelFormat;

    export var LuminanceFormat : THREE.PixelFormat;

    export var LuminanceAlphaFormat : THREE.PixelFormat;

    export var RGBEFormat : THREE.PixelFormat;

    export var DepthFormat : THREE.PixelFormat;

    export var DepthStencilFormat : THREE.PixelFormat;

    export var RGB_S3TC_DXT1_Format : THREE.CompressedPixelFormat;

    export var RGBA_S3TC_DXT1_Format : THREE.CompressedPixelFormat;

    export var RGBA_S3TC_DXT3_Format : THREE.CompressedPixelFormat;

    export var RGBA_S3TC_DXT5_Format : THREE.CompressedPixelFormat;

    export var RGB_PVRTC_4BPPV1_Format : THREE.CompressedPixelFormat;

    export var RGB_PVRTC_2BPPV1_Format : THREE.CompressedPixelFormat;

    export var RGBA_PVRTC_4BPPV1_Format : THREE.CompressedPixelFormat;

    export var RGBA_PVRTC_2BPPV1_Format : THREE.CompressedPixelFormat;

    export var RGB_ETC1_Format : THREE.CompressedPixelFormat;

    export var LoopOnce : THREE.AnimationActionLoopStyles;

    export var LoopRepeat : THREE.AnimationActionLoopStyles;

    export var LoopPingPong : THREE.AnimationActionLoopStyles;

    export var InterpolateDiscrete : THREE.InterpolationModes;

    export var InterpolateLinear : THREE.InterpolationModes;

    export var InterpolateSmooth : THREE.InterpolationModes;

    export var ZeroCurvatureEnding : THREE.InterpolationEndingModes;

    export var ZeroSlopeEnding : THREE.InterpolationEndingModes;

    export var WrapAroundEnding : THREE.InterpolationEndingModes;

    export var TrianglesDrawMode : THREE.TrianglesDrawModes;

    export var TriangleStripDrawMode : THREE.TrianglesDrawModes;

    export var TriangleFanDrawMode : THREE.TrianglesDrawModes;

    export var LinearEncoding : THREE.TextureEncoding;

    export var sRGBEncoding : THREE.TextureEncoding;

    export var GammaEncoding : THREE.TextureEncoding;

    export var RGBEEncoding : THREE.TextureEncoding;

    export var LogLuvEncoding : THREE.TextureEncoding;

    export var RGBM7Encoding : THREE.TextureEncoding;

    export var RGBM16Encoding : THREE.TextureEncoding;

    export var RGBDEncoding : THREE.TextureEncoding;

    export var BasicDepthPacking : THREE.DepthPackingStrategies;

    export var RGBADepthPacking : THREE.DepthPackingStrategies;

    export function warn(message : any, ...optionalParams : any[]);

    export function error(message : any, ...optionalParams : any[]);

    export function log(message : any, ...optionalParams : any[]);

    export var GeometryIdCount : number;

    export var Object3DIdCount : number;

    export var DefaultLoadingManager : THREE.LoadingManager;

    export var MaterialIdCount : number;

    /**
     * @deprecated
     */
    export var LineStrip : number;

    /**
     * @deprecated
     */
    export var LinePieces : number;

    export var TextureIdCount : number;

    export var AudioContext : AudioContext;

    export function warn();

    export function error();

    export function log();

    export var CopyShader : THREE.Shader;

    export var AWDLoader : any;

    export var OBJLoader2 : any;

    export var STLLoader : any;

    export var FlyControls : any;

    export var BloomPass : any;

    export var DotScreenShader : THREE.Shader;

    export var RGBShiftShader : THREE.Shader;

    export var FXAAShader : THREE.Shader;

    export var canvas : boolean;

    export var webgl : boolean;

    export var workers : boolean;

    export var fileapi : boolean;

    export function getWebGLErrorMessage() : HTMLElement;

    export function addGetWebGLMessage(parameters : any);

    export function addGetWebGLMessage();

    export var BleachBypassShader : THREE.Shader;

    export var ColorCorrectionShader : THREE.Shader;

}
declare namespace THREE {
    export class GridHelper extends THREE.LineSegments {
        public constructor(size : number, divisions : number, color1 : THREE.Color, color2 : THREE.Color);

        /**
         * @deprecated Colors should be specified in the constructor.
         * @param {THREE.Color} color1
         * @param {THREE.Color} color2
         */
        public setColors(color1 : THREE.Color, color2 : THREE.Color);

        public constructor(size : number, divisions : number, color1 : THREE.Color);

        public constructor(size : number, divisions : number);

        /**
         * @deprecated Colors should be specified in the constructor.
         * @param {THREE.Color} color1
         */
        public setColors(color1 : THREE.Color);

        /**
         * @deprecated Colors should be specified in the constructor.
         */
        public setColors();

        public constructor(size : number, divisions : number, color1 : number, color2 : THREE.Color);

        public constructor(size : number, divisions : number, color1 : number, color2 : number);

        public constructor(size : number, divisions : number, color1 : THREE.Color, color2 : number);

        /**
         * @deprecated Colors should be specified in the constructor.
         * @param {number} color1
         * @param {THREE.Color} color2
         */
        public setColors(color1 : number, color2 : THREE.Color);

        /**
         * @deprecated Colors should be specified in the constructor.
         * @param {THREE.Color} color1
         * @param {number} color2
         */
        public setColors(color1 : THREE.Color, color2 : number);

        /**
         * @deprecated Colors should be specified in the constructor.
         * @param {number} color1
         * @param {number} color2
         */
        public setColors(color1 : number, color2 : number);

        public constructor(size : number, divisions : number, color1 : number);

        /**
         * @deprecated Colors should be specified in the constructor.
         * @param {number} color1
         */
        public setColors(color1 : number);

        constructor();
    }
}
declare namespace THREE {
    export class Group extends THREE.Object3D {
        public constructor();
    }
}
declare namespace THREE {
    export class HemisphereLight extends THREE.Light {
        public constructor(skyColor : THREE.Color, groundColor : THREE.Color, intensity : number);

        public skyColor : THREE.Color;

        public groundColor : THREE.Color;

        public intensity : number;

        public constructor(skyColor : THREE.Color, groundColor : THREE.Color);

        public constructor(skyColor : THREE.Color);

        public constructor();

        public constructor(skyColor : THREE.Color, groundColor : string, intensity : number);

        public constructor(skyColor : THREE.Color, groundColor : number, intensity : number);

        public constructor(skyColor : string, groundColor : string, intensity : number);

        public constructor(skyColor : number, groundColor : number, intensity : number);

        public constructor(skyColor : number, groundColor : string, intensity : number);

        public constructor(skyColor : number, groundColor : THREE.Color, intensity : number);

        public constructor(skyColor : string, groundColor : THREE.Color, intensity : number);

        public constructor(skyColor : string, groundColor : number, intensity : number);

        public constructor(skyColor : THREE.Color, groundColor : number);

        public constructor(skyColor : number, groundColor : number);

        public constructor(skyColor : THREE.Color, groundColor : string);

        public constructor(skyColor : string, groundColor : THREE.Color);

        public constructor(skyColor : string, groundColor : string);

        public constructor(skyColor : number, groundColor : THREE.Color);

        public constructor(skyColor : number, groundColor : string);

        public constructor(skyColor : string, groundColor : number);

        public constructor(skyColor : string);

        public constructor(skyColor : number);
    }
}
declare namespace THREE {
    export class HemisphereLightHelper extends THREE.Object3D {
        public constructor(light : THREE.Light, sphereSize : number);

        public light : THREE.Light;

        public colors : THREE.Color[];

        public lightSphere : THREE.Mesh;

        public dispose();

        public update();

        constructor();
    }
}
declare namespace THREE {
    export interface HSL {
        h : number;

        s : number;

        l : number;
    }
}
declare namespace THREE {
    export class IcosahedronBufferGeometry extends THREE.PolyhedronBufferGeometry {
        public constructor(radius : number, detail : number);

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    export class IcosahedronGeometry extends THREE.PolyhedronGeometry {
        public constructor(radius : number, detail : number);

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    export interface IFog {
        name : string;

        color : THREE.Color;

        clone() : IFog;

        toJSON() : any;
    }
}
declare namespace THREE {
    /**
     * A loader for loading an image.
     * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
     * @param {THREE.LoadingManager} manager
     * @class
     * @extends Object
     */
    export class ImageLoader {
        public constructor(manager : THREE.LoadingManager);

        public manager : THREE.LoadingManager;

        public crossOrigin : string;

        public withCredentials : string;

        public path : string;

        /**
         * Begin loading from url
         * @param {string} url
         * @param {*} onLoad
         * @param {*} onProgress
         * @param {*} onError
         * @return {HTMLImageElement}
         */
        public load(url : string, onLoad : (p1: HTMLImageElement) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void) : HTMLImageElement;

        public setCrossOrigin(crossOrigin : string) : ImageLoader;

        public setWithCredentials(value : string) : ImageLoader;

        public setPath(value : string) : ImageLoader;

        public constructor();

        /**
         * Begin loading from url
         * @param {string} url
         * @param {*} onLoad
         * @param {*} onProgress
         * @return {HTMLImageElement}
         */
        public load(url : string, onLoad : (p1: HTMLImageElement) => void, onProgress : (p1: ProgressEvent) => void) : HTMLImageElement;

        /**
         * Begin loading from url
         * @param {string} url
         * @param {*} onLoad
         * @return {HTMLImageElement}
         */
        public load(url : string, onLoad : (p1: HTMLImageElement) => void) : HTMLImageElement;

        /**
         * Begin loading from url
         * @param {string} url
         * @return {HTMLImageElement}
         */
        public load(url : string) : HTMLImageElement;
    }
}
declare namespace THREE.ImageUtils {}
declare namespace THREE {
    /**
     * Utility class.
     * @extends Object
     * @class
     */
    export class ImageUtils {
        constructor();

        /**
         * @deprecated
         */
        public static crossOrigin : string;

        /**
         * @deprecated Use {@link TextureLoader} instead.
         * @param {string} url
         * @param {THREE.Mapping} mapping
         * @param {*} onLoad
         * @param {*} onError
         * @return {THREE.Texture}
         */
        public static loadTexture(url : string, mapping : THREE.Mapping, onLoad : (p1: THREE.Texture) => void, onError : (p1: string) => void) : THREE.Texture;

        /**
         * @deprecated Use {@link CubeTextureLoader} instead.
         * @param {java.lang.String[]} array
         * @param {THREE.Mapping} mapping
         * @param {*} onLoad
         * @param {*} onError
         * @return {THREE.Texture}
         */
        public static loadTextureCube(array : string[], mapping : THREE.Mapping, onLoad : (p1: THREE.Texture) => void, onError : (p1: string) => void) : THREE.Texture;

        /**
         * @deprecated Use {@link TextureLoader} instead.
         * @param {string} url
         * @param {THREE.Mapping} mapping
         * @param {*} onLoad
         * @return {THREE.Texture}
         */
        public static loadTexture(url : string, mapping : THREE.Mapping, onLoad : (p1: THREE.Texture) => void) : THREE.Texture;

        /**
         * @deprecated Use {@link TextureLoader} instead.
         * @param {string} url
         * @param {THREE.Mapping} mapping
         * @return {THREE.Texture}
         */
        public static loadTexture(url : string, mapping : THREE.Mapping) : THREE.Texture;

        /**
         * @deprecated Use {@link TextureLoader} instead.
         * @param {string} url
         * @return {THREE.Texture}
         */
        public static loadTexture(url : string) : THREE.Texture;

        /**
         * @deprecated Use {@link CubeTextureLoader} instead.
         * @param {java.lang.String[]} array
         * @param {THREE.Mapping} mapping
         * @param {*} onLoad
         * @return {THREE.Texture}
         */
        public static loadTextureCube(array : string[], mapping : THREE.Mapping, onLoad : (p1: THREE.Texture) => void) : THREE.Texture;

        /**
         * @deprecated Use {@link CubeTextureLoader} instead.
         * @param {java.lang.String[]} array
         * @param {THREE.Mapping} mapping
         * @return {THREE.Texture}
         */
        public static loadTextureCube(array : string[], mapping : THREE.Mapping) : THREE.Texture;

        /**
         * @deprecated Use {@link CubeTextureLoader} instead.
         * @param {java.lang.String[]} array
         * @return {THREE.Texture}
         */
        public static loadTextureCube(array : string[]) : THREE.Texture;
    }
}
declare namespace THREE {
    export class ImmediateRenderObject extends THREE.Object3D {
        public constructor(material : THREE.Material);

        public material : THREE.Material;

        public render(renderCallback : Function);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferAttribute.js">src/core/InstancedBufferAttribute.js</a>
     * @param {*} data
     * @param {number} itemSize
     * @param {number} meshPerAttribute
     * @class
     * @extends THREE.BufferAttribute
     */
    export class InstancedBufferAttribute extends THREE.BufferAttribute {
        public constructor(data : ArrayLike<number>, itemSize : number, meshPerAttribute : number);

        public meshPerAttribute : number;

        public constructor(data : ArrayLike<number>, itemSize : number);

        public constructor(data : number[], itemSize : number, meshPerAttribute : number);

        public constructor(data : number[], itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferGeometry.js">src/core/InstancedBufferGeometry.js</a>
     * @class
     * @extends THREE.BufferGeometry
     */
    export class InstancedBufferGeometry extends THREE.BufferGeometry {
        public constructor();

        public groups : any[];

        public maxInstancedCount : number;
    }
}
declare namespace THREE {
    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js">src/core/InstancedInterleavedBuffer.js</a>
     * @param {*} array
     * @param {number} stride
     * @param {number} meshPerAttribute
     * @class
     * @extends THREE.InterleavedBuffer
     */
    export class InstancedInterleavedBuffer extends THREE.InterleavedBuffer {
        public constructor(array : ArrayLike<number>, stride : number, meshPerAttribute : number);

        public meshPerAttribute : number;

        public constructor(array : ArrayLike<number>, stride : number);

        public constructor(array : number[], stride : number, meshPerAttribute : number);

        public constructor(array : number[], stride : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.
     * @param {*} array
     * @param {number} itemSize
     * @class
     * @extends THREE.BufferAttribute
     */
    export class Int16Attribute extends THREE.BufferAttribute {
        public constructor(array : any, itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    export class Int16BufferAttribute extends THREE.BufferAttribute {
        public constructor(array : Array<number>, itemSize : number);

        public constructor(array : ArrayLike<number>, itemSize : number);

        public constructor(array : ArrayBuffer, itemSize : number);

        public constructor(array : number[], itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.
     * @param {*} array
     * @param {number} itemSize
     * @class
     * @extends THREE.BufferAttribute
     */
    export class Int32Attribute extends THREE.BufferAttribute {
        public constructor(array : any, itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    export class Int32BufferAttribute extends THREE.BufferAttribute {
        public constructor(array : Array<number>, itemSize : number);

        public constructor(array : ArrayBuffer, itemSize : number);

        public constructor(array : ArrayLike<number>, itemSize : number);

        public constructor(array : number[], itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.
     * @param {*} array
     * @param {number} itemSize
     * @class
     * @extends THREE.BufferAttribute
     */
    export class Int8Attribute extends THREE.BufferAttribute {
        public constructor(array : any, itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    export class Int8BufferAttribute extends THREE.BufferAttribute {
        public constructor(array : Array<number>, itemSize : number);

        public constructor(array : ArrayBuffer, itemSize : number);

        public constructor(array : ArrayLike<number>, itemSize : number);

        public constructor(array : number[], itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBuffer.js">src/core/InterleavedBuffer.js</a>
     * @param {*} array
     * @param {number} stride
     * @class
     * @extends Object
     */
    export class InterleavedBuffer {
        public constructor(array : ArrayLike<number>, stride : number);

        public array : ArrayLike<number>;

        public stride : number;

        public dynamic : boolean;

        public updateRange : any;

        public version : number;

        public length : number;

        public count : number;

        public needsUpdate : boolean;

        public setArray(array : ArrayBufferView);

        public setDynamic(dynamic : boolean) : InterleavedBuffer;

        public copy(source : InterleavedBuffer) : InterleavedBuffer;

        public copyAt(index1 : number, attribute : THREE.InterleavedBufferAttribute, index2 : number) : InterleavedBuffer;

        public set(value : ArrayLike<number>, index : number) : InterleavedBuffer;

        public clone() : InterleavedBuffer;

        public setArray();

        public constructor(array : number[], stride : number);

        public set(value : number[], index : number) : InterleavedBuffer;

        constructor();
    }
}
declare namespace THREE {
    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBufferAttribute.js">src/core/InterleavedBufferAttribute.js</a>
     * @param {THREE.InterleavedBuffer} interleavedBuffer
     * @param {number} itemSize
     * @param {number} offset
     * @param {boolean} normalized
     * @class
     * @extends Object
     */
    export class InterleavedBufferAttribute {
        public constructor(interleavedBuffer : THREE.InterleavedBuffer, itemSize : number, offset : number, normalized : boolean);

        public uuid : string;

        public data : THREE.InterleavedBuffer;

        public itemSize : number;

        public offset : number;

        public count : number;

        public normalized : boolean;

        public array : any[];

        public getX(index : number) : number;

        public setX(index : number, x : number) : InterleavedBufferAttribute;

        public getY(index : number) : number;

        public setY(index : number, y : number) : InterleavedBufferAttribute;

        public getZ(index : number) : number;

        public setZ(index : number, z : number) : InterleavedBufferAttribute;

        public getW(index : number) : number;

        public setW(index : number, z : number) : InterleavedBufferAttribute;

        public setXY(index : number, x : number, y : number) : InterleavedBufferAttribute;

        public setXYZ(index : number, x : number, y : number, z : number) : InterleavedBufferAttribute;

        public setXYZW(index : number, x : number, y : number, z : number, w : number) : InterleavedBufferAttribute;

        /**
         * @deprecated Use {@link InterleavedBufferAttribute#count} instead.
         */
        public length : number;

        public constructor(interleavedBuffer : THREE.InterleavedBuffer, itemSize : number, offset : number);

        constructor();
    }
}
declare namespace THREE {
    export class Interpolant {
        public constructor(parameterPositions : any, samplesValues : any, sampleSize : number, resultBuffer : any);

        public parameterPositions : any;

        public samplesValues : any;

        public valueSize : number;

        public resultBuffer : any;

        public evaluate(time : number) : any;

        public constructor(parameterPositions : any, samplesValues : any, sampleSize : number);

        constructor();
    }
}
declare namespace THREE {
    export enum InterpolationEndingModes {
      
    }
}
declare namespace THREE {
    export enum InterpolationModes {
      
    }
}
declare namespace THREE {
    export interface Intersection {
        distance : number;

        distanceToRay : number;

        point : THREE.Vector3;

        index : number;

        face : THREE.Face3;

        faceIndex : number;

        object : THREE.Object3D;
    }
}
declare namespace THREE {
    export interface IUniform {
        value : any;
    }
}
declare namespace THREE {
    /**
     * A loader for loading objects in JSON format.
     * @param {THREE.LoadingManager} manager
     * @class
     * @extends THREE.Loader
     */
    export class JSONLoader extends THREE.Loader {
        public constructor(manager : THREE.LoadingManager);

        public manager : THREE.LoadingManager;

        public withCredentials : boolean;

        public load(url : string, onLoad : (p1: THREE.Geometry, p2: THREE.Material[]) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);

        public setTexturePath(value : string);

        public parse(json : any, texturePath : string) : any;

        public constructor();

        public load(url : string, onLoad : (p1: THREE.Geometry, p2: THREE.Material[]) => void, onProgress : (p1: ProgressEvent) => void);

        public load(url : string, onLoad : (p1: THREE.Geometry, p2: THREE.Material[]) => void);

        public load(url : string);

        public parse(json : any) : any;
    }
}
declare namespace THREE {
    export class KeyframeTrack {
        public constructor(name : string, times : any[], values : any[], interpolation : THREE.InterpolationModes);

        public name : string;

        public times : any[];

        public values : any[];

        public ValueTypeName : string;

        public TimeBufferType : Float32Array;

        public ValueBufferType : Float32Array;

        public DefaultInterpolation : THREE.InterpolationModes;

        public InterpolantFactoryMethodDiscrete(result : any) : THREE.DiscreteInterpolant;

        public InterpolantFactoryMethodLinear(result : any) : THREE.LinearInterpolant;

        public InterpolantFactoryMethodSmooth(result : any) : THREE.CubicInterpolant;

        public setInterpolation(interpolation : THREE.InterpolationModes);

        public getInterpolation() : THREE.InterpolationModes;

        public getValuesize() : number;

        public shift(timeOffset : number) : KeyframeTrack;

        public scale(timeScale : number) : KeyframeTrack;

        public trim(startTime : number, endTime : number) : KeyframeTrack;

        public validate() : boolean;

        public optimize() : KeyframeTrack;

        public static parse(json : any) : KeyframeTrack;

        public static toJSON(track : KeyframeTrack) : any;

        constructor();
    }
}
declare namespace THREE {
    export class LatheBufferGeometry extends THREE.BufferGeometry {
        public constructor(points : THREE.Vector2[], segments : number, phiStart : number, phiLength : number);

        public parameters : any;

        public constructor(points : THREE.Vector2[], segments : number, phiStart : number);

        public constructor(points : THREE.Vector2[], segments : number);

        public constructor(points : THREE.Vector2[]);

        constructor();
    }
}
declare namespace THREE {
    export class LatheGeometry extends THREE.Geometry {
        public constructor(points : THREE.Vector2[], segments : number, phiStart : number, phiLength : number);

        public parameters : any;

        public constructor(points : THREE.Vector2[], segments : number, phiStart : number);

        public constructor(points : THREE.Vector2[], segments : number);

        public constructor(points : THREE.Vector2[]);

        constructor();
    }
}
declare namespace THREE {
    export class Layers {
        public constructor();

        public mask : number;

        public set(channel : number);

        public enable(channel : number);

        public toggle(channel : number);

        public disable(channel : number);

        public test(layers : Layers) : boolean;
    }
}
declare namespace THREE {
    export class LensFlare extends THREE.Object3D {
        public constructor(texture : THREE.Texture, size : number, distance : number, blending : THREE.Blending, color : THREE.Color);

        public lensFlares : THREE.LensFlareProperty[];

        public positionScreen : THREE.Vector3;

        public customUpdateCallback : (p1: LensFlare) => void;

        public add(object : THREE.Object3D);

        public add(texture : THREE.Texture, size : number, distance : number, blending : THREE.Blending, color : THREE.Color);

        public updateLensFlares();

        public constructor(texture : THREE.Texture, size : number, distance : number, blending : THREE.Blending);

        public constructor(texture : THREE.Texture, size : number, distance : number);

        public constructor(texture : THREE.Texture, size : number);

        public constructor(texture : THREE.Texture);

        public constructor();

        public add(texture : THREE.Texture, size : number, distance : number, blending : THREE.Blending);

        public add(texture : THREE.Texture, size : number, distance : number);

        public add(texture : THREE.Texture, size : number);

        public add(texture : THREE.Texture);
    }
}
declare namespace THREE {
    export class LensFlarePlugin {
        public constructor(renderer : THREE.WebGLRenderer, flares : any[]);

        public render(scene : THREE.Scene, camera : THREE.Camera, viewportWidth : number, viewportHeight : number);

        constructor();
    }
}
declare namespace THREE {
    export interface LensFlareProperty {
        texture : THREE.Texture;

        size : number;

        distance : number;

        x : number;

        y : number;

        z : number;

        scale : number;

        rotation : number;

        opacity : number;

        color : THREE.Color;

        blending : THREE.Blending;
    }
}
declare namespace THREE {
    /**
     * Abstract base class for lights.
     * @param {number} hex
     * @param {number} intensity
     * @class
     * @extends THREE.Object3D
     */
    export class Light extends THREE.Object3D {
        public constructor(hex : number, intensity : number);

        public color : THREE.Color;

        public intensity : number;

        public receiveShadow : boolean;

        public shadow : THREE.LightShadow;

        /**
         * @deprecated Use shadow.camera.fov instead.
         */
        public shadowCameraFov : any;

        /**
         * @deprecated Use shadow.camera.left instead.
         */
        public shadowCameraLeft : any;

        /**
         * @deprecated Use shadow.camera.right instead.
         */
        public shadowCameraRight : any;

        /**
         * @deprecated Use shadow.camera.top instead.
         */
        public shadowCameraTop : any;

        /**
         * @deprecated Use shadow.camera.bottom instead.
         */
        public shadowCameraBottom : any;

        /**
         * @deprecated Use shadow.camera.near instead.
         */
        public shadowCameraNear : any;

        /**
         * @deprecated Use shadow.camera.far instead.
         */
        public shadowCameraFar : any;

        /**
         * @deprecated Use shadow.bias instead.
         */
        public shadowBias : any;

        /**
         * @deprecated Use shadow.mapSize.width instead.
         */
        public shadowMapWidth : any;

        /**
         * @deprecated Use shadow.mapSize.height instead.
         */
        public shadowMapHeight : any;

        public constructor(hex : number);

        public constructor();

        public constructor(hex : string, intensity : number);

        public constructor(hex : string);
    }
}
declare namespace THREE {
    export class LightShadow {
        public constructor(camera : THREE.Camera);

        public camera : THREE.Camera;

        public bias : number;

        public radius : number;

        public mapSize : THREE.Vector2;

        public map : THREE.RenderTarget;

        public matrix : THREE.Matrix4;

        public copy(source : LightShadow) : LightShadow;

        public clone(recursive : boolean) : LightShadow;

        public toJSON() : any;

        public clone() : LightShadow;

        constructor();
    }
}
declare namespace THREE {
    export class Line extends THREE.Object3D {
        public constructor(geometry : THREE.Geometry, material : THREE.LineDashedMaterial, mode : number);

        public geometry : ((THREE.Geometry)|(THREE.BufferGeometry));

        public material : THREE.Material;

        public constructor(geometry : THREE.Geometry, material : THREE.LineDashedMaterial);

        public constructor(geometry : THREE.Geometry);

        public constructor();

        public constructor(geometry : THREE.BufferGeometry, material : THREE.LineDashedMaterial, mode : number);

        public constructor(geometry : THREE.Geometry, material : THREE.ShaderMaterial, mode : number);

        public constructor(geometry : THREE.Geometry, material : THREE.LineBasicMaterial, mode : number);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.LineBasicMaterial, mode : number);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.ShaderMaterial, mode : number);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.LineDashedMaterial);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.LineBasicMaterial);

        public constructor(geometry : THREE.Geometry, material : THREE.ShaderMaterial);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.ShaderMaterial);

        public constructor(geometry : THREE.Geometry, material : THREE.LineBasicMaterial);

        public constructor(geometry : THREE.BufferGeometry);
    }
}
declare namespace THREE {
    export class Line3 {
        public constructor(start : THREE.Vector3, end : THREE.Vector3);

        public start : THREE.Vector3;

        public end : THREE.Vector3;

        public set(start : THREE.Vector3, end : THREE.Vector3) : Line3;

        public clone() : Line3;

        public copy(line : Line3) : Line3;

        public getCenter(optionalTarget : THREE.Vector3) : THREE.Vector3;

        public delta(optionalTarget : THREE.Vector3) : THREE.Vector3;

        public distanceSq() : number;

        public distance() : number;

        public at(t : number, optionalTarget : THREE.Vector3) : THREE.Vector3;

        public closestPointToPointParameter(point : THREE.Vector3, clampToLine : boolean) : number;

        public closestPointToPoint(point : THREE.Vector3, clampToLine : boolean, optionalTarget : THREE.Vector3) : THREE.Vector3;

        public applyMatrix4(matrix : THREE.Matrix4) : Line3;

        public equals(line : Line3) : boolean;

        public constructor(start : THREE.Vector3);

        public constructor();

        public set(start : THREE.Vector3) : Line3;

        public set() : Line3;

        public getCenter() : THREE.Vector3;

        public delta() : THREE.Vector3;

        public at(t : number) : THREE.Vector3;

        public closestPointToPointParameter(point : THREE.Vector3) : number;

        public closestPointToPoint(point : THREE.Vector3, clampToLine : boolean) : THREE.Vector3;

        public closestPointToPoint(point : THREE.Vector3) : THREE.Vector3;
    }
}
declare namespace THREE {
    export class LinearInterpolant extends THREE.Interpolant {
        public constructor(parameterPositions : any, samplesValues : any, sampleSize : number, resultBuffer : any);

        public interpolate_(i1 : number, t0 : number, t : number, t1 : number) : any;

        public constructor(parameterPositions : any, samplesValues : any, sampleSize : number);

        constructor();
    }
}
declare namespace THREE {
    export class LineBasicMaterial extends THREE.Material {
        public constructor(parameters : THREE.LineBasicMaterialParameters);

        public color : THREE.Color;

        public linewidth : number;

        public linecap : string;

        public linejoin : string;

        public constructor();
    }
}
declare namespace THREE {
    export interface LineBasicMaterialParameters extends THREE.MaterialParameters {
        color? : ((THREE.Color)|(string)|(number));

        linewidth? : number;

        linecap? : string;

        linejoin? : string;
    }
}
declare namespace THREE {
    export class LineCurve extends THREE.Curve<THREE.Vector2> {
        public constructor(v1 : THREE.Vector2, v2 : THREE.Vector2);

        public v1 : THREE.Vector2;

        public v2 : THREE.Vector2;

        constructor();
    }
}
declare namespace THREE {
    export class LineCurve3 extends THREE.Curve<THREE.Vector3> {
        public constructor(v1 : THREE.Vector3, v2 : THREE.Vector3);

        public v1 : THREE.Vector3;

        public v2 : THREE.Vector3;

        constructor();
    }
}
declare namespace THREE {
    export class LineDashedMaterial extends THREE.Material {
        public constructor(parameters : THREE.LineDashedMaterialParameters);

        public color : THREE.Color;

        public linewidth : number;

        public scale : number;

        public dashSize : number;

        public gapSize : number;

        public constructor();
    }
}
declare namespace THREE {
    export interface LineDashedMaterialParameters extends THREE.MaterialParameters {
        color? : ((THREE.Color)|(string)|(number));

        linewidth? : number;

        scale? : number;

        dashSize? : number;

        gapSize? : number;
    }
}
declare namespace THREE {
    export class LineSegments extends THREE.Line {
        public constructor(geometry : THREE.Geometry, material : any, mode : number);

        public constructor(geometry : THREE.Geometry, material : any);

        public constructor(geometry : THREE.Geometry);

        public constructor();

        public constructor(geometry : THREE.BufferGeometry, material : any, mode : number);

        public constructor(geometry : THREE.BufferGeometry, material : any);

        public constructor(geometry : THREE.BufferGeometry);
    }
}
declare namespace THREE {
    /**
     * Base class for implementing loaders.
     * 
     * Events:
     * load
     * Dispatched when the image has completed loading
     * content — loaded image
     * 
     * error
     * 
     * Dispatched when the image can't be loaded
     * message — error message
     * @class
     * @extends Object
     */
    export class Loader {
        public constructor();

        /**
         * Will be called when load starts.
         * The default is a function with empty body.
         */
        public onLoadStart : () => void;

        /**
         * Will be called while load progresses.
         * The default is a function with empty body.
         */
        public onLoadProgress : () => void;

        /**
         * Will be called when load completes.
         * The default is a function with empty body.
         */
        public onLoadComplete : () => void;

        /**
         * default — null.
         * If set, assigns the crossOrigin attribute of the image to the value of crossOrigin, prior to starting the load.
         */
        public crossOrigin : string;

        /**
         * @deprecated Use THREE.LoaderUtils.extractUrlBase() instead.
         * @param {string} url
         * @return {string}
         */
        public extractUrlBase(url : string) : string;

        public initMaterials(materials : THREE.Material[], texturePath : string) : THREE.Material[];

        public createMaterial(m : THREE.Material, texturePath : string, crossOrigin : string) : boolean;

        public static Handlers : THREE.LoaderHandler;

        public createMaterial(m : THREE.Material, texturePath : string) : boolean;
    }
}
declare namespace THREE {
    export interface LoaderHandler {
        handlers : ((RegExp)|(THREE.AnyLoader))[];

        add(regex : RegExp, loader : THREE.AnyLoader);

        get(file : string) : THREE.AnyLoader;
    }
}
declare namespace THREE {
    /**
     * Handles and keeps track of loaded and pending data.
     * @param {() => void} onLoad
     * @param {*} onProgress
     * @param {() => void} onError
     * @class
     * @extends Object
     */
    export class LoadingManager {
        public constructor(onLoad : () => void, onProgress : (p1: string, p2: number, p3: number) => void, onError : () => void);

        public onStart : () => void;

        /**
         * Will be called when load starts.
         * The default is a function with empty body.
         */
        public onLoad : () => void;

        /**
         * Will be called while load progresses.
         * The default is a function with empty body.
         */
        public onProgress : (p1: any, p2: number, p3: number) => void;

        /**
         * Will be called when each element in the scene completes loading.
         * The default is a function with empty body.
         */
        public onError : () => void;

        public itemStart(url : string);

        public itemEnd(url : string);

        public itemError(url : string);

        public constructor(onLoad : () => void, onProgress : (p1: string, p2: number, p3: number) => void);

        public constructor(onLoad : () => void);

        public constructor();
    }
}
declare namespace THREE {
    export class LOD extends THREE.Object3D {
        public constructor();

        public levels : any[];

        public addLevel(object : THREE.Object3D, distance : number);

        public getObjectForDistance(distance : number) : THREE.Object3D;

        public update(camera : THREE.Camera);

        public toJSON(meta : any) : any;

        /**
         * @deprecated Use {@link LOD#levels} instead.
         */
        public objects : any[];

        public addLevel(object : THREE.Object3D);
    }
}
declare namespace THREE {
    export enum Mapping {
      
    }
}
declare namespace THREE {
    export class MaskPass {
        public constructor(scene : THREE.Scene, camera : THREE.Camera);

        public scene : THREE.Scene;

        public camera : THREE.Camera;

        public enabled : boolean;

        public clear : boolean;

        public needsSwap : boolean;

        public inverse : boolean;

        public render(renderer : THREE.WebGLRenderer, writeBuffer : THREE.WebGLRenderTarget, readBuffer : THREE.WebGLRenderTarget, delta : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
     * @class
     * @extends THREE.EventDispatcher
     */
    export class Material extends THREE.EventDispatcher {
        public constructor();

        /**
         * Sets the alpha value to be used when running an alpha test. Default is 0.
         */
        public alphaTest : number;

        /**
         * Blending destination. It's one of the blending mode constants defined in Three.js. Default is {@link OneMinusSrcAlphaFactor}.
         */
        public blendDst : THREE.BlendingDstFactor;

        /**
         * The tranparency of the .blendDst. Default is null.
         */
        public blendDstAlpha : number;

        /**
         * Blending equation to use when applying blending. It's one of the constants defined in Three.js. Default is {@link AddEquation}.
         */
        public blendEquation : THREE.BlendingEquation;

        /**
         * The tranparency of the .blendEquation. Default is null.
         */
        public blendEquationAlpha : number;

        /**
         * Which blending to use when displaying objects with this material. Default is {@link NormalBlending}.
         */
        public blending : THREE.Blending;

        /**
         * Blending source. It's one of the blending mode constants defined in Three.js. Default is {@link SrcAlphaFactor}.
         */
        public blendSrc : ((THREE.BlendingSrcFactor)|(THREE.BlendingDstFactor));

        /**
         * The tranparency of the .blendSrc. Default is null.
         */
        public blendSrcAlpha : number;

        /**
         * Changes the behavior of clipping planes so that only their intersection is clipped, rather than their union. Default is false.
         */
        public clipIntersection : boolean;

        /**
         * User-defined clipping planes specified as THREE.Plane objects in world space. These planes apply to the objects this material is attached to. Points in space whose signed distance to the plane is negative are clipped (not rendered). See the WebGL / clipping /intersection example. Default is null.
         */
        public clippingPlanes : any;

        /**
         * Defines whether to clip shadows according to the clipping planes specified on this material. Default is false.
         */
        public clipShadows : boolean;

        /**
         * Whether to render the material's color. This can be used in conjunction with a mesh's .renderOrder property to create invisible objects that occlude other objects. Default is true.
         */
        public colorWrite : boolean;

        /**
         * Which depth function to use. Default is {@link LessEqualDepth}. See the depth mode constants for all possible values.
         */
        public depthFunc : THREE.DepthModes;

        /**
         * Whether to have depth test enabled when rendering this material. Default is true.
         */
        public depthTest : boolean;

        /**
         * Whether rendering this material has any effect on the depth buffer. Default is true.
         * When drawing 2D overlays it can be useful to disable the depth writing in order to layer several things together without creating z-index artifacts.
         */
        public depthWrite : boolean;

        /**
         * Whether the material is affected by fog. Default is true.
         */
        public fog : boolean;

        /**
         * Unique number of this material instance.
         */
        public id : number;

        /**
         * Used to check whether this or derived classes are materials. Default is true.
         * You should not change this, as it used internally for optimisation.
         */
        public isMaterial : boolean;

        /**
         * Whether the material is affected by lights. Default is true.
         */
        public lights : boolean;

        /**
         * Material name. Default is an empty string.
         */
        public name : string;

        /**
         * Specifies that the material needs to be updated, WebGL wise. Set it to true if you made changes that need to be reflected in WebGL.
         * This property is automatically set to true when instancing a new material.
         */
        public needsUpdate : boolean;

        /**
         * Opacity. Default is 1.
         */
        public opacity : number;

        /**
         * Enables/disables overdraw. If greater than zero, polygons are drawn slightly bigger in order to fix antialiasing gaps when using the CanvasRenderer. Default is 0.
         */
        public overdraw : number;

        /**
         * Whether to use polygon offset. Default is false. This corresponds to the POLYGON_OFFSET_FILL WebGL feature.
         */
        public polygonOffset : boolean;

        /**
         * Sets the polygon offset factor. Default is 0.
         */
        public polygonOffsetFactor : number;

        /**
         * Sets the polygon offset units. Default is 0.
         */
        public polygonOffsetUnits : number;

        /**
         * Override the renderer's default precision for this material. Can be "highp", "mediump" or "lowp". Defaults is null.
         */
        public precision : any;

        /**
         * Whether to premultiply the alpha (transparency) value. See WebGL / Materials / Transparency for an example of the difference. Default is false.
         */
        public premultipliedAlpha : boolean;

        /**
         * Whether to apply dithering to the color to remove the appearance of banding. Default is false.
         */
        public dithering : boolean;

        /**
         * Define whether the material is rendered with flat shading. Default is false.
         */
        public flatShading : boolean;

        /**
         * Defines which of the face sides will be rendered - front, back or both.
         * Default is THREE.FrontSide. Other options are THREE.BackSide and THREE.DoubleSide.
         */
        public side : THREE.Side;

        /**
         * Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects.
         * When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
         * Default is false.
         */
        public transparent : boolean;

        /**
         * Value is the string 'Material'. This shouldn't be changed, and can be used to find all objects of this type in a scene.
         */
        public type : string;

        /**
         * UUID of this material instance. This gets automatically assigned, so this shouldn't be edited.
         */
        public uuid : string;

        /**
         * Defines whether vertex coloring is used. Default is THREE.NoColors. Other options are THREE.VertexColors and THREE.FaceColors.
         */
        public vertexColors : THREE.Colors;

        /**
         * Defines whether this material is visible. Default is true.
         */
        public visible : boolean;

        /**
         * An object that can be used to store custom data about the Material. It should not hold references to functions as these will not be cloned.
         */
        public userData : any;

        /**
         * Return a new material with the same parameters as this material.
         * @return {THREE.Material}
         */
        public clone() : Material;

        /**
         * Copy the parameters from the passed material into this material.
         * @param {THREE.Material} material
         * @return {THREE.Material}
         */
        public copy(material : Material) : Material;

        /**
         * This disposes the material. Textures of a material don't get disposed. These needs to be disposed by {@link Texture}.
         */
        public dispose();

        /**
         * Sets the properties based on the values.
         * @param {*} values A container with parameters.
         */
        public setValues(values : THREE.MaterialParameters);

        /**
         * Convert the material to three.js JSON format.
         * @param {*} meta Object containing metadata such as textures or images for the material.
         * @return {*}
         */
        public toJSON(meta : any) : any;

        /**
         * Call .dispatchEvent ( { type: 'update' }) on the material.
         */
        public update();

        /**
         * Convert the material to three.js JSON format.
         * @param meta Object containing metadata such as textures or images for the material.
         * @return {*}
         */
        public toJSON() : any;
    }
}
declare namespace THREE {
    export class MaterialCreator {
        public constructor(baseUrl : string, options : any);

        public baseUrl : string;

        public options : any;

        public materialsInfo : any;

        public materials : any;

        public materialsArray : THREE.Material[];

        public nameLookup : any;

        public side : number;

        public wrap : number;

        public setCrossOrigin(value : boolean);

        public setManager(value : any);

        public setMaterials(materialsInfo : any);

        public convert(materialsInfo : any) : any;

        public preload();

        public getIndex(materialName : string) : THREE.Material;

        public getAsArray() : THREE.Material[];

        public createMaterial_(materialName : string) : THREE.Material;

        public getTextureParams(value : string, matParams : any) : any;

        public loadTexture(url : string, mapping : any, onLoad : (p1: THREE.BufferGeometry) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void) : THREE.Texture;

        public constructor(baseUrl : string);

        public constructor();

        public loadTexture(url : string, mapping : any, onLoad : (p1: THREE.BufferGeometry) => void, onProgress : (p1: ProgressEvent) => void) : THREE.Texture;

        public loadTexture(url : string, mapping : any, onLoad : (p1: THREE.BufferGeometry) => void) : THREE.Texture;
    }
}
declare namespace THREE {
    export class MaterialLoader {
        public constructor(manager : THREE.LoadingManager);

        public manager : THREE.LoadingManager;

        public textures : any;

        public load(url : string, onLoad : (p1: THREE.Material) => void);

        public setTextures(textures : any);

        public getTexture(name : string) : THREE.Texture;

        public parse(json : any) : THREE.Material;

        public constructor();
    }
}
declare namespace THREE {
    export interface MaterialParameters {
        alphaTest? : number;

        blendDst? : THREE.BlendingDstFactor;

        blendDstAlpha? : number;

        blendEquation? : THREE.BlendingEquation;

        blendEquationAlpha? : number;

        blending? : THREE.Blending;

        blendSrc? : ((THREE.BlendingSrcFactor)|(THREE.BlendingDstFactor));

        blendSrcAlpha? : number;

        clipIntersection? : boolean;

        clippingPlanes? : THREE.Plane[];

        clipShadows? : boolean;

        colorWrite? : boolean;

        depthFunc? : THREE.DepthModes;

        depthTest? : boolean;

        depthWrite? : boolean;

        fog? : boolean;

        lights? : boolean;

        name? : string;

        opacity? : number;

        overdraw? : number;

        polygonOffset? : boolean;

        polygonOffsetFactor? : number;

        polygonOffsetUnits? : number;

        precision? : any;

        premultipliedAlpha? : boolean;

        dithering? : boolean;

        flatShading? : boolean;

        side? : THREE.Side;

        transparent? : boolean;

        vertexColors? : THREE.Colors;

        visible? : boolean;
    }
}
declare namespace THREE.Math {}
declare namespace THREE {
    /**
     * Utility class.
     * @extends Object
     * @class
     */
    export class Math {
        constructor();

        public static DEG2RAD : number;

        public static RAD2DEG : number;

        public static generateUUID() : string;

        /**
         * Clamps the x to be between a and b.
         * 
         * @param {number} value Value to be clamped.
         * @param {number} min Minimum value
         * @param {number} max Maximum value.
         * @return {number}
         */
        public static clamp(value : number, min : number, max : number) : number;

        public static euclideanModulo(n : number, m : number) : number;

        /**
         * Linear mapping of x from range [a1, a2] to range [b1, b2].
         * 
         * @param {number} x Value to be mapped.
         * @param {number} a1 Minimum value for range A.
         * @param {number} a2 Maximum value for range A.
         * @param {number} b1 Minimum value for range B.
         * @param {number} b2 Maximum value for range B.
         * @return {number}
         */
        public static mapLinear(x : number, a1 : number, a2 : number, b1 : number, b2 : number) : number;

        public static smoothstep(x : number, min : number, max : number) : number;

        public static smootherstep(x : number, min : number, max : number) : number;

        /**
         * Random float from 0 to 1 with 16 bits of randomness.
         * Standard Math.random() creates repetitive patterns when applied over larger space.
         * 
         * @deprecated Use {@link Math#random}
         * @return {number}
         */
        public static random16() : number;

        /**
         * Random integer from low to high interval.
         * @param {number} low
         * @param {number} high
         * @return {number}
         */
        public static randInt(low : number, high : number) : number;

        /**
         * Random float from low to high interval.
         * @param {number} low
         * @param {number} high
         * @return {number}
         */
        public static randFloat(low : number, high : number) : number;

        /**
         * Random float from - range / 2 to range / 2 interval.
         * @param {number} range
         * @return {number}
         */
        public static randFloatSpread(range : number) : number;

        public static degToRad(degrees : number) : number;

        public static radToDeg(radians : number) : number;

        public static isPowerOfTwo(value : number) : boolean;

        /**
         * @deprecated Use {@link Math#floorPowerOfTwo}
         * @param {number} value
         * @return {number}
         */
        public static nearestPowerOfTwo(value : number) : number;

        /**
         * @deprecated Use {@link Math#ceilPowerOfTwo}
         * @param {number} value
         * @return {number}
         */
        public static nextPowerOfTwo(value : number) : number;

        public static floorPowerOfTwo(value : number) : number;

        public static ceilPowerOfTwo(value : number) : number;
    }
}
declare namespace THREE {
    /**
     * ( interface Matrix&lt;T&gt; )
     * @class
     * @extends Object
     */
    export interface Matrix {
        /**
         * Float32Array with matrix values.
         */
        elements : Float32Array;

        /**
         * identity():T;
         * @return {*}
         */
        identity() : Matrix;

        /**
         * copy(m:T):T;
         * @param {*} m
         * @return {*}
         */
        copy(m : Matrix) : Matrix;

        /**
         * multiplyScalar(s:number):T;
         * @param {number} s
         * @return {*}
         */
        multiplyScalar(s : number) : Matrix;

        determinant() : number;

        /**
         * getInverse(matrix:T, throwOnInvertible?:boolean):T;
         * @param {*} matrix
         * @param {boolean} throwOnInvertible
         * @return {*}
         */
        getInverse(matrix : Matrix, throwOnInvertible : boolean) : Matrix;

        /**
         * transpose():T;
         * @return {*}
         */
        transpose() : Matrix;

        /**
         * clone():T;
         * @return {*}
         */
        clone() : Matrix;

        /**
         * getInverse(matrix:T, throwOnInvertible?:boolean):T;
         * @param {*} matrix
         * @return {*}
         */
        getInverse(matrix : Matrix) : Matrix;
    }
}
declare namespace THREE {
    /**
     * Creates an identity matrix.
     * @class
     * @extends *
     */
    export class Matrix3 implements THREE.Matrix {
        public constructor();

        /**
         * Float32Array with matrix values.
         */
        public elements : Float32Array;

        public set(n11 : number, n12 : number, n13 : number, n21 : number, n22 : number, n23 : number, n31 : number, n32 : number, n33 : number) : Matrix3;

        public setFromMatrix4(m : THREE.Matrix4) : Matrix3;

        /**
         * @deprecated Use {@link Matrix3#applyToBufferAttribute} instead.
         * @param {THREE.BufferAttribute} buffer
         * @param {number} offset
         * @param {number} length
         * @return {THREE.BufferAttribute}
         */
        public applyToBuffer(buffer : THREE.BufferAttribute, offset : number, length : number) : THREE.BufferAttribute;

        public applyToBufferAttribute(attribute : THREE.BufferAttribute) : THREE.BufferAttribute;

        public getNormalMatrix(matrix4 : THREE.Matrix4) : Matrix3;

        /**
         * Transposes this matrix into the supplied array r, and returns itself.
         * @param {double[]} r
         * @return {double[]}
         */
        public transposeIntoArray(r : number[]) : number[];

        public fromArray(array : number[], offset : number) : Matrix3;

        public toArray() : number[];

        /**
         * Multiplies this matrix by m.
         * @param {THREE.Matrix3} m
         * @return {THREE.Matrix3}
         */
        public multiply(m : Matrix3) : Matrix3;

        public premultiply(m : Matrix3) : Matrix3;

        /**
         * Sets this matrix to a x b.
         * @param {THREE.Matrix3} a
         * @param {THREE.Matrix3} b
         * @return {THREE.Matrix3}
         */
        public multiplyMatrices(a : Matrix3, b : Matrix3) : Matrix3;

        /**
         * @deprecated Use {@link Vector3.applyMatrix3} instead.
         * @param {THREE.Vector3} vector
         * @return {*}
         */
        public multiplyVector3(vector : THREE.Vector3) : any;

        /**
         * @deprecated This method has been removed completely.
         * @param {*} a
         * @return {*}
         */
        public multiplyVector3Array(a : any) : any;

        /**
         * @deprecated Use {@link Matrix3#toArray} instead.
         * @param {double[]} array
         * @param {number} offset
         * @return {double[]}
         */
        public flattenToArrayOffset(array : number[], offset : number) : number[];

        /**
         * @deprecated Use {@link Matrix3#applyToBufferAttribute} instead.
         * @param {THREE.BufferAttribute} buffer
         * @param {number} offset
         * @return {THREE.BufferAttribute}
         */
        public applyToBuffer(buffer : THREE.BufferAttribute, offset : number) : THREE.BufferAttribute;

        /**
         * @deprecated Use {@link Matrix3#applyToBufferAttribute} instead.
         * @param {THREE.BufferAttribute} buffer
         * @return {THREE.BufferAttribute}
         */
        public applyToBuffer(buffer : THREE.BufferAttribute) : THREE.BufferAttribute;

        public fromArray(array : number[]) : Matrix3;
    }
}
declare namespace THREE {
    /**
     * A 4x4 Matrix.
     * 
     * @example
     * // Simple rig for rotating around 3 axes
     * var m = new THREE.Matrix4();
     * var m1 = new THREE.Matrix4();
     * var m2 = new THREE.Matrix4();
     * var m3 = new THREE.Matrix4();
     * var alpha = 0;
     * var beta = Math.PI;
     * var gamma = Math.PI/2;
     * m1.makeRotationX( alpha );
     * m2.makeRotationY( beta );
     * m3.makeRotationZ( gamma );
     * m.multiplyMatrices( m1, m2 );
     * m.multiply( m3 );
     * @class
     * @extends *
     */
    export class Matrix4 implements THREE.Matrix {
        public constructor();

        /**
         * Float32Array with matrix values.
         */
        public elements : Float32Array;

        /**
         * Sets all fields of this matrix.
         * @param {number} n11
         * @param {number} n12
         * @param {number} n13
         * @param {number} n14
         * @param {number} n21
         * @param {number} n22
         * @param {number} n23
         * @param {number} n24
         * @param {number} n31
         * @param {number} n32
         * @param {number} n33
         * @param {number} n34
         * @param {number} n41
         * @param {number} n42
         * @param {number} n43
         * @param {number} n44
         * @return {THREE.Matrix4}
         */
        public set(n11 : number, n12 : number, n13 : number, n14 : number, n21 : number, n22 : number, n23 : number, n24 : number, n31 : number, n32 : number, n33 : number, n34 : number, n41 : number, n42 : number, n43 : number, n44 : number) : Matrix4;

        public copyPosition(m : Matrix4) : Matrix4;

        public extractBasis(xAxis : THREE.Vector3, yAxis : THREE.Vector3, zAxis : THREE.Vector3) : Matrix4;

        public makeBasis(xAxis : THREE.Vector3, yAxis : THREE.Vector3, zAxis : THREE.Vector3) : Matrix4;

        /**
         * Copies the rotation component of the supplied matrix m into this matrix rotation component.
         * @param {THREE.Matrix4} m
         * @return {THREE.Matrix4}
         */
        public extractRotation(m : Matrix4) : Matrix4;

        public makeRotationFromEuler(euler : THREE.Euler) : Matrix4;

        public makeRotationFromQuaternion(q : THREE.Quaternion) : Matrix4;

        /**
         * Constructs a rotation matrix, looking from eye towards center with defined up vector.
         * @param {THREE.Vector3} eye
         * @param {THREE.Vector3} target
         * @param {THREE.Vector3} up
         * @return {THREE.Matrix4}
         */
        public lookAt(eye : THREE.Vector3, target : THREE.Vector3, up : THREE.Vector3) : Matrix4;

        /**
         * Multiplies this matrix by m.
         * @param {THREE.Matrix4} m
         * @return {THREE.Matrix4}
         */
        public multiply(m : Matrix4) : Matrix4;

        public premultiply(m : Matrix4) : Matrix4;

        /**
         * Sets this matrix to a x b.
         * @param {THREE.Matrix4} a
         * @param {THREE.Matrix4} b
         * @return {THREE.Matrix4}
         */
        public multiplyMatrices(a : Matrix4, b : Matrix4) : Matrix4;

        /**
         * Sets this matrix to a x b and stores the result into the flat array r.
         * r can be either a regular Array or a TypedArray.
         * 
         * @deprecated This method has been removed completely.
         * @param {THREE.Matrix4} a
         * @param {THREE.Matrix4} b
         * @param {double[]} r
         * @return {THREE.Matrix4}
         */
        public multiplyToArray(a : Matrix4, b : Matrix4, r : number[]) : Matrix4;

        /**
         * @deprecated Use {@link Matrix4#applyToBufferAttribute} instead.
         * @param {THREE.BufferAttribute} buffer
         * @param {number} offset
         * @param {number} length
         * @return {THREE.BufferAttribute}
         */
        public applyToBuffer(buffer : THREE.BufferAttribute, offset : number, length : number) : THREE.BufferAttribute;

        public applyToBufferAttribute(attribute : THREE.BufferAttribute) : THREE.BufferAttribute;

        /**
         * Sets the position component for this matrix from vector v.
         * @param {THREE.Vector3} v
         * @return {THREE.Matrix4}
         */
        public setPosition(v : THREE.Vector3) : Matrix4;

        /**
         * Multiplies the columns of this matrix by vector v.
         * @param {THREE.Vector3} v
         * @return {THREE.Matrix4}
         */
        public scale(v : THREE.Vector3) : Matrix4;

        public getMaxScaleOnAxis() : number;

        /**
         * Sets this matrix as translation transform.
         * @param {number} x
         * @param {number} y
         * @param {number} z
         * @return {THREE.Matrix4}
         */
        public makeTranslation(x : number, y : number, z : number) : Matrix4;

        /**
         * Sets this matrix as rotation transform around x axis by theta radians.
         * 
         * @param {number} theta Rotation angle in radians.
         * @return {THREE.Matrix4}
         */
        public makeRotationX(theta : number) : Matrix4;

        /**
         * Sets this matrix as rotation transform around y axis by theta radians.
         * 
         * @param {number} theta Rotation angle in radians.
         * @return {THREE.Matrix4}
         */
        public makeRotationY(theta : number) : Matrix4;

        /**
         * Sets this matrix as rotation transform around z axis by theta radians.
         * 
         * @param {number} theta Rotation angle in radians.
         * @return {THREE.Matrix4}
         */
        public makeRotationZ(theta : number) : Matrix4;

        /**
         * Sets this matrix as rotation transform around axis by angle radians.
         * Based on http://www.gamedev.net/reference/articles/article1199.asp.
         * 
         * @param {THREE.Vector3} axis Rotation axis.
         * @param theta Rotation angle in radians.
         * @param {number} angle
         * @return {THREE.Matrix4}
         */
        public makeRotationAxis(axis : THREE.Vector3, angle : number) : Matrix4;

        /**
         * Sets this matrix as scale transform.
         * @param {number} x
         * @param {number} y
         * @param {number} z
         * @return {THREE.Matrix4}
         */
        public makeScale(x : number, y : number, z : number) : Matrix4;

        /**
         * Sets this matrix to the transformation composed of translation, rotation and scale.
         * @param {THREE.Vector3} translation
         * @param {THREE.Quaternion} rotation
         * @param {THREE.Vector3} scale
         * @return {THREE.Matrix4}
         */
        public compose(translation : THREE.Vector3, rotation : THREE.Quaternion, scale : THREE.Vector3) : Matrix4;

        /**
         * Decomposes this matrix into the translation, rotation and scale components.
         * If parameters are not passed, new instances will be created.
         * @param {THREE.Vector3} translation
         * @param {THREE.Quaternion} rotation
         * @param {THREE.Vector3} scale
         * @return {java.lang.Object[]}
         */
        public decompose(translation : THREE.Vector3, rotation : THREE.Quaternion, scale : THREE.Vector3) : any[];

        /**
         * Creates a frustum matrix.
         * @param {number} left
         * @param {number} right
         * @param {number} bottom
         * @param {number} top
         * @param {number} near
         * @param {number} far
         * @return {THREE.Matrix4}
         */
        public makePerspective(left : number, right : number, bottom : number, top : number, near : number, far : number) : Matrix4;

        /**
         * Creates a perspective projection matrix.
         * @param {number} fov
         * @param {number} aspect
         * @param {number} near
         * @param {number} far
         * @return {THREE.Matrix4}
         */
        public makePerspective(fov : number, aspect : number, near : number, far : number) : Matrix4;

        /**
         * Creates an orthographic projection matrix.
         * @param {number} left
         * @param {number} right
         * @param {number} top
         * @param {number} bottom
         * @param {number} near
         * @param {number} far
         * @return {THREE.Matrix4}
         */
        public makeOrthographic(left : number, right : number, top : number, bottom : number, near : number, far : number) : Matrix4;

        public equals(matrix : Matrix4) : boolean;

        public fromArray(array : number[], offset : number) : Matrix4;

        public toArray() : number[];

        /**
         * @deprecated Use {@link Matrix4#copyPosition} instead.
         * @param {THREE.Matrix4} m
         * @return {THREE.Matrix4}
         */
        public extractPosition(m : Matrix4) : Matrix4;

        /**
         * @deprecated Use {@link Matrix4#makeRotationFromQuaternion} instead.
         * @param {THREE.Quaternion} q
         * @return {THREE.Matrix4}
         */
        public setRotationFromQuaternion(q : THREE.Quaternion) : Matrix4;

        /**
         * @deprecated Use {@link Vector3#applyMatrix4} instead.
         * @param {*} v
         * @return {*}
         */
        public multiplyVector3(v : any) : any;

        /**
         * @deprecated Use {@link Vector4#applyMatrix4} instead.
         * @param {*} v
         * @return {*}
         */
        public multiplyVector4(v : any) : any;

        /**
         * @deprecated This method has been removed completely.
         * @param {double[]} array
         * @return {double[]}
         */
        public multiplyVector3Array(array : number[]) : number[];

        /**
         * @deprecated Use {@link Vector3#transformDirection} instead.
         * @param {*} v
         */
        public rotateAxis(v : any);

        /**
         * @deprecated Use {@link Vector3#applyMatrix4} instead.
         * @param {*} v
         */
        public crossVector(v : any);

        /**
         * @deprecated Use {@link Matrix4#toArray} instead.
         * @param {double[]} array
         * @param {number} offset
         * @return {double[]}
         */
        public flattenToArrayOffset(array : number[], offset : number) : number[];

        /**
         * @deprecated Use {@link Matrix4#applyToBufferAttribute} instead.
         * @param {THREE.BufferAttribute} buffer
         * @param {number} offset
         * @return {THREE.BufferAttribute}
         */
        public applyToBuffer(buffer : THREE.BufferAttribute, offset : number) : THREE.BufferAttribute;

        /**
         * @deprecated Use {@link Matrix4#applyToBufferAttribute} instead.
         * @param {THREE.BufferAttribute} buffer
         * @return {THREE.BufferAttribute}
         */
        public applyToBuffer(buffer : THREE.BufferAttribute) : THREE.BufferAttribute;

        /**
         * Decomposes this matrix into the translation, rotation and scale components.
         * If parameters are not passed, new instances will be created.
         * @param {THREE.Vector3} translation
         * @param {THREE.Quaternion} rotation
         * @return {java.lang.Object[]}
         */
        public decompose(translation : THREE.Vector3, rotation : THREE.Quaternion) : any[];

        /**
         * Decomposes this matrix into the translation, rotation and scale components.
         * If parameters are not passed, new instances will be created.
         * @param {THREE.Vector3} translation
         * @return {java.lang.Object[]}
         */
        public decompose(translation : THREE.Vector3) : any[];

        /**
         * Decomposes this matrix into the translation, rotation and scale components.
         * If parameters are not passed, new instances will be created.
         * @return {java.lang.Object[]}
         */
        public decompose() : any[];

        public fromArray(array : number[]) : Matrix4;
    }
}
declare namespace THREE {
    export class Mesh extends THREE.Object3D {
        public constructor(geometry : THREE.Geometry, material : THREE.Material);

        public geometry : ((THREE.Geometry)|(THREE.BufferGeometry));

        public material : ((THREE.Material)|(THREE.Material[]));

        public drawMode : THREE.TrianglesDrawModes;

        public morphTargetInfluences : number[];

        public morphTargetDictionary : any;

        public setDrawMode(drawMode : THREE.TrianglesDrawModes);

        public updateMorphTargets();

        public getMorphTargetIndexByName(name : string) : number;

        public constructor(geometry : THREE.Geometry);

        public constructor();

        public constructor(geometry : THREE.Geometry, material : THREE.Material[]);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.Material[]);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.Material);

        public constructor(geometry : THREE.BufferGeometry);
    }
}
declare namespace THREE {
    export class MeshBasicMaterial extends THREE.Material {
        public constructor(parameters : THREE.MeshBasicMaterialParameters);

        public color : THREE.Color;

        public map : THREE.Texture;

        public aoMap : THREE.Texture;

        public aoMapIntensity : number;

        public specularMap : THREE.Texture;

        public alphaMap : THREE.Texture;

        public envMap : THREE.Texture;

        public combine : THREE.Combine;

        public reflectivity : number;

        public refractionRatio : number;

        public wireframe : boolean;

        public wireframeLinewidth : number;

        public wireframeLinecap : string;

        public wireframeLinejoin : string;

        public skinning : boolean;

        public morphTargets : boolean;

        public constructor();
    }
}
declare namespace THREE {
    /**
     * parameters is an object with one or more properties defining the material's appearance.
     * @class
     * @extends *
     */
    export interface MeshBasicMaterialParameters extends THREE.MaterialParameters {
        color? : ((THREE.Color)|(string)|(number));

        opacity? : number;

        map? : THREE.Texture;

        aoMap? : THREE.Texture;

        aoMapIntensity? : number;

        specularMap? : THREE.Texture;

        alphaMap? : THREE.Texture;

        envMap? : THREE.Texture;

        combine? : THREE.Combine;

        reflectivity? : number;

        refractionRatio? : number;

        wireframe? : boolean;

        wireframeLinewidth? : number;

        wireframeLinecap? : string;

        wireframeLinejoin? : string;

        skinning? : boolean;

        morphTargets? : boolean;
    }
}
declare namespace THREE {
    export class MeshDepthMaterial extends THREE.Material {
        public constructor(parameters : THREE.MeshDepthMaterialParameters);

        public wireframe : boolean;

        public wireframeLinewidth : number;

        public constructor();
    }
}
declare namespace THREE {
    export interface MeshDepthMaterialParameters extends THREE.MaterialParameters {
        wireframe? : boolean;

        wireframeLinewidth? : number;
    }
}
declare namespace THREE {
    /**
     * @deprecated Use {@link MultiMaterial} instead.
     * @class
     * @extends THREE.MultiMaterial
     */
    export class MeshFaceMaterial extends THREE.MultiMaterial {    }
}
declare namespace THREE {
    export class MeshLambertMaterial extends THREE.Material {
        public constructor(parameters : THREE.MeshLambertMaterialParameters);

        public color : THREE.Color;

        public emissive : THREE.Color;

        public emissiveIntensity : number;

        public emissiveMap : THREE.Texture;

        public map : THREE.Texture;

        public lightMap : THREE.Texture;

        public lightMapIntensity : number;

        public aoMap : THREE.Texture;

        public aoMapIntensity : number;

        public specularMap : THREE.Texture;

        public alphaMap : THREE.Texture;

        public envMap : THREE.Texture;

        public combine : THREE.Combine;

        public reflectivity : number;

        public refractionRatio : number;

        public wireframe : boolean;

        public wireframeLinewidth : number;

        public wireframeLinecap : string;

        public wireframeLinejoin : string;

        public skinning : boolean;

        public morphTargets : boolean;

        public morphNormals : boolean;

        public constructor();
    }
}
declare namespace THREE {
    export interface MeshLambertMaterialParameters extends THREE.MaterialParameters {
        color? : ((THREE.Color)|(string)|(number));

        emissive? : ((THREE.Color)|(string)|(number));

        emissiveIntensity? : number;

        emissiveMap? : THREE.Texture;

        map? : THREE.Texture;

        lightMap? : THREE.Texture;

        lightMapIntensity? : number;

        aoMap? : THREE.Texture;

        aoMapIntensity? : number;

        specularMap? : THREE.Texture;

        alphaMap? : THREE.Texture;

        envMap? : THREE.Texture;

        combine? : THREE.Combine;

        reflectivity? : number;

        refractionRatio? : number;

        wireframe? : boolean;

        wireframeLinewidth? : number;

        wireframeLinecap? : string;

        wireframeLinejoin? : string;

        skinning? : boolean;

        morphTargets? : boolean;

        morphNormals? : boolean;
    }
}
declare namespace THREE {
    export class MeshNormalMaterial extends THREE.Material {
        public constructor(parameters : THREE.MeshNormalMaterialParameters);

        public wireframe : boolean;

        public wireframeLinewidth : number;

        public morphTargets : boolean;

        public constructor();
    }
}
declare namespace THREE {
    export interface MeshNormalMaterialParameters extends THREE.MaterialParameters {
        /**
         * Render geometry as wireframe. Default is false (i.e. render as smooth shaded).
         */
        wireframe? : boolean;

        /**
         * Controls wireframe thickness. Default is 1.
         */
        wireframeLinewidth? : number;

        morphTargets? : boolean;
    }
}
declare namespace THREE {
    export class MeshPhongMaterial extends THREE.Material {
        public constructor(parameters : THREE.MeshPhongMaterialParameters);

        public color : THREE.Color;

        public specular : THREE.Color;

        public shininess : number;

        public map : THREE.Texture;

        public lightMap : THREE.Texture;

        public lightMapIntensity : number;

        public aoMap : THREE.Texture;

        public aoMapIntensity : number;

        public emissive : THREE.Color;

        public emissiveIntensity : number;

        public emissiveMap : THREE.Texture;

        public bumpMap : THREE.Texture;

        public bumpScale : number;

        public normalMap : THREE.Texture;

        public normalScale : THREE.Vector2;

        public displacementMap : THREE.Texture;

        public displacementScale : number;

        public displacementBias : number;

        public specularMap : THREE.Texture;

        public alphaMap : THREE.Texture;

        public envMap : THREE.Texture;

        public combine : THREE.Combine;

        public reflectivity : number;

        public refractionRatio : number;

        public wireframe : boolean;

        public wireframeLinewidth : number;

        public wireframeLinecap : string;

        public wireframeLinejoin : string;

        public skinning : boolean;

        public morphTargets : boolean;

        public morphNormals : boolean;

        /**
         * @deprecated Use {@link MeshStandardMaterial} instead.
         */
        public metal : boolean;

        public constructor();
    }
}
declare namespace THREE {
    export interface MeshPhongMaterialParameters extends THREE.MaterialParameters {
        /**
         * geometry color in hexadecimal. Default is 0xffffff.
         */
        color? : ((THREE.Color)|(string)|(number));

        specular? : ((THREE.Color)|(string)|(number));

        shininess? : number;

        opacity? : number;

        map? : THREE.Texture;

        lightMap? : THREE.Texture;

        lightMapIntensity? : number;

        aoMap? : THREE.Texture;

        aoMapIntensity? : number;

        emissive? : ((THREE.Color)|(string)|(number));

        emissiveIntensity? : number;

        emissiveMap? : THREE.Texture;

        bumpMap? : THREE.Texture;

        bumpScale? : number;

        normalMap? : THREE.Texture;

        normalScale? : THREE.Vector2;

        displacementMap? : THREE.Texture;

        displacementScale? : number;

        displacementBias? : number;

        specularMap? : THREE.Texture;

        alphaMap? : THREE.Texture;

        envMap? : THREE.Texture;

        combine? : THREE.Combine;

        reflectivity? : number;

        refractionRatio? : number;

        wireframe? : boolean;

        wireframeLinewidth? : number;

        wireframeLinecap? : string;

        wireframeLinejoin? : string;

        skinning? : boolean;

        morphTargets? : boolean;

        morphNormals? : boolean;
    }
}
declare namespace THREE {
    export class MeshPhysicalMaterial extends THREE.MeshStandardMaterial {
        public constructor(parameters : THREE.MeshPhysicalMaterialParameters);

        public defines : any;

        public reflectivity : number;

        public clearCoat : number;

        public clearCoatRoughness : number;

        constructor();
    }
}
declare namespace THREE {
    export interface MeshPhysicalMaterialParameters extends THREE.MeshStandardMaterialParameters {
        reflectivity? : number;

        clearCoat? : number;

        clearCoatRoughness? : number;
    }
}
declare namespace THREE {
    export class MeshStandardMaterial extends THREE.Material {
        public constructor(parameters : THREE.MeshStandardMaterialParameters);

        public defines : any;

        public color : THREE.Color;

        public roughness : number;

        public metalness : number;

        public map : THREE.Texture;

        public lightMap : THREE.Texture;

        public lightMapIntensity : number;

        public aoMap : THREE.Texture;

        public aoMapIntensity : number;

        public emissive : THREE.Color;

        public emissiveIntensity : number;

        public emissiveMap : THREE.Texture;

        public bumpMap : THREE.Texture;

        public bumpScale : number;

        public normalMap : THREE.Texture;

        public normalScale : number;

        public displacementMap : THREE.Texture;

        public displacementScale : number;

        public displacementBias : number;

        public roughnessMap : THREE.Texture;

        public metalnessMap : THREE.Texture;

        public alphaMap : THREE.Texture;

        public envMap : THREE.Texture;

        public envMapIntensity : number;

        public refractionRatio : number;

        public wireframe : boolean;

        public wireframeLinewidth : number;

        public skinning : boolean;

        public morphTargets : boolean;

        public morphNormals : boolean;

        public constructor();
    }
}
declare namespace THREE {
    export interface MeshStandardMaterialParameters extends THREE.MaterialParameters {
        color? : ((THREE.Color)|(string)|(number));

        roughness? : number;

        metalness? : number;

        map? : THREE.Texture;

        lightMap? : THREE.Texture;

        lightMapIntensity? : number;

        aoMap? : THREE.Texture;

        aoMapIntensity? : number;

        emissive? : ((THREE.Color)|(string)|(number));

        emissiveIntensity? : number;

        emissiveMap? : THREE.Texture;

        bumpMap? : THREE.Texture;

        bumpScale? : number;

        normalMap? : THREE.Texture;

        normalScale? : THREE.Vector2;

        displacementMap? : THREE.Texture;

        displacementScale? : number;

        displacementBias? : number;

        roughnessMap? : THREE.Texture;

        metalnessMap? : THREE.Texture;

        alphaMap? : THREE.Texture;

        envMap? : THREE.Texture;

        envMapIntensity? : number;

        refractionRatio? : number;

        wireframe? : boolean;

        wireframeLinewidth? : number;

        skinning? : boolean;

        morphTargets? : boolean;

        morphNormals? : boolean;
    }
}
declare namespace THREE {
    export class MorphBlendMesh extends THREE.Mesh {
        public constructor(geometry : THREE.Geometry, material : THREE.Material);

        public animationsMap : any;

        public animationsList : THREE.MorphBlendMeshAnimation[];

        public createAnimation(name : string, start : number, end : number, fps : number);

        public autoCreateAnimations(fps : number);

        public setAnimationDirectionForward(name : string);

        public setAnimationDirectionBackward(name : string);

        public setAnimationFPS(name : string, fps : number);

        public setAnimationDuration(name : string, duration : number);

        public setAnimationWeight(name : string, weight : number);

        public setAnimationTime(name : string, time : number);

        public getAnimationTime(name : string) : number;

        public getAnimationDuration(name : string) : number;

        public playAnimation(name : string);

        public stopAnimation(name : string);

        public update(delta : number);

        constructor();
    }
}
declare namespace THREE {
    export interface MorphBlendMeshAnimation {
        start : number;

        end : number;

        length : number;

        fps : number;

        duration : number;

        lastFrame : number;

        currentFrame : number;

        active : boolean;

        time : number;

        direction : number;

        weight : number;

        directionBackwards : boolean;

        mirroredLoop : boolean;
    }
}
declare namespace THREE {
    export interface MorphColor {
        name : string;

        colors : THREE.Color[];
    }
}
declare namespace THREE {
    export interface MorphNormals {
        name : string;

        normals : THREE.Vector3[];
    }
}
declare namespace THREE {
    export interface MorphTarget {
        name : string;

        vertices : THREE.Vector3[];
    }
}
declare namespace THREE {
    export enum MOUSE {
        LEFT, MIDDLE, RIGHT
    }
}
declare namespace THREE {
    export class MTLLoader extends THREE.EventDispatcher {
        public constructor(manager : THREE.LoadingManager);

        public manager : THREE.LoadingManager;

        public materialOptions : any;

        public materials : THREE.Material[];

        public path : string;

        public texturePath : string;

        public crossOrigin : boolean;

        public load(url : string, onLoad : (p1: THREE.MaterialCreator) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);

        public parse(text : string) : THREE.MaterialCreator;

        public setPath(path : string);

        public setTexturePath(path : string);

        public setBaseUrl(path : string);

        public setCrossOrigin(value : boolean);

        public setMaterialOptions(value : any);

        public constructor();

        public load(url : string, onLoad : (p1: THREE.MaterialCreator) => void, onProgress : (p1: ProgressEvent) => void);

        public load(url : string, onLoad : (p1: THREE.MaterialCreator) => void);
    }
}
declare namespace THREE {
    /**
     * @deprecated Use an Array instead.
     * @param {def.threejs.THREE.Material[]} materials
     * @class
     * @extends THREE.Material
     */
    export class MultiMaterial extends THREE.Material {
        public constructor(materials : THREE.Material[]);

        public isMultiMaterial : boolean;

        public materials : THREE.Material[];

        public constructor();
    }
}
declare namespace THREE {
    export class NumberKeyframeTrack extends THREE.KeyframeTrack {
        public constructor(name : string, times : any[], values : any[], interpolation : THREE.InterpolationModes);

        constructor();
    }
}
declare namespace THREE {
    /**
     * Base class for scene graph objects
     * @class
     * @extends THREE.EventDispatcher
     */
    export class Object3D extends THREE.EventDispatcher {
        public constructor();

        /**
         * Unique number of this object instance.
         */
        public id : number;

        /**
         * 
         */
        public uuid : string;

        /**
         * Optional name of the object (doesn't need to be unique).
         */
        public name : string;

        public type : string;

        /**
         * Object's parent in the scene graph.
         */
        public parent : Object3D;

        /**
         * Array with object's children.
         */
        public children : Object3D[];

        /**
         * Up direction.
         */
        public up : THREE.Vector3;

        /**
         * Object's local position.
         */
        public position : THREE.Vector3;

        /**
         * Object's local rotation (Euler angles), in radians.
         */
        public rotation : THREE.Euler;

        /**
         * Global rotation.
         */
        public quaternion : THREE.Quaternion;

        /**
         * Object's local scale.
         */
        public scale : THREE.Vector3;

        public modelViewMatrix : THREE.Matrix4;

        public normalMatrix : THREE.Matrix3;

        /**
         * Local transform.
         */
        public matrix : THREE.Matrix4;

        /**
         * The global transform of the object. If the Object3d has no parent, then it's identical to the local transform.
         */
        public matrixWorld : THREE.Matrix4;

        /**
         * When this is set, it calculates the matrix of position, (rotation or quaternion) and scale every frame and also recalculates the matrixWorld property.
         */
        public matrixAutoUpdate : boolean;

        /**
         * When this is set, it calculates the matrixWorld in that frame and resets this property to false.
         */
        public matrixWorldNeedsUpdate : boolean;

        public layers : THREE.Layers;

        /**
         * Object gets rendered if true.
         */
        public visible : boolean;

        /**
         * Gets rendered into shadow map.
         */
        public castShadow : boolean;

        /**
         * Material gets baked in shadow receiving.
         */
        public receiveShadow : boolean;

        /**
         * When this is set, it checks every frame if the object is in the frustum of the camera. Otherwise the object gets drawn every frame even if it isn't visible.
         */
        public frustumCulled : boolean;

        public renderOrder : number;

        /**
         * An object that can be used to store custom data about the Object3d. It should not hold references to functions as these will not be cloned.
         */
        public userData : any;

        /**
         * Used to check whether this or derived classes are Object3Ds. Default is true.
         * You should not change this, as it is used internally for optimisation.
         */
        public isObject3D : boolean;

        /**
         * Calls before rendering object
         */
        public onBeforeRender : any;

        /**
         * Calls after rendering object
         */
        public onAfterRender : any;

        /**
         * 
         */
        public static DefaultUp : THREE.Vector3;

        public static DefaultMatrixAutoUpdate : boolean;

        /**
         * This updates the position, rotation and scale with the matrix.
         * @param {THREE.Matrix4} matrix
         */
        public applyMatrix(matrix : THREE.Matrix4);

        /**
         * @param {THREE.Vector3} axis
         * @param {number} angle
         */
        public setRotationFromAxisAngle(axis : THREE.Vector3, angle : number);

        /**
         * @param {THREE.Euler} euler
         */
        public setRotationFromEuler(euler : THREE.Euler);

        /**
         * @param {THREE.Matrix4} m
         */
        public setRotationFromMatrix(m : THREE.Matrix4);

        /**
         * @param {THREE.Quaternion} q
         */
        public setRotationFromQuaternion(q : THREE.Quaternion);

        /**
         * Rotate an object along an axis in object space. The axis is assumed to be normalized.
         * @param {THREE.Vector3} axis  A normalized vector in object space.
         * @param {number} angle  The angle in radians.
         * @return {THREE.Object3D}
         */
        public rotateOnAxis(axis : THREE.Vector3, angle : number) : Object3D;

        /**
         * Rotate an object along an axis in world space. The axis is assumed to be normalized. Method Assumes no rotated parent.
         * @param {THREE.Vector3} axis  A normalized vector in object space.
         * @param {number} angle  The angle in radians.
         * @return {THREE.Object3D}
         */
        public rotateOnWorldAxis(axis : THREE.Vector3, angle : number) : Object3D;

        /**
         * 
         * @param {number} angle
         * @return {THREE.Object3D}
         */
        public rotateX(angle : number) : Object3D;

        /**
         * 
         * @param {number} angle
         * @return {THREE.Object3D}
         */
        public rotateY(angle : number) : Object3D;

        /**
         * 
         * @param {number} angle
         * @return {THREE.Object3D}
         */
        public rotateZ(angle : number) : Object3D;

        /**
         * @param {THREE.Vector3} axis  A normalized vector in object space.
         * @param {number} distance  The distance to translate.
         * @return {THREE.Object3D}
         */
        public translateOnAxis(axis : THREE.Vector3, distance : number) : Object3D;

        /**
         * Translates object along x axis by distance.
         * @param {number} distance Distance.
         * @return {THREE.Object3D}
         */
        public translateX(distance : number) : Object3D;

        /**
         * Translates object along y axis by distance.
         * @param {number} distance Distance.
         * @return {THREE.Object3D}
         */
        public translateY(distance : number) : Object3D;

        /**
         * Translates object along z axis by distance.
         * @param {number} distance Distance.
         * @return {THREE.Object3D}
         */
        public translateZ(distance : number) : Object3D;

        /**
         * Updates the vector from local space to world space.
         * @param {THREE.Vector3} vector A local vector.
         * @return {THREE.Vector3}
         */
        public localToWorld(vector : THREE.Vector3) : THREE.Vector3;

        /**
         * Updates the vector from world space to local space.
         * @param {THREE.Vector3} vector A world vector.
         * @return {THREE.Vector3}
         */
        public worldToLocal(vector : THREE.Vector3) : THREE.Vector3;

        /**
         * Rotates object to face point in space.
         * @param {THREE.Vector3} vector A world vector to look at.
         */
        public lookAt(vector : THREE.Vector3);

        public lookAt(x : number, y : number, z : number);

        /**
         * Adds object as child of this object.
         * @param {def.threejs.THREE.Object3D[]} object
         */
        public add(...object : Object3D[]);

        /**
         * Removes object as child of this object.
         * @param {def.threejs.THREE.Object3D[]} object
         */
        public remove(...object : Object3D[]);

        /**
         * Searches through the object's children and returns the first with a matching id, optionally recursive.
         * @param {number} id  Unique number of the object instance
         * @return {THREE.Object3D}
         */
        public getObjectById(id : number) : Object3D;

        /**
         * Searches through the object's children and returns the first with a matching name, optionally recursive.
         * @param {string} name  String to match to the children's Object3d.name property.
         * @return {THREE.Object3D}
         */
        public getObjectByName(name : string) : Object3D;

        public getObjectByProperty(name : string, value : string) : Object3D;

        public getWorldPosition(optionalTarget : THREE.Vector3) : THREE.Vector3;

        public getWorldQuaternion(optionalTarget : THREE.Quaternion) : THREE.Quaternion;

        public getWorldRotation(optionalTarget : THREE.Euler) : THREE.Euler;

        public getWorldScale(optionalTarget : THREE.Vector3) : THREE.Vector3;

        public getWorldDirection(optionalTarget : THREE.Vector3) : THREE.Vector3;

        public raycast(raycaster : THREE.Raycaster, intersects : any);

        public traverse(callback : (p1: Object3D) => any);

        public traverseVisible(callback : (p1: Object3D) => any);

        public traverseAncestors(callback : (p1: Object3D) => any);

        /**
         * Updates local transform.
         */
        public updateMatrix();

        /**
         * Updates global transform of the object and its children.
         * @param {boolean} force
         */
        public updateMatrixWorld(force : boolean);

        public toJSON(meta : any) : any;

        public clone(recursive : boolean) : Object3D;

        /**
         * 
         * @param object
         * @param {boolean} recursive
         * @param {THREE.Object3D} source
         * @return {THREE.Object3D}
         */
        public copy(source : Object3D, recursive : boolean) : Object3D;

        public getWorldPosition() : THREE.Vector3;

        public getWorldQuaternion() : THREE.Quaternion;

        public getWorldRotation() : THREE.Euler;

        public getWorldScale() : THREE.Vector3;

        public getWorldDirection() : THREE.Vector3;

        public toJSON() : any;

        public clone() : Object3D;

        /**
         * 
         * @param object
         * @param recursive
         * @param {THREE.Object3D} source
         * @return {THREE.Object3D}
         */
        public copy(source : Object3D) : Object3D;
    }
}
declare namespace THREE {
    export class ObjectLoader {
        public constructor(manager : THREE.LoadingManager);

        public manager : THREE.LoadingManager;

        public texturePass : string;

        public crossOrigin : string;

        public load(url : string, onLoad : (p1: THREE.Object3D) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: Error) => void);

        public setTexturePath(value : string);

        public setCrossOrigin(crossOrigin : string);

        public parse<T extends THREE.Object3D>(json : any, onLoad : (p1: THREE.Object3D) => void) : T;

        public parseGeometries(json : any) : any[];

        public parseMaterials(json : any, textures : THREE.Texture[]) : THREE.Material[];

        public parseAnimations(json : any) : THREE.AnimationClip[];

        public parseImages(json : any, onLoad : () => void) : any;

        public parseTextures(json : any, images : any) : THREE.Texture[];

        public parseObject<T extends THREE.Object3D>(data : any, geometries : any[], materials : THREE.Material[]) : T;

        public constructor();

        public load(url : string, onLoad : (p1: THREE.Object3D) => void, onProgress : (p1: ProgressEvent) => void);

        public load(url : string, onLoad : (p1: THREE.Object3D) => void);

        public load(url : string);

        public parse<T extends THREE.Object3D>(json : any) : T;

        public load(url : string, onLoad : (p1: THREE.Object3D) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);
    }
}
declare namespace THREE {
    export class OBJLoader {
        public constructor(manager : THREE.LoadingManager);

        public manager : THREE.LoadingManager;

        public regexp : any;

        public materials : THREE.Material[];

        public path : string;

        public load(url : string, onLoad : (p1: THREE.Group) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);

        public parse(data : string) : THREE.Group;

        public setPath(value : string);

        public setMaterials(materials : THREE.MaterialCreator);

        public _createParserState() : any;

        public constructor();

        public load(url : string, onLoad : (p1: THREE.Group) => void, onProgress : (p1: ProgressEvent) => void);

        public load(url : string, onLoad : (p1: THREE.Group) => void);
    }
}
declare namespace THREE {
    export class OctahedronBufferGeometry extends THREE.PolyhedronBufferGeometry {
        public constructor(radius : number, detail : number);

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    export class OctahedronGeometry extends THREE.PolyhedronGeometry {
        public constructor(radius : number, detail : number);

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    export class Octree {
        public constructor(parameters : any);

        public update();

        public add(object : any, options : any) : any;

        public addDeferred(object : any, options : any) : any;

        public addObjectData(object : any, part : any) : any;

        public remove(object : any) : any;

        public extend(octree : Octree) : any;

        public rebuild() : any;

        public updateObject(object : any) : any;

        public search(position : THREE.Vector3, radius : number, organizeByObject : boolean, direction : THREE.Vector3) : any;

        public setRoot(root : any) : any;

        public getDepthEnd() : number;

        public getNodeCountEnd() : number;

        public getObjectCountEnd() : number;

        public toConsole() : any;

        public constructor();

        public add(object : any) : any;

        public addDeferred(object : any) : any;
    }
}
declare namespace THREE {
    export class OrbitControls {
        public constructor(object : THREE.Camera, domElement : HTMLElement);

        public object : THREE.Camera;

        public domElement : ((HTMLElement)|(HTMLDocument));

        public enabled : boolean;

        public target : THREE.Vector3;

        public center : THREE.Vector3;

        public enableZoom : boolean;

        public zoomSpeed : number;

        public minDistance : number;

        public maxDistance : number;

        public enableRotate : boolean;

        public rotateSpeed : number;

        public enablePan : boolean;

        public keyPanSpeed : number;

        public autoRotate : boolean;

        public autoRotateSpeed : number;

        public minPolarAngle : number;

        public maxPolarAngle : number;

        public minAzimuthAngle : number;

        public maxAzimuthAngle : number;

        public enableKeys : boolean;

        public keys : any;

        public mouseButtons : any;

        public enableDamping : boolean;

        public dampingFactor : number;

        public rotateLeft(angle : number);

        public rotateUp(angle : number);

        public panLeft(distance : number);

        public panUp(distance : number);

        public pan(deltaX : number, deltaY : number);

        public dollyIn(dollyScale : number);

        public dollyOut(dollyScale : number);

        public update();

        public reset();

        public dispose();

        public getPolarAngle() : number;

        public getAzimuthalAngle() : number;

        public addEventListener(type : string, listener : (p1: any) => void);

        public hasEventListener(type : string, listener : (p1: any) => void);

        public removeEventListener(type : string, listener : (p1: any) => void);

        public dispatchEvent(event : any);

        public constructor(object : THREE.Camera);

        public rotateLeft();

        public rotateUp();

        public panLeft();

        public panUp();

        constructor();
    }
}
declare namespace THREE {
    /**
     * @param {number} left Camera frustum left plane.
     * @param {number} right Camera frustum right plane.
     * @param {number} top Camera frustum top plane.
     * @param {number} bottom Camera frustum bottom plane.
     * @param {number} near Camera frustum near plane.
     * @param {number} far Camera frustum far plane.
     * @class
     * @extends THREE.Camera
     */
    export class OrthographicCamera extends THREE.Camera {
        public constructor(left : number, right : number, top : number, bottom : number, near : number, far : number);

        public zoom : number;

        public view : any;

        /**
         * Camera frustum left plane.
         */
        public left : number;

        /**
         * Camera frustum right plane.
         */
        public right : number;

        /**
         * Camera frustum top plane.
         */
        public top : number;

        /**
         * Camera frustum bottom plane.
         */
        public bottom : number;

        /**
         * Camera frustum near plane.
         */
        public near : number;

        /**
         * Camera frustum far plane.
         */
        public far : number;

        /**
         * Updates the camera projection matrix. Must be called after change of parameters.
         */
        public updateProjectionMatrix();

        public setViewOffset(fullWidth : number, fullHeight : number, offsetX : number, offsetY : number, width : number, height : number);

        public clearViewOffset();

        public toJSON(meta : any) : any;

        public constructor(left : number, right : number, top : number, bottom : number, near : number);

        public constructor(left : number, right : number, top : number, bottom : number);

        constructor();
    }
}
declare namespace THREE {
    export class OrthographicTrackballControls extends THREE.EventDispatcher {
        public constructor(object : THREE.Camera, domElement : HTMLElement);

        public object : THREE.Camera;

        public domElement : HTMLElement;

        public enabled : boolean;

        public screen : any;

        public radius : number;

        public rotateSpeed : number;

        public zoomSpeed : number;

        public panSpeed : number;

        public noRotate : boolean;

        public noZoom : boolean;

        public noPan : boolean;

        public noRoll : boolean;

        public staticMoving : boolean;

        public dynamicDampingFactor : number;

        public keys : any;

        public target : THREE.Vector3;

        public position0 : THREE.Vector3;

        public target0 : THREE.Vector3;

        public up0 : THREE.Vector3;

        public left0 : number;

        public right0 : number;

        public top0 : number;

        public bottom0 : number;

        public update();

        public reset();

        public checkDistances();

        public zoomCamera();

        public panCamera();

        public rotateCamera();

        public handleResize();

        public handleEvent(event : any);

        public constructor(object : THREE.Camera);

        constructor();
    }
}
declare namespace THREE {
    export class OutlinePass {
        public constructor(size : THREE.Vector2, scene : THREE.Scene, camer : THREE.Camera, selectedObjects : Array<THREE.Object3D>);

        public selectedObjects : Array<THREE.Object3D>;

        public renderCamera : THREE.Camera;

        public visibleEdgeColor : THREE.Color;

        public hiddenEdgeColor : THREE.Color;

        public edgeGlow : number;

        public usePatternTexture : boolean;

        public edgeThickness : number;

        public edgeStrength : number;

        public downSampleRatio : number;

        public pulsePeriod : number;

        public resolution : THREE.Vector2;

        public constructor(size : THREE.Vector2, scene : THREE.Scene, camer : THREE.Camera);

        public constructor(size : THREE.Vector2, scene : THREE.Scene, camer : THREE.Camera, selectedObjects : THREE.Object3D[]);

        constructor();
    }
}
declare namespace THREE {}
declare namespace THREE {}
declare namespace THREE {
    export class ParametricGeometry extends THREE.Geometry {
        public constructor(func : (p1: number, p2: number) => THREE.Vector3, slices : number, stacks : number);

        public parameters : any;

        constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated Use {@link Sprite} instead.
     * @class
     * @extends THREE.Sprite
     */
    export class Particle extends THREE.Sprite {    }
}
declare namespace THREE {
    /**
     * @deprecated Use {@link PointsMaterial} instead
     * @class
     * @extends THREE.PointsMaterial
     */
    export class ParticleBasicMaterial extends THREE.PointsMaterial {    }
}
declare namespace THREE {
    /**
     * @deprecated Use {@link Points} instead.
     * @class
     * @extends THREE.Points
     */
    export class ParticleSystem extends THREE.Points {    }
}
declare namespace THREE {
    /**
     * @deprecated Use {@link PointsMaterial} instead
     * @class
     * @extends THREE.PointsMaterial
     */
    export class ParticleSystemMaterial extends THREE.PointsMaterial {    }
}
declare namespace THREE {
    export class Pass {
        public enabled : boolean;

        public needsSwap : boolean;

        public clear : boolean;

        public renderToScreen : boolean;

        public setSize(width : number, height : number);

        public render(renderer : THREE.WebGLRenderer, writeBuffer : THREE.WebGLRenderTarget, readBuffer : THREE.WebGLRenderTarget, delta : number, maskActive : boolean);

        public render(renderer : THREE.WebGLRenderer, writeBuffer : THREE.WebGLRenderTarget, readBuffer : THREE.WebGLRenderTarget, delta : number);
    }
}
declare namespace THREE {
    /**
     * a 2d path representation, comprising of points, lines, and cubes, similar to the html5 2d canvas api. It extends CurvePath.
     * @param {def.threejs.THREE.Vector2[]} points
     * @class
     * @extends THREE.CurvePath
     */
    export class Path extends THREE.CurvePath<THREE.Vector2> {
        public constructor(points : THREE.Vector2[]);

        public currentPoint : THREE.Vector2;

        /**
         * @deprecated Use {@link Path#setFromPoints} instead.
         * @param {def.threejs.THREE.Vector2[]} vectors
         */
        public fromPoints(vectors : THREE.Vector2[]);

        public setFromPoints(vectors : THREE.Vector2[]);

        public moveTo(x : number, y : number);

        public lineTo(x : number, y : number);

        public quadraticCurveTo(aCPx : number, aCPy : number, aX : number, aY : number);

        public bezierCurveTo(aCP1x : number, aCP1y : number, aCP2x : number, aCP2y : number, aX : number, aY : number);

        public splineThru(pts : THREE.Vector2[]);

        public arc(aX : number, aY : number, aRadius : number, aStartAngle : number, aEndAngle : number, aClockwise : boolean);

        public absarc(aX : number, aY : number, aRadius : number, aStartAngle : number, aEndAngle : number, aClockwise : boolean);

        public ellipse(aX : number, aY : number, xRadius : number, yRadius : number, aStartAngle : number, aEndAngle : number, aClockwise : boolean, aRotation : number);

        public absellipse(aX : number, aY : number, xRadius : number, yRadius : number, aStartAngle : number, aEndAngle : number, aClockwise : boolean, aRotation : number);

        public constructor();
    }
}
declare namespace THREE {
    export interface PathAction {
        action : THREE.PathActions;

        args : any;
    }
}
declare namespace THREE {
    export enum PathActions {
        MOVE_TO, LINE_TO, QUADRATIC_CURVE_TO, BEZIER_CURVE_TO, CSPLINE_THRU, ARC, ELLIPSE
    }
}
declare namespace THREE {
    /**
     * @param {number} fov Camera frustum vertical field of view. Default value is 50.
     * @param {number} aspect Camera frustum aspect ratio. Default value is 1.
     * @param {number} near Camera frustum near plane. Default value is 0.1.
     * @param {number} far Camera frustum far plane. Default value is 2000.
     * @class
     * @extends THREE.Camera
     */
    export class PerspectiveCamera extends THREE.Camera {
        public constructor(fov : number, aspect : number, near : number, far : number);

        public zoom : number;

        /**
         * Camera frustum vertical field of view, from bottom to top of view, in degrees.
         */
        public fov : number;

        /**
         * Camera frustum aspect ratio, window width divided by window height.
         */
        public aspect : number;

        /**
         * Camera frustum near plane.
         */
        public near : number;

        /**
         * Camera frustum far plane.
         */
        public far : number;

        public focus : number;

        public view : any;

        public filmGauge : number;

        public filmOffset : number;

        public setFocalLength(focalLength : number);

        public getFocalLength() : number;

        public getEffectiveFOV() : number;

        public getFilmWidth() : number;

        public getFilmHeight() : number;

        /**
         * Sets an offset in a larger frustum. This is useful for multi-window or multi-monitor/multi-machine setups.
         * For example, if you have 3x2 monitors and each monitor is 1920x1080 and the monitors are in grid like this:
         * 
         * +---+---+---+
         * | A | B | C |
         * +---+---+---+
         * | D | E | F |
         * +---+---+---+
         * 
         * then for each monitor you would call it like this:
         * 
         * var w = 1920;
         * var h = 1080;
         * var fullWidth = w * 3;
         * var fullHeight = h * 2;
         * 
         * // A
         * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
         * // B
         * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
         * // C
         * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
         * // D
         * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
         * // E
         * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
         * // F
         * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h ); Note there is no reason monitors have to be the same size or in a grid.
         * 
         * @param {number} fullWidth full width of multiview setup
         * @param {number} fullHeight full height of multiview setup
         * @param {number} x horizontal offset of subcamera
         * @param {number} y vertical offset of subcamera
         * @param {number} width width of subcamera
         * @param {number} height height of subcamera
         */
        public setViewOffset(fullWidth : number, fullHeight : number, x : number, y : number, width : number, height : number);

        public clearViewOffset();

        /**
         * Updates the camera projection matrix. Must be called after change of parameters.
         */
        public updateProjectionMatrix();

        public toJSON(meta : any) : any;

        /**
         * @deprecated Use {@link PerspectiveCamera#setFocalLength} and {@link PerspectiveCamera#filmGauge} instead.
         * @param {number} focalLength
         * @param {number} frameHeight
         */
        public setLens(focalLength : number, frameHeight : number);

        public constructor(fov : number, aspect : number, near : number);

        public constructor(fov : number, aspect : number);

        public constructor(fov : number);

        public constructor();

        /**
         * @deprecated Use {@link PerspectiveCamera#setFocalLength} and {@link PerspectiveCamera#filmGauge} instead.
         * @param {number} focalLength
         */
        public setLens(focalLength : number);
    }
}
declare namespace THREE {
    export enum PixelFormat {
      
    }
}
declare namespace THREE {
    export enum PixelType {
      
    }
}
declare namespace THREE {
    export class Plane {
        public constructor(normal : THREE.Vector3, constant : number);

        public normal : THREE.Vector3;

        public constant : number;

        public set(normal : THREE.Vector3, constant : number) : Plane;

        public setComponents(x : number, y : number, z : number, w : number) : Plane;

        public setFromNormalAndCoplanarPoint(normal : THREE.Vector3, point : THREE.Vector3) : Plane;

        public setFromCoplanarPoints(a : THREE.Vector3, b : THREE.Vector3, c : THREE.Vector3) : Plane;

        public clone() : Plane;

        public copy(plane : Plane) : Plane;

        public normalize() : Plane;

        public negate() : Plane;

        public distanceToPoint(point : THREE.Vector3) : number;

        public distanceToSphere(sphere : THREE.Sphere) : number;

        public projectPoint(point : THREE.Vector3, optionalTarget : THREE.Vector3) : THREE.Vector3;

        public orthoPoint(point : THREE.Vector3, optionalTarget : THREE.Vector3) : THREE.Vector3;

        public intersectLine(line : THREE.Line3, optionalTarget : THREE.Vector3) : THREE.Vector3;

        public intersectsLine(line : THREE.Line3) : boolean;

        public intersectsBox(box : THREE.Box3) : boolean;

        public coplanarPoint(optionalTarget : boolean) : THREE.Vector3;

        public applyMatrix4(matrix : THREE.Matrix4, optionalNormalMatrix : THREE.Matrix3) : Plane;

        public translate(offset : THREE.Vector3) : Plane;

        public equals(plane : Plane) : boolean;

        /**
         * @deprecated Use {@link Plane#intersectsLine} instead.
         * @param {*} l
         * @return {*}
         */
        public isIntersectionLine(l : any) : any;

        public constructor(normal : THREE.Vector3);

        public constructor();

        public projectPoint(point : THREE.Vector3) : THREE.Vector3;

        public orthoPoint(point : THREE.Vector3) : THREE.Vector3;

        public intersectLine(line : THREE.Line3) : THREE.Vector3;

        public coplanarPoint() : THREE.Vector3;

        public applyMatrix4(matrix : THREE.Matrix4) : Plane;
    }
}
declare namespace THREE {
    export class PlaneBufferGeometry extends THREE.BufferGeometry {
        public constructor(width : number, height : number, widthSegments : number, heightSegments : number);

        public parameters : any;

        public constructor(width : number, height : number, widthSegments : number);

        public constructor(width : number, height : number);

        constructor();
    }
}
declare namespace THREE {
    export class PlaneGeometry extends THREE.Geometry {
        public constructor(width : number, height : number, widthSegments : number, heightSegments : number);

        public parameters : any;

        public constructor(width : number, height : number, widthSegments : number);

        public constructor(width : number, height : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated Use {@link Points} instead.
     * @class
     * @extends THREE.Points
     */
    export class PointCloud extends THREE.Points {    }
}
declare namespace THREE {
    /**
     * @deprecated Use {@link PointsMaterial} instead
     * @class
     * @extends THREE.PointsMaterial
     */
    export class PointCloudMaterial extends THREE.PointsMaterial {    }
}
declare namespace THREE {
    /**
     * Affects objects using {@link MeshLambertMaterial} or {@link MeshPhongMaterial}.
     * 
     * @example
     * var light = new THREE.PointLight( 0xff0000, 1, 100 );
     * light.position.set( 50, 50, 50 );
     * scene.add( light );
     * @param {THREE.Color} color
     * @param {number} intensity
     * @param {number} distance
     * @param {number} decay
     * @class
     * @extends THREE.Light
     */
    export class PointLight extends THREE.Light {
        public constructor(color : THREE.Color, intensity : number, distance : number, decay : number);

        public intensity : number;

        /**
         * If non-zero, light will attenuate linearly from maximum intensity at light position down to zero at distance.
         * Default — 0.0.
         */
        public distance : number;

        public decay : number;

        public shadow : THREE.PointLightShadow;

        public power : number;

        public constructor(color : THREE.Color, intensity : number, distance : number);

        public constructor(color : THREE.Color, intensity : number);

        public constructor(color : THREE.Color);

        public constructor();

        public constructor(color : string, intensity : number, distance : number, decay : number);

        public constructor(color : number, intensity : number, distance : number, decay : number);

        public constructor(color : string, intensity : number, distance : number);

        public constructor(color : number, intensity : number, distance : number);

        public constructor(color : number, intensity : number);

        public constructor(color : string, intensity : number);

        public constructor(color : string);

        public constructor(color : number);
    }
}
declare namespace THREE {
    export class PointLightHelper extends THREE.Object3D {
        public constructor(light : THREE.Light, sphereSize : number);

        public light : THREE.Light;

        public dispose();

        public update();

        constructor();
    }
}
declare namespace THREE {
    export class PointLightShadow extends THREE.LightShadow {
        public camera : THREE.PerspectiveCamera;
    }
}
declare namespace THREE {
    /**
     * @param {THREE.Geometry} geometry An instance of Geometry or BufferGeometry.
     * @param {THREE.Material} material An instance of Material (optional).
     * @class
     * @extends THREE.Object3D
     */
    export class Points extends THREE.Object3D {
        public constructor(geometry : THREE.Geometry, material : THREE.Material);

        /**
         * An instance of Geometry or BufferGeometry, where each vertex designates the position of a particle in the system.
         */
        public geometry : ((THREE.Geometry)|(THREE.BufferGeometry));

        /**
         * An instance of Material, defining the object's appearance. Default is a PointsMaterial with randomised colour.
         */
        public material : THREE.Material;

        public constructor(geometry : THREE.Geometry);

        public constructor();

        public constructor(geometry : THREE.BufferGeometry, material : THREE.Material);

        public constructor(geometry : THREE.BufferGeometry);
    }
}
declare namespace THREE {
    export class PointsMaterial extends THREE.Material {
        public constructor(parameters : THREE.PointsMaterialParameters);

        public color : THREE.Color;

        public map : THREE.Texture;

        public size : number;

        public sizeAttenuation : boolean;

        public constructor();
    }
}
declare namespace THREE {
    export interface PointsMaterialParameters extends THREE.MaterialParameters {
        color? : ((THREE.Color)|(string)|(number));

        map? : THREE.Texture;

        size? : number;

        sizeAttenuation? : boolean;
    }
}
declare namespace THREE {
    export class PolyhedronBufferGeometry extends THREE.BufferGeometry {
        public constructor(vertices : number[], indices : number[], radius : number, detail : number);

        public parameters : any;

        constructor();
    }
}
declare namespace THREE {
    export class PolyhedronGeometry extends THREE.Geometry {
        public constructor(vertices : number[], indices : number[], radius : number, detail : number);

        public parameters : any;

        public boundingSphere : THREE.Sphere;

        public constructor(vertices : number[], indices : number[], radius : number);

        public constructor(vertices : number[], indices : number[]);

        constructor();
    }
}
declare namespace THREE {
    export class PositionalAudio extends Audio {
        public constructor(listener : AudioListener);

        public panner : PannerNode;

        public setRefDistance(value : number);

        public getRefDistance() : number;

        public setRolloffFactor(value : number);

        public getRolloffFactor() : number;

        public setDistanceModel(value : number);

        public getDistanceModel() : number;

        public setMaxDistance(value : number);

        public getMaxDistance() : number;

        constructor();
    }
}
declare namespace THREE {
    /**
     * Projects points between spaces.
     * @class
     * @extends Object
     */
    export class Projector {
        public constructor();

        public projectVector(vector : THREE.Vector3, camera : THREE.Camera) : THREE.Vector3;

        public unprojectVector(vector : THREE.Vector3, camera : THREE.Camera) : THREE.Vector3;

        /**
         * Transforms a 3D scene object into 2D render data that can be rendered in a screen with your renderer of choice, projecting and clipping things out according to the used camera.
         * If the scene were a real scene, this method would be the equivalent of taking a picture with the camera (and developing the film would be the next step, using a Renderer).
         * 
         * @param {THREE.Scene} scene scene to project.
         * @param {THREE.Camera} camera camera to use in the projection.
         * @param sort select whether to sort elements using the Painter's algorithm.
         * @param {boolean} sortObjects
         * @param {boolean} sortElements
         * @return {THREE.Projector.ProjectScene}
         */
        public projectScene(scene : THREE.Scene, camera : THREE.Camera, sortObjects : boolean, sortElements : boolean) : any;

        /**
         * Transforms a 3D scene object into 2D render data that can be rendered in a screen with your renderer of choice, projecting and clipping things out according to the used camera.
         * If the scene were a real scene, this method would be the equivalent of taking a picture with the camera (and developing the film would be the next step, using a Renderer).
         * 
         * @param {THREE.Scene} scene scene to project.
         * @param {THREE.Camera} camera camera to use in the projection.
         * @param sort select whether to sort elements using the Painter's algorithm.
         * @param {boolean} sortObjects
         * @return {THREE.Projector.ProjectScene}
         */
        public projectScene(scene : THREE.Scene, camera : THREE.Camera, sortObjects : boolean) : any;
    }
}
declare namespace THREE.PropertyBinding {
    export class Composite {
        public constructor(targetGroup : any, path : any, parsedPath : any);

        public getValue(array : any, offset : number) : any;

        public setValue(array : any, offset : number);

        public bind();

        public unbind();

        public constructor(targetGroup : any, path : any);

        constructor();
    }
}
declare namespace THREE.PropertyBinding {}
declare namespace THREE {
    export class PropertyBinding {
        public constructor(rootNode : any, path : string, parsedPath : any);

        public path : string;

        public parsedPath : any;

        public node : any;

        public rootNode : any;

        public getValue(targetArray : any, offset : number) : any;

        public setValue(sourceArray : any, offset : number);

        public bind();

        public unbind();

        public BindingType : any;

        public Versioning : any;

        public GetterByBindingType : Function[];

        public SetterByBindingTypeAndVersioning : Array<Function[]>;

        public static create(root : any, path : any, parsedPath : any) : ((PropertyBinding)|(THREE.PropertyBinding.Composite));

        public static parseTrackName(trackName : string) : any;

        public static findNode(root : any, nodeName : string) : any;

        public constructor(rootNode : any, path : string);

        public static create(root : any, path : any) : ((PropertyBinding)|(THREE.PropertyBinding.Composite));

        constructor();
    }
}
declare namespace THREE {
    export class PropertyMixer {
        public constructor(binding : any, typeName : string, valueSize : number);

        public binding : any;

        public valueSize : number;

        public buffer : any;

        public cumulativeWeight : number;

        public useCount : number;

        public referenceCount : number;

        public accumulate(accuIndex : number, weight : number);

        public apply(accuIndex : number);

        public saveOriginalState();

        public restoreOriginalState();

        constructor();
    }
}
declare namespace THREE {
    export class QuadraticBezierCurve extends THREE.Curve<THREE.Vector2> {
        public constructor(v0 : THREE.Vector2, v1 : THREE.Vector2, v2 : THREE.Vector2);

        public v0 : THREE.Vector2;

        public v1 : THREE.Vector2;

        public v2 : THREE.Vector2;

        constructor();
    }
}
declare namespace THREE {
    export class QuadraticBezierCurve3 extends THREE.Curve<THREE.Vector3> {
        public constructor(v0 : THREE.Vector3, v1 : THREE.Vector3, v2 : THREE.Vector3);

        public v0 : THREE.Vector3;

        public v1 : THREE.Vector3;

        public v2 : THREE.Vector3;

        constructor();
    }
}
declare namespace THREE {
    /**
     * @param {number} x x coordinate
     * @param {number} y y coordinate
     * @param {number} z z coordinate
     * @param {number} w w coordinate
     * @class
     * @extends Object
     */
    export class Quaternion {
        public constructor(x : number, y : number, z : number, w : number);

        public x : number;

        public y : number;

        public z : number;

        public w : number;

        /**
         * Sets values of this quaternion.
         * @param {number} x
         * @param {number} y
         * @param {number} z
         * @param {number} w
         * @return {THREE.Quaternion}
         */
        public set(x : number, y : number, z : number, w : number) : Quaternion;

        /**
         * Clones this quaternion.
         * @return {THREE.Quaternion}
         */
        public clone() : Quaternion;

        /**
         * Copies values of q to this quaternion.
         * @param {THREE.Quaternion} q
         * @return {THREE.Quaternion}
         */
        public copy(q : Quaternion) : Quaternion;

        /**
         * Sets this quaternion from rotation specified by Euler angles.
         * @param {THREE.Euler} euler
         * @param {boolean} update
         * @return {THREE.Quaternion}
         */
        public setFromEuler(euler : THREE.Euler, update : boolean) : Quaternion;

        /**
         * Sets this quaternion from rotation specified by axis and angle.
         * Adapted from http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm.
         * Axis have to be normalized, angle is in radians.
         * @param {THREE.Vector3} axis
         * @param {number} angle
         * @return {THREE.Quaternion}
         */
        public setFromAxisAngle(axis : THREE.Vector3, angle : number) : Quaternion;

        /**
         * Sets this quaternion from rotation component of m. Adapted from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm.
         * @param {THREE.Matrix4} m
         * @return {THREE.Quaternion}
         */
        public setFromRotationMatrix(m : THREE.Matrix4) : Quaternion;

        public setFromUnitVectors(vFrom : THREE.Vector3, vTo : THREE.Vector3) : Quaternion;

        /**
         * Inverts this quaternion.
         * @return {THREE.Quaternion}
         */
        public inverse() : Quaternion;

        public conjugate() : Quaternion;

        public dot(v : Quaternion) : number;

        public lengthSq() : number;

        /**
         * Computes length of this quaternion.
         * @return {number}
         */
        public length() : number;

        /**
         * Normalizes this quaternion.
         * @return {THREE.Quaternion}
         */
        public normalize() : Quaternion;

        /**
         * Multiplies this quaternion by b.
         * @param {THREE.Quaternion} q
         * @return {THREE.Quaternion}
         */
        public multiply(q : Quaternion) : Quaternion;

        public premultiply(q : Quaternion) : Quaternion;

        /**
         * Sets this quaternion to a x b
         * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm.
         * @param {THREE.Quaternion} a
         * @param {THREE.Quaternion} b
         * @return {THREE.Quaternion}
         */
        public multiplyQuaternions(a : Quaternion, b : Quaternion) : Quaternion;

        public slerp(qb : Quaternion, t : number) : Quaternion;

        public equals(v : Quaternion) : boolean;

        public fromArray(n : number[]) : Quaternion;

        public toArray() : number[];

        public fromArray(xyzw : number[], offset : number) : Quaternion;

        public toArray(xyzw : number[], offset : number) : number[];

        public onChange(callback : Function) : Quaternion;

        public onChangeCallback : any;

        /**
         * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/.
         * @param {THREE.Quaternion} qa
         * @param {THREE.Quaternion} qb
         * @param {THREE.Quaternion} qm
         * @param {number} t
         * @return {THREE.Quaternion}
         */
        public static slerp(qa : Quaternion, qb : Quaternion, qm : Quaternion, t : number) : Quaternion;

        public static slerpFlat(dst : number[], dstOffset : number, src0 : number[], srcOffset : number, src1 : number[], stcOffset1 : number, t : number) : Quaternion;

        /**
         * @deprecated Use {@link Vector#applyQuaternion} instead.
         * @param {*} v
         * @return {*}
         */
        public multiplyVector3(v : any) : any;

        public constructor(x : number, y : number, z : number);

        public constructor(x : number, y : number);

        public constructor(x : number);

        public constructor();

        /**
         * Sets this quaternion from rotation specified by Euler angles.
         * @param {THREE.Euler} euler
         * @return {THREE.Quaternion}
         */
        public setFromEuler(euler : THREE.Euler) : Quaternion;

        public toArray(xyzw : number[]) : number[];
    }
}
declare namespace THREE {
    export class QuaternionKeyframeTrack extends THREE.KeyframeTrack {
        public constructor(name : string, times : any[], values : any[], interpolation : THREE.InterpolationModes);

        constructor();
    }
}
declare namespace THREE {
    export class QuaternionLinearInterpolant extends THREE.Interpolant {
        public constructor(parameterPositions : any, samplesValues : any, sampleSize : number, resultBuffer : any);

        public interpolate_(i1 : number, t0 : number, t : number, t1 : number) : any;

        public constructor(parameterPositions : any, samplesValues : any, sampleSize : number);

        constructor();
    }
}
declare namespace THREE {
    export class RawShaderMaterial extends THREE.ShaderMaterial {
        public constructor(parameters : THREE.ShaderMaterialParameters);

        public constructor();
    }
}
declare namespace THREE {
    export class Ray {
        public constructor(origin : THREE.Vector3, direction : THREE.Vector3);

        public origin : THREE.Vector3;

        public direction : THREE.Vector3;

        public set(origin : THREE.Vector3, direction : THREE.Vector3) : Ray;

        public clone() : Ray;

        public copy(ray : Ray) : Ray;

        public at(t : number, optionalTarget : THREE.Vector3) : THREE.Vector3;

        public lookAt(v : THREE.Vector3) : THREE.Vector3;

        public recast(t : number) : Ray;

        public closestPointToPoint(point : THREE.Vector3, optionalTarget : THREE.Vector3) : THREE.Vector3;

        public distanceToPoint(point : THREE.Vector3) : number;

        public distanceSqToPoint(point : THREE.Vector3) : number;

        public distanceSqToSegment(v0 : THREE.Vector3, v1 : THREE.Vector3, optionalPointOnRay : THREE.Vector3, optionalPointOnSegment : THREE.Vector3) : number;

        public intersectSphere(sphere : THREE.Sphere, optionalTarget : THREE.Vector3) : THREE.Vector3;

        public intersectsSphere(sphere : THREE.Sphere) : boolean;

        public distanceToPlane(plane : THREE.Plane) : number;

        public intersectPlane(plane : THREE.Plane, optionalTarget : THREE.Vector3) : THREE.Vector3;

        public intersectsPlane(plane : THREE.Plane) : boolean;

        public intersectBox(box : THREE.Box3, optionalTarget : THREE.Vector3) : THREE.Vector3;

        public intersectsBox(box : THREE.Box3) : boolean;

        public intersectTriangle(a : THREE.Vector3, b : THREE.Vector3, c : THREE.Vector3, backfaceCulling : boolean, optionalTarget : THREE.Vector3) : THREE.Vector3;

        public applyMatrix4(matrix4 : THREE.Matrix4) : Ray;

        public equals(ray : Ray) : boolean;

        /**
         * @deprecated Use {@link Ray#intersectsBox} instead.
         * @param {*} b
         * @return {*}
         */
        public isIntersectionBox(b : any) : any;

        /**
         * @deprecated Use {@link Ray#intersectsPlane} instead.
         * @param {*} p
         * @return {*}
         */
        public isIntersectionPlane(p : any) : any;

        /**
         * @deprecated Use {@link Ray#intersectsSphere} instead.
         * @param {*} s
         * @return {*}
         */
        public isIntersectionSphere(s : any) : any;

        public constructor(origin : THREE.Vector3);

        public constructor();

        public at(t : number) : THREE.Vector3;

        public closestPointToPoint(point : THREE.Vector3) : THREE.Vector3;

        public distanceSqToSegment(v0 : THREE.Vector3, v1 : THREE.Vector3, optionalPointOnRay : THREE.Vector3) : number;

        public distanceSqToSegment(v0 : THREE.Vector3, v1 : THREE.Vector3) : number;

        public intersectSphere(sphere : THREE.Sphere) : THREE.Vector3;

        public intersectPlane(plane : THREE.Plane) : THREE.Vector3;

        public intersectBox(box : THREE.Box3) : THREE.Vector3;

        public intersectTriangle(a : THREE.Vector3, b : THREE.Vector3, c : THREE.Vector3, backfaceCulling : boolean) : THREE.Vector3;
    }
}
declare namespace THREE {
    export class Raycaster {
        public constructor(origin : THREE.Vector3, direction : THREE.Vector3, near : number, far : number);

        public ray : THREE.Ray;

        public near : number;

        public far : number;

        public params : THREE.RaycasterParameters;

        public precision : number;

        public linePrecision : number;

        public set(origin : THREE.Vector3, direction : THREE.Vector3);

        public setFromCamera(coords : any, camera : THREE.Camera);

        public intersectObject(object : THREE.Object3D, recursive : boolean) : THREE.Intersection[];

        public intersectObjects(objects : THREE.Object3D[], recursive : boolean) : THREE.Intersection[];

        public constructor(origin : THREE.Vector3, direction : THREE.Vector3, near : number);

        public constructor(origin : THREE.Vector3, direction : THREE.Vector3);

        public constructor(origin : THREE.Vector3);

        public constructor();

        public intersectObject(object : THREE.Object3D) : THREE.Intersection[];

        public intersectObjects(objects : THREE.Object3D[]) : THREE.Intersection[];
    }
}
declare namespace THREE {
    export interface RaycasterParameters {
        Mesh? : any;

        Line? : any;

        LOD? : any;

        Points? : any;

        Sprite? : any;
    }
}
declare namespace THREE {
    export class RenderableFace {
        public constructor();

        public id : number;

        public v1 : THREE.RenderableVertex;

        public v2 : THREE.RenderableVertex;

        public v3 : THREE.RenderableVertex;

        public normalModel : THREE.Vector3;

        public vertexNormalsModel : THREE.Vector3[];

        public vertexNormalsLength : number;

        public color : THREE.Color;

        public material : THREE.Material;

        public uvs : THREE.Vector2[][];

        public z : number;
    }
}
declare namespace THREE {
    export class RenderableLine {
        public constructor();

        public id : number;

        public v1 : THREE.RenderableVertex;

        public v2 : THREE.RenderableVertex;

        public vertexColors : THREE.Color[];

        public material : THREE.Material;

        public z : number;
    }
}
declare namespace THREE {
    export class RenderableObject {
        public constructor();

        public id : number;

        public object : any;

        public z : number;
    }
}
declare namespace THREE {
    export class RenderableSprite {
        public constructor();

        public id : number;

        public object : any;

        public x : number;

        public y : number;

        public z : number;

        public rotation : number;

        public scale : THREE.Vector2;

        public material : THREE.Material;
    }
}
declare namespace THREE {
    export class RenderableVertex {
        public constructor();

        public position : THREE.Vector3;

        public positionWorld : THREE.Vector3;

        public positionScreen : THREE.Vector4;

        public visible : boolean;

        public copy(vertex : RenderableVertex);
    }
}
declare namespace THREE {
    export interface Renderer {
        domElement : HTMLCanvasElement;

        render(scene : THREE.Scene, camera : THREE.Camera);

        setSize(width : number, height : number, updateStyle : boolean);

        setSize(width : number, height : number);
    }
}
declare namespace THREE {
    export interface RenderItem {
        id : number;

        object : THREE.Object3D;

        geometry : ((THREE.Geometry)|(THREE.BufferGeometry));

        material : THREE.Material;

        program : WebGLProgram;

        renderOrder : number;

        z : number;

        group : THREE.Group;
    }
}
declare namespace THREE {
    export class RenderPass {
        public constructor(scene : THREE.Scene, camera : THREE.Camera, overrideMaterial : THREE.Material, clearColor : THREE.Color, clearAlpha : number);

        public scene : THREE.Scene;

        public camera : THREE.Camera;

        public overrideMaterial : THREE.Material;

        public clearColor : ((THREE.Color)|(string)|(number));

        public clearAlpha : number;

        public oldClearColor : THREE.Color;

        public oldClearAlpha : number;

        public enabled : boolean;

        public clear : boolean;

        public needsSwap : boolean;

        public render(renderer : THREE.WebGLRenderer, writeBuffer : THREE.WebGLRenderTarget, readBuffer : THREE.WebGLRenderTarget, delta : number);

        public constructor(scene : THREE.Scene, camera : THREE.Camera, overrideMaterial : THREE.Material, clearColor : THREE.Color);

        public constructor(scene : THREE.Scene, camera : THREE.Camera, overrideMaterial : THREE.Material);

        public constructor(scene : THREE.Scene, camera : THREE.Camera);

        public constructor(scene : THREE.Scene, camera : THREE.Camera, overrideMaterial : THREE.Material, clearColor : string, clearAlpha : number);

        public constructor(scene : THREE.Scene, camera : THREE.Camera, overrideMaterial : THREE.Material, clearColor : number, clearAlpha : number);

        public constructor(scene : THREE.Scene, camera : THREE.Camera, overrideMaterial : THREE.Material, clearColor : number);

        public constructor(scene : THREE.Scene, camera : THREE.Camera, overrideMaterial : THREE.Material, clearColor : string);

        constructor();
    }
}
declare namespace THREE {
    export interface RenderTarget {    }
}
declare namespace THREE {
    export class RingBufferGeometry extends THREE.BufferGeometry {
        public constructor(innerRadius : number, outerRadius : number, thetaSegments : number, phiSegments : number, thetaStart : number, thetaLength : number);

        public parameters : any;

        public constructor(innerRadius : number, outerRadius : number, thetaSegments : number, phiSegments : number, thetaStart : number);

        public constructor(innerRadius : number, outerRadius : number, thetaSegments : number, phiSegments : number);

        public constructor(innerRadius : number, outerRadius : number, thetaSegments : number);

        public constructor(innerRadius : number, outerRadius : number);

        public constructor(innerRadius : number);

        public constructor();
    }
}
declare namespace THREE {
    export class RingGeometry extends THREE.Geometry {
        public constructor(innerRadius : number, outerRadius : number, thetaSegments : number, phiSegments : number, thetaStart : number, thetaLength : number);

        public parameters : any;

        public constructor(innerRadius : number, outerRadius : number, thetaSegments : number, phiSegments : number, thetaStart : number);

        public constructor(innerRadius : number, outerRadius : number, thetaSegments : number, phiSegments : number);

        public constructor(innerRadius : number, outerRadius : number, thetaSegments : number);

        public constructor(innerRadius : number, outerRadius : number);

        public constructor(innerRadius : number);

        public constructor();
    }
}
declare namespace THREE {
    /**
     * Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras.
     * @class
     * @extends THREE.Object3D
     */
    export class Scene extends THREE.Object3D {
        public constructor();

        /**
         * A fog instance defining the type of fog that affects everything rendered in the scene. Default is null.
         */
        public fog : THREE.IFog;

        /**
         * If not null, it will force everything in the scene to be rendered with that material. Default is null.
         */
        public overrideMaterial : THREE.Material;

        public autoUpdate : boolean;

        public background : any;

        public toJSON(meta : any) : any;
    }
}
declare namespace THREE.SceneUtils {}
declare namespace THREE {
    /**
     * Utility class.
     * @extends Object
     * @class
     */
    export class SceneUtils {
        constructor();

        public static createMultiMaterialObject(geometry : THREE.Geometry, materials : THREE.Material[]) : THREE.Object3D;

        public static detach(child : THREE.Object3D, parent : THREE.Object3D, scene : THREE.Scene);

        public static attach(child : THREE.Object3D, scene : THREE.Scene, parent : THREE.Object3D);
    }
}
declare namespace THREE {
    export interface Shader {
        uniforms : any;

        vertexShader : string;

        fragmentShader : string;
    }
}
declare namespace THREE {
    /**
     * This is an automatically generated object type (see the source definition).
     * @class
     * @extends Object
     */
    export class ShaderChunk {
        public static $getStatic(name : string) : string;

        public static alphamap_fragment : string;

        public static alphamap_pars_fragment : string;

        public static alphatest_fragment : string;

        public static aomap_fragment : string;

        public static aomap_pars_fragment : string;

        public static begin_vertex : string;

        public static beginnormal_vertex : string;

        public static bsdfs : string;

        public static bumpmap_pars_fragment : string;

        public static clipping_planes_fragment : string;

        public static clipping_planes_pars_fragment : string;

        public static clipping_planes_pars_vertex : string;

        public static clipping_planes_vertex : string;

        public static color_fragment : string;

        public static color_pars_fragment : string;

        public static color_pars_vertex : string;

        public static color_vertex : string;

        public static common : string;

        public static cube_frag : string;

        public static cube_vert : string;

        public static cube_uv_reflection_fragment : string;

        public static defaultnormal_vertex : string;

        public static depth_frag : string;

        public static depth_vert : string;

        public static distanceRGBA_frag : string;

        public static distanceRGBA_vert : string;

        public static displacementmap_vertex : string;

        public static displacementmap_pars_vertex : string;

        public static emissivemap_fragment : string;

        public static emissivemap_pars_fragment : string;

        public static encodings_pars_fragment : string;

        public static encodings_fragment : string;

        public static envmap_fragment : string;

        public static envmap_pars_fragment : string;

        public static envmap_pars_vertex : string;

        public static envmap_vertex : string;

        public static equirect_frag : string;

        public static equirect_vert : string;

        public static fog_fragment : string;

        public static fog_pars_fragment : string;

        public static linedashed_frag : string;

        public static linedashed_vert : string;

        public static lightmap_fragment : string;

        public static lightmap_pars_fragment : string;

        public static lights_lambert_vertex : string;

        public static lights_pars : string;

        public static lights_phong_fragment : string;

        public static lights_phong_pars_fragment : string;

        public static lights_physical_fragment : string;

        public static lights_physical_pars_fragment : string;

        public static lights_template : string;

        public static logdepthbuf_fragment : string;

        public static logdepthbuf_pars_fragment : string;

        public static logdepthbuf_pars_vertex : string;

        public static logdepthbuf_vertex : string;

        public static map_fragment : string;

        public static map_pars_fragment : string;

        public static map_particle_fragment : string;

        public static map_particle_pars_fragment : string;

        public static meshbasic_frag : string;

        public static meshbasic_vert : string;

        public static meshlambert_frag : string;

        public static meshlambert_vert : string;

        public static meshphong_frag : string;

        public static meshphong_vert : string;

        public static meshphysical_frag : string;

        public static meshphysical_vert : string;

        public static metalnessmap_fragment : string;

        public static metalnessmap_pars_fragment : string;

        public static morphnormal_vertex : string;

        public static morphtarget_pars_vertex : string;

        public static morphtarget_vertex : string;

        public static normal_flip : string;

        public static normal_frag : string;

        public static normal_fragment : string;

        public static normal_vert : string;

        public static normalmap_pars_fragment : string;

        public static packing : string;

        public static points_frag : string;

        public static points_vert : string;

        public static shadow_frag : string;

        public static shadow_vert : string;

        public static premultiplied_alpha_fragment : string;

        public static project_vertex : string;

        public static roughnessmap_fragment : string;

        public static roughnessmap_pars_fragment : string;

        public static shadowmap_pars_fragment : string;

        public static shadowmap_pars_vertex : string;

        public static shadowmap_vertex : string;

        public static shadowmask_pars_fragment : string;

        public static skinbase_vertex : string;

        public static skinning_pars_vertex : string;

        public static skinning_vertex : string;

        public static skinnormal_vertex : string;

        public static specularmap_fragment : string;

        public static specularmap_pars_fragment : string;

        public static tonemapping_fragment : string;

        public static tonemapping_pars_fragment : string;

        public static uv2_pars_fragment : string;

        public static uv2_pars_vertex : string;

        public static uv2_vertex : string;

        public static uv_pars_fragment : string;

        public static uv_pars_vertex : string;

        public static uv_vertex : string;

        public static worldpos_vertex : string;
    }
}
declare namespace THREE {
    /**
     * This is an automatically generated object type (see the source definition).
     * @class
     * @extends Object
     */
    export class ShaderLib {
        public static $getStatic(name : string) : THREE.Shader;

        public static basic : THREE.Shader;

        public static lambert : THREE.Shader;

        public static phong : THREE.Shader;

        public static standard : THREE.Shader;

        public static points : THREE.Shader;

        public static dashed : THREE.Shader;

        public static depth : THREE.Shader;

        public static normal : THREE.Shader;

        public static cube : THREE.Shader;

        public static equirect : THREE.Shader;

        public static depthRGBA : THREE.Shader;

        public static distanceRGBA : THREE.Shader;

        public static physical : THREE.Shader;
    }
}
declare namespace THREE {
    export class ShaderMaterial extends THREE.Material {
        public constructor(parameters : THREE.ShaderMaterialParameters);

        public defines : any;

        public uniforms : any;

        public vertexShader : string;

        public fragmentShader : string;

        public linewidth : number;

        public wireframe : boolean;

        public wireframeLinewidth : number;

        public lights : boolean;

        public clipping : boolean;

        public skinning : boolean;

        public morphTargets : boolean;

        public morphNormals : boolean;

        /**
         * @deprecated Use {@link ShaderMaterial#extensions.derivatives} instead.
         */
        public derivatives : any;

        public extensions : any;

        public defaultAttributeValues : any;

        public index0AttributeName : string;

        public constructor();
    }
}
declare namespace THREE {
    export interface ShaderMaterialParameters extends THREE.MaterialParameters {
        defines? : any;

        uniforms? : any;

        vertexShader? : string;

        fragmentShader? : string;

        lineWidth? : number;

        wireframe? : boolean;

        wireframeLinewidth? : number;

        lights? : boolean;

        clipping? : boolean;

        skinning? : boolean;

        morphTargets? : boolean;

        morphNormals? : boolean;
    }
}
declare namespace THREE {
    export class ShaderPass {
        public constructor(shader : THREE.Shader, textureID : string);

        public textureID : string;

        public uniforms : any;

        public material : THREE.ShaderMaterial;

        public renderToScreen : boolean;

        public enabled : boolean;

        public needsSwap : boolean;

        public clear : boolean;

        public camera : THREE.Camera;

        public scene : THREE.Scene;

        public quad : THREE.Mesh;

        public render(renderer : THREE.WebGLRenderer, writeBuffer : THREE.WebGLRenderTarget, readBuffer : THREE.WebGLRenderTarget, delta : number);

        public constructor(shader : THREE.Shader);

        constructor();
    }
}
declare namespace THREE {
    export enum Shading {
      
    }
}
declare namespace THREE {
    export enum ShadowMapType {
      
    }
}
declare namespace THREE {
    export class ShadowMaterial extends THREE.ShaderMaterial {
        public constructor(parameters : THREE.ShaderMaterialParameters);

        public constructor();
    }
}
declare namespace THREE {
    /**
     * Defines a 2d shape plane using paths.
     * @param {def.threejs.THREE.Vector2[]} points
     * @class
     * @extends THREE.Path
     */
    export class Shape extends THREE.Path {
        public constructor(points : THREE.Vector2[]);

        public holes : THREE.Path[];

        /**
         * @deprecated Use {@link ExtrudeGeometry} instead.
         * @param {*} options
         * @return {THREE.ExtrudeGeometry}
         */
        public extrude(options : any) : THREE.ExtrudeGeometry;

        /**
         * @deprecated Use {@link ShapeGeometry} instead.
         * @param {*} options
         * @return {THREE.ShapeGeometry}
         */
        public makeGeometry(options : any) : THREE.ShapeGeometry;

        public getPointsHoles(divisions : number) : THREE.Vector2[][];

        /**
         * @deprecated Use {@link Shape#extractPoints} instead.
         * @param {number} divisions
         * @return {THREE.Shape.ExtractAllPoints}
         */
        public extractAllPoints(divisions : number) : any;

        public extractPoints(divisions : number) : THREE.Vector2[];

        public constructor();

        /**
         * @deprecated Use {@link ExtrudeGeometry} instead.
         * @return {THREE.ExtrudeGeometry}
         */
        public extrude() : THREE.ExtrudeGeometry;

        /**
         * @deprecated Use {@link ShapeGeometry} instead.
         * @return {THREE.ShapeGeometry}
         */
        public makeGeometry() : THREE.ShapeGeometry;
    }
}
declare namespace THREE {
    export class ShapeBufferGeometry extends THREE.BufferGeometry {
        public constructor(shapes : THREE.Shape, curveSegments : number);

        public constructor(shapes : THREE.Shape);

        public constructor(shapes : THREE.Shape[], curveSegments : number);

        public constructor(shapes : THREE.Shape[]);

        constructor();
    }
}
declare namespace THREE {
    export class ShapeGeometry extends THREE.Geometry {
        public constructor(shape : THREE.Shape, options : any);

        public constructor(shapes : THREE.Shape[], options : any);

        public addShapeList(shapes : THREE.Shape[], options : any) : ShapeGeometry;

        public addShape(shape : THREE.Shape, options : any);

        public constructor(shape : THREE.Shape);

        public constructor(shapes : THREE.Shape[]);

        public addShape(shape : THREE.Shape);

        constructor();
    }
}
declare namespace THREE {
    export class ShapePath {
        public constructor();

        public subPaths : any[];

        public currentPath : any;

        public moveTo(x : number, y : number);

        public lineTo(x : number, y : number);

        public quadraticCurveTo(aCPx : number, aCPy : number, aX : number, aY : number);

        public bezierCurveTo(aCP1x : number, aCP1y : number, aCP2x : number, aCP2y : number, aX : number, aY : number);

        public splineThru(pts : THREE.Vector2[]);

        public toShapes(isCCW : boolean, noHoles : any) : THREE.Shape[];
    }
}
declare namespace THREE.ShapeUtils {}
declare namespace THREE {
    /**
     * Utility class.
     * @extends Object
     * @class
     */
    export class ShapeUtils {
        constructor();

        public static area(contour : number[]) : number;

        public static triangulate(contour : number[], indices : boolean) : number[];

        public static triangulateShape(contour : number[], holes : any[]) : number[];

        public static isClockWise(pts : number[]) : boolean;
    }
}
declare namespace THREE {
    export enum Side {
      
    }
}
declare namespace THREE {
    export class Skeleton {
        public constructor(bones : THREE.Bone[], boneInverses : THREE.Matrix4[]);

        /**
         * @deprecated This property has been removed completely.
         */
        public useVertexTexture : boolean;

        public identityMatrix : THREE.Matrix4;

        public bones : THREE.Bone[];

        public boneTextureWidth : number;

        public boneTextureHeight : number;

        public boneMatrices : Float32Array;

        public boneTexture : THREE.DataTexture;

        public boneInverses : THREE.Matrix4[];

        public calculateInverses(bone : THREE.Bone);

        public pose();

        public update();

        public clone() : Skeleton;

        public constructor(bones : THREE.Bone[]);

        constructor();
    }
}
declare namespace THREE {
    export class SkeletonHelper extends THREE.LineSegments {
        public constructor(bone : THREE.Object3D);

        public bones : THREE.Bone[];

        public root : THREE.Object3D;

        public getBoneList(object : THREE.Object3D) : THREE.Bone[];

        public update();

        constructor();
    }
}
declare namespace THREE {
    export class SkinnedMesh extends THREE.Mesh {
        public constructor(geometry : THREE.Geometry, material : THREE.MeshBasicMaterial, useVertexTexture : boolean);

        public constructor(geometry : THREE.Geometry, material : THREE.MeshDepthMaterial, useVertexTexture : boolean);

        public constructor(geometry : THREE.Geometry, material : THREE.MultiMaterial, useVertexTexture : boolean);

        public constructor(geometry : THREE.Geometry, material : THREE.MeshLambertMaterial, useVertexTexture : boolean);

        public constructor(geometry : THREE.Geometry, material : THREE.MeshNormalMaterial, useVertexTexture : boolean);

        public constructor(geometry : THREE.Geometry, material : THREE.MeshPhongMaterial, useVertexTexture : boolean);

        public constructor(geometry : THREE.Geometry, material : THREE.ShaderMaterial, useVertexTexture : boolean);

        public bindMode : string;

        public bindMatrix : THREE.Matrix4;

        public bindMatrixInverse : THREE.Matrix4;

        public skeleton : THREE.Skeleton;

        public bind(skeleton : THREE.Skeleton, bindMatrix : THREE.Matrix4);

        public pose();

        public normalizeSkinWeights();

        public constructor(geometry : THREE.Geometry, material : THREE.MeshBasicMaterial);

        public constructor(geometry : THREE.Geometry);

        public constructor();

        public constructor(geometry : THREE.Geometry, material : THREE.MeshDepthMaterial);

        public constructor(geometry : THREE.Geometry, material : THREE.MultiMaterial);

        public constructor(geometry : THREE.Geometry, material : THREE.MeshLambertMaterial);

        public constructor(geometry : THREE.Geometry, material : THREE.MeshNormalMaterial);

        public constructor(geometry : THREE.Geometry, material : THREE.MeshPhongMaterial);

        public constructor(geometry : THREE.Geometry, material : THREE.ShaderMaterial);

        public bind(skeleton : THREE.Skeleton);

        public updateMatrixWorld();

        public constructor(geometry : THREE.BufferGeometry, material : THREE.MeshBasicMaterial, useVertexTexture : boolean);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.MeshDepthMaterial, useVertexTexture : boolean);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.MultiMaterial, useVertexTexture : boolean);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.MeshLambertMaterial, useVertexTexture : boolean);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.MeshNormalMaterial, useVertexTexture : boolean);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.MeshPhongMaterial, useVertexTexture : boolean);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.ShaderMaterial, useVertexTexture : boolean);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.MeshBasicMaterial);

        public constructor(geometry : THREE.BufferGeometry);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.MeshDepthMaterial);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.MultiMaterial);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.MeshLambertMaterial);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.MeshNormalMaterial);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.MeshPhongMaterial);

        public constructor(geometry : THREE.BufferGeometry, material : THREE.ShaderMaterial);
    }
}
declare namespace THREE {
    export class SMAAPass {
        public constructor(width : number, height : number);

        public renderToScreen : boolean;

        constructor();
    }
}
declare namespace THREE {
    export class Sphere {
        public constructor(center : THREE.Vector3, radius : number);

        public center : THREE.Vector3;

        public radius : number;

        public set(center : THREE.Vector3, radius : number) : Sphere;

        public setFromPoints(points : THREE.Vector3[], optionalCenter : THREE.Vector3) : Sphere;

        public clone() : Sphere;

        public copy(sphere : Sphere) : Sphere;

        public empty() : boolean;

        public containsPoint(point : THREE.Vector3) : boolean;

        public distanceToPoint(point : THREE.Vector3) : number;

        public intersectsSphere(sphere : Sphere) : boolean;

        public intersectsBox(box : THREE.Box3) : boolean;

        public intersectsPlane(plane : THREE.Plane) : boolean;

        public clampPoint(point : THREE.Vector3, optionalTarget : THREE.Vector3) : THREE.Vector3;

        public getBoundingBox(optionalTarget : THREE.Box3) : THREE.Box3;

        public applyMatrix4(matrix : THREE.Matrix4) : Sphere;

        public translate(offset : THREE.Vector3) : Sphere;

        public equals(sphere : Sphere) : boolean;

        public constructor(center : THREE.Vector3);

        public constructor();

        public setFromPoints(points : THREE.Vector3[]) : Sphere;

        public clampPoint(point : THREE.Vector3) : THREE.Vector3;

        public getBoundingBox() : THREE.Box3;
    }
}
declare namespace THREE {
    export class SphereBufferGeometry extends THREE.BufferGeometry {
        public constructor(radius : number, widthSegments : number, heightSegments : number, phiStart : number, phiLength : number, thetaStart : number, thetaLength : number);

        public parameters : any;

        public constructor(radius : number, widthSegments : number, heightSegments : number, phiStart : number, phiLength : number, thetaStart : number);

        public constructor(radius : number, widthSegments : number, heightSegments : number, phiStart : number, phiLength : number);

        public constructor(radius : number, widthSegments : number, heightSegments : number, phiStart : number);

        public constructor(radius : number, widthSegments : number, heightSegments : number);

        public constructor(radius : number, widthSegments : number);

        public constructor(radius : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * The geometry is created by sweeping and calculating vertexes around the Y axis (horizontal sweep) and the Z axis (vertical sweep). Thus, incomplete spheres (akin to 'sphere slices') can be created through the use of different values of phiStart, phiLength, thetaStart and thetaLength, in order to define the points in which we start (or end) calculating those vertices.
     * 
     * @param {number} radius — sphere radius. Default is 50.
     * @param {number} widthSegments — number of horizontal segments. Minimum value is 3, and the default is 8.
     * @param {number} heightSegments — number of vertical segments. Minimum value is 2, and the default is 6.
     * @param {number} phiStart — specify horizontal starting angle. Default is 0.
     * @param {number} phiLength — specify horizontal sweep angle size. Default is Math.PI * 2.
     * @param {number} thetaStart — specify vertical starting angle. Default is 0.
     * @param {number} thetaLength — specify vertical sweep angle size. Default is Math.PI.
     * @class
     * @extends THREE.Geometry
     */
    export class SphereGeometry extends THREE.Geometry {
        public constructor(radius : number, widthSegments : number, heightSegments : number, phiStart : number, phiLength : number, thetaStart : number, thetaLength : number);

        public parameters : any;

        public constructor(radius : number, widthSegments : number, heightSegments : number, phiStart : number, phiLength : number, thetaStart : number);

        public constructor(radius : number, widthSegments : number, heightSegments : number, phiStart : number, phiLength : number);

        public constructor(radius : number, widthSegments : number, heightSegments : number, phiStart : number);

        public constructor(radius : number, widthSegments : number, heightSegments : number);

        public constructor(radius : number, widthSegments : number);

        public constructor(radius : number);

        constructor();
    }
}
declare namespace THREE {
    export class Spherical {
        public constructor(radius : number, phi : number, theta : number);

        public radius : number;

        public phi : number;

        public theta : number;

        public set(radius : number, phi : number, theta : number) : Spherical;

        public clone() : Spherical;

        public copy(other : Spherical) : Spherical;

        public makeSafe();

        public setFromVector3(vec3 : THREE.Vector3) : Spherical;

        public constructor(radius : number, phi : number);

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    export interface SplineControlPoint {
        x : number;

        y : number;

        z : number;
    }
}
declare namespace THREE {
    export class SplineCurve extends THREE.Curve<THREE.Vector2> {
        public constructor(points : THREE.Vector2[]);

        public points : THREE.Vector2[];

        public constructor();
    }
}
declare namespace THREE {
    /**
     * A point light that can cast shadow in one direction.
     * @param {THREE.Color} color
     * @param {number} intensity
     * @param {number} distance
     * @param {number} angle
     * @param {number} exponent
     * @param {number} decay
     * @class
     * @extends THREE.Light
     */
    export class SpotLight extends THREE.Light {
        public constructor(color : THREE.Color, intensity : number, distance : number, angle : number, exponent : number, decay : number);

        /**
         * Spotlight focus points at target.position.
         * Default position — (0,0,0).
         */
        public target : THREE.Object3D;

        /**
         * Light's intensity.
         * Default — 1.0.
         */
        public intensity : number;

        /**
         * If non-zero, light will attenuate linearly from maximum intensity at light position down to zero at distance.
         * Default — 0.0.
         */
        public distance : number;

        public angle : number;

        /**
         * Rapidity of the falloff of light from its target direction.
         * Default — 10.0.
         */
        public exponent : number;

        public decay : number;

        public shadow : THREE.SpotLightShadow;

        public power : number;

        public penumbra : number;

        public constructor(color : THREE.Color, intensity : number, distance : number, angle : number, exponent : number);

        public constructor(color : THREE.Color, intensity : number, distance : number, angle : number);

        public constructor(color : THREE.Color, intensity : number, distance : number);

        public constructor(color : THREE.Color, intensity : number);

        public constructor(color : THREE.Color);

        public constructor();

        public constructor(color : number, intensity : number, distance : number, angle : number, exponent : number, decay : number);

        public constructor(color : string, intensity : number, distance : number, angle : number, exponent : number, decay : number);

        public constructor(color : number, intensity : number, distance : number, angle : number, exponent : number);

        public constructor(color : string, intensity : number, distance : number, angle : number, exponent : number);

        public constructor(color : string, intensity : number, distance : number, angle : number);

        public constructor(color : number, intensity : number, distance : number, angle : number);

        public constructor(color : number, intensity : number, distance : number);

        public constructor(color : string, intensity : number, distance : number);

        public constructor(color : number, intensity : number);

        public constructor(color : string, intensity : number);

        public constructor(color : number);

        public constructor(color : string);
    }
}
declare namespace THREE {
    export class SpotLightHelper extends THREE.Object3D {
        public constructor(light : THREE.Light);

        public light : THREE.Light;

        public dispose();

        public update();

        constructor();
    }
}
declare namespace THREE {
    export class SpotLightShadow extends THREE.LightShadow {
        public camera : THREE.PerspectiveCamera;

        public update(light : THREE.Light);
    }
}
declare namespace THREE {
    export class Sprite extends THREE.Object3D {
        public constructor(material : THREE.Material);

        public geometry : THREE.BufferGeometry;

        public material : THREE.SpriteMaterial;

        public constructor();
    }
}
declare namespace THREE {
    export class SpriteMaterial extends THREE.Material {
        public constructor(parameters : THREE.SpriteMaterialParameters);

        public color : THREE.Color;

        public map : THREE.Texture;

        public rotation : number;

        public constructor();
    }
}
declare namespace THREE {
    export interface SpriteMaterialParameters extends THREE.MaterialParameters {
        color? : ((THREE.Color)|(string)|(number));

        map? : THREE.Texture;

        rotation? : number;
    }
}
declare namespace THREE {
    export class SpritePlugin {
        public constructor(renderer : THREE.WebGLRenderer, sprites : any[]);

        public render(scene : THREE.Scene, camera : THREE.Camera, viewportWidth : number, viewportHeight : number);

        constructor();
    }
}
declare namespace THREE {
    export class StereoCamera extends THREE.Camera {
        public constructor();

        public aspect : number;

        public eyeSep : number;

        public cameraL : THREE.PerspectiveCamera;

        public cameraR : THREE.PerspectiveCamera;

        public update(camera : THREE.PerspectiveCamera);
    }
}
declare namespace THREE {
    export class StringKeyframeTrack extends THREE.KeyframeTrack {
        public constructor(name : string, times : any[], values : any[], interpolation : THREE.InterpolationModes);

        constructor();
    }
}
declare namespace THREE {
    export class TetrahedronBufferGeometry extends THREE.PolyhedronBufferGeometry {
        public constructor(radius : number, detail : number);

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    export class TetrahedronGeometry extends THREE.PolyhedronGeometry {
        public constructor(radius : number, detail : number);

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    export class TextGeometry extends THREE.ExtrudeGeometry {
        public constructor(text : string, parameters : THREE.TextGeometryParameters);

        public parameters : any;

        public constructor(text : string);

        constructor();
    }
}
declare namespace THREE {
    export interface TextGeometryParameters {
        font? : THREE.Font;

        size? : number;

        height? : number;

        curveSegments? : number;

        bevelEnabled? : boolean;

        bevelThickness? : number;

        bevelSize? : number;
    }
}
declare namespace THREE {
    export class Texture extends THREE.EventDispatcher {
        public constructor(image : HTMLImageElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType, anisotropy : number, encoding : THREE.TextureEncoding);

        public id : number;

        public uuid : string;

        public name : string;

        public sourceFile : string;

        public image : any;

        public mipmaps : ImageData[];

        public mapping : THREE.Mapping;

        public wrapS : THREE.Wrapping;

        public wrapT : THREE.Wrapping;

        public magFilter : THREE.TextureFilter;

        public minFilter : THREE.TextureFilter;

        public anisotropy : number;

        public format : THREE.PixelFormat;

        public type : THREE.TextureDataType;

        public offset : THREE.Vector2;

        public repeat : THREE.Vector2;

        public center : THREE.Vector2;

        public rotation : number;

        public generateMipmaps : boolean;

        public premultiplyAlpha : boolean;

        public flipY : boolean;

        public unpackAlignment : number;

        public encoding : THREE.TextureEncoding;

        public version : number;

        public needsUpdate : boolean;

        public onUpdate : () => void;

        public static DEFAULT_IMAGE : any;

        public static DEFAULT_MAPPING : any;

        public clone() : Texture;

        public copy(source : Texture) : Texture;

        public toJSON(meta : any) : any;

        public dispose();

        public transformUv(uv : THREE.Vector);

        public constructor(image : HTMLImageElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType, anisotropy : number);

        public constructor(image : HTMLImageElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType);

        public constructor(image : HTMLImageElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat);

        public constructor(image : HTMLImageElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter);

        public constructor(image : HTMLImageElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter);

        public constructor(image : HTMLImageElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping);

        public constructor(image : HTMLImageElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping);

        public constructor(image : HTMLImageElement, mapping : THREE.Mapping);

        public constructor(image : HTMLImageElement);

        public constructor();

        public constructor(image : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType, anisotropy : number, encoding : THREE.TextureEncoding);

        public constructor(image : HTMLCanvasElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType, anisotropy : number, encoding : THREE.TextureEncoding);

        public constructor(image : HTMLCanvasElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType, anisotropy : number);

        public constructor(image : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType, anisotropy : number);

        public constructor(image : HTMLCanvasElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType);

        public constructor(image : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType);

        public constructor(image : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat);

        public constructor(image : HTMLCanvasElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat);

        public constructor(image : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter);

        public constructor(image : HTMLCanvasElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter);

        public constructor(image : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter);

        public constructor(image : HTMLCanvasElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter);

        public constructor(image : HTMLCanvasElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping);

        public constructor(image : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping);

        public constructor(image : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping);

        public constructor(image : HTMLCanvasElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping);

        public constructor(image : HTMLVideoElement, mapping : THREE.Mapping);

        public constructor(image : HTMLCanvasElement, mapping : THREE.Mapping);

        public constructor(image : HTMLCanvasElement);

        public constructor(image : HTMLVideoElement);
    }
}
declare namespace THREE {
    export enum TextureDataType {
      
    }
}
declare namespace THREE {
    export enum TextureEncoding {
      
    }
}
declare namespace THREE {
    export enum TextureFilter {
      
    }
}
declare namespace THREE {
    /**
     * Class for loading a texture.
     * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
     * @param {THREE.LoadingManager} manager
     * @class
     * @extends Object
     */
    export class TextureLoader {
        public constructor(manager : THREE.LoadingManager);

        public manager : THREE.LoadingManager;

        public crossOrigin : string;

        public withCredentials : string;

        public path : string;

        /**
         * Begin loading from url
         * 
         * @param {string} url
         * @param {*} onLoad
         * @param {*} onProgress
         * @param {*} onError
         * @return {THREE.Texture}
         */
        public load(url : string, onLoad : (p1: THREE.Texture) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void) : THREE.Texture;

        public setCrossOrigin(crossOrigin : string) : TextureLoader;

        public setWithCredentials(value : string) : TextureLoader;

        public setPath(path : string) : TextureLoader;

        public constructor();

        /**
         * Begin loading from url
         * 
         * @param {string} url
         * @param {*} onLoad
         * @param {*} onProgress
         * @return {THREE.Texture}
         */
        public load(url : string, onLoad : (p1: THREE.Texture) => void, onProgress : (p1: ProgressEvent) => void) : THREE.Texture;

        /**
         * Begin loading from url
         * 
         * @param {string} url
         * @param {*} onLoad
         * @return {THREE.Texture}
         */
        public load(url : string, onLoad : (p1: THREE.Texture) => void) : THREE.Texture;

        /**
         * Begin loading from url
         * 
         * @param {string} url
         * @return {THREE.Texture}
         */
        public load(url : string) : THREE.Texture;
    }
}
declare namespace THREE {
    export enum ToneMapping {
      
    }
}
declare namespace THREE {
    export class TorusBufferGeometry extends THREE.BufferGeometry {
        public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number, arc : number);

        public parameters : any;

        public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number);

        public constructor(radius : number, tube : number, radialSegments : number);

        public constructor(radius : number, tube : number);

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    export class TorusGeometry extends THREE.Geometry {
        public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number, arc : number);

        public parameters : any;

        public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number);

        public constructor(radius : number, tube : number, radialSegments : number);

        public constructor(radius : number, tube : number);

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    export class TorusKnotBufferGeometry extends THREE.BufferGeometry {
        public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number, p : number, q : number, heightScale : number);

        public parameters : any;

        public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number, p : number, q : number);

        public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number, p : number);

        public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number);

        public constructor(radius : number, tube : number, radialSegments : number);

        public constructor(radius : number, tube : number);

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    export class TorusKnotGeometry extends THREE.Geometry {
        public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number, p : number, q : number, heightScale : number);

        public parameters : any;

        public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number, p : number, q : number);

        public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number, p : number);

        public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number);

        public constructor(radius : number, tube : number, radialSegments : number);

        public constructor(radius : number, tube : number);

        public constructor(radius : number);

        public constructor();
    }
}
declare namespace THREE {
    export class TrackballControls extends THREE.EventDispatcher {
        public constructor(object : THREE.Camera, domElement : HTMLElement);

        public object : THREE.Camera;

        public domElement : HTMLElement;

        public enabled : boolean;

        public screen : any;

        public rotateSpeed : number;

        public zoomSpeed : number;

        public panSpeed : number;

        public noRotate : boolean;

        public noZoom : boolean;

        public noPan : boolean;

        public noRoll : boolean;

        public staticMoving : boolean;

        public dynamicDampingFactor : number;

        public minDistance : number;

        public maxDistance : number;

        public keys : any;

        public target : THREE.Vector3;

        public position0 : THREE.Vector3;

        public target0 : THREE.Vector3;

        public up0 : THREE.Vector3;

        public update();

        public reset();

        public checkDistances();

        public zoomCamera();

        public panCamera();

        public rotateCamera();

        public handleResize();

        public handleEvent(event : any);

        public constructor(object : THREE.Camera);

        constructor();
    }
}
declare namespace THREE {
    export class TransformControls extends THREE.Object3D {
        public constructor(object : THREE.Camera, domElement : HTMLElement);

        public object : THREE.Object3D;

        public update();

        public detach();

        public attach(object : THREE.Object3D);

        public getMode() : string;

        public setMode(mode : string);

        public setSnap(snap : any);

        public setSize(size : number);

        public setSpace(space : string);

        public constructor(object : THREE.Camera);

        constructor();
    }
}
declare namespace THREE {
    export class Triangle {
        public constructor(a : THREE.Vector3, b : THREE.Vector3, c : THREE.Vector3);

        public a : THREE.Vector3;

        public b : THREE.Vector3;

        public c : THREE.Vector3;

        public set(a : THREE.Vector3, b : THREE.Vector3, c : THREE.Vector3) : Triangle;

        public setFromPointsAndIndices(points : THREE.Vector3[], i0 : number, i1 : number, i2 : number) : Triangle;

        public clone() : Triangle;

        public copy(triangle : Triangle) : Triangle;

        public area() : number;

        public midpoint(optionalTarget : THREE.Vector3) : THREE.Vector3;

        public normal(optionalTarget : THREE.Vector3) : THREE.Vector3;

        public plane(optionalTarget : THREE.Vector3) : THREE.Plane;

        public barycoordFromPoint(point : THREE.Vector3, optionalTarget : THREE.Vector3) : THREE.Vector3;

        public containsPoint(point : THREE.Vector3) : boolean;

        public closestPointToPoint(point : THREE.Vector3, optionalTarget : THREE.Vector3) : THREE.Vector3;

        public equals(triangle : Triangle) : boolean;

        public static normal(a : THREE.Vector3, b : THREE.Vector3, c : THREE.Vector3, optionalTarget : THREE.Vector3) : THREE.Vector3;

        public static barycoordFromPoint(point : THREE.Vector3, a : THREE.Vector3, b : THREE.Vector3, c : THREE.Vector3, optionalTarget : THREE.Vector3) : THREE.Vector3;

        public static containsPoint(point : THREE.Vector3, a : THREE.Vector3, b : THREE.Vector3, c : THREE.Vector3) : boolean;

        public constructor(a : THREE.Vector3, b : THREE.Vector3);

        public constructor(a : THREE.Vector3);

        public constructor();

        public midpoint() : THREE.Vector3;

        public normal() : THREE.Vector3;

        public plane() : THREE.Plane;

        public barycoordFromPoint(point : THREE.Vector3) : THREE.Vector3;

        public closestPointToPoint(point : THREE.Vector3) : THREE.Vector3;

        public static normal(a : THREE.Vector3, b : THREE.Vector3, c : THREE.Vector3) : THREE.Vector3;
    }
}
declare namespace THREE {
    export enum TrianglesDrawModes {
      
    }
}
declare namespace THREE {
    export class TubeBufferGeometry extends THREE.BufferGeometry {
        public constructor(path : THREE.Curve<THREE.Vector3>, segments : number, radius : number, radiusSegments : number, closed : boolean);

        public parameters : any;

        public tangents : THREE.Vector3[];

        public normals : THREE.Vector3[];

        public binormals : THREE.Vector3[];

        public constructor(path : THREE.Curve<THREE.Vector3>, segments : number, radius : number, radiusSegments : number);

        public constructor(path : THREE.Curve<THREE.Vector3>, segments : number, radius : number);

        public constructor(path : THREE.Curve<THREE.Vector3>, segments : number);

        public constructor(path : THREE.Curve<THREE.Vector3>);

        constructor();
    }
}
declare namespace THREE {
    export class TubeGeometry extends THREE.Geometry {
        public constructor(path : THREE.Curve<THREE.Vector3>, segments : number, radius : number, radiusSegments : number, closed : boolean, taper : (p1: number) => number);

        public parameters : any;

        public tangents : THREE.Vector3[];

        public normals : THREE.Vector3[];

        public binormals : THREE.Vector3[];

        public static NoTaper(u : number) : number;

        public static SinusoidalTaper(u : number) : number;

        public static FrenetFrames(path : THREE.Path, segments : number, closed : boolean);

        public constructor(path : THREE.Curve<THREE.Vector3>, segments : number, radius : number, radiusSegments : number, closed : boolean);

        public constructor(path : THREE.Curve<THREE.Vector3>, segments : number, radius : number, radiusSegments : number);

        public constructor(path : THREE.Curve<THREE.Vector3>, segments : number, radius : number);

        public constructor(path : THREE.Curve<THREE.Vector3>, segments : number);

        public constructor(path : THREE.Curve<THREE.Vector3>);

        public static NoTaper() : number;

        constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.
     * @param {*} array
     * @param {number} itemSize
     * @class
     * @extends THREE.BufferAttribute
     */
    export class Uint16Attribute extends THREE.BufferAttribute {
        public constructor(array : any, itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    export class Uint16BufferAttribute extends THREE.BufferAttribute {
        public constructor(array : Array<number>, itemSize : number);

        public constructor(array : ArrayLike<number>, itemSize : number);

        public constructor(array : ArrayBuffer, itemSize : number);

        public constructor(array : number[], itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.
     * @param {*} array
     * @param {number} itemSize
     * @class
     * @extends THREE.BufferAttribute
     */
    export class Uint32Attribute extends THREE.BufferAttribute {
        public constructor(array : any, itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    export class Uint32BufferAttribute extends THREE.BufferAttribute {
        public constructor(array : Array<number>, itemSize : number);

        public constructor(array : ArrayBuffer, itemSize : number);

        public constructor(array : ArrayLike<number>, itemSize : number);

        public constructor(array : number[], itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.
     * @param {*} array
     * @param {number} itemSize
     * @class
     * @extends THREE.BufferAttribute
     */
    export class Uint8Attribute extends THREE.BufferAttribute {
        public constructor(array : any, itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    export class Uint8BufferAttribute extends THREE.BufferAttribute {
        public constructor(array : Array<number>, itemSize : number);

        public constructor(array : ArrayBuffer, itemSize : number);

        public constructor(array : ArrayLike<number>, itemSize : number);

        public constructor(array : number[], itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.
     * @param {*} array
     * @param {number} itemSize
     * @class
     * @extends THREE.BufferAttribute
     */
    export class Uint8ClampedAttribute extends THREE.BufferAttribute {
        public constructor(array : any, itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    export class Uint8ClampedBufferAttribute extends THREE.BufferAttribute {
        public constructor(array : Array<number>, itemSize : number);

        public constructor(array : ArrayBuffer, itemSize : number);

        public constructor(array : ArrayLike<number>, itemSize : number);

        public constructor(array : number[], itemSize : number);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated
     * @param {string} type
     * @param {*} value
     * @class
     * @extends Object
     */
    export class Uniform {
        public constructor(value : any);

        public constructor(type : string, value : any);

        /**
         * @deprecated
         */
        public type : string;

        public value : any;

        /**
         * @deprecated Use {@link Object3D#onBeforeRender} instead.
         */
        public dynamic : boolean;

        public onUpdateCallback : any;

        /**
         * @deprecated Use {@link Object3D#onBeforeRender} instead.
         * @param {Function} callback
         * @return {THREE.Uniform}
         */
        public onUpdate(callback : Function) : Uniform;

        constructor();
    }
}
declare namespace THREE {
    /**
     * This is an automatically generated object type (see the source definition).
     * @class
     * @extends Object
     */
    export class UniformsLib {
        public static common : any;

        public static aomap : any;

        public static lightmap : any;

        public static emissivemap : any;

        public static bumpmap : any;

        public static normalmap : any;

        public static displacementmap : any;

        public static roughnessmap : any;

        public static metalnessmap : any;

        public static fog : any;

        public static lights : any;

        public static points : any;
    }
}
declare namespace THREE.UniformsUtils {}
declare namespace THREE {
    /**
     * Utility class.
     * @extends Object
     * @class
     */
    export class UniformsUtils {
        constructor();

        public static merge(uniforms : any[]) : any;

        public static clone(uniforms_src : any) : any;
    }
}
declare namespace THREE {
    /**
     * ( interface Vector&lt;T&gt; )
     * 
     * Abstract interface of Vector2, Vector3 and Vector4.
     * Currently the members of Vector is NOT type safe because it accepts different typed vectors.
     * Those definitions will be changed when TypeScript innovates Generics to be type safe.
     * 
     * @example
     * var v:THREE.Vector = new THREE.Vector3();
     * v.addVectors(new THREE.Vector2(0, 1), new THREE.Vector2(2, 3));    // invalid but compiled successfully
     * @class
     * @extends Object
     */
    export interface Vector {
        setComponent(index : number, value : number);

        getComponent(index : number) : number;

        /**
         * copy(v:T):T;
         * @param {*} v
         * @return {*}
         */
        copy(v : Vector) : Vector;

        /**
         * add(v:T):T;
         * @param {*} v
         * @return {*}
         */
        add(v : Vector) : Vector;

        /**
         * addVectors(a:T, b:T):T;
         * @param {*} a
         * @param {*} b
         * @return {*}
         */
        addVectors(a : Vector, b : Vector) : Vector;

        /**
         * sub(v:T):T;
         * @param {*} v
         * @return {*}
         */
        sub(v : Vector) : Vector;

        /**
         * subVectors(a:T, b:T):T;
         * @param {*} a
         * @param {*} b
         * @return {*}
         */
        subVectors(a : Vector, b : Vector) : Vector;

        /**
         * multiplyScalar(s:number):T;
         * @param {number} s
         * @return {*}
         */
        multiplyScalar(s : number) : Vector;

        /**
         * divideScalar(s:number):T;
         * @param {number} s
         * @return {*}
         */
        divideScalar(s : number) : Vector;

        /**
         * negate():T;
         * @return {*}
         */
        negate() : Vector;

        /**
         * dot(v:T):T;
         * @param {*} v
         * @return {number}
         */
        dot(v : Vector) : number;

        /**
         * lengthSq():number;
         * @return {number}
         */
        lengthSq() : number;

        /**
         * length():number;
         * @return {number}
         */
        length() : number;

        /**
         * normalize():T;
         * @return {*}
         */
        normalize() : Vector;

        /**
         * NOTE: Vector4 doesn't have the property.
         * 
         * distanceTo(v:T):number;
         * @param {*} v
         * @return {number}
         */
        distanceTo(v : Vector) : number;

        /**
         * NOTE: Vector4 doesn't have the property.
         * 
         * distanceToSquared(v:T):number;
         * @param {*} v
         * @return {number}
         */
        distanceToSquared(v : Vector) : number;

        /**
         * setLength(l:number):T;
         * @param {number} l
         * @return {*}
         */
        setLength(l : number) : Vector;

        /**
         * lerp(v:T, alpha:number):T;
         * @param {*} v
         * @param {number} alpha
         * @return {*}
         */
        lerp(v : Vector, alpha : number) : Vector;

        /**
         * equals(v:T):boolean;
         * @param {*} v
         * @return {boolean}
         */
        equals(v : Vector) : boolean;

        /**
         * clone():T;
         * @return {*}
         */
        clone() : Vector;
    }
}
declare namespace THREE {
    /**
     * 2D vector.
     * 
     * ( class Vector2 implements Vector<Vector2> )
     * @param {number} x
     * @param {number} y
     * @class
     * @extends *
     */
    export class Vector2 implements THREE.Vector {
        public constructor(x : number, y : number);

        public x : number;

        public y : number;

        public width : number;

        public height : number;

        /**
         * Sets value of this vector.
         * @param {number} x
         * @param {number} y
         * @return {THREE.Vector2}
         */
        public set(x : number, y : number) : Vector2;

        public setScalar(scalar : number) : Vector2;

        /**
         * Sets X component of this vector.
         * @param {number} x
         * @return {THREE.Vector2}
         */
        public setX(x : number) : Vector2;

        /**
         * Sets Y component of this vector.
         * @param {number} y
         * @return {THREE.Vector2}
         */
        public setY(y : number) : Vector2;

        /**
         * Sets this vector to a + b.
         * @param {number} s
         * @return {THREE.Vector2}
         */
        public addScalar(s : number) : Vector2;

        public addScaledVector(v : Vector2, s : number) : Vector2;

        public multiply(v : Vector2) : Vector2;

        public divide(v : Vector2) : Vector2;

        public min(v : Vector2) : Vector2;

        public max(v : Vector2) : Vector2;

        public clamp(min : Vector2, max : Vector2) : Vector2;

        public clampScalar(min : number, max : number) : Vector2;

        public clampLength(min : number, max : number) : Vector2;

        public floor() : Vector2;

        public ceil() : Vector2;

        public round() : Vector2;

        public roundToZero() : Vector2;

        /**
         * @deprecated Use {@link Vector2#manhattanLength} instead.
         * @return {number}
         */
        public lengthManhattan() : number;

        /**
         * computes the angle in radians with respect to the positive x-axis
         * @return {number}
         */
        public angle() : number;

        /**
         * @deprecated Use {@link Vector2#manhattanDistanceTo} instead.
         * @param {THREE.Vector2} v
         * @return {number}
         */
        public distanceToManhattan(v : Vector2) : number;

        public lerpVectors(v1 : Vector2, v2 : Vector2, alpha : number) : Vector2;

        public fromArray(xy : number[], offset : number) : Vector2;

        public toArray(xy : number[], offset : number) : number[];

        public fromBufferAttribute(attribute : THREE.BufferAttribute, index : number, offset : number) : Vector2;

        public rotateAround(center : Vector2, angle : number) : Vector2;

        /**
         * Computes the Manhattan length of this vector.
         * 
         * @return {number} {number}
         * 
         * @see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
         */
        public manhattanLength() : number;

        /**
         * Computes the Manhattan length (distance) from this vector to the given vector v
         * 
         * @param {Vector2} v
         * 
         * @return {number} {number}
         * 
         * @see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
         * @param {THREE.Vector2} v
         */
        public manhattanDistanceTo(v : Vector2) : number;

        public constructor(x : number);

        public constructor();

        public fromArray(xy : number[]) : Vector2;

        public toArray(xy : number[]) : number[];

        public toArray() : number[];

        public fromBufferAttribute(attribute : THREE.BufferAttribute, index : number) : Vector2;
    }
}
declare namespace THREE {
    /**
     * 3D vector.
     * 
     * @example
     * var a = new THREE.Vector3( 1, 0, 0 );
     * var b = new THREE.Vector3( 0, 1, 0 );
     * var c = new THREE.Vector3();
     * c.crossVectors( a, b );
     * 
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js">src/math/Vector3.js</a>
     * 
     * ( class Vector3 implements Vector<Vector3> )
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @class
     * @extends *
     */
    export class Vector3 implements THREE.Vector {
        public constructor(x : number, y : number, z : number);

        public x : number;

        public y : number;

        public z : number;

        /**
         * Sets value of this vector.
         * @param {number} x
         * @param {number} y
         * @param {number} z
         * @return {THREE.Vector3}
         */
        public set(x : number, y : number, z : number) : Vector3;

        /**
         * Sets all values of this vector.
         * @param {number} scalar
         * @return {THREE.Vector3}
         */
        public setScalar(scalar : number) : Vector3;

        /**
         * Sets x value of this vector.
         * @param {number} x
         * @return {THREE.Vector3}
         */
        public setX(x : number) : Vector3;

        /**
         * Sets y value of this vector.
         * @param {number} y
         * @return {THREE.Vector3}
         */
        public setY(y : number) : Vector3;

        /**
         * Sets z value of this vector.
         * @param {number} z
         * @return {THREE.Vector3}
         */
        public setZ(z : number) : Vector3;

        public addScalar(s : number) : Vector3;

        public addScaledVector(v : Vector3, s : number) : Vector3;

        public subScalar(s : number) : Vector3;

        public multiply(v : Vector3) : Vector3;

        public multiplyVectors(a : Vector3, b : Vector3) : Vector3;

        public applyEuler(euler : THREE.Euler) : Vector3;

        public applyAxisAngle(axis : Vector3, angle : number) : Vector3;

        public applyMatrix3(m : THREE.Matrix3) : Vector3;

        public applyMatrix4(m : THREE.Matrix4) : Vector3;

        public applyQuaternion(q : THREE.Quaternion) : Vector3;

        public project(camrea : THREE.Camera) : Vector3;

        public unproject(camera : THREE.Camera) : Vector3;

        public transformDirection(m : THREE.Matrix4) : Vector3;

        public divide(v : Vector3) : Vector3;

        public min(v : Vector3) : Vector3;

        public max(v : Vector3) : Vector3;

        public clamp(min : Vector3, max : Vector3) : Vector3;

        public clampScalar(min : number, max : number) : Vector3;

        public clampLength(min : number, max : number) : Vector3;

        public floor() : Vector3;

        public ceil() : Vector3;

        public round() : Vector3;

        public roundToZero() : Vector3;

        /**
         * Computes Manhattan length of this vector.
         * http://en.wikipedia.org/wiki/Taxicab_geometry
         * 
         * @deprecated Use {@link Vector3#manhattanLength} instead.
         * @return {number}
         */
        public lengthManhattan() : number;

        /**
         * Computes the Manhattan length of this vector.
         * 
         * @return {number} {number}
         * 
         * @see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
         */
        public manhattanLength() : number;

        /**
         * Computes the Manhattan length (distance) from this vector to the given vector v
         * 
         * @param {Vector3} v
         * 
         * @return {number} {number}
         * 
         * @see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
         * @param {THREE.Vector3} v
         */
        public manhattanDistanceTo(v : Vector3) : number;

        public lerpVectors(v1 : Vector3, v2 : Vector3, alpha : number) : Vector3;

        /**
         * Sets this vector to cross product of itself and v.
         * @param {THREE.Vector3} a
         * @return {THREE.Vector3}
         */
        public cross(a : Vector3) : Vector3;

        /**
         * Sets this vector to cross product of a and b.
         * @param {THREE.Vector3} a
         * @param {THREE.Vector3} b
         * @return {THREE.Vector3}
         */
        public crossVectors(a : Vector3, b : Vector3) : Vector3;

        public projectOnVector(v : Vector3) : Vector3;

        public projectOnPlane(planeNormal : Vector3) : Vector3;

        public reflect(vector : Vector3) : Vector3;

        public angleTo(v : Vector3) : number;

        /**
         * @deprecated Use {@link Vector3#manhattanDistanceTo} instead.
         * @param {THREE.Vector3} v
         * @return {number}
         */
        public distanceToManhattan(v : Vector3) : number;

        public setFromSpherical(s : THREE.Spherical) : Vector3;

        public setFromMatrixPosition(m : THREE.Matrix4) : Vector3;

        public setFromMatrixScale(m : THREE.Matrix4) : Vector3;

        public setFromMatrixColumn(matrix : THREE.Matrix4, index : number) : Vector3;

        public fromArray(xyz : number[], offset : number) : Vector3;

        public toArray(xyz : number[], offset : number) : number[];

        public fromBufferAttribute(attribute : THREE.BufferAttribute, index : number, offset : number) : Vector3;

        /**
         * @deprecated Use {@link Vector3#setFromMatrixPosition} instead.
         * @param {THREE.Matrix4} m
         * @return {THREE.Vector3}
         */
        public getPositionFromMatrix(m : THREE.Matrix4) : Vector3;

        /**
         * @deprecated Use {@link Vector3#setFromMatrixScale} instead.
         * @param {THREE.Matrix4} m
         * @return {THREE.Vector3}
         */
        public getScaleFromMatrix(m : THREE.Matrix4) : Vector3;

        /**
         * @deprecated Use {@link Vector3#setFromMatrixColumn} instead.
         * @param {number} index
         * @param {THREE.Matrix4} matrix
         * @return {THREE.Vector3}
         */
        public getColumnFromMatrix(index : number, matrix : THREE.Matrix4) : Vector3;

        public constructor(x : number, y : number);

        public constructor(x : number);

        public constructor();

        public fromArray(xyz : number[]) : Vector3;

        public toArray(xyz : number[]) : number[];

        public toArray() : number[];

        public fromBufferAttribute(attribute : THREE.BufferAttribute, index : number) : Vector3;
    }
}
declare namespace THREE {
    /**
     * 4D vector.
     * 
     * ( class Vector4 implements Vector<Vector4> )
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} w
     * @class
     * @extends *
     */
    export class Vector4 implements THREE.Vector {
        public constructor(x : number, y : number, z : number, w : number);

        public x : number;

        public y : number;

        public z : number;

        public w : number;

        /**
         * Sets value of this vector.
         * @param {number} x
         * @param {number} y
         * @param {number} z
         * @param {number} w
         * @return {THREE.Vector4}
         */
        public set(x : number, y : number, z : number, w : number) : Vector4;

        /**
         * Sets all values of this vector.
         * @param {number} scalar
         * @return {THREE.Vector4}
         */
        public setScalar(scalar : number) : Vector4;

        /**
         * Sets X component of this vector.
         * @param {number} x
         * @return {THREE.Vector4}
         */
        public setX(x : number) : Vector4;

        /**
         * Sets Y component of this vector.
         * @param {number} y
         * @return {THREE.Vector4}
         */
        public setY(y : number) : Vector4;

        /**
         * Sets Z component of this vector.
         * @param {number} z
         * @return {THREE.Vector4}
         */
        public setZ(z : number) : Vector4;

        /**
         * Sets w component of this vector.
         * @param {number} w
         * @return {THREE.Vector4}
         */
        public setW(w : number) : Vector4;

        public addScalar(s : number) : Vector4;

        public addScaledVector(v : Vector4, s : number) : Vector4;

        public subScalar(s : number) : Vector4;

        public applyMatrix4(m : THREE.Matrix4) : Vector4;

        /**
         * http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm
         * @param {THREE.Quaternion} q is assumed to be normalized
         * @return {THREE.Vector4}
         */
        public setAxisAngleFromQuaternion(q : THREE.Quaternion) : Vector4;

        /**
         * http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm
         * @param {THREE.Matrix3} m assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
         * @return {THREE.Vector4}
         */
        public setAxisAngleFromRotationMatrix(m : THREE.Matrix3) : Vector4;

        public min(v : Vector4) : Vector4;

        public max(v : Vector4) : Vector4;

        public clamp(min : Vector4, max : Vector4) : Vector4;

        public clampScalar(min : number, max : number) : Vector4;

        public floor() : Vector4;

        public ceil() : Vector4;

        public round() : Vector4;

        public roundToZero() : Vector4;

        /**
         * @deprecated Use {@link Vector4#manhattanLength} instead.
         * @return {number}
         */
        public lengthManhattan() : number;

        /**
         * Computes the Manhattan length of this vector.
         * 
         * @return {number} {number}
         * 
         * @see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
         */
        public manhattanLength() : number;

        public lerpVectors(v1 : Vector4, v2 : Vector4, alpha : number) : Vector4;

        public fromArray(xyzw : number[], offset : number) : Vector4;

        public toArray(xyzw : number[], offset : number) : number[];

        public fromBufferAttribute(attribute : THREE.BufferAttribute, index : number, offset : number) : Vector4;

        public constructor(x : number, y : number, z : number);

        public constructor(x : number, y : number);

        public constructor(x : number);

        public constructor();

        public fromArray(xyzw : number[]) : Vector4;

        public toArray(xyzw : number[]) : number[];

        public toArray() : number[];

        public fromBufferAttribute(attribute : THREE.BufferAttribute, index : number) : Vector4;
    }
}
declare namespace THREE {
    export class VectorKeyframeTrack extends THREE.KeyframeTrack {
        public constructor(name : string, times : any[], values : any[], interpolation : THREE.InterpolationModes);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated use {@link Vector3} instead.
     * @class
     * @extends THREE.Vector3
     */
    export class Vertex extends THREE.Vector3 {    }
}
declare namespace THREE {
    export class VertexNormalsHelper extends THREE.LineSegments {
        public constructor(object : THREE.Object3D, size : number, hex : number, linewidth : number);

        public object : THREE.Object3D;

        public size : number;

        public update(object : THREE.Object3D);

        public constructor(object : THREE.Object3D, size : number, hex : number);

        public constructor(object : THREE.Object3D, size : number);

        public constructor(object : THREE.Object3D);

        public update();

        constructor();
    }
}
declare namespace THREE {
    export class VideoTexture extends THREE.Texture {
        public constructor(video : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType, anisotropy : number);

        public constructor(video : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat, type : THREE.TextureDataType);

        public constructor(video : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter, format : THREE.PixelFormat);

        public constructor(video : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter, minFilter : THREE.TextureFilter);

        public constructor(video : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping, magFilter : THREE.TextureFilter);

        public constructor(video : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping, wrapT : THREE.Wrapping);

        public constructor(video : HTMLVideoElement, mapping : THREE.Mapping, wrapS : THREE.Wrapping);

        public constructor(video : HTMLVideoElement, mapping : THREE.Mapping);

        public constructor(video : HTMLVideoElement);

        constructor();
    }
}
declare namespace THREE {
    export class VRControls {
        public constructor(camera : THREE.Camera, callback : (p1: string) => void);

        /**
         * Update VR Instance Tracking
         */
        public update();

        public zeroSensor();

        public scale : number;

        public constructor(camera : THREE.Camera);

        constructor();
    }
}
declare namespace THREE {
    export class VREffect {
        public constructor(renderer : THREE.Renderer, callback : (p1: string) => void);

        public render(scene : THREE.Scene, camera : THREE.Camera);

        public setSize(width : number, height : number);

        public setFullScreen(flag : boolean);

        public startFullscreen();

        public FovToNDCScaleOffset(fov : THREE.VRFov) : THREE.VREffectOffset;

        public FovPortToProjection(fov : THREE.VRFov, rightHanded : boolean, zNear : number, zFar : number) : THREE.Matrix4;

        public FovToProjection(fov : THREE.VRFov, rightHanded : boolean, zNear : number, zFar : number) : THREE.Matrix4;

        public constructor(renderer : THREE.Renderer);

        constructor();
    }
}
declare namespace THREE {
    export interface VREffectOffset {
        scale : number;

        offset : number;
    }
}
declare namespace THREE {
    export interface VRFov {
        leftTan : number;

        rightTan : number;

        upTan : number;

        downTan : number;
    }
}
declare namespace THREE {
    export class WebGLBufferRenderer {
        public constructor(_gl : WebGLRenderingContext, extensions : any, _infoRender : any);

        public setMode(value : any);

        public render(start : any, count : number);

        public renderInstances(geometry : any);

        constructor();
    }
}
declare namespace THREE {
    export class WebGLCapabilities {
        public constructor(gl : WebGLRenderingContext, extensions : any, parameters : THREE.WebGLCapabilitiesParameters);

        public precision : any;

        public logarithmicDepthBuffer : any;

        public maxTextures : any;

        public maxVertexTextures : any;

        public maxTextureSize : any;

        public maxCubemapSize : any;

        public maxAttributes : any;

        public maxVertexUniforms : any;

        public maxVaryings : any;

        public maxFragmentUniforms : any;

        public vertexTextures : any;

        public floatFragmentTextures : any;

        public floatVertexTextures : any;

        public getMaxAnisotropy() : number;

        public getMaxPrecision(precision : string) : string;

        constructor();
    }
}
declare namespace THREE {
    export interface WebGLCapabilitiesParameters {
        precision? : any;

        logarithmicDepthBuffer? : any;
    }
}
declare namespace THREE {
    export class WebGLClipping {
        public uniform : any;

        public numPlanes : number;

        public init(planes : any[], enableLocalClipping : boolean, camera : THREE.Camera) : boolean;

        public beginShadows();

        public endShadows();

        public setState(planes : any[], clipShadows : boolean, camera : THREE.Camera, cache : boolean, fromCache : boolean);
    }
}
declare namespace THREE {
    export class WebGLColorBuffer {
        public constructor(gl : any, state : any);

        public setMask(colorMask : number);

        public setLocked(lock : boolean);

        public setClear(r : number, g : number, b : number, a : number);

        public reset();

        constructor();
    }
}
declare namespace THREE {
    export class WebGLDepthBuffer {
        public constructor(gl : any, state : any);

        public setTest(depthTest : boolean);

        public sertMask(depthMask : number);

        public setFunc(depthFunc : Function);

        public setLocked(lock : boolean);

        public setClear(depth : any);

        public reset();

        constructor();
    }
}
declare namespace THREE {
    export class WebGLExtensions {
        public constructor(gl : WebGLRenderingContext);

        public get(name : string) : any;

        constructor();
    }
}
declare namespace THREE {
    export class WebGLGeometries {
        public constructor(gl : WebGLRenderingContext, extensions : any, _infoRender : any);

        public get(object : any) : any;

        constructor();
    }
}
declare namespace THREE {
    export class WebGLIndexedBufferRenderer {
        public constructor(gl : WebGLRenderingContext, properties : any, info : any);

        public setMode(value : any);

        public setIndex(index : any);

        public render(start : any, count : number);

        public renderInstances(geometry : any, start : any, count : number);

        constructor();
    }
}
declare namespace THREE {
    export class WebGLLights {
        public constructor(gl : WebGLRenderingContext, properties : any, info : any);

        public get(light : any) : any;

        constructor();
    }
}
declare namespace THREE {
    export class WebGLObjects {
        public constructor(gl : WebGLRenderingContext, properties : any, info : any);

        public getAttributeBuffer(attribute : any) : any;

        public getWireframeAttribute(geometry : any) : any;

        public update(object : any);

        constructor();
    }
}
declare namespace THREE {
    export class WebGLPrograms {
        public constructor(renderer : THREE.WebGLRenderer, capabilities : any);

        public programs : any[];

        public getParameters(material : THREE.ShaderMaterial, lights : any, fog : any, nClipPlanes : number, object : any) : any;

        public getProgramCode(material : THREE.ShaderMaterial, parameters : any) : string;

        public acquireProgram(material : THREE.ShaderMaterial, parameters : any, code : string) : WebGLProgram;

        public releaseProgram(program : WebGLProgram);

        constructor();
    }
}
declare namespace THREE {
    export class WebGLProperties {
        public constructor();

        public get(object : any) : any;

        public delete(object : any);

        public clear();
    }
}
declare namespace THREE {
    /**
     * parameters is an optional object with properties defining the renderer's behaviour. The constructor also accepts no parameters at all. In all cases, it will assume sane defaults when parameters are missing.
     * @param {*} parameters
     * @class
     * @extends *
     */
    export class WebGLRenderer implements THREE.Renderer {
        public constructor(parameters : THREE.WebGLRendererParameters);

        /**
         * A Canvas where the renderer draws its output.
         * This is automatically created by the renderer in the constructor (if not provided already); you just need to add it to your page.
         */
        public domElement : HTMLCanvasElement;

        /**
         * The HTML5 Canvas's 'webgl' context obtained from the canvas where the renderer will draw.
         */
        public context : WebGLRenderingContext;

        /**
         * Defines whether the renderer should automatically clear its output before rendering.
         */
        public autoClear : boolean;

        /**
         * If autoClear is true, defines whether the renderer should clear the color buffer. Default is true.
         */
        public autoClearColor : boolean;

        /**
         * If autoClear is true, defines whether the renderer should clear the depth buffer. Default is true.
         */
        public autoClearDepth : boolean;

        /**
         * If autoClear is true, defines whether the renderer should clear the stencil buffer. Default is true.
         */
        public autoClearStencil : boolean;

        /**
         * Defines whether the renderer should sort objects. Default is true.
         */
        public sortObjects : boolean;

        public clippingPlanes : any[];

        public localClippingEnabled : boolean;

        public extensions : THREE.WebGLExtensions;

        /**
         * Default is false.
         */
        public gammaInput : boolean;

        /**
         * Default is false.
         */
        public gammaOutput : boolean;

        public physicallyCorrectLights : boolean;

        public toneMapping : THREE.ToneMapping;

        public toneMappingExposure : number;

        public toneMappingWhitePoint : number;

        /**
         * Default is false.
         */
        public shadowMapDebug : boolean;

        /**
         * Default is 8.
         */
        public maxMorphTargets : number;

        /**
         * Default is 4.
         */
        public maxMorphNormals : number;

        /**
         * An object with a series of statistical information about the graphics board memory and the rendering process. Useful for debugging or just for the sake of curiosity. The object contains the following fields:
         */
        public info : any;

        public shadowMap : THREE.WebGLShadowMap;

        public pixelRation : number;

        public capabilities : THREE.WebGLCapabilities;

        public properties : THREE.WebGLProperties;

        public renderLists : THREE.WebGLRenderLists;

        public state : THREE.WebGLState;

        public allocTextureUnit : any;

        public vr : THREE.WebVRManager;

        /**
         * Return the WebGL context.
         * @return {WebGLRenderingContext}
         */
        public getContext() : WebGLRenderingContext;

        public getContextAttributes() : any;

        public forceContextLoss();

        /**
         * @deprecated Use {@link WebGLCapabilities#getMaxAnisotropy} instead.
         * @return {number}
         */
        public getMaxAnisotropy() : number;

        /**
         * @deprecated Use {@link WebGLCapabilities#precision} instead.
         * @return {string}
         */
        public getPrecision() : string;

        public getPixelRatio() : number;

        public setPixelRatio(value : number);

        public getSize() : any;

        /**
         * Sets the viewport to render from (x, y) to (x + width, y + height).
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         */
        public setViewport(x : number, y : number, width : number, height : number);

        /**
         * Sets the scissor area from (x, y) to (x + width, y + height).
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         */
        public setScissor(x : number, y : number, width : number, height : number);

        /**
         * Enable the scissor test. When this is enabled, only the pixels within the defined scissor area will be affected by further renderer actions.
         * @param {boolean} enable
         */
        public setScissorTest(enable : boolean);

        /**
         * Returns a THREE.Color instance with the current clear color.
         * @return {THREE.Color}
         */
        public getClearColor() : THREE.Color;

        /**
         * Sets the clear color, using color for the color and alpha for the opacity.
         * @param {THREE.Color} color
         * @param {number} alpha
         */
        public setClearColor(color : THREE.Color, alpha : number);

        public setClearColor(color : string, alpha : number);

        public setClearColor(color : number, alpha : number);

        /**
         * Returns a float with the current clear alpha. Ranges from 0 to 1.
         * @return {number}
         */
        public getClearAlpha() : number;

        public setClearAlpha(alpha : number);

        /**
         * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
         * Arguments default to true
         * @param {boolean} color
         * @param {boolean} depth
         * @param {boolean} stencil
         */
        public clear(color : boolean, depth : boolean, stencil : boolean);

        public clearColor();

        public clearDepth();

        public clearStencil();

        public clearTarget(renderTarget : THREE.WebGLRenderTarget, color : boolean, depth : boolean, stencil : boolean);

        /**
         * @deprecated Use {@link WebGLState#reset} instead.
         */
        public resetGLState();

        public dispose();

        /**
         * Tells the shadow map plugin to update using the passed scene and camera parameters.
         * 
         * @param scene an instance of Scene
         * @param camera — an instance of Camera
         * @param {THREE.Object3D} object
         * @param {*} program
         * @param {THREE.Material} material
         */
        public renderBufferImmediate(object : THREE.Object3D, program : any, material : THREE.Material);

        public renderBufferDirect(camera : THREE.Camera, fog : THREE.Fog, material : THREE.Material, geometryGroup : any, object : THREE.Object3D);

        /**
         * Render a scene using a camera.
         * The render is done to the renderTarget (if specified) or to the canvas as usual.
         * If forceClear is true, the canvas will be cleared before rendering, even if the renderer's autoClear property is false.
         * @param {THREE.Scene} scene
         * @param {THREE.Camera} camera
         * @param {*} renderTarget
         * @param {boolean} forceClear
         */
        public render(scene : THREE.Scene, camera : THREE.Camera, renderTarget : THREE.RenderTarget, forceClear : boolean);

        /**
         * Used for setting the gl frontFace, cullFace states in the GPU, thus enabling/disabling face culling when rendering.
         * If cullFace is false, culling will be disabled.
         * @param {THREE.CullFace} cullFace "back", "front", "front_and_back", or false.
         * @param {THREE.FrontFaceDirection} frontFace "ccw" or "cw
         */
        public setFaceCulling(cullFace : THREE.CullFace, frontFace : THREE.FrontFaceDirection);

        /**
         * @deprecated
         * @param {THREE.Texture} texture
         * @param {number} slot
         */
        public setTexture(texture : THREE.Texture, slot : number);

        public setTexture2D(texture : THREE.Texture, slot : number);

        public setTextureCube(texture : THREE.Texture, slot : number);

        public getRenderTarget() : THREE.RenderTarget;

        /**
         * @deprecated Use {@link WebGLRenderer#getRenderTarget} instead.
         * @return {*}
         */
        public getCurrentRenderTarget() : THREE.RenderTarget;

        public setRenderTarget(renderTarget : THREE.RenderTarget);

        public readRenderTargetPixels(renderTarget : THREE.RenderTarget, x : number, y : number, width : number, height : number, buffer : any);

        /**
         * @deprecated
         */
        public gammaFactor : number;

        /**
         * @deprecated Use {@link WebGLShadowMap#enabled} instead.
         */
        public shadowMapEnabled : boolean;

        /**
         * @deprecated Use {@link WebGLShadowMap#type} instead.
         */
        public shadowMapType : THREE.ShadowMapType;

        /**
         * @deprecated Use {@link WebGLShadowMap#cullFace} instead.
         */
        public shadowMapCullFace : THREE.CullFace;

        /**
         * @deprecated Use {@link WebGLExtensions#get} instead.
         * @return {*}
         */
        public supportsFloatTextures() : any;

        /**
         * @deprecated Use {@link WebGLExtensions#get} instead.
         * @return {*}
         */
        public supportsHalfFloatTextures() : any;

        /**
         * @deprecated Use {@link WebGLExtensions#get} instead.
         * @return {*}
         */
        public supportsStandardDerivatives() : any;

        /**
         * @deprecated Use {@link WebGLExtensions#get} instead.
         * @return {*}
         */
        public supportsCompressedTextureS3TC() : any;

        /**
         * @deprecated Use {@link WebGLExtensions#get} instead.
         * @return {*}
         */
        public supportsCompressedTexturePVRTC() : any;

        /**
         * @deprecated Use {@link WebGLExtensions#get} instead.
         * @return {*}
         */
        public supportsBlendMinMax() : any;

        /**
         * @deprecated Use {@link WebGLCapabilities#vertexTextures} instead.
         * @return {*}
         */
        public supportsVertexTextures() : any;

        /**
         * @deprecated Use {@link WebGLExtensions#get} instead.
         * @return {*}
         */
        public supportsInstancedArrays() : any;

        /**
         * @deprecated Use {@link WebGLRenderer#setScissorTest} instead.
         * @param {*} Boolean
         * @return {*}
         */
        public enableScissorTest(Boolean : any) : any;

        public constructor();

        /**
         * Sets the viewport to render from (x, y) to (x + width, y + height).
         * @param {number} x
         * @param {number} y
         * @param {number} width
         */
        public setViewport(x : number, y : number, width : number);

        /**
         * Sets the viewport to render from (x, y) to (x + width, y + height).
         * @param {number} x
         * @param {number} y
         */
        public setViewport(x : number, y : number);

        /**
         * Sets the viewport to render from (x, y) to (x + width, y + height).
         * @param {number} x
         */
        public setViewport(x : number);

        /**
         * Sets the viewport to render from (x, y) to (x + width, y + height).
         */
        public setViewport();

        /**
         * Sets the clear color, using color for the color and alpha for the opacity.
         * @param {THREE.Color} color
         */
        public setClearColor(color : THREE.Color);

        public setClearColor(color : string);

        public setClearColor(color : number);

        /**
         * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
         * Arguments default to true
         * @param {boolean} color
         * @param {boolean} depth
         */
        public clear(color : boolean, depth : boolean);

        /**
         * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
         * Arguments default to true
         * @param {boolean} color
         */
        public clear(color : boolean);

        /**
         * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
         * Arguments default to true
         */
        public clear();

        /**
         * Render a scene using a camera.
         * The render is done to the renderTarget (if specified) or to the canvas as usual.
         * If forceClear is true, the canvas will be cleared before rendering, even if the renderer's autoClear property is false.
         * @param {THREE.Scene} scene
         * @param {THREE.Camera} camera
         * @param {*} renderTarget
         */
        public render(scene : THREE.Scene, camera : THREE.Camera, renderTarget : THREE.RenderTarget);

        /**
         * Used for setting the gl frontFace, cullFace states in the GPU, thus enabling/disabling face culling when rendering.
         * If cullFace is false, culling will be disabled.
         * @param {THREE.CullFace} cullFace "back", "front", "front_and_back", or false.
         * @param frontFace "ccw" or "cw
         */
        public setFaceCulling(cullFace : THREE.CullFace);

        /**
         * Used for setting the gl frontFace, cullFace states in the GPU, thus enabling/disabling face culling when rendering.
         * If cullFace is false, culling will be disabled.
         * @param cullFace "back", "front", "front_and_back", or false.
         * @param frontFace "ccw" or "cw
         */
        public setFaceCulling();
    }
}
declare namespace THREE {
    export interface WebGLRendererParameters {
        /**
         * A Canvas where the renderer draws its output.
         */
        canvas? : HTMLCanvasElement;

        /**
         * shader precision. Can be "highp", "mediump" or "lowp".
         */
        precision? : string;

        /**
         * default is true.
         */
        alpha? : boolean;

        /**
         * default is true.
         */
        premultipliedAlpha? : boolean;

        /**
         * default is false.
         */
        antialias? : boolean;

        /**
         * default is true.
         */
        stencil? : boolean;

        /**
         * default is false.
         */
        preserveDrawingBuffer? : boolean;

        /**
         * default is 0x000000.
         */
        clearColor? : number;

        /**
         * default is 0.
         */
        clearAlpha? : number;

        devicePixelRatio? : number;

        /**
         * default is false.
         */
        logarithmicDepthBuffer? : boolean;
    }
}
declare namespace THREE {
    export class WebGLRenderList {
        public opaque : Array<THREE.RenderItem>;

        public transparent : Array<any>;

        public init();

        public push(object : THREE.Object3D, geometry : THREE.Geometry, material : THREE.Material, z : number, group : THREE.Group);

        public sort();

        public push(object : THREE.Object3D, geometry : THREE.BufferGeometry, material : THREE.Material, z : number, group : THREE.Group);
    }
}
declare namespace THREE {
    export class WebGLRenderLists {
        public dispose();

        /**
         * 
         * returns {<String> : <WebGLRenderList>}
         * @param {THREE.Scene} scene
         * @param {THREE.Camera} camera
         * @return {THREE.WebGLRenderList}
         */
        public get(scene : THREE.Scene, camera : THREE.Camera) : THREE.WebGLRenderList;
    }
}
declare namespace THREE {
    export class WebGLRenderTarget extends THREE.EventDispatcher {
        public constructor(width : number, height : number, options : THREE.WebGLRenderTargetOptions);

        public uuid : string;

        public width : number;

        public height : number;

        public scissor : THREE.Vector4;

        public scissorTest : boolean;

        public viewport : THREE.Vector4;

        public texture : THREE.Texture;

        public depthBuffer : boolean;

        public stencilBuffer : boolean;

        public depthTexture : THREE.Texture;

        /**
         * @deprecated Use {@link Texture#wrapS} instead.
         */
        public wrapS : any;

        /**
         * @deprecated Use {@link Texture#wrapT} instead.
         */
        public wrapT : any;

        /**
         * @deprecated Use {@link Texture#magFilter} instead.
         */
        public magFilter : any;

        /**
         * @deprecated Use {@link Texture#minFilter} instead.
         */
        public minFilter : any;

        /**
         * @deprecated Use {@link Texture#anisotropy} instead.
         */
        public anisotropy : any;

        /**
         * @deprecated Use {@link Texture#offset} instead.
         */
        public offset : any;

        /**
         * @deprecated Use {@link Texture#repeat} instead.
         */
        public repeat : any;

        /**
         * @deprecated Use {@link Texture#format} instead.
         */
        public format : any;

        /**
         * @deprecated Use {@link Texture#type} instead.
         */
        public type : any;

        /**
         * @deprecated Use {@link Texture#generateMipmaps} instead.
         */
        public generateMipmaps : any;

        public setSize(width : number, height : number);

        public clone() : WebGLRenderTarget;

        public copy(source : WebGLRenderTarget) : WebGLRenderTarget;

        public dispose();

        public constructor(width : number, height : number);

        constructor();
    }
}
declare namespace THREE {
    export class WebGLRenderTargetCube extends THREE.WebGLRenderTarget {
        public constructor(width : number, height : number, options : THREE.WebGLRenderTargetOptions);

        public activeCubeFace : number;

        public activeMipMapLevel : number;

        public constructor(width : number, height : number);

        constructor();
    }
}
declare namespace THREE {
    export interface WebGLRenderTargetOptions {
        wrapS? : THREE.Wrapping;

        wrapT? : THREE.Wrapping;

        magFilter? : THREE.TextureFilter;

        minFilter? : THREE.TextureFilter;

        format? : number;

        type? : THREE.TextureDataType;

        anisotropy? : number;

        depthBuffer? : boolean;

        stencilBuffer? : boolean;
    }
}
declare namespace THREE {
    export class WebGLShadowMap {
        public constructor(_renderer : THREE.Renderer, _lights : any[], _objects : any[], capabilities : any);

        public enabled : boolean;

        public autoUpdate : boolean;

        public needsUpdate : boolean;

        public type : THREE.ShadowMapType;

        public renderReverseSided : boolean;

        public renderSingleSided : boolean;

        public render(scene : THREE.Scene, camera : THREE.Camera);

        /**
         * @deprecated Use {@link WebGLShadowMap#renderReverseSided} instead.
         */
        public cullFace : any;

        constructor();
    }
}
declare namespace THREE {
    export class WebGLState {
        public constructor(gl : any, extensions : any, paramThreeToGL : Function);

        public buffers : any;

        public init();

        public initAttributes();

        public enableAttribute(attribute : string);

        public enableAttributeAndDivisor(attribute : string, meshPerAttribute : any, extension : any);

        public disableUnusedAttributes();

        public enable(id : string);

        public disable(id : string);

        public getCompressedTextureFormats() : any[];

        public setBlending(blending : number, blendEquation : number, blendSrc : number, blendDst : number, blendEquationAlpha : number, blendSrcAlpha : number, blendDstAlpha : number);

        public setColorWrite(colorWrite : number);

        public setDepthTest(depthTest : number);

        public setDepthWrite(depthWrite : number);

        public setDepthFunc(depthFunc : Function);

        public setStencilTest(stencilTest : boolean);

        public setStencilWrite(stencilWrite : any);

        public setStencilFunc(stencilFunc : Function, stencilRef : any, stencilMask : number);

        public setStencilOp(stencilFail : any, stencilZFail : any, stencilZPass : any);

        public setFlipSided(flipSided : number);

        public setCullFace(cullFace : THREE.CullFace);

        public setLineWidth(width : number);

        public setPolygonOffset(polygonoffset : number, factor : number, units : number);

        public setScissorTest(scissorTest : boolean);

        public getScissorTest() : boolean;

        public activeTexture(webglSlot : any);

        public bindTexture(webglType : any, webglTexture : any);

        public compressedTexImage2D();

        public texImage2D();

        public clearColor(r : number, g : number, b : number, a : number);

        public clearDepth(depth : number);

        public clearStencil(stencil : any);

        public scissor(scissor : any);

        public viewport(viewport : any);

        public reset();

        constructor();
    }
}
declare namespace THREE {
    export class WebGLStencilBuffer {
        public constructor(gl : any, state : any);

        public setTest(stencilTest : boolean);

        public sertMask(stencilMask : number);

        public setFunc(stencilFunc : Function, stencilRef : any, stencilMask : number);

        public setOp(stencilFail : any, stencilZFail : any, stencilZPass : any);

        public setLocked(lock : boolean);

        public setClear(stencil : any);

        public reset();

        constructor();
    }
}
declare namespace THREE {
    export class WebGLTextures {
        public constructor(gl : any, extensions : any, state : any, properties : any, capabilities : any, paramThreeToGL : Function, info : any);

        public setTexture2D(texture : any, slot : number);

        public setTextureCube(texture : any, slot : number);

        public setTextureCubeDynamic(texture : any, slot : number);

        public setupRenderTarget(renderTarget : any);

        public updateRenderTargetMipmap(renderTarget : any);

        constructor();
    }
}
declare namespace THREE {
    export class WebGLUniforms {
        public constructor(gl : any, program : WebGLProgram, renderer : THREE.WebGLRenderer);

        public renderer : THREE.WebGLRenderer;

        public setValue(gl : any, value : any, renderer : any);

        public set(gl : any, object : any, name : string);

        public setOptional(gl : any, object : any, name : string);

        public static upload(gl : any, seq : any, values : any[], renderer : any);

        public static seqWithValue(seq : any, values : any[]) : any[];

        public static splitDynamic(seq : any, values : any[]) : any[];

        public static evalDynamic(seq : any, values : any[], object : any, camera : any) : any[];

        public setValue(gl : any, value : any);

        constructor();
    }
}
declare namespace THREE {
    export interface WebVRManager {
        enabled : boolean;

        setPoseTarget(object : THREE.Object3D);

        getCamera(camera : THREE.PerspectiveCamera) : ((THREE.PerspectiveCamera)|(THREE.ArrayCamera));

        submitFrame();

        dispose();
    }
}
declare namespace THREE {
    export class WireframeGeometry extends THREE.BufferGeometry {
        public constructor(geometry : THREE.Geometry);

        public constructor(geometry : THREE.BufferGeometry);

        constructor();
    }
}
declare namespace THREE {
    /**
     * @deprecated Use {@link WireframeGeometry} instead.
     * @param {THREE.Object3D} object
     * @param {number} hex
     * @class
     * @extends THREE.LineSegments
     */
    export class WireframeHelper extends THREE.LineSegments {
        public constructor(object : THREE.Object3D, hex : number);

        public constructor(object : THREE.Object3D);

        constructor();
    }
}
declare namespace THREE {
    export enum Wrapping {
      
    }
}
declare class WebGLProgram {
    public constructor(renderer : THREE.WebGLRenderer, code : string, material : THREE.ShaderMaterial, parameters : THREE.WebGLRendererParameters);

    public id : number;

    public code : string;

    public usedTimes : number;

    public program : any;

    public vertexShader : WebGLShader;

    public fragmentShader : WebGLShader;

    /**
     * @deprecated Use {@link WebGLProgram#getUniforms} instead.
     */
    public uniforms : any;

    /**
     * @deprecated Use {@link WebGLProgram#getAttributes} instead.
     */
    public attributes : any;

    public getUniforms() : THREE.WebGLUniforms;

    public getAttributes() : any;

    public destroy();

    constructor();
}

declare class WebGLShader {
    public constructor(gl : any, type : string, string : string);

    constructor();
}



declare module "three" {
    export = THREE;
}
