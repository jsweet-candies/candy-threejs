package def.threejs.three;
/**
     * Abstract base class for lights.
     */
public class Light extends Object3D {
    public Light(double hex, double intensity){}
    public Color color;
    public double intensity;
    public Boolean receiveShadow;
    public LightShadow shadow;
    public Object shadowCameraFov;
    public Object shadowCameraLeft;
    public Object shadowCameraRight;
    public Object shadowCameraTop;
    public Object shadowCameraBottom;
    public Object shadowCameraNear;
    public Object shadowCameraFar;
    public Object shadowBias;
    public Object shadowMapWidth;
    public Object shadowMapHeight;
    native public Light copy(Light source);
    native public Light clone(Boolean recursive);
    public Light(double hex){}
    public Light(){}
    @jsweet.lang.Name("clone")
    native public Light Clone();
    public Light(String hex, double intensity){}
    public Light(String hex){}
}

