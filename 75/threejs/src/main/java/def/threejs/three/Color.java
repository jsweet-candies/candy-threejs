package def.threejs.three;
/**
     * Represents a color. See also {@link ColorUtils}.
     *
     * @example
     * var color = new THREE.Color( 0xff0000 );
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/math/Color.js">src/math/Color.js</a>
     */
public class Color extends def.js.Object {
    public Color(Color color){}
    public Color(String color){}
    public Color(double color){}
    public Color(double r, double g, double b){}
    /**
         * Red channel value between 0 and 1. Default is 1.
         */
    public double r;
    /**
         * Green channel value between 0 and 1. Default is 1.
         */
    public double g;
    /**
         * Blue channel value between 0 and 1. Default is 1.
         */
    public double b;
    native public Color set(Color color);
    native public Color set(double color);
    native public Color set(String color);
    native public Color setScalar(double scalar);
    native public Color setHex(double hex);
    /**
         * Sets this color from RGB values.
         * @param r Red channel value between 0 and 1.
         * @param g Green channel value between 0 and 1.
         * @param b Blue channel value between 0 and 1.
         */
    native public Color setRGB(double r, double g, double b);
    /**
         * Sets this color from HSL values.
         * Based on MochiKit implementation by Bob Ippolito.
         *
         * @param h Hue channel value between 0 and 1.
         * @param s Saturation value channel between 0 and 1.
         * @param l Value channel value between 0 and 1.
         */
    native public Color setHSL(double h, double s, double l);
    /**
         * Sets this color from a CSS context style string.
         * @param contextStyle Color in CSS context style format.
         */
    native public Color setStyle(String style);
    /**
         * Clones this color.
         */
    @jsweet.lang.Name("clone")
    native public Color Clone();
    /**
         * Copies given color.
         * @param color Color to copy.
         */
    native public Color copy(Color color);
    /**
         * Copies given color making conversion from gamma to linear space.
         * @param color Color to copy.
         */
    native public Color copyGammaToLinear(Color color, double gammaFactor);
    /**
         * Copies given color making conversion from linear to gamma space.
         * @param color Color to copy.
         */
    native public Color copyLinearToGamma(Color color, double gammaFactor);
    /**
         * Converts this color from gamma to linear space.
         */
    native public Color convertGammaToLinear();
    /**
         * Converts this color from linear to gamma space.
         */
    native public Color convertLinearToGamma();
    /**
         * Returns the hexadecimal value of this color.
         */
    native public double getHex();
    /**
         * Returns the string formated hexadecimal value of this color.
         */
    native public String getHexString();
    native public HSL getHSL();
    /**
         * Returns the value of this color in CSS context style.
         * Example: rgb(r, g, b)
         */
    native public String getStyle();
    native public Color offsetHSL(double h, double s, double l);
    native public Color add(Color color);
    native public Color addColors(Color color1, Color color2);
    native public Color addScalar(double s);
    native public Color multiply(Color color);
    native public Color multiplyScalar(double s);
    native public Color lerp(Color color, double alpha);
    @jsweet.lang.Name("equals")
    native public Boolean Equals(Color color);
    native public Color fromArray(double[] rgb, double offset);
    native public double[] toArray(double[] array, double offset);
    public Color(){}
    /**
         * Copies given color making conversion from gamma to linear space.
         * @param color Color to copy.
         */
    native public Color copyGammaToLinear(Color color);
    /**
         * Copies given color making conversion from linear to gamma space.
         * @param color Color to copy.
         */
    native public Color copyLinearToGamma(Color color);
    native public Color fromArray(double[] rgb);
    native public double[] toArray(double[] array);
    native public double[] toArray();
}

