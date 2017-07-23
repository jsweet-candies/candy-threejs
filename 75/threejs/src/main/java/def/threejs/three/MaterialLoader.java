package def.threejs.three;
public class MaterialLoader extends def.js.Object {
    public MaterialLoader(LoadingManager manager){}
    public LoadingManager manager;
    public Textures textures;
    native public void load(String url, java.util.function.Consumer<Material> onLoad);
    native public void setTextures(Textures textures);
    native public Texture getTexture(String name);
    native public Material parse(Object json);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Textures extends def.js.Object {
        native public Texture $get(String key);
    }
    public MaterialLoader(){}
}

