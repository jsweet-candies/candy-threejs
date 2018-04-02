package def.threejs.THREE;
/** Utility class. */
public class GeometryUtils extends def.js.Object {
    private GeometryUtils(){}
    /**
     * @deprecated Use {@link Geometry#merge geometry.merge( geometry2, matrix, materialIndexOffset )} instead.
     */
    native public static Object merge(Object geometry1, Object geometry2, Object materialIndexOffset);
    /**
     * @deprecated Use {@link Geometry#center geometry.center()} instead.
     */
    native public static Object center(Object geometry);
    /**
     * @deprecated Use {@link Geometry#merge geometry.merge( geometry2, matrix, materialIndexOffset )} instead.
     */
    native public static Object merge(Object geometry1, Object geometry2);
}

