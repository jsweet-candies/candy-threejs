package def.threejs.three;
@jsweet.lang.Interface
public abstract class LineBasicMaterialParameters extends MaterialParameters {
    @jsweet.lang.Optional
    public jsweet.util.union.Union<Double,String> color;
    @jsweet.lang.Optional
    public double linewidth;
    @jsweet.lang.Optional
    public String linecap;
    @jsweet.lang.Optional
    public String linejoin;
    @jsweet.lang.Optional
    public Blending blending;
    @jsweet.lang.Optional
    public Colors vertexColors;
    @jsweet.lang.Optional
    public Boolean fog;
}

