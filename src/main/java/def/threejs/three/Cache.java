package def.threejs.three;
/** Utility class. */
public class Cache extends def.js.Object {
    private Cache(){}
    public static Boolean enabled;
    public static Object files;
    native public static void add(String key, Object file);
    native public static Object get(String key);
    native public static void remove(String key);
    native public static void clear();
}

