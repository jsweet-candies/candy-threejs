package def.threejs.THREE;
import def.dom.ErrorEvent;
import def.dom.ProgressEvent;
public class MaterialCreator extends def.js.Object {
    public MaterialCreator(String baseUrl, Object options){}
    public String baseUrl;
    public Object options;
    public Object materialsInfo;
    public Object materials;
    public Material[] materialsArray;
    public Object nameLookup;
    public double side;
    public double wrap;
    native public void setCrossOrigin(Boolean value);
    native public void setManager(Object value);
    native public void setMaterials(Object materialsInfo);
    native public Object convert(Object materialsInfo);
    native public void preload();
    native public Material getIndex(String materialName);
    native public Material[] getAsArray();
    native public Material create(String materialName);
    native public Material createMaterial_(String materialName);
    native public Object getTextureParams(String value, Object matParams);
    native public Texture loadTexture(String url, Object mapping, java.util.function.Consumer<BufferGeometry> onLoad, java.util.function.Consumer<ProgressEvent> onProgress, java.util.function.Consumer<ErrorEvent> onError);
    public MaterialCreator(String baseUrl){}
    public MaterialCreator(){}
    native public Texture loadTexture(String url, Object mapping, java.util.function.Consumer<BufferGeometry> onLoad, java.util.function.Consumer<ProgressEvent> onProgress);
    native public Texture loadTexture(String url, Object mapping, java.util.function.Consumer<BufferGeometry> onLoad);
}

