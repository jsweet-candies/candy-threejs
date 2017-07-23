package def.threejs.three;
import def.js.Array;
import def.js.Function;
public class PropertyBinding extends def.js.Object {
    public PropertyBinding(Object rootNode, String path, Object parsedPath){}
    public String path;
    public Object parsedPath;
    public Object node;
    public Object rootNode;
    native public Object getValue(Object targetArray, double offset);
    native public void setValue(Object sourceArray, double offset);
    native public void bind();
    native public void unbind();
    public BindingType BindingType;
    public Versioning Versioning;
    public Function[] GetterByBindingType;
    public Array<Function[]> SetterByBindingTypeAndVersioning;
    native public static jsweet.util.union.Union<PropertyBinding,def.threejs.three.propertybinding.Composite> create(Object root, Object path, Object parsedPath);
    native public static Object parseTrackName(String trackName);
    native public static Object findNode(Object root, String nodeName);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class BindingType extends def.js.Object {
        native public Number $get(String bindingType);
    }
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class Versioning extends def.js.Object {
        native public Number $get(String versioning);
    }
    public PropertyBinding(Object rootNode, String path){}
    native public static jsweet.util.union.Union<PropertyBinding,def.threejs.three.propertybinding.Composite> create(Object root, Object path);
    protected PropertyBinding(){}
}

