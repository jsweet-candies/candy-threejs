package def.threejs.three;
public class MeshStandardMaterial extends Material {
    public MeshStandardMaterial(MeshStandardMaterialParameters parameters){}
    public Color color;
    public double roughness;
    public double metalness;
    public Texture map;
    public Texture lighhtMap;
    public double lightMapIntensity;
    public Texture aoMap;
    public double aoMapIntensity;
    public Color emissive;
    public double emissiveIntensity;
    public Texture emissiveMap;
    public Texture bumpMap;
    public double bumpScale;
    public Texture normalMap;
    public double normalScale;
    public Texture displacementMap;
    public double displacementScale;
    public double displacementBias;
    public Texture roughnessMap;
    public Texture metalMap;
    public Texture alphaMap;
    public Texture envMap;
    public double envMapIntensity;
    public double refractionRatio;
    public Shading shading;
    public Blending blending;
    public Boolean wireframe;
    public double wireframeLinewidth;
    public Colors vertexColors;
    public Boolean skinning;
    public Boolean morphTargets;
    public Boolean morphNormals;
    public Boolean fog;
    native public void setValues(MeshStandardMaterialParameters parameters);
    @jsweet.lang.Name("clone")
    native public MeshStandardMaterial Clone();
    native public MeshStandardMaterial copy(MeshStandardMaterial source);
    public MeshStandardMaterial(){}
}

