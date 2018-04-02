package def.threejs.THREE;
/**
 * Abstract base class for lights.
 */
public class Light extends Object3D {
    public Light(double hex, double intensity){}
    public Color color;
    public double intensity;
    public Boolean receiveShadow;
    public LightShadow shadow;
    /**
     * @deprecated Use shadow.camera.fov instead.
     */
    public Object shadowCameraFov;
    /**
     * @deprecated Use shadow.camera.left instead.
     */
    public Object shadowCameraLeft;
    /**
     * @deprecated Use shadow.camera.right instead.
     */
    public Object shadowCameraRight;
    /**
     * @deprecated Use shadow.camera.top instead.
     */
    public Object shadowCameraTop;
    /**
     * @deprecated Use shadow.camera.bottom instead.
     */
    public Object shadowCameraBottom;
    /**
     * @deprecated Use shadow.camera.near instead.
     */
    public Object shadowCameraNear;
    /**
     * @deprecated Use shadow.camera.far instead.
     */
    public Object shadowCameraFar;
    /**
     * @deprecated Use shadow.bias instead.
     */
    public Object shadowBias;
    /**
     * @deprecated Use shadow.mapSize.width instead.
     */
    public Object shadowMapWidth;
    /**
     * @deprecated Use shadow.mapSize.height instead.
     */
    public Object shadowMapHeight;
    public Light(double hex){}
    public Light(){}
    public Light(String hex, double intensity){}
    public Light(String hex){}
}

