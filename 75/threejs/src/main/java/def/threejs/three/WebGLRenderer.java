package def.threejs.three;
import def.dom.WebGLRenderingContext;
import def.dom.HTMLCanvasElement;
/**
     * The WebGL renderer displays your beautifully crafted scenes using WebGL, if your device supports it.
     * This renderer has way better performance than CanvasRenderer.
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGLRenderer.js">src/renderers/WebGLRenderer.js</a>
     */
public class WebGLRenderer extends Renderer {
    /**
         * parameters is an optional object with properties defining the renderer's behaviour. The constructor also accepts no parameters at all. In all cases, it will assume sane defaults when parameters are missing.
         */
    public WebGLRenderer(WebGLRendererParameters parameters){}
    /**
         * A Canvas where the renderer draws its output.
         * This is automatically created by the renderer in the constructor (if not provided already); you just need to add it to your page.
         */
    public HTMLCanvasElement domElement;
    /**
         * The HTML5 Canvas's 'webgl' context obtained from the canvas where the renderer will draw.
         */
    public WebGLRenderingContext context;
    /**
         * Defines whether the renderer should automatically clear its output before rendering.
         */
    public Boolean autoClear;
    /**
         * If autoClear is true, defines whether the renderer should clear the color buffer. Default is true.
         */
    public Boolean autoClearColor;
    /**
         * If autoClear is true, defines whether the renderer should clear the depth buffer. Default is true.
         */
    public Boolean autoClearDepth;
    /**
         * If autoClear is true, defines whether the renderer should clear the stencil buffer. Default is true.
         */
    public Boolean autoClearStencil;
    /**
         * Defines whether the renderer should sort objects. Default is true.
         */
    public Boolean sortObjects;
    public WebGLExtensions extensions;
    public double gammaFactor;
    /**
         * Default is false.
         */
    public Boolean gammaInput;
    /**
         * Default is false.
         */
    public Boolean gammaOutput;
    public Boolean physicallyCorrectLights;
    public ToneMapping toneMapping;
    public double toneMappingExposure;
    public double toneMappingWhitePoint;
    /**
         * Default is false.
         */
    public Boolean shadowMapDebug;
    /**
         * Default is 8.
         */
    public double maxMorphTargets;
    /**
         * Default is 4.
         */
    public double maxMorphNormals;
    /**
         * Default is true.
         */
    public Boolean autoScaleCubemaps;
    /**
         * An object with a series of statistical information about the graphics board memory and the rendering process. Useful for debugging or just for the sake of curiosity. The object contains the following fields:
         */
    public Info info;
    public WebGLShadowMap shadowMap;
    public ShadowMapType shadowMapType;
    public Boolean shadowMapEnabled;
    public CullFace shadowMapCullFace;
    public double pixelRation;
    public WebGLCapabilities capabilities;
    public WebGLProperties properties;
    public WebGLState state;
    /**
         * Return the WebGL context.
         */
    native public WebGLRenderingContext getContext();
    native public Object getContextAttributes();
    native public void forceContextLoss();
    native public double getMaxAnisotropy();
    native public String getPrecision();
    native public double getPixelRatio();
    native public void setPixelRatio(double value);
    native public GetSize getSize();
    /**
         * Resizes the output canvas to (width, height), and also sets the viewport to fit that size, starting in (0, 0).
         */
    native public void setSize(double width, double height, Boolean updateStyle);
    /**
         * Sets the viewport to render from (x, y) to (x + width, y + height).
         */
    native public void setViewport(double x, double y, double width, double height);
    /**
         * Sets the scissor area from (x, y) to (x + width, y + height).
         */
    native public void setScissor(double x, double y, double width, double height);
    /**
         * Enable the scissor test. When this is enabled, only the pixels within the defined scissor area will be affected by further renderer actions.
         */
    native public void setScissorTest(Boolean enable);
    /**
         * Returns a THREE.Color instance with the current clear color.
         */
    native public Color getClearColor();
    /**
         * Sets the clear color, using color for the color and alpha for the opacity.
         */
    native public void setClearColor(Color color, double alpha);
    native public void setClearColor(String color, double alpha);
    native public void setClearColor(double color, double alpha);
    /**
         * Returns a float with the current clear alpha. Ranges from 0 to 1.
         */
    native public double getClearAlpha();
    native public void setClearAlpha(double alpha);
    /**
         * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
         * Arguments default to true
         */
    native public void clear(Boolean color, Boolean depth, Boolean stencil);
    native public void clearColor();
    native public void clearDepth();
    native public void clearStencil();
    native public void clearTarget(WebGLRenderTarget renderTarget, Boolean color, Boolean depth, Boolean stencil);
    native public void resetGLState();
    native public void dispose();
    /**
         * Tells the shadow map plugin to update using the passed scene and camera parameters.
         *
         * @param scene an instance of Scene
         * @param camera — an instance of Camera
         */
    native public void renderBufferImmediate(Object3D object, Object program, Material material);
    native public void renderBufferDirect(Camera camera, Fog fog, Material material, Object geometryGroup, Object3D object);
    /**
         * Render a scene using a camera.
         * The render is done to the renderTarget (if specified) or to the canvas as usual.
         * If forceClear is true, the canvas will be cleared before rendering, even if the renderer's autoClear property is false.
         */
    native public void render(Scene scene, Camera camera, RenderTarget renderTarget, Boolean forceClear);
    /**
         * Used for setting the gl frontFace, cullFace states in the GPU, thus enabling/disabling face culling when rendering.
         * If cullFace is false, culling will be disabled.
         * @param cullFace "back", "front", "front_and_back", or false.
         * @param frontFace "ccw" or "cw
         */
    native public void setFaceCulling(CullFace cullFace, FrontFaceDirection frontFace);
    native public void setTexture(Texture texture, double slot);
    native public RenderTarget getCurrentRenderTarget();
    native public void setRenderTarget(RenderTarget renderTarget);
    native public void readRenderTargetPixels(RenderTarget renderTarget, double x, double y, double width, double height, Object buffer);
    native public Object supportsFloatTextures();
    native public Object supportsHalfFloatTextures();
    native public Object supportsStandardDerivatives();
    native public Object supportsCompressedTextureS3TC();
    native public Object supportsCompressedTexturePVRTC();
    native public Object supportsBlendMinMax();
    native public Object supportsVertexTextures();
    native public Object supportsInstancedArrays();
    native public Object enableScissorTest(Object Boolean);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Info extends def.js.Object {
        public Memory memory;
        public Render render;
        public double programs;
        /** This is an automatically generated object type (see the source definition). */
        @jsweet.lang.ObjectType
        public static class Memory extends def.js.Object {
            public double geometries;
            public double textures;
        }
        /** This is an automatically generated object type (see the source definition). */
        @jsweet.lang.ObjectType
        public static class Render extends def.js.Object {
            public double calls;
            public double vertices;
            public double faces;
            public double points;
        }
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class GetSize extends def.js.Object {
        public double width;
        public double height;
    }
    /**
         * parameters is an optional object with properties defining the renderer's behaviour. The constructor also accepts no parameters at all. In all cases, it will assume sane defaults when parameters are missing.
         */
    public WebGLRenderer(){}
    /**
         * Resizes the output canvas to (width, height), and also sets the viewport to fit that size, starting in (0, 0).
         */
    native public void setSize(double width, double height);
    /**
         * Sets the viewport to render from (x, y) to (x + width, y + height).
         */
    native public void setViewport(double x, double y, double width);
    /**
         * Sets the viewport to render from (x, y) to (x + width, y + height).
         */
    native public void setViewport(double x, double y);
    /**
         * Sets the viewport to render from (x, y) to (x + width, y + height).
         */
    native public void setViewport(double x);
    /**
         * Sets the viewport to render from (x, y) to (x + width, y + height).
         */
    native public void setViewport();
    /**
         * Sets the clear color, using color for the color and alpha for the opacity.
         */
    native public void setClearColor(Color color);
    native public void setClearColor(String color);
    native public void setClearColor(double color);
    /**
         * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
         * Arguments default to true
         */
    native public void clear(Boolean color, Boolean depth);
    /**
         * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
         * Arguments default to true
         */
    native public void clear(Boolean color);
    /**
         * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
         * Arguments default to true
         */
    native public void clear();
    /**
         * Render a scene using a camera.
         * The render is done to the renderTarget (if specified) or to the canvas as usual.
         * If forceClear is true, the canvas will be cleared before rendering, even if the renderer's autoClear property is false.
         */
    native public void render(Scene scene, Camera camera, RenderTarget renderTarget);
    /**
         * Render a scene using a camera.
         * The render is done to the renderTarget (if specified) or to the canvas as usual.
         * If forceClear is true, the canvas will be cleared before rendering, even if the renderer's autoClear property is false.
         */
    native public void render(Scene scene, Camera camera);
    /**
         * Used for setting the gl frontFace, cullFace states in the GPU, thus enabling/disabling face culling when rendering.
         * If cullFace is false, culling will be disabled.
         * @param cullFace "back", "front", "front_and_back", or false.
         * @param frontFace "ccw" or "cw
         */
    native public void setFaceCulling(CullFace cullFace);
    /**
         * Used for setting the gl frontFace, cullFace states in the GPU, thus enabling/disabling face culling when rendering.
         * If cullFace is false, culling will be disabled.
         * @param cullFace "back", "front", "front_and_back", or false.
         * @param frontFace "ccw" or "cw
         */
    native public void setFaceCulling();
}

