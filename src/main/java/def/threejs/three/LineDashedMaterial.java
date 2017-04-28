package def.threejs.three;
public class LineDashedMaterial extends Material {
    public LineDashedMaterial(LineDashedMaterialParameters parameters){}
    public Color color;
    public double linewidth;
    public double scale;
    public double dashSize;
    public double gapSize;
    public Blending blending;
    public Colors vertexColors;
    public Boolean fog;
    native public void setValues(LineDashedMaterialParameters parameters);
    @jsweet.lang.Name("clone")
    native public LineDashedMaterial Clone();
    native public LineDashedMaterial copy(LineDashedMaterial source);
    public LineDashedMaterial(){}
}

