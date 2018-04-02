package def.threejs.THREE;
/**
 * This light's color gets applied to all the objects in the scene globally.
 *
 * # example
 *     var light = new THREE.AmbientLight( 0x404040 ); // soft white light
 *     scene.add( light );
 *
 * @source https://github.com/mrdoob/three.js/blob/master/src/lights/AmbientLight.js
 */
public class AmbientLight extends Light {
    /**
     * This creates a Ambientlight with a color.
     * @param color Numeric value of the RGB component of the color or a Color instance.
     */
    public AmbientLight(Color color, double intensity){}
    public Boolean castShadow;
    /**
     * This creates a Ambientlight with a color.
     * @param color Numeric value of the RGB component of the color or a Color instance.
     */
    public AmbientLight(Color color){}
    /**
     * This creates a Ambientlight with a color.
     * @param color Numeric value of the RGB component of the color or a Color instance.
     */
    public AmbientLight(){}
    /**
     * This creates a Ambientlight with a color.
     * @param color Numeric value of the RGB component of the color or a Color instance.
     */
    public AmbientLight(double color, double intensity){}
    /**
     * This creates a Ambientlight with a color.
     * @param color Numeric value of the RGB component of the color or a Color instance.
     */
    public AmbientLight(String color, double intensity){}
    /**
     * This creates a Ambientlight with a color.
     * @param color Numeric value of the RGB component of the color or a Color instance.
     */
    public AmbientLight(double color){}
    /**
     * This creates a Ambientlight with a color.
     * @param color Numeric value of the RGB component of the color or a Color instance.
     */
    public AmbientLight(String color){}
}

