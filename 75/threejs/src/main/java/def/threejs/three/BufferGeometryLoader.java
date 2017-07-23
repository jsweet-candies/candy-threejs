package def.threejs.three;
public class BufferGeometryLoader extends def.js.Object {
    public BufferGeometryLoader(LoadingManager manager){}
    public LoadingManager manager;
    native public void load(String url, java.util.function.Consumer<BufferGeometry> onLoad, java.util.function.Consumer<Object> onProgress, java.util.function.Consumer<Object> onError);
    native public BufferGeometry parse(Object json);
    public BufferGeometryLoader(){}
    native public void load(String url, java.util.function.Consumer<BufferGeometry> onLoad, java.util.function.Consumer<Object> onProgress);
    native public void load(String url, java.util.function.Consumer<BufferGeometry> onLoad);
}

