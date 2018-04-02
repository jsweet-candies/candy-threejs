package def.threejs.THREE;
import jsweet.util.union.Union3;
@jsweet.lang.Interface
public abstract class MeshStandardMaterialParameters extends MaterialParameters {
    @jsweet.lang.Optional
    public Union3<Color,String,Double> color;
    @jsweet.lang.Optional
    public double roughness;
    @jsweet.lang.Optional
    public double metalness;
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
    public Texture roughnessMap;
    @jsweet.lang.Optional
    public Texture metalnessMap;
    @jsweet.lang.Optional
    public Texture alphaMap;
    @jsweet.lang.Optional
    public Texture envMap;
    @jsweet.lang.Optional
    public double envMapIntensity;
    @jsweet.lang.Optional
    public double refractionRatio;
    @jsweet.lang.Optional
    public Boolean wireframe;
    @jsweet.lang.Optional
    public double wireframeLinewidth;
    @jsweet.lang.Optional
    public Boolean skinning;
    @jsweet.lang.Optional
    public Boolean morphTargets;
    @jsweet.lang.Optional
    public Boolean morphNormals;
}

