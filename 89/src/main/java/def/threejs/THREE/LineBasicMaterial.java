package def.threejs.THREE;
public class LineBasicMaterial extends Material {
    public LineBasicMaterial(LineBasicMaterialParameters parameters){}
    public Color color;
    public double linewidth;
    public String linecap;
    public String linejoin;
    native public void setValues(LineBasicMaterialParameters parameters);
    public LineBasicMaterial(){}
}

