package def.threejs.THREE;
import jsweet.util.union.Union3;
@jsweet.lang.Interface
public abstract class MeshPhongMaterialParameters extends MaterialParameters {
    /** geometry color in hexadecimal. Default is 0xffffff. */
    @jsweet.lang.Optional
    public Union3<Color,String,Double> color;
    @jsweet.lang.Optional
    public Union3<Color,String,Double> specular;
    @jsweet.lang.Optional
    public double shininess;
    @jsweet.lang.Optional
    public double opacity;
    @jsweet.lang.Optional
    public Texture map;
    @jsweet.lang.Optional
    public Texture lightMap;
    @jsweet.lang.Optional
    public double lightMapIntensity;
    @jsweet.lang.Optional
    public Texture aoMap;
    @jsweet.lang.Optional
    public double aoMapIntensity;
    @jsweet.lang.Optional
    public Union3<Color,String,Double> emissive;
    @jsweet.lang.Optional
    public double emissiveIntensity;
    @jsweet.lang.Optional
    public Texture emissiveMap;
    @jsweet.lang.Optional
    public Texture bumpMap;
    @jsweet.lang.Optional
    public double bumpScale;
    @jsweet.lang.Optional
    public Texture normalMap;
    @jsweet.lang.Optional
    public Vector2 normalScale;
    @jsweet.lang.Optional
    public Texture displacementMap;
    @jsweet.lang.Optional
    public double displacementScale;
    @jsweet.lang.Optional
    public double displacementBias;
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
    @jsweet.lang.Optional
    public Boolean morphNormals;
}

