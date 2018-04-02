package def.threejs.THREE;
/**
 * Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
 */
public class Material extends EventDispatcher {
    public Material(){}
    /**
     * Sets the alpha value to be used when running an alpha test. Default is 0.
     */
    public double alphaTest;
    /**
     * Blending destination. It's one of the blending mode constants defined in Three.js. Default is {@link OneMinusSrcAlphaFactor}.
     */
    public BlendingDstFactor blendDst;
    /**
     * The tranparency of the .blendDst. Default is null.
     */
    public double blendDstAlpha;
    /**
     * Blending equation to use when applying blending. It's one of the constants defined in Three.js. Default is {@link AddEquation}.
     */
    public BlendingEquation blendEquation;
    /**
     * The tranparency of the .blendEquation. Default is null.
     */
    public double blendEquationAlpha;
    /**
     * Which blending to use when displaying objects with this material. Default is {@link NormalBlending}.
     */
    public Blending blending;
    /**
     * Blending source. It's one of the blending mode constants defined in Three.js. Default is {@link SrcAlphaFactor}.
     */
    public jsweet.util.union.Union<BlendingSrcFactor,BlendingDstFactor> blendSrc;
    /**
     * The tranparency of the .blendSrc. Default is null.
     */
    public double blendSrcAlpha;
    /**
     * Changes the behavior of clipping planes so that only their intersection is clipped, rather than their union. Default is false.
     */
    public Boolean clipIntersection;
    /**
     * User-defined clipping planes specified as THREE.Plane objects in world space. These planes apply to the objects this material is attached to. Points in space whose signed distance to the plane is negative are clipped (not rendered). See the WebGL / clipping /intersection example. Default is null.
     */
    public Object clippingPlanes;
    /**
     * Defines whether to clip shadows according to the clipping planes specified on this material. Default is false.
     */
    public Boolean clipShadows;
    /**
     * Whether to render the material's color. This can be used in conjunction with a mesh's .renderOrder property to create invisible objects that occlude other objects. Default is true.
     */
    public Boolean colorWrite;
    /**
     * Which depth function to use. Default is {@link LessEqualDepth}. See the depth mode constants for all possible values.
     */
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
    /**
     * Whether the material is affected by fog. Default is true.
     */
    public Boolean fog;
    /**
     * Unique number of this material instance.
     */
    public double id;
    /**
     * Used to check whether this or derived classes are materials. Default is true.
     * You should not change this, as it used internally for optimisation.
     */
    public Boolean isMaterial;
    /**
     * Whether the material is affected by lights. Default is true.
     */
    public Boolean lights;
    /**
     * Material name. Default is an empty string.
     */
    public String name;
    /**
     * Specifies that the material needs to be updated, WebGL wise. Set it to true if you made changes that need to be reflected in WebGL.
     * This property is automatically set to true when instancing a new material.
     */
    public Boolean needsUpdate;
    /**
     * Opacity. Default is 1.
     */
    public double opacity;
    /**
     * Enables/disables overdraw. If greater than zero, polygons are drawn slightly bigger in order to fix antialiasing gaps when using the CanvasRenderer. Default is 0.
     */
    public double overdraw;
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
     * Override the renderer's default precision for this material. Can be "highp", "mediump" or "lowp". Defaults is null.
     */
    public Object precision;
    /**
     * Whether to premultiply the alpha (transparency) value. See WebGL / Materials / Transparency for an example of the difference. Default is false.
     */
    public Boolean premultipliedAlpha;
    /**
     * Whether to apply dithering to the color to remove the appearance of banding. Default is false.
     */
    public Boolean dithering;
    /**
     * Define whether the material is rendered with flat shading. Default is false.
     */
    public Boolean flatShading;
    /**
     * Defines which of the face sides will be rendered - front, back or both.
     * Default is THREE.FrontSide. Other options are THREE.BackSide and THREE.DoubleSide.
     */
    public Side side;
    /**
     * Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects.
     * When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
     * Default is false.
     */
    public Boolean transparent;
    /**
     * Value is the string 'Material'. This shouldn't be changed, and can be used to find all objects of this type in a scene.
     */
    public String type;
    /**
     * UUID of this material instance. This gets automatically assigned, so this shouldn't be edited.
     */
    public String uuid;
    /**
     * Defines whether vertex coloring is used. Default is THREE.NoColors. Other options are THREE.VertexColors and THREE.FaceColors.
     */
    public Colors vertexColors;
    /**
     * Defines whether this material is visible. Default is true.
     */
    public Boolean visible;
    /**
     * An object that can be used to store custom data about the Material. It should not hold references to functions as these will not be cloned.
     */
    public Object userData;
    /**
     * Return a new material with the same parameters as this material.
     */
    @jsweet.lang.Name("clone")
    native public Material Clone();
    /**
     * Copy the parameters from the passed material into this material.
     * @param material
     */
    native public Material copy(Material material);
    /**
     * This disposes the material. Textures of a material don't get disposed. These needs to be disposed by {@link Texture}.
     */
    native public void dispose();
    /**
     * Sets the properties based on the values.
     * @param values A container with parameters.
     */
    native public void setValues(MaterialParameters values);
    /**
     * Convert the material to three.js JSON format.
     * @param meta Object containing metadata such as textures or images for the material.
     */
    native public Object toJSON(Object meta);
    /**
     * Call .dispatchEvent ( { type: 'update' }) on the material.
     */
    native public void update();
    /**
     * Convert the material to three.js JSON format.
     * @param meta Object containing metadata such as textures or images for the material.
     */
    native public Object toJSON();
}

