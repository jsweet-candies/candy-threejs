package def.threejs.three;
@jsweet.lang.Interface
public abstract class LineDashedMaterialParameters extends MaterialParameters {
    @jsweet.lang.Optional
    public jsweet.util.union.Union<Double,String> color;
    @jsweet.lang.Optional
    public double linewidth;
    @jsweet.lang.Optional
    public double scale;
    @jsweet.lang.Optional
    public double dashSize;
    @jsweet.lang.Optional
    public double gapSize;
    @jsweet.lang.Optional
    public Blending blending;
    @jsweet.lang.Optional
    public Colors vertexColors;
    @jsweet.lang.Optional
    public Boolean fog;
}

