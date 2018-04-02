package def.threejs.THREE;
import jsweet.util.union.Union3;
@jsweet.lang.Interface
public abstract class LineBasicMaterialParameters extends MaterialParameters {
    @jsweet.lang.Optional
    public Union3<Color,String,Double> color;
    @jsweet.lang.Optional
    public double linewidth;
    @jsweet.lang.Optional
    public String linecap;
    @jsweet.lang.Optional
    public String linejoin;
}

