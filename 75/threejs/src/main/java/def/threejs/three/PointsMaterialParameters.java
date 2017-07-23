package def.threejs.three;
@jsweet.lang.Interface
public abstract class PointsMaterialParameters extends MaterialParameters {
    @jsweet.lang.Optional
    public jsweet.util.union.Union<Double,String> color;
    @jsweet.lang.Optional
    public Texture map;
    @jsweet.lang.Optional
    public double size;
    @jsweet.lang.Optional
    public Boolean sizeAttenuation;
    @jsweet.lang.Optional
    public Blending blending;
    @jsweet.lang.Optional
    public Colors vertexColors;
    @jsweet.lang.Optional
    public Boolean fog;
}

