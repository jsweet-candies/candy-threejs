package def.threejs.three;
/**
     * A point light that can cast shadow in one direction.
     */
public class SpotLight extends Light {
    public SpotLight(double hex, double intensity, double distance, double angle, double exponent, double decay){}
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
    public LightShadow shadow;
    public double power;
    native public SpotLight clone(Boolean recursive);
    native public SpotLight copy(PointLight source);
    public SpotLight(double hex, double intensity, double distance, double angle, double exponent){}
    public SpotLight(double hex, double intensity, double distance, double angle){}
    public SpotLight(double hex, double intensity, double distance){}
    public SpotLight(double hex, double intensity){}
    public SpotLight(double hex){}
    public SpotLight(){}
    @jsweet.lang.Name("clone")
    native public SpotLight Clone();
    public SpotLight(String hex, double intensity, double distance, double angle, double exponent, double decay){}
    public SpotLight(String hex, double intensity, double distance, double angle, double exponent){}
    public SpotLight(String hex, double intensity, double distance, double angle){}
    public SpotLight(String hex, double intensity, double distance){}
    public SpotLight(String hex, double intensity){}
    public SpotLight(String hex){}
}

