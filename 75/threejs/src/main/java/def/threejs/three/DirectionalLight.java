package def.threejs.three;
/**
     * Affects objects using MeshLambertMaterial or MeshPhongMaterial.
     *
     * @example
     * // White directional light at half intensity shining from the top.
     * var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
     * directionalLight.position.set( 0, 1, 0 );
     * scene.add( directionalLight );
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLight.js">src/lights/DirectionalLight.js</a>
     */
public class DirectionalLight extends Light {
    public DirectionalLight(double hex, double intensity){}
    /**
         * Target used for shadow camera orientation.
         */
    public Object3D target;
    /**
         * Light's intensity.
         * Default — 1.0.
         */
    public double intensity;
    public LightShadow shadow;
    native public DirectionalLight copy(DirectionalLight source);
    native public HemisphereLight clone(Boolean recursive);
    public DirectionalLight(double hex){}
    public DirectionalLight(){}
    @jsweet.lang.Name("clone")
    native public HemisphereLight Clone();
    public DirectionalLight(String hex, double intensity){}
    public DirectionalLight(String hex){}
}

