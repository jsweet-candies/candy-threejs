package def.threejs.three;
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
         * @param hex Numeric value of the RGB component of the color.
         */
    public AmbientLight(double hex, double intensity){}
    public Boolean castShadow;
    native public AmbientLight copy(AmbientLight source);
    native public AmbientLight clone(Boolean recursive);
    /**
         * This creates a Ambientlight with a color.
         * @param hex Numeric value of the RGB component of the color.
         */
    public AmbientLight(double hex){}
    /**
         * This creates a Ambientlight with a color.
         * @param hex Numeric value of the RGB component of the color.
         */
    public AmbientLight(){}
    @jsweet.lang.Name("clone")
    native public AmbientLight Clone();
    /**
         * This creates a Ambientlight with a color.
         * @param hex Numeric value of the RGB component of the color.
         */
    public AmbientLight(String hex, double intensity){}
    /**
         * This creates a Ambientlight with a color.
         * @param hex Numeric value of the RGB component of the color.
         */
    public AmbientLight(String hex){}
}

