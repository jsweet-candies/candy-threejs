package def.threejs.three;
public class PointsMaterial extends Material {
    public PointsMaterial(PointsMaterialParameters parameters){}
    public Color color;
    public Texture map;
    public double size;
    public Boolean sizeAttenuation;
    public Blending blending;
    public Boolean vertexColors;
    public Boolean fog;
    native public void setValues(PointsMaterialParameters parameters);
    @jsweet.lang.Name("clone")
    native public PointsMaterial Clone();
    native public PointsMaterial copy(PointsMaterial source);
    public PointsMaterial(){}
}

