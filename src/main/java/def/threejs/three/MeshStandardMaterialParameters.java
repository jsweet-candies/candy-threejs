package def.threejs.three;
@jsweet.lang.Interface
public abstract class MeshStandardMaterialParameters extends MaterialParameters {
    @jsweet.lang.Optional
    public jsweet.util.union.Union<Double,String> color;
    @jsweet.lang.Optional
    public double roughness;
    @jsweet.lang.Optional
    public double metalness;
    @jsweet.lang.Optional
    public Texture map;
    @jsweet.lang.Optional
    public Texture lighhtMap;
    @jsweet.lang.Optional
    public double lightMapIntensity;
    @jsweet.lang.Optional
    public Texture aoMap;
    @jsweet.lang.Optional
    public double aoMapIntensity;
    @jsweet.lang.Optional
    public Color emissive;
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
    public double normalScale;
    @jsweet.lang.Optional
    public Texture displacementMap;
    @jsweet.lang.Optional
    public double displacementScale;
    @jsweet.lang.Optional
    public double displacementBias;
    @jsweet.lang.Optional
    public Texture roughnessMap;
    @jsweet.lang.Optional
    public Texture metalMap;
    @jsweet.lang.Optional
    public Texture alphaMap;
    @jsweet.lang.Optional
    public Texture envMap;
    @jsweet.lang.Optional
    public double envMapIntensity;
    @jsweet.lang.Optional
    public double refractionRatio;
    @jsweet.lang.Optional
    public Shading shading;
    @jsweet.lang.Optional
    public Blending blending;
    @jsweet.lang.Optional
    public Boolean wireframe;
    @jsweet.lang.Optional
    public double wireframeLinewidth;
    @jsweet.lang.Optional
    public Colors vertexColors;
    @jsweet.lang.Optional
    public Boolean skinning;
    @jsweet.lang.Optional
    public Boolean morphTargets;
    @jsweet.lang.Optional
    public Boolean morphNormals;
    @jsweet.lang.Optional
    public Boolean fog;
}

