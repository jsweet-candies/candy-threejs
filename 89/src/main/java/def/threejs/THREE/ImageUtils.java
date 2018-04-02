package def.threejs.THREE;
/** Utility class. */
public class ImageUtils extends def.js.Object {
    private ImageUtils(){}
    /**
     * @deprecated
     */
    public static String crossOrigin;
    /**
     * @deprecated Use {@link TextureLoader THREE.TextureLoader()} instead.
     */
    native public static Texture loadTexture(String url, Mapping mapping, java.util.function.Consumer<Texture> onLoad, java.util.function.Consumer<String> onError);
    /**
     * @deprecated Use {@link CubeTextureLoader THREE.CubeTextureLoader()} instead.
     */
    native public static Texture loadTextureCube(String[] array, Mapping mapping, java.util.function.Consumer<Texture> onLoad, java.util.function.Consumer<String> onError);
    /**
     * @deprecated Use {@link TextureLoader THREE.TextureLoader()} instead.
     */
    native public static Texture loadTexture(String url, Mapping mapping, java.util.function.Consumer<Texture> onLoad);
    /**
     * @deprecated Use {@link TextureLoader THREE.TextureLoader()} instead.
     */
    native public static Texture loadTexture(String url, Mapping mapping);
    /**
     * @deprecated Use {@link TextureLoader THREE.TextureLoader()} instead.
     */
    native public static Texture loadTexture(String url);
    /**
     * @deprecated Use {@link CubeTextureLoader THREE.CubeTextureLoader()} instead.
     */
    native public static Texture loadTextureCube(String[] array, Mapping mapping, java.util.function.Consumer<Texture> onLoad);
    /**
     * @deprecated Use {@link CubeTextureLoader THREE.CubeTextureLoader()} instead.
     */
    native public static Texture loadTextureCube(String[] array, Mapping mapping);
    /**
     * @deprecated Use {@link CubeTextureLoader THREE.CubeTextureLoader()} instead.
     */
    native public static Texture loadTextureCube(String[] array);
}

