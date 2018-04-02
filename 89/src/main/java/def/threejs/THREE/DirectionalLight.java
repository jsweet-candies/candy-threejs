package def.threejs.THREE;
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
    public DirectionalLight(Color color, double intensity){}
    /**
     * Target used for shadow camera orientation.
     */
    public Object3D target;
    /**
     * Light's intensity.
     * Default — 1.0.
     */
    public double intensity;
    public DirectionalLightShadow shadow;
    public DirectionalLight(Color color){}
    public DirectionalLight(){}
    public DirectionalLight(String color, double intensity){}
    public DirectionalLight(double color, double intensity){}
    public DirectionalLight(String color){}
    public DirectionalLight(double color){}
}

