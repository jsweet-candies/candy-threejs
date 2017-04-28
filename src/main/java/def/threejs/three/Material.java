package def.threejs.three;
/**
     * Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
     */
public class Material extends def.js.Object {
    public Material(){}
    /**
         * Unique number of this material instance.
         */
    public double id;
    public String uuid;
    /**
         * Material name. Default is an empty string.
         */
    public String name;
    public String type;
    /**
         * Defines which of the face sides will be rendered - front, back or both.
         * Default is THREE.FrontSide. Other options are THREE.BackSide and THREE.DoubleSide.
         */
    public Side side;
    /**
         * Opacity. Default is 1.
         */
    public double opacity;
    /**
         * Defines whether this material is transparent. This has an effect on rendering, as transparent objects need an special treatment, and are rendered after the opaque (i.e. non transparent) objects. For a working example of this behaviour, check the {@link WebGLRenderer} code.
         * Default is false.
         */
    public Boolean transparent;
    /**
         * Which blending to use when displaying objects with this material. Default is {@link NormalBlending}.
         */
    public Blending blending;
    /**
         * Blending source. It's one of the blending mode constants defined in Three.js. Default is {@link SrcAlphaFactor}.
         */
    public BlendingDstFactor blendSrc;
    /**
         * Blending destination. It's one of the blending mode constants defined in Three.js. Default is {@link OneMinusSrcAlphaFactor}.
         */
    public BlendingSrcFactor blendDst;
    /**
         * Blending equation to use when applying blending. It's one of the constants defined in Three.js. Default is AddEquation.
         */
    public BlendingEquation blendEquation;
    public double blendSrcAlpha;
    public double blendDstAlpha;
    public double blendEquationAlpha;
    public DepthModes depthFunc;
    /**
         * Whether to have depth test enabled when rendering this material. Default is true.
         */
    public Boolean depthTest;
    /**
         * Whether rendering this material has any effect on the depth buffer. Default is true.
         * When drawing 2D overlays it can be useful to disable the depth writing in order to layer several things together without creating z-index artifacts.
         */
    public Boolean depthWrite;
    public Boolean colorWrite;
    public Object precision;
    /**
         * Whether to use polygon offset. Default is false. This corresponds to the POLYGON_OFFSET_FILL WebGL feature.
         */
    public Boolean polygonOffset;
    /**
         * Sets the polygon offset factor. Default is 0.
         */
    public double polygonOffsetFactor;
    /**
         * Sets the polygon offset units. Default is 0.
         */
    public double polygonOffsetUnits;
    /**
         * Sets the alpha value to be used when running an alpha test. Default is 0.
         */
    public double alphaTest;
    public Boolean premultipliedAlpha;
    /**
         * Enables/disables overdraw. If greater than zero, polygons are drawn slightly bigger in order to fix antialiasing gaps when using the CanvasRenderer. Default is 0.
         */
    public double overdraw;
    /**
         * Defines whether this material is visible. Default is true.
         */
    public Boolean visible;
    /**
         * Specifies that the material needs to be updated, WebGL wise. Set it to true if you made changes that need to be reflected in WebGL.
         * This property is automatically set to true when instancing a new material.
         */
    public Boolean needsUpdate;
    public Color warpRGB;
    native public void setValues(MaterialParameters parameters);
    native public Object toJSON(Object meta);
    @jsweet.lang.Name("clone")
    native public Material Clone();
    native public Material copy(Material source);
    native public void update();
    native public void dispose();
    native public void addEventListener(String type, java.util.function.Consumer<Event> listener);
    native public void hasEventListener(String type, java.util.function.Consumer<Event> listener);
    native public void removeEventListener(String type, java.util.function.Consumer<Event> listener);
    native public void dispatchEvent(EventData event);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class EventData extends def.js.Object {
        public String type;
        native public java.lang.Object $get(String attachment);
    }
    native public Object toJSON();
}

