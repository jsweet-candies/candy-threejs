package def.threejs.three;
public class SpriteMaterial extends Material {
    public SpriteMaterial(SpriteMaterialParameters parameters){}
    public Color color;
    public Texture map;
    public double rotation;
    public Boolean fog;
    native public void setValues(SpriteMaterialParameters parameters);
    @jsweet.lang.Name("clone")
    native public SpriteMaterial Clone();
    native public SpriteMaterial copy(SpriteMaterial source);
    public SpriteMaterial(){}
}

