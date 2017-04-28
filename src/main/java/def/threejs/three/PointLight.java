package def.threejs.three;
/**
     * Affects objects using {@link MeshLambertMaterial} or {@link MeshPhongMaterial}.
     *
     * @example
     * var light = new THREE.PointLight( 0xff0000, 1, 100 );
     * light.position.set( 50, 50, 50 );
     * scene.add( light );
     */
public class PointLight extends Light {
    public PointLight(double hex, double intensity, double distance, double decay){}
    public double intensity;
    /**
         * If non-zero, light will attenuate linearly from maximum intensity at light position down to zero at distance.
         * Default — 0.0.
         */
    public double distance;
    public double decay;
    public LightShadow shadow;
    public double power;
    native public PointLight copy(PointLight source);
    native public PointLight clone(Boolean recursive);
    public PointLight(double hex, double intensity, double distance){}
    public PointLight(double hex, double intensity){}
    public PointLight(double hex){}
    public PointLight(){}
    @jsweet.lang.Name("clone")
    native public PointLight Clone();
    public PointLight(String hex, double intensity, double distance, double decay){}
    public PointLight(String hex, double intensity, double distance){}
    public PointLight(String hex, double intensity){}
    public PointLight(String hex){}
}

