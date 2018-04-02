package def.threejs.THREE;
/**
 * Affects objects using {@link MeshLambertMaterial} or {@link MeshPhongMaterial}.
 *
 * @example
 * var light = new THREE.PointLight( 0xff0000, 1, 100 );
 * light.position.set( 50, 50, 50 );
 * scene.add( light );
 */
public class PointLight extends Light {
    public PointLight(Color color, double intensity, double distance, double decay){}
    public double intensity;
    /**
     * If non-zero, light will attenuate linearly from maximum intensity at light position down to zero at distance.
     * Default — 0.0.
     */
    public double distance;
    public double decay;
    public PointLightShadow shadow;
    public double power;
    public PointLight(Color color, double intensity, double distance){}
    public PointLight(Color color, double intensity){}
    public PointLight(Color color){}
    public PointLight(){}
    public PointLight(String color, double intensity, double distance, double decay){}
    public PointLight(double color, double intensity, double distance, double decay){}
    public PointLight(String color, double intensity, double distance){}
    public PointLight(double color, double intensity, double distance){}
    public PointLight(double color, double intensity){}
    public PointLight(String color, double intensity){}
    public PointLight(String color){}
    public PointLight(double color){}
}

