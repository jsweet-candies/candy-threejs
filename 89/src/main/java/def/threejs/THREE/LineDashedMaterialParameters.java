package def.threejs.THREE;
import jsweet.util.union.Union3;
@jsweet.lang.Interface
public abstract class LineDashedMaterialParameters extends MaterialParameters {
    @jsweet.lang.Optional
    public Union3<Color,String,Double> color;
    @jsweet.lang.Optional
    public double linewidth;
    @jsweet.lang.Optional
    public double scale;
    @jsweet.lang.Optional
    public double dashSize;
    @jsweet.lang.Optional
    public double gapSize;
}

