package def.threejs.three;
public class LineBasicMaterial extends Material {
    public LineBasicMaterial(LineBasicMaterialParameters parameters){}
    public Color color;
    public double linewidth;
    public String linecap;
    public String linejoin;
    public Blending blending;
    public Colors vertexColors;
    public Boolean fog;
    native public void setValues(LineBasicMaterialParameters parameters);
    @jsweet.lang.Name("clone")
    native public LineBasicMaterial Clone();
    native public LineBasicMaterial copy(LineBasicMaterial source);
    public LineBasicMaterial(){}
}

