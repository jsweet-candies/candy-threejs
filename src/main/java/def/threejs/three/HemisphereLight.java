package def.threejs.three;
public class HemisphereLight extends Light {
    public HemisphereLight(double skyColorHex, double groundColorHex, double intensity){}
    public Color groundColor;
    public double intensity;
    native public HemisphereLight copy(HemisphereLight source);
    native public HemisphereLight clone(Boolean recursive);
    public HemisphereLight(double skyColorHex, double groundColorHex){}
    public HemisphereLight(double skyColorHex){}
    public HemisphereLight(){}
    @jsweet.lang.Name("clone")
    native public HemisphereLight Clone();
    public HemisphereLight(double skyColorHex, String groundColorHex, double intensity){}
    public HemisphereLight(String skyColorHex, String groundColorHex, double intensity){}
    public HemisphereLight(String skyColorHex, double groundColorHex, double intensity){}
    public HemisphereLight(String skyColorHex, String groundColorHex){}
    public HemisphereLight(String skyColorHex, double groundColorHex){}
    public HemisphereLight(double skyColorHex, String groundColorHex){}
    public HemisphereLight(String skyColorHex){}
}

