package def.threejs.THREE;
import jsweet.util.union.Union3;
/**
 * parameters is an object with one or more properties defining the material's appearance.
 */
@jsweet.lang.Interface
public abstract class MeshBasicMaterialParameters extends MaterialParameters {
    @jsweet.lang.Optional
    public Union3<Color,String,Double> color;
    @jsweet.lang.Optional
    public double opacity;
    @jsweet.lang.Optional
    public Texture map;
    @jsweet.lang.Optional
    public Texture aoMap;
    @jsweet.lang.Optional
    public double aoMapIntensity;
    @jsweet.lang.Optional
    public Texture specularMap;
    @jsweet.lang.Optional
    public Texture alphaMap;
    @jsweet.lang.Optional
    public Texture envMap;
    @jsweet.lang.Optional
    public Combine combine;
    @jsweet.lang.Optional
    public double reflectivity;
    @jsweet.lang.Optional
    public double refractionRatio;
    @jsweet.lang.Optional
    public Boolean wireframe;
    @jsweet.lang.Optional
    public double wireframeLinewidth;
    @jsweet.lang.Optional
    public String wireframeLinecap;
    @jsweet.lang.Optional
    public String wireframeLinejoin;
    @jsweet.lang.Optional
    public Boolean skinning;
    @jsweet.lang.Optional
    public Boolean morphTargets;
}

