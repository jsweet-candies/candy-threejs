package def.threejs.three;
public class ObjectLoader extends def.js.Object {
    public ObjectLoader(LoadingManager manager){}
    public LoadingManager manager;
    public String texturePass;
    public String crossOrigin;
    native public void load(String url, java.util.function.Consumer<Object3D> onLoad);
    native public void setTexturePath(String value);
    native public void setCrossOrigin(String crossOrigin);
    native public <T extends Object3D> T parse(Object json, java.util.function.Consumer<Object3D> onLoad);
    native public Object[] parseGeometries(Object json);
    native public Material[] parseMaterials(Object json, Texture[] textures);
    native public AnimationClip[] parseAnimations(Object json);
    native public Object[] parseImages(Object json, java.lang.Runnable onLoad);
    native public Texture[] parseTextures(Object json, Object images);
    native public <T extends Object3D> T parseObject(Object data, Object[] geometries, Material[] materials);
    public ObjectLoader(){}
    native public void load(String url);
    native public <T extends Object3D> T parse(Object json);
}

