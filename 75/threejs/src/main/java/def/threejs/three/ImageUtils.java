package def.threejs.three;
/** Utility class. */
public class ImageUtils extends def.js.Object {
    private ImageUtils(){}
    public static String crossOrigin;
    native public static Texture loadTexture(String url, Mapping mapping, java.util.function.Consumer<Texture> onLoad, java.util.function.Consumer<String> onError);
    native public static Texture loadTextureCube(String[] array, Mapping mapping, java.util.function.Consumer<Texture> onLoad, java.util.function.Consumer<String> onError);
    native public static Texture loadTexture(String url, Mapping mapping, java.util.function.Consumer<Texture> onLoad);
    native public static Texture loadTexture(String url, Mapping mapping);
    native public static Texture loadTexture(String url);
    native public static Texture loadTextureCube(String[] array, Mapping mapping, java.util.function.Consumer<Texture> onLoad);
    native public static Texture loadTextureCube(String[] array, Mapping mapping);
    native public static Texture loadTextureCube(String[] array);
}

