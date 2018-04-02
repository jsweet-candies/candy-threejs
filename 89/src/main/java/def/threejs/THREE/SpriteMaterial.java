package def.threejs.THREE;
public class SpriteMaterial extends Material {
    public SpriteMaterial(SpriteMaterialParameters parameters){}
    public Color color;
    public Texture map;
    public double rotation;
    native public void setValues(SpriteMaterialParameters parameters);
    public SpriteMaterial(){}
}

