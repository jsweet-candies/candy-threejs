package def.threejs.THREE;
public class PointsMaterial extends Material {
    public PointsMaterial(PointsMaterialParameters parameters){}
    public Color color;
    public Texture map;
    public double size;
    public Boolean sizeAttenuation;
    native public void setValues(PointsMaterialParameters parameters);
    public PointsMaterial(){}
}

