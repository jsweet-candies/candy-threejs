package def.threejs.THREE;
/**
 * A point light that can cast shadow in one direction.
 */
public class SpotLight extends Light {
    public SpotLight(Color color, double intensity, double distance, double angle, double exponent, double decay){}
    /**
     * Spotlight focus points at target.position.
     * Default position — (0,0,0).
     */
    public Object3D target;
    /**
     * Light's intensity.
     * Default — 1.0.
     */
    public double intensity;
    /**
     * If non-zero, light will attenuate linearly from maximum intensity at light position down to zero at distance.
     * Default — 0.0.
     */
    public double distance;
    public double angle;
    /**
     * Rapidity of the falloff of light from its target direction.
     * Default — 10.0.
     */
    public double exponent;
    public double decay;
    public SpotLightShadow shadow;
    public double power;
    public double penumbra;
    public SpotLight(Color color, double intensity, double distance, double angle, double exponent){}
    public SpotLight(Color color, double intensity, double distance, double angle){}
    public SpotLight(Color color, double intensity, double distance){}
    public SpotLight(Color color, double intensity){}
    public SpotLight(Color color){}
    public SpotLight(){}
    public SpotLight(double color, double intensity, double distance, double angle, double exponent, double decay){}
    public SpotLight(String color, double intensity, double distance, double angle, double exponent, double decay){}
    public SpotLight(double color, double intensity, double distance, double angle, double exponent){}
    public SpotLight(String color, double intensity, double distance, double angle, double exponent){}
    public SpotLight(String color, double intensity, double distance, double angle){}
    public SpotLight(double color, double intensity, double distance, double angle){}
    public SpotLight(double color, double intensity, double distance){}
    public SpotLight(String color, double intensity, double distance){}
    public SpotLight(double color, double intensity){}
    public SpotLight(String color, double intensity){}
    public SpotLight(double color){}
    public SpotLight(String color){}
}

