package def.threejs.three;
import def.dom.HTMLCanvasElement;
@jsweet.lang.Interface
public abstract class WebGLRendererParameters extends def.js.Object {
    /**
         * A Canvas where the renderer draws its output.
         */
    @jsweet.lang.Optional
    public HTMLCanvasElement canvas;
    /**
         *  shader precision. Can be "highp", "mediump" or "lowp".
         */
    @jsweet.lang.Optional
    public String precision;
    /**
         * default is true.
         */
    @jsweet.lang.Optional
    public Boolean alpha;
    /**
         * default is true.
         */
    @jsweet.lang.Optional
    public Boolean premultipliedAlpha;
    /**
         * default is false.
         */
    @jsweet.lang.Optional
    public Boolean antialias;
    /**
         * default is true.
         */
    @jsweet.lang.Optional
    public Boolean stencil;
    /**
         * default is false.
         */
    @jsweet.lang.Optional
    public Boolean preserveDrawingBuffer;
    /**
         * default is 0x000000.
         */
    @jsweet.lang.Optional
    public double clearColor;
    /**
         * default is 0.
         */
    @jsweet.lang.Optional
    public double clearAlpha;
    @jsweet.lang.Optional
    public double devicePixelRatio;
    /**
         * default is false.
         */
    @jsweet.lang.Optional
    public Boolean logarithmicDepthBuffer;
}

